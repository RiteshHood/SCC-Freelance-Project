import "../components/Register/RegisterPage.css";
import RegisterForm from "../components/Register/RegisterForm.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import {
  FaUserGraduate,
  FaClipboardCheck,
  FaBook,
  FaChalkboardTeacher,
  FaChartLine,
  FaUsers,
} from "react-icons/fa";

export default function Register() {
  const features = [
    {
      icon: <FaUserGraduate />,
      title: "Small Batch Size",
      desc: "Individual attention for every student.",
    },
    {
      icon: <FaClipboardCheck />,
      title: "Weekly Tests",
      desc: "Regular assessment and progress tracking.",
    },
    {
      icon: <FaBook />,
      title: "Printed Notes",
      desc: "Simple and exam-oriented study material.",
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Experienced Faculty",
      desc: "Concept-based teaching methodology.",
    },
    {
      icon: <FaChartLine />,
      title: "Progress Reports",
      desc: "Monthly performance reports for parents.",
    },
    {
      icon: <FaUsers />,
      title: "Parent Meetings",
      desc: "Regular interaction with parents.",
    },
  ];

  return (
    <>
        <Navbar/>

      <section className="register-page">

        <div className="register-wrapper">

          {/* LEFT */}

          <div className="register-left">

            <span className="admission-tag">
              Admissions Open 2026-27
            </span>

            <h1>Build Your Child's Bright Future</h1>

            <p>
              Join Shinde Coaching Classes and give your child the
              guidance needed to excel academically with experienced
              teachers and personal attention.
            </p>

            <div className="feature-grid">
              {features.map((item, index) => (
                <div className="feature-card" key={index}>

                  <div className="feature-icon">
                    {item.icon}
                  </div>

                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>

                </div>
              ))}
            </div>

            <div className="stats">

              <div className="stat-box">
                <h2>500+</h2>
                <span>Students</span>
              </div>

              <div className="stat-box">
                <h2>98%</h2>
                <span>Results</span>
              </div>

              <div className="stat-box">
                <h2>15+</h2>
                <span>Years</span>
              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="register-right">

            <div className="form-header">

              <h2>Student Admission Form</h2>

              <p>
                Fill out the form below to begin the admission process.
              </p>

            </div>

            <RegisterForm />

          </div>

        </div>

      </section>
    </>
  );
}