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
    localStorage.removeItem("user")
    setMenuData(null)
    setUser(null);
  };

  return (

    <div className="login_wrapper flex flex-col items-center justify-center p-4">
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="floating text-indigo-300 text-6xl" style={{top: "15%",left: "10%",animationDuration: "6s",opacity: "0.5"}}>✨</div>
        <div class="floating text-purple-300 text-5xl" style={{top: "25%",right: "15%",animationDuration: "7s",opacity: "0.5"}}>🔮</div>
        <div class="floating text-indigo-300 text-4xl" style={{bottom: "20%",left: "15%",animationDuration: "8s",opacity: "0.5"}}>🧭</div>
        <div class="floating text-purple-300 text-5xl" style={{bottom: "30%",right: "10%",animationDuration: "9s",opacity: "0.5"}}>⭐</div>
        <div class="floating text-indigo-300 text-4xl" style={{top: "60%",left: "20%",animationDuration: "7.5s",opacity: "0.5"}}>🌟</div>
        <div class="floating text-purple-300 text-3xl" style={{top: "40%",right: "25%",animationDuration: "6.5s",opacity: "0.5"}}>🔍</div>
        
        {/* <!-- Subtle numbers and symbols --> */}
        <div class="floating text-indigo-200 text-2xl" style={{top: "10%",left: "30%",animationDuration: "8.5s",opacity: "0.5"}}>3</div>
        <div class="floating text-purple-200 text-2xl" style={{top: "70%",right: "35%",animationDuration: "7.2s",opacity: "0.5"}}>7</div>
        <div class="floating text-indigo-200 text-2xl" style={{bottom: "15%",left: "40%",animationDuration: "6.8s",opacity: "0.5"}}>∞</div>
        <div class="floating text-purple-200 text-2xl" style={{bottom: "40%",right: "20%",animationDuration: "8.2s",opacity: "0.5"}}>π</div>
    </div>
      {user ? (
        <Dashboard user={user} onLogout={handleLogout} />
      ) : (
        <LoginAndSave setMenuData={setMenuData} onLoginSuccess={(userData) => setUser(userData)} />
      )}

    <div class="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="w-full h-auto opacity-50">
            <path fill="#c4b5fd" fill-opacity="0.4" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,208C672,213,768,203,864,181.3C960,160,1056,128,1152,117.3C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
    </div>
    </div>
 
  );
}

export default Login;
