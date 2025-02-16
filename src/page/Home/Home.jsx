import './HomeStyle.css'
import React, { useEffect } from 'react'

function Home(){
    useEffect(()=>{
        const information_1 = document.getElementsByClassName('Question_block');
        const information_2 = document.getElementsByClassName('slide');
        for(let i = 0; i < information_1.length; i++){
            information_1[i].onclick = () =>{
                information_2[i].classList.toggle('slide_open');
            }
        } 
        console.log(information_1)
    },[])

    return(
        <React.Fragment>
            <div className='wrap'>
                <div className='main_img'>
                    <img src='/FortuneTeller/background_1.jpg'/>
                    <div className='main_img_text'>
                        <h2>Hành Trình Số Phận</h2>
                        <p className='sub_title'>"Soi tỏ vận mệnh – Khai mở tiềm năng!"</p>
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
                    <img src='/FortuneTeller/bg/horoscope.jpg'/>
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
                                <img src='/FortuneTeller/bg/background_9.png'/>
                            </div>
                            <div className='tool_box_1_head ops2'>
                                <h2>~Thần Số Học~<br/>Bí Mật Con Số</h2>
                                <p>Những con số không chỉ là phép toán mà còn là tấm gương phản chiếu vận mệnh. Tìm hiểu con số chủ đạo và ý nghĩa ẩn sau ngày sinh của bạn!</p>
                            </div>
                        </div>
                        <div className='space'></div>
                    </div>
                    <div className='tool_box_1'>
                        <div className='tool_box_1_wrapper'>
                            <div className='tool_box_1_head'>
                                <h2>~Ma Trận Định Mệnh~<br/>Chìa Khóa Cuộc Đời</h2>
                                <p>Dựa trên ngày sinh, ma trận định mệnh giúp bạn khám phá tiềm năng, sứ mệnh và con đường phát triển bản thân theo góc nhìn huyền bí.</p>
                            </div>
                            <div className='tool_box_1_foot'>
                                <img src='/FortuneTeller/bg/background_10.png'/>
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


            </div>
        </React.Fragment>
    )
}
export default Home