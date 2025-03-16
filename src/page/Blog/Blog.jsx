
import "./BlogStyle.css";
import { useNavigate } from "react-router-dom";

const blogPosts = [
  {
    title: "Ý nghĩa sâu sắc của từng lá bài trong bộ Ẩn Chính",
    author: "Zan",
    date: "18 Jan 2022",
    image: "/FortuneTeller/blog/blog1.jpg",
  },
  {
    title: "Mối liên hệ giữa thần số học và sự nghiệp – Bạn phù hợp với công việc nào?",
    author: "Zan",
    date: "18 Jan 2022",
    image: "/FortuneTeller/blog/blog2.jpg",
  },
  {
    title: "Cách sử dụng ma trận định mệnh để hiểu bản thân và định hướng cuộc sống",
    author: "Zan",
    date: "18 Jan 2022",
    image: "/FortuneTeller/blog/blog3.jpg",
  },
  {
    title: "Hướng dẫn trải bài 3 lá cho người mới bắt đầu",
    author: "Zan",
    date: "18 Jan 2022",
    image: "/FortuneTeller/blog/blog4.jpeg",
  },
  {
    title: "Thần số học là gì? Cách tính con số chủ đạo của bạn",
    author: "Zan",
    date: "18 Jan 2022",
    image: "/FortuneTeller/blog/blog5.webp",
  },
  {
    title: "Những quan niệm sai lầm về Tarot – Giải đáp những hiểu lầm phổ biến",
    author: "Zan",
    date: "18 Jan 2022",
    image: "/FortuneTeller/blog/blog6.jpg",
  },
  // Thêm các bài viết khác nếu cần
];

const Blog = () => {

  const navigate = useNavigate();
  function handleNavigate(index){
    navigate("/Blog/Content",{state:{
      
    }})
  }


  return (
    <div className="blog-container">
      {/* <div className="blog-header">
        <img src="https://via.placeholder.com/300"/>
        <h1>Breaking Into Product Design</h1>
        <p>Advice from Untitled Founder, Frankie</p>
      </div> */}
      <h2>Bài post gần đây</h2>
      <section className="recent-posts">
        {blogPosts.map((post, index) => (
          <div key={index} onClick={() => handleNavigate(index)} className="post-card">
            <div className="img_wrapper">
                <img src={post.image} alt={post.title} />
            </div>
            <h3>{post.title}</h3>
            <p>{post.author} - {post.date}</p>
          </div>
        ))}
      </section>
      <div className="pagination">
        <button>Load more</button>
      </div>
    </div>
  );
};

export default Blog;