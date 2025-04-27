// src/components/LoginAndSave.jsx
import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider, db } from "./fireBase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { getUserData } from "./getUserData";
import "./LoginStyle.css"


const LoginAndSave = ({ onLoginSuccess, setMenuData }) => {

  
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
      localStorage.setItem("user_gmail", JSON.stringify(userData));
      setMenuData(userData.photo)
      const userDocRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(userDocRef)


      if (!docSnap.exists()) {
        // Người dùng mới, set dữ liệu ban đầu
        await setDoc(userDocRef, {
          name: user.displayName,
          email: user.email,
          createdAt: serverTimestamp(),
          yourData: "Chào mừng bạn đến với dashboard riêng của mình!",
        });
      } else {
        getUserData(user.uid).then((data) => {
          console.log(data.localData)
          if(data.localData){
            localStorage.setItem('user', data.localData)
          }
          
        });
        // Người dùng cũ, chỉ cập nhật name và email (nếu muốn)
        await setDoc(userDocRef, {
          name: user.displayName,
          email: user.email,
          // Không đụng vào yourData!
        }, { merge: true });

      }


      onLoginSuccess(userData);

    } catch (error) {
      console.error("Lỗi đăng nhập:", error);
    }
  };

  return (
    <div className="boxWrapper">
      <h2>Xin chào</h2>
      <div className="login_img">
        <img src="/FortuneTeller/nav/nav_icon.png"/>
      </div>
      
      <button
        onClick={handleLogin}
        className="bg-green-500 px-4 py-2 text-white rounded hover:bg-green-600"
      >
        Đăng nhập bằng Gmail
      </button>
    </div>
  );
};

export default LoginAndSave;
