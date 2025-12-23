import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    try {
      // Authenticates user against the backend/Neon DB
      const res = await API.post("/auth/login", formData);
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      setError("Authentication failed. Please check your credentials.");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <div className="auth-header">
          <h1>Identity Portal</h1>
          <p>Secure access to your identity profile</p>
        </div>

        {error && (
          <div
            style={{
              color: "#dc2626",
              backgroundColor: "#fef2f2",
              padding: "10px",
              borderRadius: "8px",
              marginBottom: "15px",
              fontSize: "14px",
              border: "1px solid #fee2e2",
            }}
          >
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="input-field"
              placeholder="Enter username"
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
              placeholder="••••••••"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
            />
          </div>
          <button type="submit" className="btn-submit">
            Sign In
          </button>
        </form>

        <div className="auth-footer">
          Don't have an account?{" "}
          <Link to="/register" className="auth-link">
            Register Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
