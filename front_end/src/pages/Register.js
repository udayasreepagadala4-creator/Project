import React, { useState } from "react";

function Register() {

    const [formData, setFormData] = useState({

        full_name: "",
        email: "",
        phone: "",
        password: ""
    });

    const handleChange = (e) => {

        setFormData({

            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        const response = await fetch(
            "http://127.0.0.1:5000/register",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(formData)
            }
        );

        const data = await response.json();

        alert(data.message);
    };

    return (

        <div style={styles.container}>

            <div style={styles.card}>

                <h1 style={styles.title}>
                    Student Registration
                </h1>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="full_name"
                        placeholder="Full Name"
                        onChange={handleChange}
                        style={styles.input}
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        style={styles.input}
                    />

                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        onChange={handleChange}
                        style={styles.input}
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        style={styles.input}
                    />

                    <button type="submit" style={styles.button}>
                        Register
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
        height: "100vh",
        background: "#f4f6f9"
    },

    card: {

        width: "350px",
        background: "white",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0px 0px 15px rgba(0,0,0,0.2)"
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

    button: {

        width: "100%",
        padding: "12px",
        background: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "5px",
        fontSize: "16px",
        cursor: "pointer"
    }
};

export default Register;