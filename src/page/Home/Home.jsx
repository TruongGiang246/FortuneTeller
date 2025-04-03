import './HomeStyle.css'
import React, { useEffect } from 'react'
function Home(){
    useEffect(()=>{
        const information_1 = document.getElementsByClassName('Question_block');
        const information_2 = document.getElementsByClassName('slide');
        const bg = document.getElementById("bg");
        const moon = document.getElementById("moon");
        const mountain = document.getElementById("mountain");
        const road = document.getElementById("road");
        const text = document.getElementById("text");
        for(let i = 0; i < information_1.length; i++){
            information_1[i].onclick = () =>{
                information_2[i].classList.toggle('slide_open');
            }
        } 
        console.log(window.scrollY)

        window.addEventListener("scroll", ()=>{
            console.log("brh")
            let value = window.scrollY;
            bg.style.top = value * 0.5 + 'px';
            moon.style.left = -value * 0.5 + 'px';
            mountain.style.top = -value * 0.15 + 'px';
            road.style.top = value * 0.15 + 'px';
            text.style.top = value * 1 + 'px';
        })

        const slider = document.querySelector(".testimonial-slider");
        const prevBtn = document.querySelector(".prev-btn");
        const nextBtn = document.querySelector(".next-btn");
    
        let index = 0;
        const testimonials = document.querySelectorAll(".testimonial-card");
        const totalTestimonials = testimonials.length;
    
        function updateSlider() {
            slider.style.transform = `translateX(-${index * 100}%)`;
        }
    
        // Nút "Next"
        nextBtn.addEventListener("click", function () {
            index = (index + 1) % totalTestimonials;
            updateSlider();
        });
    
        // Nút "Prev"
        prevBtn.addEventListener("click", function () {
            index = (index - 1 + totalTestimonials) % totalTestimonials;
            updateSlider();
        });
    
        // Tự động chuyển slider mỗi 3 giây


    },[])


    return(
        <React.Fragment>
            <div className='wrap'>
                <div className='main_img'>
                    <div className='paralax'>
                        <img src='/FortuneTeller/background1/bg.jpg' id='bg'/>
                        <img src='/FortuneTeller/background1/moon.png' id='moon'/>
                        <img src='/FortuneTeller/background1/mountain.png' id='mountain'/>
                        <img src='/FortuneTeller/background1/road.png' id='road'/>

                        <div className='main_img_text' id='text'>
                                <h2>Hành Trình Số Phận</h2>
                                <p className='sub_title'>"Soi tỏ vận mệnh – Khai mở tiềm năng!"</p>
                        </div>
                        
                    </div>
                    <section className='shooting_stars'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </section>

                </div>
                
                <div className='introduction'>
                            <div className='intro_img'>
                                <img src='/FortuneTeller/bg/horoscope_2.png'/>
                            </div>
                            <div className='intro_Text'>
                                <p className='intro_title'>Giới thiệu</p>
                                <h1>Thông điệp đến bạn</h1>
                                <p className='intro_content'>“Bạn có bao giờ tự hỏi vì sao mình lại có mặt trên thế giới này?
                                Vũ trụ luôn gửi đến chúng ta những tín hiệu qua Tarot, Chiêm tinh và Thần số học. Hãy giải mã những bí ẩn đó, khám phá con đường dành riêng cho bạn và mở ra một tương lai đầy tiềm năng!”</p>
                                <div className='intro_Button'>
                                    <p>Xem thêm</p>
                                </div>
                            </div>                      
                        </div>

                        <div className='intro_2_img'>
                        <div className='split_img_wrapper'>
                        <img src='/FortuneTeller/bg/split_line_1.jpg'/>
                        </div>
                </div>    

                <div className='introduction_2'>
                    <div className='intro_2_wrapper'>
                    <p className='intro_title'>Công cụ</p>
                    <h1>Bạn sẽ chọn con đường nào?</h1>
                    <p className='intro_content intro_2_content'>Vũ trụ luôn gửi đến chúng ta những tín hiệu ẩn giấu. Mỗi công cụ—Tarot, Chiêm tinh, Thần số học—đều là một chìa khóa giúp bạn khám phá bản thân và định mệnh. Hãy lắng nghe trực giác và chọn con đường của riêng mình!</p>
                    </div>
                </div>

 
                    
                <div className='tool_introduction'>
                    <div className='tool_back_img'>
                        <img src='/FortuneTeller/bg/background_11.png'/>
                    </div>
                    <div className='tool_box_1'>
                        <div className='tool_box_1_wrapper'>
                            <div className='tool_box_1_head'>
                                <h2>~Tarot~<br/>Thông Điệp Vũ Trụ</h2>
                                <p>Khám phá những lá bài Tarot để tìm kiếm câu trả lời, hiểu rõ bản thân và đón nhận những thông điệp sâu sắc từ vũ trụ.</p>
                            </div>
                            <div className='tool_box_1_foot'>
                                <img src='/FortuneTeller/bg/background_8.png'/>
                            </div>
                        </div>
                    </div>
                    <div className='tool_box_1'>
                        <div className='tool_box_1_wrapper'>
                            <div className='tool_box_1_foot ops'>
                                <img src='/FortuneTeller/bg/background_10.png'/>
                            </div>
                            <div className='tool_box_1_head ops2'>
                                <h2>~Ma Trận Định Mệnh~<br/>Chìa Khóa Cuộc Đời</h2>   
                                <p>Dựa trên ngày sinh, ma trận định mệnh giúp bạn khám phá tiềm năng, sứ mệnh và con đường phát triển bản thân theo góc nhìn huyền bí.</p>
                            </div>
                        </div>
                        <div className='space'></div>
                    </div>
                    <div className='tool_box_1'>
                        <div className='tool_box_1_wrapper'>
                            <div className='tool_box_1_head'>
                                <h2>~Thần Số Học~<br/>Bí Mật Con Số</h2>
                                <p>Những con số không chỉ là phép toán mà còn là tấm gương phản chiếu vận mệnh. Tìm hiểu con số chủ đạo và ý nghĩa ẩn sau ngày sinh của bạn!</p>
                            </div>
                            <div className='tool_box_1_foot'>
                                <img src='/FortuneTeller/bg/background_9.png'/>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='intro_2_img'>
                        <div className='split_img_wrapper'>
                        <img src='/FortuneTeller/bg/split_line_1.jpg'/>
                        </div>
                </div>   
                
                <div className='introduction_2'>
                    <div className='intro_2_wrapper intro_2_reverse'>
                    <p className='intro_title'>Câu hỏi</p>
                    <h1>Những Câu Hỏi Định Mệnh</h1>
                    <p className='intro_content intro_3_content'>Mỗi câu hỏi là một cánh cửa dẫn lối đến sự hiểu biết sâu sắc hơn về chính bạn và cuộc sống. Hãy để các công cụ huyền bí giúp bạn khám phá câu trả lời!</p>
                    </div>
                </div>

                <div className='Question_wrapper'>
                    <div className='Question_container'>
                        <div className='Question_box'>
                            <div className='Question_img'>
                                <img src='/FortuneTeller/bg/self_icon.png'/>
                            </div>
                            <div className='Question_content'>
                                <h2>Về Bản Thân</h2>
                                <ul>
                                    <li>Điểm mạnh và điểm yếu thực sự của tôi là gì?</li>
                                    <li>Tôi sinh ra với sứ mệnh gì?</li>
                                    <li>Làm thế nào để sống đúng với bản chất của mình?</li>
                                </ul>
                            </div>
                        </div>
                        <div className='Question_box'>
                            <div className='Question_img'>
                                <img src='/FortuneTeller/bg/love_icon.png'/>
                            </div>
                            <div className='Question_content'>
                                <h2>Về Tình Cảm</h2>
                                <ul>
                                    <li>Người ấy có phải là tri kỷ của tôi không?</li>
                                    <li>Làm thế nào để cải thiện mối quan hệ hiện tại?</li>
                                    <li>Tôi có đang yêu đúng người không?</li>
                                </ul>
                            </div>
                        </div>
                        <div className='Question_box'>
                            <div className='Question_img'>
                                <img src='/FortuneTeller/bg/career_icon.png'/>
                            </div>
                            <div className='Question_content'>
                                <h2> Về Công Việc</h2>
                                <ul>
                                    <li>Tôi có đang đi đúng hướng trong sự nghiệp không?</li>
                                    <li>Nghề nghiệp nào phù hợp với tôi nhất?</li>
                                    <li>Làm thế nào để thu hút tài lộc và thành công?</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                </div>                
                
                


                <div className='intro_2_img'>
                        <div className='split_img_wrapper'>
                        <img src='/FortuneTeller/bg/split_line_1.jpg'/>
                        </div>
                </div>   
                
                <div className='introduction_2'>
                    <div className='intro_2_wrapper'>
                    <p className='intro_title'>Nhận xét</p>
                    <h1>Đánh giá khách hàng</h1>
                    <p className='intro_content intro_2_content'>Vũ trụ luôn gửi đến chúng ta những tín hiệu ẩn giấu. Mỗi công cụ—Tarot, Chiêm tinh, Thần số học—đều là một chìa khóa giúp bạn khám phá bản thân và định mệnh. Hãy lắng nghe trực giác và chọn con đường của riêng mình!</p>
                    </div>
                </div>
                
                <section class="testimonial">
                    <div class="testimonial-container">
                        <div class="testimonial-slider">
                            <div class="testimonial-card">
                                <img src="/FortuneTeller/review/img1.jpg" alt="Nguyễn Văn A"/>
                                <h3>Minh Hoàng</h3>
                                <p>(34 tuổi, Doanh nhân)</p>
                                <p class="stars">⭐⭐⭐⭐⭐</p>
                                <p class="review">Trước đây, tôi luôn cảm thấy lạc lõng và không biết thực sự mình mạnh ở điểm nào. Sau khi làm bài phân tích thần số học, tôi nhận ra con số chủ đạo 7 của mình khiến tôi có xu hướng tìm kiếm sự thật và ham học hỏi. Điều này giúp tôi hiểu rõ bản thân hơn và tự tin theo đuổi con đường phát triển cá nhân. Giờ đây, tôi đã chọn ngành đào tạo và giảng dạy – đúng với thế mạnh của mình!</p>
                            </div>

                            <div class="testimonial-card">
                                <img src="/FortuneTeller/review/img2.jpeg" alt="Trần Thị B"/>
                                <h3>Ngọc Anh</h3>
                                <p>(28 tuổi, Nhân sự)</p>
                                <p class="stars">⭐⭐⭐⭐</p>
                                <p class="review">Trước đây, tôi luôn cảm thấy lạc lõng và không biết thực sự mình mạnh ở điểm nào. Sau khi làm bài phân tích thần số học, tôi nhận ra con số chủ đạo 7 của mình khiến tôi có xu hướng tìm kiếm sự thật và ham học hỏi. Điều này giúp tôi hiểu rõ bản thân hơn và tự tin theo đuổi con đường phát triển cá nhân. Giờ đây, tôi đã chọn ngành đào tạo và giảng dạy – đúng với thế mạnh của mình</p>
                            </div>

                            <div class="testimonial-card">
                                <img src="/FortuneTeller/review/img3.jpg" alt="Lê Văn C"/>
                                <h3>Thu Trang</h3>
                                <p>(24 tuổi, Freelancer)</p>
                                <p class="stars">⭐⭐⭐⭐⭐</p>
                                <p class="review">Lần đầu tiên trải nghiệm trải bài Tarot, tôi không ngờ lại nhận được nhiều góc nhìn mới mẻ đến vậy. Tôi đã băn khoăn giữa việc tiếp tục công việc văn phòng hay chuyển hẳn sang làm tự do. Kết quả trải bài ba lá chỉ ra rằng đây là thời điểm thích hợp để tôi theo đuổi đam mê. Tôi đã dũng cảm đưa ra quyết định – và đúng như vậy, công việc freelancer của tôi giờ đây ổn định và khiến tôi hạnh phúc hơn bao giờ hết!</p>
                            </div>

                            <div class="testimonial-card">
                                <img src="/FortuneTeller/review/img4.jpg" alt="Lê Văn C"/>
                                <h3>Hải Nam</h3>
                                <p>(30 tuổi, Kỹ sư công nghệ)</p>
                                <p class="stars">⭐⭐⭐⭐⭐</p>
                                <p class="review">Tôi luôn tin rằng cuộc sống có sự sắp đặt kỳ diệu, nhưng chưa bao giờ tôi thấy rõ điều đó như khi kết hợp Thần số học và Tarot. Phân tích thần số học cho thấy tôi có con số 5 – yêu thích sự tự do và trải nghiệm. Còn trải bài Tarot đã giúp tôi tìm ra hướng đi phù hợp: khởi nghiệp trong lĩnh vực công nghệ sáng tạo. Nhờ những thông tin quý giá này, tôi đã mạnh dạn theo đuổi đam mê, và đến nay tôi chưa từng hối hận!</p>
                            </div>

                        </div>
                    </div>

                    <button class="prev-btn">❮</button>
                    <button class="next-btn">❯</button>
                </section>

                <div className='intro_2_img'>
                        <div className='split_img_wrapper'>
                        <img src='/FortuneTeller/bg/split_line_1.jpg'/>
                        </div>
                </div>  

            </div>
        </React.Fragment>
    )
}
export default Home