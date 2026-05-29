from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)

# MySQL Connection
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="udaya@123",
    database="placement_portal"
)

cursor = db.cursor()

print("Database Connected Successfully")


# ---------------- HOME ----------------
@app.route('/')
def home():
    return "Flask Backend Working Successfully"


# ---------------- ENQUIRY ----------------
@app.route('/enquiry', methods=['POST'])
def enquiry():

    data = request.json

    student_name = data['student_name']
    email = data['email']
    phone = data['phone']
    course_name = data['course_name']
    message = data['message']

    sql = """
    INSERT INTO enquiries
    (student_name, email, phone, course_name, message)
    VALUES (%s, %s, %s, %s, %s)
    """

    values = (
        student_name,
        email,
        phone,
        course_name,
        message
    )

    cursor.execute(sql, values)
    db.commit()

    return jsonify({
        "message": "Enquiry Submitted Successfully"
    })


# ---------------- REGISTER ----------------
@app.route('/register', methods=['POST'])
def register():

    data = request.json

    full_name = data['full_name']
    email = data['email']
    phone = data['phone']
    password = data['password']

    sql = """
    INSERT INTO students
    (full_name, email, phone, password)
    VALUES (%s, %s, %s, %s)
    """

    values = (
        full_name,
        email,
        phone,
        password
    )

    cursor.execute(sql, values)
    db.commit()

    return jsonify({
        "message": "Registration Successful"
    })


# ---------------- STUDENT LOGIN ----------------
@app.route('/login', methods=['POST'])
def login():

    data = request.json

    email = data['email']
    password = data['password']

    sql = """
    SELECT * FROM students
    WHERE email=%s AND password=%s
    """

    values = (email, password)

    cursor.execute(sql, values)

    student = cursor.fetchone()

    if student:

        return jsonify({
            "success": True,
            "message": "Student Login Successful",
            "student": {
                "id": student[0],
                "full_name": student[1],
                "email": student[2],
                "phone": student[3]
            }
        })

    else:

        return jsonify({
            "success": False,
            "message": "Invalid Email or Password"
        })


# ---------------- ADMIN DASHBOARD ----------------
@app.route('/admin', methods=['GET'])
def admin():

    sql = "SELECT * FROM enquiries"

    cursor.execute(sql)

    data = cursor.fetchall()

    enquiry_list = []

    for row in data:

        enquiry = {
            "id": row[0],
            "student_name": row[1],
            "email": row[2],
            "phone": row[3],
            "course_name": row[4],
            "message": row[5]
        }

        enquiry_list.append(enquiry)

    return jsonify(enquiry_list)

if __name__ == '__main__':
    app.run(debug=True)