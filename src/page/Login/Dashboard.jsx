// src/components/Dashboard.jsx
import React, { useState, useEffect } from "react";
import { getUserData, updateUserData } from "./getUserData";

const Dashboard = ({ user, onLogout }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUserData(user.uid).then((data) => {
      console.log(data)

      
      setLoading(false);
    });
  }, [user.uid]);

  const handleSave = async () => {
    const localData = localStorage.getItem('user');
    console.log(localData);
    if(localData){
      await updateUserData(user.uid, { localData });

      alert("Đã lưu thông tin!");
    }
  };

  return (
    <div className="boxWrapper">
      <div className="login_img">
        <img src="/FortuneTeller/nav/nav_icon.png"/>
      </div>
      <h2>Xin chào, {user.name}</h2>
      <p>Email: {user.email}</p>
      {loading ? (
        <p>Đang tải dữ liệu...</p>
      ) : (
        <div className="login_button_group">
          <button onClick={handleSave}>
            Lưu lại
          </button>
          <button onClick={onLogout}>
            Đăng xuất
          </button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
