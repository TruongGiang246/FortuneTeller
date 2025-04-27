// src/App.jsx
import React, { useState, useEffect } from "react";
import LoginAndSave from "./LoginAndSave";
import Dashboard from "./Dashboard";
import "./LoginStyle.css"

function Login({setMenuData}) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user_gmail"));
    if (storedUser) {
      setUser(storedUser)
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user_gmail");
    setMenuData(null)
    setUser(null);
  };

  return (
    <div className="login_wrapper">
      <div className="login_inner">   
      {user ? (
        <Dashboard user={user} onLogout={handleLogout} />
      ) : (
        <LoginAndSave setMenuData={setMenuData} onLoginSuccess={(userData) => setUser(userData)} />
      )}
      </div>
    </div>
  );
}

export default Login;
