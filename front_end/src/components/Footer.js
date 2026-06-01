import React from "react";
import "../App.css";

function Footer() {

    return (

        <footer className="footer">

            <div className="footer-container">

                <div className="footer-box">

                    <h2>Placement Portal</h2>

                    <p>
                        Learn Full Stack Development,
                        Data Science and UI/UX Design
                        with placement support.
                    </p>

                </div>

                <div className="footer-box">

                    <h3>Quick Links</h3>

                    <p>Home</p>
                    <p>Courses</p>
                    <p>Enquiry</p>
                    <p>Login</p>

                </div>

                <div className="footer-box">

                    <h3>Contact</h3>

                    <p>Email: info@placementportal.com</p>

                    <p>Phone: +91 9876543210</p>

                    <p>Pune, Maharashtra</p>

                </div>

            </div>

            <div className="footer-bottom">

                © 2026 Placement Portal | All Rights Reserved

            </div>

        </footer>
    );
}

export default Footer;