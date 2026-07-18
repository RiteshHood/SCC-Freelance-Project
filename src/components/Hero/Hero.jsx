import "./Hero.css";
import heroImage from "../../assets/images/finalVector.jpg";
import { Link } from "react-router-dom";
import { FaUserGraduate } from "react-icons/fa6";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-container">

        <div className="hero-content">

          <span className="hero-badge">
            Trusted Coaching for 5th–10th Standard Students
          </span>

          <h1>
            Build <span>Strong Concepts</span><br />
            Achieve Academic Excellence
          </h1>

          <p>
            Shinde Coaching Classes provides quality education
            with experienced faculty, weekly tests,
            small batch sizes and personal attention for every student.
          </p>

          <div className="hero-features">
            <div>✔ Experienced Faculty</div>
            <div>✔ Weekly Tests</div>
            <div>✔ Personal Attention</div>
            <div>✔ Small Batch Size</div>
          </div>

          <div className="hero-buttons">

            <Link to="/register" className="primary-btn">
              Register Now
            </Link>

            <Link to="/courses" className="secondary-btn">
              Explore Courses
            </Link>

          </div>

        </div>

        <div className="hero-image">

          <img src={heroImage} alt="Students" />

          <div className="floating-card card1">
          98% Results
          </div>

          <div className="floating-card card2">
            <FaUserGraduate />
            500+ Students
          </div>

        </div>

      </div>
    </section>
  );
}