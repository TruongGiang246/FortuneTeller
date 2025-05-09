import './Guide.css'
import { useEffect, useRef, useState } from 'react';
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const majorArcana = [
  "The Fool",
  "The Magician",
  "The High Priestess",
  "The Empress",
  "The Emperor",
  "The Hierophant",
  "The Lovers",
  "The Chariot",
  "Strength",
  "The Hermit",
  "Wheel of Fortune",
  "Justice",
  "The Hanged Man",
  "Death",
  "Temperance",
  "The Devil",
  "The Tower",
  "The Star",
  "The Moon",
  "The Sun",
  "Judgement",
  "The World"
];

function Guide(){

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
const navigate = useNavigate()

const location = useLocation()
const question = location.state


function handleNavigate(){
    navigate("/Resource")
}



const endRef = useRef(null);

const [messages, setMessages] = useState([
        { role: "system", content: "Bạn là một chatbot hướng dẫn người dùng khám phá bản thân qua các công cụ như chiêm tinh, thần số học, và DISC." },
        { role: "assistant", content: "Chào bạn! Tôi là một chatbot hướng dẫn người dùng khám phá bản thân qua các công cụ như chiêm tinh, thần số học, và DISC. Tôi có thể giúp bạn khám phá bản thân. Bạn muốn bắt đầu từ đâu?" },
    ]);
const [input, setInput] = useState("");
const [loading, setLoading] = useState(false);

useEffect(() => {
    const chatContainer = endRef.current;
    if (chatContainer) {
      // Cuộn đến cuối của hộp chat
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [messages]);


const sendMessage = async (mode) => {
        let ProfileToAI = `Dưới đây là thông tin một người dùng:`
        let newMessages = []
        let fakeMesage = []

        switch (mode){
            case 1:
                if (!input.trim()) return;
                newMessages = [...messages, { role: "user", content: input }];
                setMessages(newMessages)
            break;

            case 2:{
            const cardNames = location.state.card.map(card => majorArcana[card]).join(", ");
                ProfileToAI = `
Tôi muốn hỏi về chủ đề ${location.state.reason[0]}. Tôi đã chọn kiểu trải ${cardNames}. Hãy giúp tôi diễn giải ý nghĩa của các lá bài này cho mục đích của tôi.
                `
        
            newMessages = [...messages, { role: "user", content: ProfileToAI }];
            fakeMesage = [...messages, { role: "user", content: "Đã gửi thông tin" }]
            setMessages(fakeMesage);

            break;
            }
            case 3:{
                ProfileToAI = `
Đây là những con số tron thần số học của tôi
-Số Đường Đời (Life Path Number) của tôi là ${location.state.number[0]}
-Sô Vận Mệnh (Destiny Number) của tôi là ${location.state.number[1]}
-Số Nội Tâm (Soul Urge Number) của tôi là ${location.state.number[2]}
-Số biểu lộ (Expression Number) của tôi là ${location.state.number[3]}
-Số thái độ (Attitude Number) của tôi là ${location.state.number[4]}
-Số trưởng thành (Mature Number) của tôi là ${location.state.number[5]}
-Số ngày sinh (Birthday Number) của tôi là ${location.state.number[6]}
Hãy giải thích ý nghĩa những con số này cho tôi
                `
           
            newMessages = [...messages, { role: "user", content: ProfileToAI }];
            fakeMesage = [...messages, { role: "user", content: "Đã gửi thông tin" }]
            setMessages(fakeMesage);
            break;
            }
           

        }
        // if (!input.trim()) return;
        // const newMessages = [...messages, { role: "user", content: ProfileToAI }];
        
        
        setInput("");
        setLoading(true);
        
        
      
        try {
          const recentMess = newMessages.slice(-6);
          console.log(recentMess)
          const response = await axios.post(
            "https://openrouter.ai/api/v1/chat/completions",
            {
              model: "qwen/qwen3-4b:free", // bạn có thể thay bằng deepseek-ai/deepseek-chat hoặc model khác
              messages: recentMess,
            },
            {
              headers: {
                Authorization: "Bearer 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", // Thay bằng API Key từ OpenRouter
                "HTTP-Referer": "http://localhost:5173", // Thay bằng URL app của bạn
                "Content-Type": "application/json",
              },
            }
          );
      
          const reply = response.data.choices[0].message.content;
   
         if(mode == 1){
            // setMessages(prev => [...prev, { role: "assistant", content: reply }]);
            setMessages([...newMessages, { role: "assistant", content: reply }]);
         }else{
            setMessages([...fakeMesage, { role: "assistant", content: reply }]);
         }
            
        } catch (error) {
          console.error("API error:", error);

          if(mode == 1){
            setMessages([...newMessages, { role: "assistant", content: "Lỗi khi gọi API." }]);
         }else if(mode == 2 || mode == 3){
            setMessages([...fakeMesage, { role: "assistant", content: "Lỗi khi gọi API." }]);
         }
        }
      
        setLoading(false);
      };




useEffect(()=>{
  // Create starry background
  // createStars();
  
  // Navigation between sections

  const progress_bar = document.getElementById('progressTracker')
  const welcomeSection = document.getElementById('welcome');
  const guidedPathsSection = document.getElementById('guidedPaths');
  const chatSection = document.getElementById('chatSection');


  

  const showChatBtn = document.getElementById('showChatBtn');
  const backBtn = document.getElementById('BackBtn')

  


  backBtn.addEventListener('click', ()=>{
    welcomeSection.classList.remove('hidden');
    chatSection.classList.add('hidden');
    guidedPathsSection.classList.add('hidden');
    guidedPathsSection.classList.add('fade-in');
    backBtn.classList.add('hidden')
  })


  
  showChatBtn.addEventListener('click', () => {
      welcomeSection.classList.add('hidden');
      guidedPathsSection.classList.add('hidden');
      chatSection.classList.remove('hidden');
      chatSection.classList.add('fade-in');

      backBtn.classList.remove('hidden')
   
      
      // Scroll chat to bottom
      const chatContainer = document.getElementById('chatContainer');
      chatContainer.scrollTop = chatContainer.scrollHeight;
  });
  
  // Quick reply buttons
  const quickReplyButtons = document.querySelectorAll('.quick-reply');


  quickReplyButtons.forEach(button => {
      button.addEventListener('click', () => {
          const message = button.textContent;  
       
          setInput(message)     
      });
  });

  if(question){
        welcomeSection.classList.add('hidden');
      guidedPathsSection.classList.add('hidden');
      chatSection.classList.remove('hidden');
      chatSection.classList.add('fade-in');

      backBtn.classList.remove('hidden')
   
      
      // Scroll chat to bottom
      const chatContainer = document.getElementById('chatContainer');
      chatContainer.scrollTop = chatContainer.scrollHeight;


      sendMessage(location.state.mode)
  }
  


},[]);



// Create random stars in the background
function createStars() {
  const starBg = document.getElementById('starBackground');
  const starCount = 100;
  
  for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      
      // Random position
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      
      // Random size
      const size = Math.random() * 3 + 1;
      
      // Random opacity and animation delay
      const opacity = Math.random() * 0.5 + 0.1;
      const animationDelay = Math.random() * 4 + 's';
      
      star.style.left = `${left}%`;
      star.style.top = `${top}%`;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.opacity = opacity;
      star.style.animationDelay = animationDelay;
      
      starBg.appendChild(star);
  }
}



    return(
        <div className='relative guide_wrapper'>

    {/* <!-- Star Background --> */}
   <div className="star-bg" id="starBackground"></div>
{/*     
    <!-- Header with Logo --> */}
    <header className="w-full max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div id='BackBtn' className="hidden flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center">
                {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                </svg> */}
                <i className="fa-solid fa-arrow-left" style={{color: "#ffffff"}}></i>
            </div>
            <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">Quay lại</h1>
        </div>
        
        <div className="text-sm text-indigo-700 font-medium">
            Hướng Dẫn Cá Nhân của Bạn
        </div>
    </header>

    {/* <!-- Main Content --> */}
    <main className="w-full max-w-6xl mx-auto px-4 py-6">
        {/* <!-- Welcome Section --> */}
        <section id="welcome" className="mb-12 fade-in">
            <div className="flex flex-col items-center">
                {/* <!-- Lumina Avatar --> */}
                <div className="relative mb-6">
                    <div className="absolute inset-0 rounded-full bg-purple-300 blur-xl opacity-50 glow"></div>
                    <div className="relative floating_guide">
                        <svg className="w-48 h-48 md:w-56 md:h-56" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                           
                            <circle cx="100" cy="100" r="95" fill="url(#avatarGradient)"></circle>
                            
                          
                            <circle cx="100" cy="85" r="40" fill="#fef3c7"></circle>
                            
                           
                            <path d="M60,85 C60,55 80,45 100,45 C120,45 140,55 140,85 C140,85 150,65 150,85 C150,105 140,115 140,115 L60,115 C60,115 50,105 50,85 C50,65 60,85 60,85 Z" fill="#9d4edd"></path>
                            
                          
                            <circle cx="85" cy="80" r="5" fill="#4b5563"></circle>
                            <circle cx="115" cy="80" r="5" fill="#4b5563"></circle>
                            
                           
                            <path d="M85,95 Q100,110 115,95" stroke="#4b5563" stroke-width="3" fill="transparent"></path>
                            
                           
                            <circle cx="100" cy="100" r="90" fill="none" stroke="url(#auraGradient)" stroke-width="10" opacity="0.7"></circle>
                            
                         
                            <defs>
                                <linearGradient id="avatarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stop-color="#c4b5fd"></stop>
                                    <stop offset="100%" stop-color="#8b5cf6"></stop>
                                </linearGradient>
                                <linearGradient id="auraGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stop-color="#c4b5fd" stop-opacity="0.8"></stop>
                                    <stop offset="100%" stop-color="#8b5cf6" stop-opacity="0.2"></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
                
                {/* <!-- Greeting Text --> */}
                <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">
                Chào bạn, mình là Lumina! Hãy khám phá bản thân cùng nhau nhé.
                </h2>
                
                {/* <!-- Action Buttons --> */}
                <div className="flex flex-col md:flex-row gap-4 w-full max-w-md">
                    <button onClick={handleNavigate} id="showPathsBtn" className="btn-primary flex-1 py-4 px-6 rounded-xl text-white font-bold text-lg shadow-lg flex items-center justify-center gap-2">
                        <span className="text-xl">✨</span>
                        Xem tài liệu
                    </button>
                    <button id="showChatBtn" className="btn-secondary flex-1 py-4 px-6 rounded-xl text-white font-bold text-lg shadow-lg flex items-center justify-center gap-2">
                        <span className="text-xl">💬</span>
                        Trò chuyện với Lumina
                    </button>
                </div>
            </div>
        </section>
        
        {/* <!-- Guided Path Section --> */}
        <section id="guidedPaths" className="mb-12 hidden">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">Choose Your Journey</h3>
            
            <div className="path-cards flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-3">
                {/* <!-- Path Card 1 --> */}
                <div className="path-card rounded-2xl shadow-lg p-6 flex flex-col min-w-[280px] md:min-w-0">
                    <div className="h-12 w-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Understand Your Strengths</h4>
                    <p className="text-gray-600 mb-4 flex-grow">Discover your natural talents through DISC personality assessment and astrological insights.</p>
                    <div className="mb-4">
                        <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                            <span>DISC</span>
                            <span>+</span>
                            <span>Astrology</span>
                        </div>
                        <div className="progress-bar">
                            <div className="progress-fill" style={{width: "25%"}}></div>
                        </div>
                    </div>
                    <button className="btn-primary py-2 px-4 rounded-lg text-white font-medium">Start Path</button>
                </div>
                
                {/* <!-- Path Card 2 --> */}
                <div className="path-card rounded-2xl shadow-lg p-6 flex flex-col min-w-[280px] md:min-w-0">
                    <div className="h-12 w-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                        </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Find Your Life Direction</h4>
                    <p className="text-gray-600 mb-4 flex-grow">Uncover your life purpose and potential paths through numerology and destiny matrix.</p>
                    <div className="mb-4">
                        <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                            <span>Numerology</span>
                            <span>+</span>
                            <span>Destiny Matrix</span>
                        </div>
                        <div className="progress-bar">
                            <div className="progress-fill" style={{width: "0%"}}></div>
                        </div>
                    </div>
                    <button className="btn-primary py-2 px-4 rounded-lg text-white font-medium">Start Path</button>
                </div>
                
                {/* <!-- Path Card 3 --> */}
                <div className="path-card rounded-2xl shadow-lg p-6 flex flex-col min-w-[280px] md:min-w-0">
                    <div className="h-12 w-12 rounded-xl bg-pink-100 flex items-center justify-center text-pink-600 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                        </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Explore Your Inner World</h4>
                    <p className="text-gray-600 mb-4 flex-grow">Dive deep into your subconscious through astrology insights and tarot symbolism.</p>
                    <div className="mb-4">
                        <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                            <span>Astrology</span>
                            <span>+</span>
                            <span>Tarot</span>
                        </div>
                        <div className="progress-bar">
                            <div className="progress-fill" style={{width: "60%"}}></div>
                        </div>
                    </div>
                    <button className="btn-primary py-2 px-4 rounded-lg text-white font-medium">Continue Path</button>
                </div>
            </div>
        </section>
        
        {/* <!-- Chat Section --> */}
        <section id="chatSection" className="hidden">
            <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden">
                {/* <!-- Chat Header --> */}
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-4 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center avatar-glow">
                        <svg className="w-6 h-6" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20" r="19" fill="#c4b5fd"></circle>
                            <circle cx="20" cy="17" r="8" fill="#fef3c7"></circle>
                            <path d="M12,17 C12,11 16,9 20,9 C24,9 28,11 28,17" fill="#9d4edd"></path>
                            <circle cx="17" cy="16" r="1" fill="#4b5563"></circle>
                            <circle cx="23" cy="16" r="1" fill="#4b5563"></circle>
                            <path d="M17,19 Q20,22 23,19" stroke="#4b5563" stroke-width="0.6" fill="transparent"></path>
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-white font-bold">Lumina</h3>
                        <p className="text-white/80 text-xs">Hướng Dẫn Cá Nhân của Bạn</p>
                    </div>
                </div>
                
                {/* <!-- Chat Messages --> */}
                <div ref={endRef} className="chat-container p-4" id="chatContainer">
      
    



                    {messages.map((msg, i) => {
                        
                        if(msg.role === "system"){
                            return null
                        }

                        if(question && question.mode == 2 && i == 1){
                            return(
                            <div key={i} className="flex gap-3 mb-4">
                            <div className="h-8 w-8 rounded-full bg-purple-200 flex-shrink-0 flex items-center justify-center">
                                <svg className="w-5 h-5" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20" cy="20" r="19" fill="#c4b5fd" />
                                <circle cx="20" cy="17" r="8" fill="#fef3c7" />
                                <path d="M12,17 C12,11 16,9 20,9 C24,9 28,11 28,17" fill="#9d4edd" />
                                <circle cx="17" cy="16" r="1" fill="#4b5563" />
                                <circle cx="23" cy="16" r="1" fill="#4b5563" />
                                <path d="M17,19 Q20,22 23,19" stroke="#4b5563" strokeWidth="0.6" fill="transparent" />
                                </svg>
                            </div>
                                <div  className="assistant-message rounded-2xl rounded-tl-none p-3 max-w-[80%] bg-gray-100">
                                        <ReactMarkdown remarkPlugins={[remarkBreaks]}>Thật tuyệt khi được cùng bạn khám phá bí ẩn Tarot. Hãy cùng xem trải bài của bạn nói gì nhé!</ReactMarkdown>
                                </div>
                            </div>  
                            )
                        }

                        if(question && question.mode == 3 && i == 1){
                            return(
                            <div key={i} className="flex gap-3 mb-4">
                            <div className="h-8 w-8 rounded-full bg-purple-200 flex-shrink-0 flex items-center justify-center">
                                <svg className="w-5 h-5" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20" cy="20" r="19" fill="#c4b5fd" />
                                <circle cx="20" cy="17" r="8" fill="#fef3c7" />
                                <path d="M12,17 C12,11 16,9 20,9 C24,9 28,11 28,17" fill="#9d4edd" />
                                <circle cx="17" cy="16" r="1" fill="#4b5563" />
                                <circle cx="23" cy="16" r="1" fill="#4b5563" />
                                <path d="M17,19 Q20,22 23,19" stroke="#4b5563" strokeWidth="0.6" fill="transparent" />
                                </svg>
                            </div>
                                <div  className="assistant-message rounded-2xl rounded-tl-none p-3 max-w-[80%] bg-gray-100">
                                        <ReactMarkdown remarkPlugins={[remarkBreaks]}>Thật tuyệt khi được cùng bạn khám phá về Thần số học. Hãy để tôi phân tích những con số của bạn!</ReactMarkdown>
                                </div>
                            </div>  
                            )
                        }

                        return (
                        msg.role === "user" ? (
                            <div key={i} className="flex flex-row-reverse gap-3 mb-4">
                            <div className="h-8 w-8 rounded-full bg-indigo-200 flex-shrink-0 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <div className="user-message rounded-2xl rounded-tr-none p-3 max-w-[80%] bg-indigo-100">
                                <p>{msg.content}</p>
                            </div>
                            </div>
                        ) : (
                            <div key={i} className="flex gap-3 mb-4">
                            <div className="h-8 w-8 rounded-full bg-purple-200 flex-shrink-0 flex items-center justify-center">
                                <svg className="w-5 h-5" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20" cy="20" r="19" fill="#c4b5fd" />
                                <circle cx="20" cy="17" r="8" fill="#fef3c7" />
                                <path d="M12,17 C12,11 16,9 20,9 C24,9 28,11 28,17" fill="#9d4edd" />
                                <circle cx="17" cy="16" r="1" fill="#4b5563" />
                                <circle cx="23" cy="16" r="1" fill="#4b5563" />
                                <path d="M17,19 Q20,22 23,19" stroke="#4b5563" strokeWidth="0.6" fill="transparent" />
                                </svg>
                            </div>
                                <div  className="assistant-message rounded-2xl rounded-tl-none p-3 max-w-[80%] bg-gray-100">
                                        <ReactMarkdown remarkPlugins={[remarkBreaks]}>{msg.content}</ReactMarkdown>
                                </div>
                            </div> 
                        )
                        )})}


                        {loading ? (                            
                        <div className="flex gap-3 mb-4">
                            <div className="h-8 w-8 rounded-full bg-purple-200 flex-shrink-0 flex items-center justify-center">
                                <svg className="w-5 h-5" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20" cy="20" r="19" fill="#c4b5fd" />
                                <circle cx="20" cy="17" r="8" fill="#fef3c7" />
                                <path d="M12,17 C12,11 16,9 20,9 C24,9 28,11 28,17" fill="#9d4edd" />
                                <circle cx="17" cy="16" r="1" fill="#4b5563" />
                                <circle cx="23" cy="16" r="1" fill="#4b5563" />
                                <path d="M17,19 Q20,22 23,19" stroke="#4b5563" strokeWidth="0.6" fill="transparent" />
                                </svg>
                            </div>
                                <div className="whitespace-pre-line assistant-message rounded-2xl rounded-tl-none p-3 max-w-[80%] bg-gray-100">
                                        <div className="typing-indicator">
                                          <span></span>
                                          <span></span>
                                          <span></span>
                                        </div> 
                                </div>
                            </div> ) : ""}
                    
                  
                </div >
                
                {/* <!-- Quick Replies --> */}
                <div className="px-4 pb-3">
                    <div className="text-xs text-gray-500 mb-2">Quick replies:</div>
                    <div className="flex flex-wrap gap-2">
                        <button className="quick-reply bg-indigo-100 hover:bg-indigo-200 text-indigo-700 px-3 py-1 rounded-full text-sm">Tôi nên bắt đầu thế nào?</button>
                        <button className="quick-reply bg-indigo-100 hover:bg-indigo-200 text-indigo-700 px-3 py-1 rounded-full text-sm">Chiêm tinh học là gì?</button>
                        <button className="quick-reply bg-indigo-100 hover:bg-indigo-200 text-indigo-700 px-3 py-1 rounded-full text-sm">DISC là gì?</button>
                    </div>
                </div>
                
                {/* <!-- Chat Input --> */}
                <div className="border-t border-gray-200 p-4">
                    <div className="flex gap-2">
                        <input
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                            sendMessage(1);
                            }
                        }}                        
                        type="text" 
                        value={input} 
                        onChange={(e) => setInput(e.target.value)} 
                        className="flex-grow bg-white/70 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-300" 
                        placeholder="Ask me anything..."/>
                        <button   
 
                        onClick={()=>sendMessage(1)} 
                        className="btn-primary text-white rounded-xl px-4 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>


        
  
    </main>
    
    
        </div>
    )
}
export default Guide