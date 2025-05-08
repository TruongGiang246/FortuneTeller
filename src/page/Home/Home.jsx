
import './HomeStyle.css'
import React, { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

function Home(){
    


    const sectionRef = useRef(null);

    const handleScroll = () => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };


    const navigate = useNavigate();

    const handleClick = (mode) => {
    switch (mode){
        case 1: navigate('/Guide'); break;
        case 2: navigate('/Numerology'); break;
        case 3: navigate('/MatrixDestiny'); break;
        case 4: navigate('/Astrology'); break;
        case 5: navigate('/DISC'); break;
        case 6: navigate('/Tarot'); break;

    }

    ; // chuyển đến trang /dashboard
    };




    return(
        <React.Fragment>
           <section class="hero-gradient text-white py-16 md:py-24">
            <div class="container mx-auto px-4 md:px-6">
                <div class="max-w-4xl mx-auto text-center">
                    <h1 class="text-3xl md:text-5xl font-bold mb-6">Khám Phá Tiềm Năng Đích Thực Của Bạn Bằng Cách Hiểu Rõ Chính Mình</h1>
                    <p class="text-lg md:text-xl mb-10 opacity-90">Lifemap giúp bạn khám phá những điểm mạnh, tài năng và con đường phát triển của mình thông qua các công cụ khám phá bản thân mạnh mẽ, được thiết kế riêng cho học sinh như bạn.</p>
                    <button onClick={handleScroll} class="cta-button fir_cta px-8 py-4 rounded-full text-white font-semibold text-lg shadow-lg">✨ Bắt đầu hành trình khám phá bản thân</button>
                    <button onClick={()=>handleClick(1)} class="cta-button sec_cta px-8 py-4 rounded-full text-white font-semibold text-lg shadow-lg">✨ Khám phá cùng hướng dẫn AI</button>
                </div>
            </div>
        </section>
        <section class="py-16 bg-white">
        <div class="container mx-auto px-4 md:px-6">
            <div class="max-w-3xl mx-auto text-center">
                <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Sứ Mệnh Của Chúng Tôi</h2>
                <p class="text-lg text-gray-600 mb-8">Chúng tôi giúp học sinh cấp 2 và cấp 3 hiểu rõ chính mình, khám phá những món quà độc đáo bên trong và tự tin phát triển. Hành trình khám phá bản thân của bạn bắt đầu từ đây!</p>
                <div class="flex flex-wrap justify-center gap-4">
                    <div class="flex items-center bg-indigo-50 px-4 py-2 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                        </svg>
                        <span class="text-gray-700">Hiểu bản thân</span>
                    </div>
                    <div class="flex items-center bg-indigo-50 px-4 py-2 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                        </svg>
                        <span class="text-gray-700">Phát triển cá nhân</span>
                    </div>
                    <div class="flex items-center bg-indigo-50 px-4 py-2 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                        </svg>
                        <span class="text-gray-700">Xây dựng sự tự tin</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section ref={sectionRef} class="py-16 bg-gray-50">
        <div class="container mx-auto px-4 md:px-6">
            <div class="text-center mb-12">
                <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Những Công Cụ Khám Phá Bản Thân Đầy Sức Mạnh</h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">Khám phá những công cụ tuyệt vời giúp bạn hiểu rõ tính cách, tài năng và con đường tiềm năng của mình.</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {/* <!-- Numerology --> */}
                <div class="tool-card bg-white rounded-xl shadow-md overflow-hidden">
                    <div class="bg-purple-500 h-3"></div>
                    <div class="p-6 flex flex-col h-[19.5rem]  justify-between">
                        <div>
                        <div class="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path>
                            </svg>
                        </div>
                        <h3 class="text-xl font-bold text-gray-800 mb-2">Thần số học</h3>
                        <p class="text-gray-600 mb-4">Khám phá cách những con số ảnh hưởng đến tính cách, tài năng và cuộc sống của bạn.</p>
                        </div>
                        <button onClick={()=>{handleClick(2)}} class="w-full py-2 bg-purple-100 text-purple-600 rounded-lg font-medium hover:bg-purple-200 transition-colors">Khám phá</button>
                    </div>
                </div>
                
                {/* <!-- Matrix of Destiny --> */}
                <div class="tool-card bg-white rounded-xl shadow-md overflow-hidden">
                    <div class="bg-blue-500 h-3"></div>
                    <div class="p-6 flex flex-col h-[19.5rem]  justify-between">
                    <div>
                        <div class="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                            </svg>
                        </div>
                        <h3 class="text-xl font-bold text-gray-800 mb-2">Ma trận định mệnh</h3>
                        <p class="text-gray-600 mb-4">Giải mã mục đích sống và tiềm năng thông qua ma trận ngày sinh độc quyền của bạn.</p>
                        </div>
                        <button onClick={()=>{handleClick(3)}} class="w-full py-2 bg-blue-100 text-blue-600 rounded-lg font-medium hover:bg-blue-200 transition-colors">Khám phá</button>
                    </div>
                </div>
                
                {/* <!-- Astrology --> */}
                <div class="tool-card bg-white rounded-xl shadow-md overflow-hidden">
                    <div class="bg-indigo-500 h-3"></div>
                    <div class="p-6 flex flex-col h-[19.5rem] justify-between">
                    <div>
                        <div class="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                            </svg>
                        </div>
                        <h3 class="text-xl font-bold text-gray-800 mb-2">Chiêm tinh học</h3>
                        <p class="text-gray-600 mb-4">Tìm hiểu cách các vì sao và hành tinh lúc bạn ra đời ảnh hưởng đến tính cách và cuộc sống của bạn.</p>
                        </div>
                        <button onClick={()=>{handleClick(4)}} class="w-full py-2 bg-indigo-100 text-indigo-600 rounded-lg font-medium hover:bg-indigo-200 transition-colors">Khám phá</button>
                    </div>
                </div>
                
                {/* <!-- DISC Personality Test --> */}
                <div class="tool-card bg-white rounded-xl shadow-md overflow-hidden">
                    <div class="bg-green-500 h-3"></div>
                    <div class="p-6 flex flex-col h-[19.5rem]  justify-between">
                    <div>
                        <div class="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                            </svg>
                        </div>
                        <h3 class="text-xl font-bold text-gray-800 mb-2">DISC cá nhân</h3>
                        <p class="text-gray-600 mb-4">Xác định phong cách hành vi của bạn và cách bạn tương tác với người khác.</p>
                        </div>
                        <button onClick={()=>{handleClick(5)}} class="w-full py-2 bg-green-100 text-green-600 rounded-lg font-medium hover:bg-green-200 transition-colors">Khám phá</button>
                    </div>
                </div>
                
                {/* <!-- Tarot Insights --> */}
                <div class="tool-card bg-white rounded-xl shadow-md overflow-hidden">
                    <div class="bg-amber-500 h-3"></div>
                    <div class="p-6 flex flex-col h-[19.5rem]  justify-between">
                        <div>
                        <div class="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                            </svg>
                        </div>
                        <h3 class="text-xl font-bold text-gray-800 mb-2">Xem Tarot</h3>
                        <p class="text-gray-600 mb-4">Nhận được những góc nhìn sâu sắc và sự dẫn dắt thông qua những lá bài tượng trưng.</p>
                        </div>
                        <button onClick={()=>{handleClick(6)}} class="w-full py-2 bg-amber-100 text-amber-600 rounded-lg font-medium hover:bg-amber-200 transition-colors">Khám phá</button>
                    </div>
                </div>
            </div>
        </div>
        </section>
        <section class="py-16 bg-white">
        <div class="container mx-auto px-4 md:px-6">
            <div class="text-center mb-12">
                <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Lifemap Hoạt Động Như Thế Nào?</h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">Tạo bản đồ cuộc đời cá nhân hóa chỉ trong 3 bước đơn giản:</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* <!-- Feature 1 --> */}
                <div class="feature-card bg-white rounded-xl p-6 text-center">
                    <div class="feature-icon w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-3">Tạo hồ sơ của bạn</h3>
                    <p class="text-gray-600">Đăng ký và nhập thông tin cơ bản, bao gồm ngày giờ sinh để bắt đầu hành trình.</p>
                </div>
                
                {/* <!-- Feature 2 --> */}
                <div class="feature-card bg-white rounded-xl p-6 text-center">
                    <div class="feature-icon w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-3">Làm bài trắc nghiệm</h3>
                    <p class="text-gray-600">Hoàn thành những bài quiz thú vị và đầy ý nghĩa để khám phá các khía cạnh khác nhau của bạn.</p>
                </div>
                
                {/* <!-- Feature 3 --> */}
                <div class="feature-card bg-white rounded-xl p-6 text-center">
                    <div class="feature-icon w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-3">Nhận Lifemap của bạn</h3>
                    <p class="text-gray-600">Nhận bản đồ cuộc đời được cá nhân hóa với những hiểu biết về điểm mạnh, thử thách và con đường phát triển của bạn.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4 md:px-6">
            <div class="text-center mb-12">
                <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Nhận xét trải nghiệm</h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">Lắng nghe từ những học sinh đã khám phá về bản thân</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* <!-- Testimonial 1 --> */}
                <div class="bg-white p-6 rounded-xl shadow-sm">
                    <div class="flex items-center mb-4">
                        <div class="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                            <span class="text-indigo-600 font-bold text-lg">M</span>
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-800">Maya, 15 tuổi</h4>
                            <p class="text-gray-500 text-sm">Học sinh lớp 10</p>
                        </div>
                    </div>
                    <p class="text-gray-600">“Lifemap giúp mình hiểu vì sao mình yêu thích các môn sáng tạo. Phần thần số học nói rất đúng về điểm mạnh của mình!”</p>
                </div>
                
                {/* <!-- Testimonial 2 --> */}
                <div class="bg-white p-6 rounded-xl shadow-sm">
                    <div class="flex items-center mb-4">
                        <div class="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                            <span class="text-indigo-600 font-bold text-lg">J</span>
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-800">Jason, 13 tuổi</h4>
                            <p class="text-gray-500 text-sm">Học sinh cấp 2</p>
                        </div>
                    </div>
                    <p class="text-gray-600">“Bài test DISC giúp mình hiểu vì sao đôi khi mình mâu thuẫn với bạn bè. Giờ mình biết cách giao tiếp tốt hơn rồi!”</p>
                </div>
                
                {/* <!-- Testimonial 3 --> */}
                <div class="bg-white p-6 rounded-xl shadow-sm">
                    <div class="flex items-center mb-4">
                        <div class="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                            <span class="text-indigo-600 font-bold text-lg">L</span>
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-800">Leila, 17 tuổi</h4>
                            <p class="text-gray-500 text-sm">Học sinh lớp 12”</p>
                        </div>
                    </div>
                    <p class="text-gray-600">“Ma trận định mệnh giúp mình sáng tỏ về con đường tương lai. Mình tự tin hơn khi chọn ngành học và nghề nghiệp!”</p>
                </div>
            </div>
        </div>
    </section>


    <section class="py-16 bg-indigo-600 text-white">
        <div class="container mx-auto px-4 md:px-6">
            <div class="max-w-3xl mx-auto text-center">
                <h2 class="text-2xl md:text-3xl font-bold mb-6">Sẵn Sàng Khám Phá Con Người Thật Của Bạn?</h2>
                <p class="text-lg mb-8 opacity-90">Bắt đầu hành trình khám phá bản thân hôm nay và mở khóa những hiểu biết giúp bạn tự tin phát triển!</p>
                <button class="px-8 py-4 bg-white text-indigo-600 rounded-full font-semibold text-lg shadow-lg hover:bg-indigo-50 transition-colors">Tạo Lifemap miễn phí của bạn</button>
            </div>
        </div>
    </section>


        </React.Fragment>
    )
}
export default Home