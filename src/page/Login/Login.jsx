// src/App.jsx
import React, { useState, useEffect } from "react";
import LoginAndSave from "./LoginAndSave";
import Dashboard from "./Dashboard";
import "./LoginStyle.css"

function Login() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <div className="login_wrapper">
      {user ? (
        <Dashboard user={user} onLogout={handleLogout} />
      ) : (
        <LoginAndSave onLoginSuccess={(userData) => setUser(userData)} />
      )}
    </div>
  );
}

export default Login;
