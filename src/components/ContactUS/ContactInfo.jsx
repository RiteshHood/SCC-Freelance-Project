import "./Contact.css";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

export default function ContactInfo() {
  return (
    <div className="contact-info">

      <div className="contact-card">
        <FaMapMarkerAlt className="contact-icon" />

        <div>
          <h3>Address</h3>

          <p>
            Shinde Coaching Classes
            <br />
            Siddhivinayak Nagar,
            Chandanzira , Jalna
          </p>
        </div>
      </div>

      <div className="contact-card">
        <FaPhoneAlt className="contact-icon" />

        <div>
          <h3>Phone</h3>

          <a href="tel:+919876543210">
            +91 9021467222
          </a>
        </div>
      </div>

      <div className="contact-card">
        <FaEnvelope className="contact-icon" />

        <div>
          <h3>Email</h3>

          <a href="mailto:shindecoaching@gmail.com">
            shahajisirji@gmail.com          
          </a>
        </div>
      </div>

      <div className="contact-card">
        <FaClock className="contact-icon" />

        <div>
          <h3>Working Hours</h3>

          <p>
            Monday – Saturday
            <br />
            9:00 AM – 8:00 PM
          </p>
        </div>
      </div>

    </div>
  );
}