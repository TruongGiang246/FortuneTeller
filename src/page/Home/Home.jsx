import './HomeStyle.css'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ThreeBack from '../Component/ThreeBack'
function Home(){
    const BaseUrl = "/FortuneTeller"
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
                    <ThreeBack/>
                    <div className='main_img_text'>
                        <p>Hành Trình Số Phận</p>
                    </div>
                </div>
                <div className='information'>
                    <div className='information_Header'>
                        <h1 className='title'>Wellcome to Fortune</h1>
                    </div>
                    <div className='information_container'>
                        <div className='information_box'>
                            <div className='information_img'>
                                <img src={`${BaseUrl}/HomeImages/tarotCard.png`}/>
                            </div>
                            <div className='information_text'>
                                <h2>Tarot</h2>
                                <p>Tarot là bộ bài 78 lá chứa đựng những biểu tượng sâu sắc, giúp khám phá nội tâm, định hướng tương lai và giải mã các khía cạnh quan trọng trong cuộc sống như tình yêu, sự nghiệp, và phát triển bản thân.</p>
                            </div>
                        </div>
                        <div className='information_box'>
                            <div className='information_img'>
                                <img width="60" height="60" src={`${BaseUrl}/HomeImages/numer.png`}/>
                            </div>
                            <div className='information_text'>
                                <h2>Numerology</h2>
                                <p>Thần số học sử dụng ngày sinh và tên gọi để phân tích tính cách, tiềm năng và định hướng cuộc đời. Đây là công cụ giúp bạn hiểu rõ bản thân, tận dụng điểm mạnh và tìm ra con đường phù hợp nhất.</p>
                            </div>
                        </div>
                        <div className='information_box'>
                            <div className='information_img'>
                                <img src={`${BaseUrl}/HomeImages/destiny.png`}/>
                            </div>
                            <div className='information_text'>
                                <h2>Matrix Destiny</h2>
                                <p>Ma trận định mệnh kết hợp thần số học và các quy luật để xác định sứ mệnh, điểm mạnh, thử thách trong cuộc đời. Nó cung cấp một bản đồ giúp bạn khám phá tiềm năng và phát triển bản thân một cách toàn diện.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='Question_container_wrap'>
                <div className='Question_title'>
                    <h1>Bạn sẽ biết được gì ?</h1>
                </div>
                    <div className='Question_container'>
                    <div className='Question_block'>
                        <h2>Về bản thân & tính cách</h2>
                        <div className='slide'>
                            <p>Tôi có đang đi đúng hướng trong cuộc sống không?</p>
                        </div>
                    </div>
                    <div className='Question_block'>
                        <h2>Về công việc & sự nghiệp</h2>
                        <div className='slide'>
                            <p>Ngành nghề nào phù hợp với tôi theo thần số học?</p>
                        </div>
                    </div>
                    <div className='Question_block'>
                        <h2>Về tình yêu & các mối quan hệ</h2>
                        <div className='slide'>
                            <p>Con số của tôi có hợp với con số của người yêu không?</p>
                        </div>
                    </div>
                    <div className='Question_block'>
                        <h2>Về vận mệnh & cuộc sống</h2>
                        <div className='slide'>
                            <p>Năm cá nhân của tôi là số mấy và nó ảnh hưởng như thế nào đến tôi</p>
                        </div>
                    </div>                       
                    </div>

                </div>
                <div className='three_entry'>
                <div className='information_Header'>
                        <h1>Bạn muốn xem gì</h1>
                    </div>
                    <div className='information_container'>
                        
                        <div className='information_box box2'>
                            <div className='information_img_2'>
                                <img className="img_gif_1" src={`${BaseUrl}/gifs/tarot.gif`}/>
                            </div>
                            <div className='information_text_2'>
                            <Link to="/Tarot"><h2>Tarot</h2></Link>
                            </div>
                        </div>
                        
                        <div className='information_box box2'>
                            <div className='information_img_2'>
                                <img className="img_gif_2" src={`${BaseUrl}/gifs/dice.gif`}/>
                            </div>
                            <div className='information_text_2'>
                                <h2>Numerology</h2>
                            </div>
                        </div>
                        <div className='information_box box2'>
                            <div className='information_img_2'>
                                <img className="img_gif_3" src={`${BaseUrl}/gifs/matrix.gif`}/>
                            </div>
                            <div className='information_text_2'>
                                <h2>Matrix Destiny</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Home