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

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  if (error)
    return <div className="text-red-500 text-center mt-10">{error}</div>;
  if (!profile)
    return <div className="text-center mt-10">Loading profile...</div>;

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden">
        <div className="bg-blue-600 p-6 text-white flex justify-between items-center">
          <h1 className="text-xl font-bold">User Profile</h1>
          <button
            onClick={handleLogout}
            className="text-sm bg-blue-700 px-3 py-1 rounded hover:bg-blue-800 transition-colors"
          >
            Logout
          </button>
        </div>
        <div className="p-8 space-y-6">
          <div>
            <label className="text-xs font-bold uppercase text-slate-400 tracking-wider">
              Full Name
            </label>
            <p className="text-xl text-slate-800 font-semibold">
              {profile.fullName}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold uppercase text-slate-400 tracking-wider">
                Username
              </label>
              <p className="text-slate-700">{profile.username}</p>
            </div>
            <div>
              <label className="text-xs font-bold uppercase text-slate-400 tracking-wider">
                Aadhaar ID
              </label>
              <p className="text-blue-600 font-mono font-medium">
                {profile.aadhaarNumber}
              </p>
            </div>
          </div>
          <div className="pt-4 border-t border-slate-100">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
              Identity Decrypted Successfully
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
