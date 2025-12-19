import React, { useState } from "react";
import API from "../services/api";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    fullName: "",
    aadhaarNumber: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/register", formData);
      alert("Registration Successful! Please Login.");
    } catch (err) {
      alert("Registration Failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <input
        type="text"
        placeholder="Full Name"
        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
      />
      <input
        type="text"
        placeholder="Aadhaar Number"
        onChange={(e) =>
          setFormData({ ...formData, aadhaarNumber: e.target.value })
        }
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
