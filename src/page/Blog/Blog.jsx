
import { useNavigate } from "react-router-dom";
import "./BlogStyle.css";
import { useEffect, useState } from "react";


const Blog = () => {
  const navigate = useNavigate()
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const data = JSON.parse(localStorage.getItem("user"));
  
  
  const names = Object.keys(data);            // ["Trần Trường Giang", "Trần Trường"]
  const dataList = Object.values(data); 
  console.log(names)
  function handleNavigate(index){
    navigate("/Personal_Report/Report",{state:{
      user_information: dataList[index],
      user_name: names[index]

    }})
  }

  const handleDelete = (indexToDelete) => {
    const userData = JSON.parse(localStorage.getItem("user")) || {};
    delete userData[names[indexToDelete]];
    localStorage.setItem("user", JSON.stringify(userData));

    // Cập nhật danh sách tên (nếu bạn hiển thị từ state)


    setDeleteConfirm(null);
  };



  return (
    <div className="blog-container">
      {
        names.map((name, index)=>{
          
          return(
            <div key={index} className="card">
              <div class="card-img">
                  <img src={`/FortuneTeller/animal/${dataList[index].avt}.jpg`}/>
              </div>
              <div class="desc">
                  <h6 class="primary-text">{name}</h6>
                  <h6 class="secondary-text">#{index+1}</h6>
              </div>
              <button onClick={()=>handleNavigate(index)} class="primary-text">Xem thông tin</button>
              <div class="details">
                  <h3>{dataList[index].time}</h3>
              </div>
              <div className="card_close_btn">

              {deleteConfirm === index ? (
                  <>
                    <button id="noo" onClick={() => setDeleteConfirm(null)}>
                      <i className="fa-solid fa-x"></i>
                    </button>
                    <button id="yes" onClick={() => handleDelete(index)}>
                      <i className="fa-solid fa-check"></i>
                    </button>
                  </>
                ) : (
                  <button onClick={() => setDeleteConfirm(index)} id="first_check">
                    <i className="fa-solid fa-trash"></i>
                  </button>
                )}
              </div>
            </div>
          )
        })
      }
   </div>
  );
};

export default Blog;