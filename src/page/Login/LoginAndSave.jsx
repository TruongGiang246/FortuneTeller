// src/components/LoginAndSave.jsx
import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider, db } from "./fireBase";
import { doc, setDoc } from "firebase/firestore";


const LoginAndSave = ({ onLoginSuccess }) => {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const userData = {
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        uid: user.uid,
      };
      localStorage.setItem("user", JSON.stringify(userData));

      const userDocRef = doc(db, "users", user.uid);
      await setDoc(userDocRef, {
        name: user.displayName,
        email: user.email,
        createdAt: new Date(),
        yourData: "Chào mừng bạn đến với dashboard riêng của mình!"
      }, { merge: true });

      onLoginSuccess(userData);
    } catch (error) {
      console.error("Lỗi đăng nhập:", error);
    }
  };

  return (
    <button
      onClick={handleLogin}
      className="bg-green-500 px-4 py-2 text-white rounded hover:bg-green-600"
    >
      Đăng nhập bằng Gmail
    </button>
  );
};

export default LoginAndSave;
