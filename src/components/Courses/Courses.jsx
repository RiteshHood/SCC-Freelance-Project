import "./Courses.css";
import { FaBookOpen, FaArrowRight } from "react-icons/fa";

const courses = [
  {
    className: "5th Standard",
    description: "Strong foundation in all subjects with individual attention."
  },
  {
    className: "6th Standard",
    description: "Concept-based learning with regular assessments."
  },
  {
    className: "7th Standard",
    description: "Build confidence through smart learning techniques."
  },
  {
    className: "8th Standard",
    description: "Preparation for higher secondary concepts."
  },
  {
    className: "9th Standard",
    description: "Focused preparation with weekly tests and revisions."
  },
  {
    className: "10th Standard",
    description: "SSC board preparation with exam-oriented teaching."
  }
];

export default function Courses() {
  return (
    <section className="courses">
      <div className="container">

        <div className="section-title">
          <span>OUR COURSES</span>
          <h2>Courses We Offer</h2>
          <p>
            We provide quality coaching for students from
            5th to 10th Standard across all boards.
          </p>
        </div>

        <div className="courses-grid">
          {courses.map((course, index) => (
            <div className="course-card" key={index}>

              <div className="course-icon">
                <FaBookOpen />
              </div>

              <h3>{course.className}</h3>

              <p>{course.description}</p>

              <ul>
                <li>✔ Small Batch Size</li>
                <li>✔ Weekly Tests</li>
                <li>✔ Personal Attention</li>
                <li>✔ Study Material</li>
              </ul>

              <button className="primary-btn">
                Learn More <FaArrowRight />
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}