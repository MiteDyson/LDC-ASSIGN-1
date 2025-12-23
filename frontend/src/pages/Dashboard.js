import React, { useEffect, useState } from "react";
import API from "../services/api";

const Dashboard = () => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await API.get("/profile");
        setProfile(res.data);
      } catch (err) {
        setError("Failed to fetch profile data.");
      }
    };
    fetchProfile();
  }, []);

  if (error) return <div className="dashboard-container">{error}</div>;
  if (!profile) return <div className="dashboard-container">Loading...</div>;

  return (
    <div className="dashboard-container">
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <h2>Welcome, {profile.fullName}</h2>
        <button
          onClick={() => {
            localStorage.clear();
            window.location.href = "/login";
          }}
          style={{
            background: "none",
            border: "none",
            color: "red",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </header>
      <div className="profile-card">
        <p>
          <strong>Username:</strong> {profile.username}
        </p>
        <div className="data-badge">
          <strong>Decrypted Aadhaar:</strong> {profile.aadhaarNumber}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
