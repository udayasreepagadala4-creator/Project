import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            const response = await fetch(
                "http://127.0.0.1:5000/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password
                    })
                }
            );

            const data = await response.json();

            alert(data.message);

            if (data.success) {
                navigate("/");
            }

        } catch (error) {

            console.log(error);
            alert("Failed to fetch");

        }
    };

    return (

        <div style={styles.container}>

            <div style={styles.card}>

                <h1 style={styles.title}>Student Login</h1>

                <form onSubmit={handleLogin}>

                    <input
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={styles.input}
                        required
                    />

                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={styles.input}
                        required
                    />

                    <button type="submit" style={styles.button}>
                        Login
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
        backgroundColor: "#f5f5f5"
    },

    card: {
        width: "350px",
        padding: "30px",
        backgroundColor: "white",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px gray",
        textAlign: "center"
    },

    title: {
        marginBottom: "20px",
        color: "#333"
    },

    input: {
        width: "100%",
        padding: "12px",
        marginBottom: "15px",
        borderRadius: "5px",
        border: "1px solid gray",
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

export default Login;