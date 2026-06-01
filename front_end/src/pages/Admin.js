import React, { useEffect, useState } from "react";

function Admin() {
  const [students, setStudents] = useState(0);
  const [enquiriesCount, setEnquiriesCount] = useState(0);
  const [courses, setCourses] = useState(0);
  const [enquiries, setEnquiries] = useState([]);
  
  const deleteEnquiry = (id) => {
  fetch(`http://127.0.0.1:5000/delete_enquiry/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then(() => {
      setEnquiries(enquiries.filter((item) => item.id !== id));
      setEnquiriesCount(enquiriesCount - 1);
    });
};

  useEffect(() => {
    // Total Students
    fetch("http://127.0.0.1:5000/total_students")
      .then((res) => res.json())
      .then((data) => setStudents(data.total_students));

    // Total Enquiries
    fetch("http://127.0.0.1:5000/total_enquiries")
      .then((res) => res.json())
      .then((data) => setEnquiriesCount(data.total_enquiries));

    // Total Courses
    fetch("http://127.0.0.1:5000/total_courses")
      .then((res) => res.json())
      .then((data) => setCourses(data.total_courses));

    // Enquiry Table
    fetch("http://127.0.0.1:5000/admin")
      .then((res) => res.json())
      .then((data) => setEnquiries(data));
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Admin Dashboard</h1>

      {/* Dashboard Cards */}
      <div style={styles.cardsContainer}>
        <div style={styles.card}>
          <h2>{students}</h2>
          <p>Total Students</p>
        </div>

        <div style={styles.card}>
          <h2>{enquiriesCount}</h2>
          <p>Total Enquiries</p>
        </div>

        <div style={styles.card}>
          <h2>{courses}</h2>
          <p>Total Courses</p>
        </div>
      </div>

      {/* Enquiry Table */}
      <h2>Student Enquiries</h2>

      <table style={styles.table}>
  <thead>
    <tr>
      <th style={styles.th}>ID</th>
      <th style={styles.th}>Name</th>
      <th style={styles.th}>Email</th>
      <th style={styles.th}>Phone</th>
      <th style={styles.th}>Course</th>
      <th style={styles.th}>Message</th>
      <th style={styles.th}>Action</th>
    </tr>
  </thead>

  <tbody>
  {enquiries.map((item) => (
    <tr key={item.id}>
      <td style={styles.td}>{item.id}</td>
      <td style={styles.td}>{item.student_name}</td>
      <td style={styles.td}>{item.email}</td>
      <td style={styles.td}>{item.phone}</td>
      <td style={styles.td}>{item.course_name}</td>
      <td style={styles.td}>{item.message}</td>

      <td style={styles.td}>
        <button
          style={styles.deleteBtn}
          onClick={() => deleteEnquiry(item.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  ))}
  </tbody>
</table>
    </div>
  );
}

const styles = {
  container: {
    padding: "30px",
    backgroundColor: "#f5f7fa",
    minHeight: "100vh",
  },

  heading: {
    textAlign: "center",
    marginBottom: "30px",
  },

  cardsContainer: {
    display: "flex",
    justifyContent: "space-around",
    gap: "20px",
    marginBottom: "40px",
  },

  card: {
    backgroundColor: "#2563eb",
    color: "white",
    padding: "20px",
    width: "250px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  },

  table: {
  width: "100%",
  borderCollapse: "collapse",
  backgroundColor: "#fff",
  marginTop: "20px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
},

th: {
  backgroundColor: "#2563eb",
  color: "white",
  padding: "12px",
  border: "1px solid #ddd",

},

td: {
  padding: "10px",
  border: "1px solid #ddd",
  textAlign: "center",
},

deleteBtn: {
  backgroundColor: "red",
  color:"white",
  border:"none",
  padding:"8px 12px",
  borderRadius:"5px",
  cursor:"pointer",
},
};


 


export default Admin;