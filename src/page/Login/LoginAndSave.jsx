// src/components/LoginAndSave.jsx
import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider, db } from "./fireBase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { getUserData } from "./getUserData";
import { serverTimestamp } from "firebase/firestore";
import { setPersistence, browserLocalPersistence } from "firebase/auth";
import "./LoginStyle.css"


const LoginAndSave = ({ onLoginSuccess, setMenuData }) => {

  function noLoginBtn(){
    onLoginSuccess({
      uid: null,
      name: null,
    })
    setMenuData(true)
    localStorage.setItem("user_gmail",JSON.stringify("unlogin User"))
  }
  
  const handleLogin = async () => {
    try {
      await setPersistence(auth, browserLocalPersistence);
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
        <div class="relative z-10 w-full max-w-md">
        {/* <!-- Logo --> */}
        <div class="flex justify-center mb-8">
            <div class="logo-glow flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md">
                <div class="h-12 w-12 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                    </svg>
                </div>
                <h1 class="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">Lifemap</h1>
            </div>
        </div>
        
        {/* <!-- Login Box --> */}
        <div class="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-xl">
            <div class="text-center mb-8">
                <h2 class="text-2xl font-bold text-gray-800 mb-3">Chào mừng tới LifeMap</h2>
                <p class="text-gray-600 leading-relaxed">Mở ra con đường của bạn</p>
            </div>
            
            {/* <!-- Login Button --> */}
            <div class="flex flex-col items-center">
                <button onClick={handleLogin} class="mb-3 google-btn flex items-center justify-center gap-3 w-full max-w-xs bg-white border border-gray-300 rounded-full px-6 py-3 text-gray-700 font-medium shadow-sm transition-all duration-300 hover:bg-gray-50 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48">
                        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                    </svg>
                    Continue with Google
                </button>
                <p onClick={noLoginBtn} class="text-sm underline cursor-pointer text-gray-800 text-center max-w-xs mb-6">Tiếp tục sử dụng không đăng nhập</p>
                
                <p class="text-sm text-gray-500 text-center max-w-xs">By signing in, you agree to our <br/> <a className="text-indigo-800/70">Terms of Service</a> & <a className="text-indigo-800/70">Privacy Policy</a></p>
            </div>
        </div>
        
        {/* <!-- Footer --> */}
        <div class="mt-8 text-center text-sm text-indigo-800/70">
            <p>Discover Yourself to Grow</p>
        </div>
    </div>
  );
};

export default LoginAndSave;
