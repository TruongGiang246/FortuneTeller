// src/components/Dashboard.jsx
import React, { useState, useEffect } from "react";
import { getUserData, updateUserData } from "./getUserData";

const Dashboard = ({ user, onLogout }) => {
  const [yourData, setYourData] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUserData(user.uid).then((data) => {
      setYourData(data?.yourData || "");
      setLoading(false);
    });
  }, [user.uid]);

  const handleSave = async () => {
    await updateUserData(user.uid, { yourData });
    alert("Đã lưu thông tin cá nhân!");
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Xin chào, {user.name}</h2>
      <p className="text-sm text-gray-500 mb-4">Email: {user.email}</p>
      {loading ? (
        <p>Đang tải dữ liệu...</p>
      ) : (
        <>
          <textarea
            className="w-full border rounded p-2 mb-4"
            rows={4}
            value={yourData}
            onChange={(e) => setYourData(e.target.value)}
            placeholder="Nhập thông tin cá nhân của bạn..."
          />
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          >
            Lưu lại
          </button>
          <button
            onClick={onLogout}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Đăng xuất
          </button>
        </>
      )}
    </div>
  );
};

export default Dashboard;
