// src/services/userService.js
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "./fireBase";

// Đọc dữ liệu người dùng từ Firestore
export const getUserData = async (uid) => {
  try {
    const userDocRef = doc(db, "users", uid);
    const userSnap = await getDoc(userDocRef);

    if (userSnap.exists()) {
      return userSnap.data(); // Trả về object chứa dữ liệu
    } else {
      console.log("Chưa có dữ liệu cho người dùng này.");
      return null;
    }
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu người dùng:", error);
    return null;
  }
};

export const updateUserData = async (uid, data) => {
    try {
      const userDocRef = doc(db, "users", uid);
      await updateDoc(userDocRef, data);
      console.log(uid)
      console.log("Cập nhật dữ liệu thành công");
    } catch (error) {
      console.error("Lỗi cập nhật dữ liệu:", error);
    }
  };