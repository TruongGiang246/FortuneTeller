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
      <div class="flex items-center justify-center h-screen w-screen relative z-10">
        <div class="login-container rounded-2xl p-10 w-full max-w-md mx-4 flex flex-col items-center">
           
            <svg class="emblem w-32 h-32 mb-6" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="90" stroke="#d4af37" stroke-width="2" fill="none" opacity="0.3"></circle>
                <circle cx="100" cy="100" r="70" stroke="#d4af37" stroke-width="1" fill="none"></circle>
                <path d="M100 10L120 60L170 70L130 110L140 160L100 140L60 160L70 110L30 70L80 60L100 10Z" stroke="#d4af37" stroke-width="2" fill="none"></path>
                <circle cx="100" cy="100" r="30" stroke="#d4af37" stroke-width="1.5" fill="none"></circle>
                <circle cx="100" cy="100" r="10" fill="#d4af37" opacity="0.7"></circle>
                <path d="M40 100H60M140 100H160M100 40V60M100 140V160" stroke="#d4af37" stroke-width="1" opacity="0.7"></path>
                <path d="M70 70L85 85M130 70L115 85M70 130L85 115M130 130L115 115" stroke="#d4af37" stroke-width="1" opacity="0.7"></path>
            </svg>
            
            <h1 class="title text-3xl md:text-4xl text-center mb-2 text-white font-bold tracking-wider">MYSTIC VISIONS</h1>
            <p class="text-gold-300 text-center mb-8 text-lg italic text-yellow-100 opacity-80">Unlock Your Celestial Journey</p>
            
  
            <button onClick={handleLogin} class="google-btn flex items-center justify-center w-full py-3 px-4 rounded-full text-gray-900 font-semibold mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"></path>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"></path>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"></path>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"></path>
                </svg>
                Sign in with Google
            </button>
            
            <p class="text-gray-400 text-sm text-center mt-4">By signing in, you agree to our<br/>
            <a href="#" class="text-yellow-200 hover:text-yellow-100 transition-colors">Terms of Service</a> &amp; 
            <a href="#" class="text-yellow-200 hover:text-yellow-100 transition-colors"> Privacy Policy</a></p>
        </div>
    </div>   
  );
};

export default LoginAndSave;
