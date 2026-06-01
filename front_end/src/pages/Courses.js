import React from "react";
import { useNavigate } from "react-router-dom";

function Courses() {

    const navigate = useNavigate();

    const courses = [

        {
            id: 1,
            title: "Python Full Stack",
            duration: "6 Months",
            fees: "₹50,000",
            image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935"
        },

        {
            id: 2,
            title: "Java Full Stack",
            duration: "6 Months",
            fees: "₹55,000",
            image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
        },

        {
            id: 3,
            title: "Data Science",
            duration: "8 Months",
            fees: "₹70,000",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
        },

        {
            id: 4,
            title: "UI / UX Design",
            duration: "4 Months",
            fees: "₹45,000",
            image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e"
        }

    ];

    return (

        <div style={styles.container}>

            <h1 style={styles.heading}>
                Our Courses
            </h1>

            <div style={styles.cardContainer}>

                {
                    courses.map((course) => (

                        <div key={course.id} style={styles.card}>

                            <img
                                src={course.image}
                                alt={course.title}
                                style={styles.image}
                            />

                            <div style={styles.content}>

                                <h2>{course.title}</h2>

                                <p>
                                    <b>Duration:</b> {course.duration}
                                </p>

                                <p>
                                    <b>Fees:</b> {course.fees}
                                </p>

                                <button
                                    style={styles.button}

                                    onClick={() => navigate("/enquiry")}
                                >
                                    Enroll Now
                                </button>

                            </div>

                        </div>

                    ))
                }

            </div>

        </div>
    );
}

const styles = {

    container: {
        padding: "40px",
        backgroundColor: "#f4f6f9",
        minHeight: "100vh"
    },

    heading: {
        textAlign: "center",
        marginBottom: "40px",
        color: "#333",
        fontSize: "40px"
    },

    cardContainer: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "30px"
    },

    card: {
        width: "300px",
        backgroundColor: "white",
        borderRadius: "15px",
        overflow: "hidden",
        boxShadow: "0px 0px 15px rgba(0,0,0,0.2)"
    },

    image: {
        width: "100%",
        height: "200px",
        objectFit: "cover"
    },

    content: {
        padding: "20px",
        textAlign: "center"
    },

    button: {
        padding: "10px 20px",
        backgroundColor: "#2563eb",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        marginTop: "10px",
        fontSize: "16px"
    }
};

export default Courses;