import React, { useEffect, useState } from "react";
import API from "../services/api";

const Dashboard = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await API.get("/profile");
        setProfile(res.data);
      } catch (err) {
        console.error("Fetch error");
      }
    };
    fetchProfile();
  }, []);

  if (!profile) return <div className="dashboard-container">Loading...</div>;

  return (
    <div className="dashboard-container">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>Welcome, {profile.fullName}</h2>
        <button
          onClick={() => {
            localStorage.clear();
            window.location.href = "/login";
          }}
          style={{
            backgroundColor: "#ef4444", // Red color
            color: "white",
            padding: "8px 16px",
            borderRadius: "8px",
            border: "none",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "14px",
            transition: "opacity 0.2s",
          }}
          onMouseOver={(e) => (e.target.style.opacity = "0.8")}
          onMouseOut={(e) => (e.target.style.opacity = "1")}
        >
          Logout
        </button>
      </div>
      <div className="profile-card">
        <p>
          <strong>Username:</strong> {profile.username}
        </p>
        <p>
          <strong>Decrypted Aadhaar:</strong> {profile.aadhaarNumber}
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
