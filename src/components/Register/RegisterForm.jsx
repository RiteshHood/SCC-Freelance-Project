import { useState } from "react";
import "./RegisterForm.css";

import {
  FaUserGraduate,
  FaSchool,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function RegisterForm() {

  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    phone: "",
    alternatePhone: "",
    dob: "",
    gender: "",
    className: "",
    board: "",
    school: "",
    percentage: "",
    address: "",
    city: "",
    pincode: "",
  });

  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setSuccessMsg("");
  }

  function validate() {
    const newErrors = {};

    if (!formData.studentName.trim()) {
      newErrors.studentName = "Student name is required";
    }

    if (!formData.parentName.trim()) {
      newErrors.parentName = "Parent name is required";
    }

    if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!formData.className) {
      newErrors.className = "Select class";
    }

    if (!formData.board) {
      newErrors.board = "Select board";
    }

    if (!formData.school.trim()) {
      newErrors.school = "School name is required";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log(formData);

    setSuccessMsg(
      "Registration submitted successfully! We will contact you soon."
    );

    setFormData({
      studentName: "",
      parentName: "",
      phone: "",
      alternatePhone: "",
      dob: "",
      gender: "",
      className: "",
      board: "",
      school: "",
      percentage: "",
      address: "",
      city: "",
      pincode: "",
    });
  }

  return (
    <form onSubmit={handleSubmit} className="register-form">
      {/* Student Name */}

     <div className="section-title">
    <FaUserGraduate />
    <span>Personal Information</span>
</div>
      <div className="form-group">
        <label>Student Name *</label>

        <input
          type="text"
          name="studentName"
          value={formData.studentName}
          onChange={handleChange}
          placeholder="Enter student name"
        />

        {errors.studentName && (
          <span className="error">{errors.studentName}</span>
        )}
      </div>

      {/* Parent Name */}

      <div className="form-group">
        <label>Parent Name *</label>

        <input
          type="text"
          name="parentName"
          value={formData.parentName}
          onChange={handleChange}
          placeholder="Enter parent name"
        />

        {errors.parentName && (
          <span className="error">{errors.parentName}</span>
        )}
      </div>

      {/* Phone */}

      <div className="form-group">
        <label>Phone Number *</label>

        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="9876543210"
        />

        {errors.phone && (
          <span className="error">{errors.phone}</span>
        )}
      </div>

      {/* Alternate Phone */}

      <div className="form-group">
        <label>Alternate Phone</label>

        <input
          type="tel"
          name="alternatePhone"
          value={formData.alternatePhone}
          onChange={handleChange}
          placeholder="Optional"
        />
      </div>

      {/* Date of Birth */}

      <div className="form-group">
        <label>Date of Birth</label>

        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
        />
      </div>

      {/* Gender */}

      <div className="form-group">
        <label>Gender</label>

        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="section-title">
    <FaSchool />
    <span>Academic Information</span>
</div>
      <div className="form-group">
        <label>Class *</label>

        <select
          name="className"
          value={formData.className}
          onChange={handleChange}
        >
          <option value="">Select Class</option>
          <option>5th</option>
          <option>6th</option>
          <option>7th</option>
          <option>8th</option>
          <option>9th</option>
          <option>10th</option>
        </select>

        {errors.className && (
          <span className="error">{errors.className}</span>
        )}
      </div>

      <div className="form-group">
        <label>Board *</label>

        <select
          name="board"
          value={formData.board}
          onChange={handleChange}
        >
          <option value="">Select Board</option>
          <option>SSC</option>
          <option>CBSE</option>
          <option>ICSE</option>
        </select>

        {errors.board && (
          <span className="error">{errors.board}</span>
        )}
      </div>

      <div className="form-group">
        <label>School Name *</label>

        <input
          type="text"
          name="school"
          value={formData.school}
          onChange={handleChange}
          placeholder="Enter school name"
        />

        {errors.school && (
          <span className="error">{errors.school}</span>
        )}
      </div>

      <div className="form-group">
        <label>Previous Percentage</label>

        <input
          type="number"
          name="percentage"
          value={formData.percentage}
          onChange={handleChange}
          placeholder="Optional"
        />
      </div>
    <div className="section-title">
    <FaMapMarkerAlt />
    <span>Address Information</span>
</div>

      <div className="form-group full-width">
        <label>Address *</label>

        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter full address"
        />

        {errors.address && (
          <span className="error">{errors.address}</span>
        )}
      </div>

      <div className="form-group">
        <label>City</label>

        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="City"
        />
      </div>

      <div className="form-group">
        <label>Pincode</label>

        <input
          type="text"
          name="pincode"
          value={formData.pincode}
          onChange={handleChange}
          placeholder="Pincode"
        />
      </div>

      <button className="submit-btn" type="submit">
        Register Now
      </button>

      {successMsg && (
        <p className="success">
          {successMsg}
        </p>
      )}
    </form>
  );
}