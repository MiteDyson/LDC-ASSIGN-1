import React, { useEffect, useState } from "react";
import API from "../services/api";

const Dashboard = () => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // Requirement: Authenticated API endpoint to fetch profile data
        const res = await API.get("/profile");
        setProfile(res.data);
      } catch (err) {
        // Requirement: Robust client-side error handling
        setError("Failed to fetch profile data.");
      }
    };
    fetchProfile();
  }, []);

  if (error) return <div className="error-msg">{error}</div>;
  if (!profile) return <div>Loading...</div>;

  return (
    <div>
      <h1>Welcome, {profile.fullName}</h1>
      <p>Username: {profile.username}</p>
      <div style={{ background: "#f4f4f4", padding: "10px" }}>
        {/* Requirement: Display the decrypted Aadhaar/ID Number  */}
        <strong>Decrypted Aadhaar:</strong> {profile.aadhaarNumber}
      </div>
    </div>
  );
};

export default Dashboard;
