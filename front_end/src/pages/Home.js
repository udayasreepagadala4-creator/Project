import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Home() {
  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-left">
          <h1>Placement Oriented IT Courses</h1>

          <p>
            Learn Full Stack Development, UI/UX Design, Data Science
            and Cloud Computing with live projects and placement support.
          </p>

          <div className="hero-buttons">
            <Link to="/courses">
              <button className="btn-primary">
                Explore Courses
              </button>
            </Link>

            <Link to="/enquiry">
              <button className="btn-secondary">
                Enquiry Now
              </button>
            </Link>
          </div>
        </div>

        <div className="hero-right">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
            alt="student"
          />
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">

        <div className="feature-card">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2721/2721297.png"
            alt=""
          />
          <h3>Live Projects</h3>
          <p>Work on real industry projects.</p>
        </div>

        <div className="feature-card">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
            alt=""
          />
          <h3>Placement Support</h3>
          <p>Resume building and interview preparation.</p>
        </div>

        <div className="feature-card">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1995/1995574.png"
            alt=""
          />
          <h3>Expert Trainers</h3>
          <p>Learn from experienced mentors.</p>
        </div>

      </section>

    </div>
  );
}

export default Home;