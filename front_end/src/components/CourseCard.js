import React from "react";
import { useNavigate } from "react-router-dom";

function CourseCard(props) {

    const navigate = useNavigate();

    return (

        <div style={styles.card}>

            <img
                src={props.image}
                alt="course"
                style={styles.image}
            />

            <h2 style={styles.title}>
                {props.title}
            </h2>

            <p style={styles.description}>
                {props.description}
            </p>

            <button
                style={styles.button}
                onClick={() => navigate("/enquiry")}
            >
                Enroll Now
            </button>

        </div>
    );
}

const styles = {

    card: {
        width: "320px",
        backgroundColor: "white",
        borderRadius: "15px",
        padding: "20px",
        boxShadow: "0px 0px 15px rgba(0,0,0,0.2)",
        textAlign: "center",
        transition: "0.3s",
        margin: "20px"
    },

    image: {
        width: "100%",
        height: "200px",
        objectFit: "cover",
        borderRadius: "10px"
    },

    title: {
        marginTop: "15px",
        color: "#1e293b"
    },

    description: {
        color: "gray",
        marginTop: "10px",
        fontSize: "15px"
    },

    button: {
        marginTop: "20px",
        padding: "12px 25px",
        border: "none",
        borderRadius: "8px",
        backgroundColor: "#2563eb",
        color: "white",
        fontSize: "16px",
        cursor: "pointer"
    }
};

export default CourseCard;