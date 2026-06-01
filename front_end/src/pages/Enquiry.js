import React, { useState } from 'react';

function Enquiry() {

    const [student_name, setStudentName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [course_name, setCourseName] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await fetch(
                "http://127.0.0.1:5000/enquiry",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        student_name,
                        email,
                        phone,
                        course_name,
                        message
                    })
                }
            );

            const data = await response.json();

            alert(data.message);

            setStudentName("");
            setEmail("");
            setPhone("");
            setCourseName("");
            setMessage("");

        } catch (error) {

            console.log(error);
            alert("Failed to fetch");

        }
    };

    return (

        <div style={styles.container}>

            <div style={styles.card}>

                <h1 style={styles.title}>Enquiry Form</h1>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        placeholder="Enter Name"
                        value={student_name}
                        onChange={(e) => setStudentName(e.target.value)}
                        style={styles.input}
                        required
                    />

                    <input
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={styles.input}
                        required
                    />

                    <input
                        type="text"
                        placeholder="Enter Phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        style={styles.input}
                        required
                    />

                    <input
                        type="text"
                        placeholder="Enter Course Name"
                        value={course_name}
                        onChange={(e) => setCourseName(e.target.value)}
                        style={styles.input}
                        required
                    />

                    <textarea
                        placeholder="Enter Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        style={styles.textarea}
                        required
                    />

                    <button type="submit" style={styles.button}>
                        Submit Enquiry
                    </button>

                </form>

            </div>

        </div>
    );
}

const styles = {

    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f4f4f4"
    },

    card: {
        width: "400px",
        backgroundColor: "white",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px gray"
    },

    title: {
        textAlign: "center",
        marginBottom: "20px",
        color: "#333"
    },

    input: {
        width: "100%",
        padding: "12px",
        marginBottom: "15px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        fontSize: "16px"
    },

    textarea: {
        width: "100%",
        height: "100px",
        padding: "12px",
        marginBottom: "15px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        fontSize: "16px"
    },

    button: {
        width: "100%",
        padding: "12px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "5px",
        fontSize: "16px",
        cursor: "pointer"
    }
};

export default Enquiry;