
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
                    <h1 class="text-3xl md:text-5xl font-bold mb-6">Unlock Your True Potential by Understanding Yourself</h1>
                    <p class="text-lg md:text-xl mb-10 opacity-90">Lifemap helps you discover your unique strengths, talents, and path forward through powerful self-discovery tools designed especially for students like you.</p>
                    <button onClick={handleScroll} class="cta-button fir_cta px-8 py-4 rounded-full text-white font-semibold text-lg shadow-lg">Start Self-Discovery Journey</button>
                    <button onClick={()=>handleClick(1)} class="cta-button sec_cta px-8 py-4 rounded-full text-white font-semibold text-lg shadow-lg">Start With AI Guide</button>
                </div>
            </div>
        </section>
        <section class="py-16 bg-white">
        <div class="container mx-auto px-4 md:px-6">
            <div class="max-w-3xl mx-auto text-center">
                <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
                <p class="text-lg text-gray-600 mb-8">We empower middle and high school students to understand themselves deeply, gain clarity about their unique gifts, and grow with confidence. Your journey to self-discovery starts here!</p>
                <div class="flex flex-wrap justify-center gap-4">
                    <div class="flex items-center bg-indigo-50 px-4 py-2 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                        </svg>
                        <span class="text-gray-700">Self-awareness</span>
                    </div>
                    <div class="flex items-center bg-indigo-50 px-4 py-2 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                        </svg>
                        <span class="text-gray-700">Personal growth</span>
                    </div>
                    <div class="flex items-center bg-indigo-50 px-4 py-2 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                        </svg>
                        <span class="text-gray-700">Confidence building</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section ref={sectionRef} class="py-16 bg-gray-50">
        <div class="container mx-auto px-4 md:px-6">
            <div class="text-center mb-12">
                <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Powerful Self-Discovery Tools</h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">Explore these amazing tools designed to help you understand your unique personality, talents, and potential path.</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {/* <!-- Numerology --> */}
                <div class="tool-card bg-white rounded-xl shadow-md overflow-hidden">
                    <div class="bg-purple-500 h-3"></div>
                    <div class="p-6">
                        <div class="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path>
                            </svg>
                        </div>
                        <h3 class="text-xl font-bold text-gray-800 mb-2">Numerology</h3>
                        <p class="text-gray-600 mb-4">Discover how numbers influence your personality, talents, and life path.</p>
                        <button onClick={()=>{handleClick(2)}} class="w-full py-2 bg-purple-100 text-purple-600 rounded-lg font-medium hover:bg-purple-200 transition-colors">Discover</button>
                    </div>
                </div>
                
                {/* <!-- Matrix of Destiny --> */}
                <div class="tool-card bg-white rounded-xl shadow-md overflow-hidden">
                    <div class="bg-blue-500 h-3"></div>
                    <div class="p-6">
                        <div class="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                            </svg>
                        </div>
                        <h3 class="text-xl font-bold text-gray-800 mb-2">Matrix of Destiny</h3>
                        <p class="text-gray-600 mb-4">Uncover your life purpose and potential through your unique birth matrix.</p>
                        <button onClick={()=>{handleClick(3)}} class="w-full py-2 bg-blue-100 text-blue-600 rounded-lg font-medium hover:bg-blue-200 transition-colors">Discover</button>
                    </div>
                </div>
                
                {/* <!-- Astrology --> */}
                <div class="tool-card bg-white rounded-xl shadow-md overflow-hidden">
                    <div class="bg-indigo-500 h-3"></div>
                    <div class="p-6">
                        <div class="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                            </svg>
                        </div>
                        <h3 class="text-xl font-bold text-gray-800 mb-2">Astrology</h3>
                        <p class="text-gray-600 mb-4">Learn how celestial bodies at your birth influence your personality and life.</p>
                        <button onClick={()=>{handleClick(4)}} class="w-full py-2 bg-indigo-100 text-indigo-600 rounded-lg font-medium hover:bg-indigo-200 transition-colors">Discover</button>
                    </div>
                </div>
                
                {/* <!-- DISC Personality Test --> */}
                <div class="tool-card bg-white rounded-xl shadow-md overflow-hidden">
                    <div class="bg-green-500 h-3"></div>
                    <div class="p-6">
                        <div class="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                            </svg>
                        </div>
                        <h3 class="text-xl font-bold text-gray-800 mb-2">DISC Personality</h3>
                        <p class="text-gray-600 mb-4">Identify your behavioral style and learn how you interact with others.</p>
                        <button onClick={()=>{handleClick(5)}} class="w-full py-2 bg-green-100 text-green-600 rounded-lg font-medium hover:bg-green-200 transition-colors">Discover</button>
                    </div>
                </div>
                
                {/* <!-- Tarot Insights --> */}
                <div class="tool-card bg-white rounded-xl shadow-md overflow-hidden">
                    <div class="bg-amber-500 h-3"></div>
                    <div class="p-6">
                        <div class="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                            </svg>
                        </div>
                        <h3 class="text-xl font-bold text-gray-800 mb-2">Tarot Insights</h3>
                        <p class="text-gray-600 mb-4">Gain wisdom and perspective through symbolic card readings and reflection.</p>
                        <button onClick={()=>{handleClick(6)}} class="w-full py-2 bg-amber-100 text-amber-600 rounded-lg font-medium hover:bg-amber-200 transition-colors">Discover</button>
                    </div>
                </div>
            </div>
        </div>
        </section>
        <section class="py-16 bg-white">
        <div class="container mx-auto px-4 md:px-6">
            <div class="text-center mb-12">
                <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-4">How Lifemap Works</h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">Create your personalized life map in three simple steps</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* <!-- Feature 1 --> */}
                <div class="feature-card bg-white rounded-xl p-6 text-center">
                    <div class="feature-icon w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-3">Create Your Profile</h3>
                    <p class="text-gray-600">Sign up and enter your basic information including your birth details to get started on your journey.</p>
                </div>
                
                {/* <!-- Feature 2 --> */}
                <div class="feature-card bg-white rounded-xl p-6 text-center">
                    <div class="feature-icon w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-3">Take Quizzes</h3>
                    <p class="text-gray-600">Complete fun and insightful quizzes that help reveal different aspects of your personality and potential.</p>
                </div>
                
                {/* <!-- Feature 3 --> */}
                <div class="feature-card bg-white rounded-xl p-6 text-center">
                    <div class="feature-icon w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-3">Get Your Lifemap</h3>
                    <p class="text-gray-600">Receive your personalized life map with insights about your strengths, challenges, and potential paths.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4 md:px-6">
            <div class="text-center mb-12">
                <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-4">What Students Say</h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">Hear from students who have discovered more about themselves</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* <!-- Testimonial 1 --> */}
                <div class="bg-white p-6 rounded-xl shadow-sm">
                    <div class="flex items-center mb-4">
                        <div class="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                            <span class="text-indigo-600 font-bold text-lg">M</span>
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-800">Maya, 15</h4>
                            <p class="text-gray-500 text-sm">High School Sophomore</p>
                        </div>
                    </div>
                    <p class="text-gray-600">"Lifemap helped me understand why I'm drawn to creative subjects. The numerology reading was spot on about my strengths!"</p>
                </div>
                
                {/* <!-- Testimonial 2 --> */}
                <div class="bg-white p-6 rounded-xl shadow-sm">
                    <div class="flex items-center mb-4">
                        <div class="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                            <span class="text-indigo-600 font-bold text-lg">J</span>
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-800">Jason, 13</h4>
                            <p class="text-gray-500 text-sm">Middle School Student</p>
                        </div>
                    </div>
                    <p class="text-gray-600">"The DISC test helped me understand why I sometimes clash with my friends. Now I know how to communicate better with them!"</p>
                </div>
                
                {/* <!-- Testimonial 3 --> */}
                <div class="bg-white p-6 rounded-xl shadow-sm">
                    <div class="flex items-center mb-4">
                        <div class="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                            <span class="text-indigo-600 font-bold text-lg">L</span>
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-800">Leila, 17</h4>
                            <p class="text-gray-500 text-sm">High School Senior</p>
                        </div>
                    </div>
                    <p class="text-gray-600">"The Matrix of Destiny gave me clarity about my future path. I feel more confident about my college and career choices now."</p>
                </div>
            </div>
        </div>
    </section>


    <section class="py-16 bg-indigo-600 text-white">
        <div class="container mx-auto px-4 md:px-6">
            <div class="max-w-3xl mx-auto text-center">
                <h2 class="text-2xl md:text-3xl font-bold mb-6">Ready to Discover the Real You?</h2>
                <p class="text-lg mb-8 opacity-90">Start your self-discovery journey today and unlock insights that will help you grow with confidence.</p>
                <button class="px-8 py-4 bg-white text-indigo-600 rounded-full font-semibold text-lg shadow-lg hover:bg-indigo-50 transition-colors">Create Your Free Lifemap</button>
            </div>
        </div>
    </section>


        </React.Fragment>
    )
}
export default Home