import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    fullName: "",
    aadhaarNumber: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/register", formData);
      alert("Success! Please login.");
      navigate("/login");
    } catch (err) {
      alert("Registration Failed");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <div className="auth-header">
          <h1>Register</h1>
          <p>Create your identity account</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="input-field"
              placeholder="Full Name"
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="input-field"
              placeholder="Username"
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="input-field"
              placeholder="Password"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Aadhaar Number</label>
            <input
              type="text"
              className="input-field"
              placeholder="Aadhaar Number"
              onChange={(e) =>
                setFormData({ ...formData, aadhaarNumber: e.target.value })
              }
              required
            />
          </div>
          <button type="submit" className="btn-submit">
            Sign Up
          </button>
        </form>
        <div className="auth-footer">
          Already have an account?{" "}
          <Link to="/login" className="auth-link">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
