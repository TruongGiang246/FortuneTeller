// src/components/Dashboard.jsx
import React, { useState, useEffect, useRef } from "react";
import { getUserData, updateUserData } from "./getUserData";
import axios from "axios";


const Dashboard = ({ user, onLogout, setMenuData }) => {


    const endRef = useRef(null);

    const [messages, setMessages] = useState([
            { role: "system", content: "Bạn là một chatbot hướng dẫn người dùng khám phá bản thân qua các công cụ như chiêm tinh, thần số học, và DISC." },
            { role: "assistant", content: "Chào bạn! Tôi là một chatbot hướng dẫn người dùng khám phá bản thân qua các công cụ như chiêm tinh, thần số học, và DISC. Tôi có thể giúp bạn khám phá bản thân. Bạn muốn bắt đầu từ đâu?" },
        ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [profile, selectedProfile] = useState(0);

    useEffect(() => {
        const chatContainer = endRef.current;
        if (chatContainer) {
        // Cuộn đến cuối của hộp chat
        chatContainer.scrollTop = chatContainer.scrollHeight;
        }
    }, [messages]);

    const storedUser = JSON.parse(localStorage.getItem("user"));
    console.log(storedUser)
    const sendMessage = async () => {
        
    
        const arrayValue = Object.values(storedUser)[profile]

        let ProfileToAI = `Dưới đây là thông tin một người dùng:`

        if(arrayValue.numerology){
            ProfileToAI += `
    Thần số học:
    - Số đường đời(Lifepath): ${arrayValue.numerology[0]}
    - Số Sứ mệnh (DestinyNumber): ${arrayValue.numerology[1]}
    - Số Linh hồn(SoulNumber): ${arrayValue.numerology[2]}
    - Số Nhân cách(PersonalityNumber): ${arrayValue.numerology[3]}
    - Số Trưởng thành(MatureNumber): ${arrayValue.numerology[4]}
    - Số Ngày sinh(BirthDayNumber): ${arrayValue.numerology[5]}
    - Số Thái độ(AttitudeNumber): ${arrayValue.numerology[6]}          
        `
        }
        if(arrayValue.disc){
            ProfileToAI  +=  `
    Chỉ số DISC:
    - Chỉ số D(Dominance): ${arrayValue.disc[0][1]} / 100
    - Chỉ số I(Influence): ${arrayValue.disc[1][1]} / 100
    - Chỉ số S(Steadiness): ${arrayValue.disc[2][1]} / 100
    - Chỉ số C(Conscientiousness): ${arrayValue.disc[3][1]} / 100
        `
        }
        if(arrayValue.horoscope){
            ProfileToAI += `
    Chiêm tinh học:
    - Tính chất:
      - Linh hoạt(Mutable): ${arrayValue.horoscope[0][0].value} / 10
      - Tiên phong(Cardinal): ${arrayValue.horoscope[0][1].value} / 10
      - Kiên định(Fixed): ${arrayValue.horoscope[0][2].value} / 10
    - Tỉ lệ nguyên tố:
      - Lửa(Fire): ${arrayValue.horoscope[1][0].value}%
      - Đất(Earth): ${arrayValue.horoscope[1][1].value}%
      - Khí(Air): ${arrayValue.horoscope[1][2].value}%
      - Nước(Water): ${arrayValue.horoscope[1][3].value}%
    - Năng lượng các hành tinh:
      - Mặt trời(Sun): ${arrayValue.horoscope[2][0].value} / 100
      - Mặt trăng(Moon): ${arrayValue.horoscope[2][1].value} / 100
      - Thủy tinh(Mercury): ${arrayValue.horoscope[2][2].value} / 100
      - Kim tinh(Venus): ${arrayValue.horoscope[2][3].value} / 100
      - Sao hỏa(Mars): ${arrayValue.horoscope[2][4].value} / 100
      - Sao mộc(Jupiter): ${arrayValue.horoscope[2][5].value} / 100
      - Sao thổ(Saturn): ${arrayValue.horoscope[2][6].value} / 100
      - Thiên vương tinh(Uranus): ${arrayValue.horoscope[2][7].value} / 100
      - Hải vương tinh(Neptune): ${arrayValue.horoscope[2][8].value} / 100
      - Diêm vương tinh(Pluto): ${arrayValue.horoscope[2][9].value} / 100
        `
        
        }

        ProfileToAI += `
    Hãy viết một đoạn mô tả ngắn gọn gồm:
    - Điểm mạnh nổi bật
    - Thử thách cần vượt qua
    - Nghề nghiệp phù hợp
    - Lời khuyên định hướng phát triển
    - Giọng văn tích cực, truyền cảm hứng, dễ hiểu
        `
        console.log(ProfileToAI)

        

        // if (!input.trim()) return;
      
        const newMessages = [...messages, { role: "user", content: ProfileToAI }];
        setMessages(newMessages);
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
          console.log(response)
          setMessages([...newMessages, { role: "assistant", content: reply }]);
        } catch (error) {
          console.error("API error:", error);
          setMessages([
            ...newMessages,
            { role: "assistant", content: "Lỗi khi gọi API." },
          ]);
        }
      
        setLoading(false);
      };

    
    // <--------------------------MESSAGE_HANDLE----------------------------->

    const [userLists, setUserLists] = useState([])
    useEffect(() => {
        getUserData(user.uid).then((data) => {
        console.log(data)        
        setMenuData(data);
        });
   
    }, [user.uid]);

    const handleSave = async () => {
        const localData = localStorage.getItem('user');
        console.log(localData);
        if(localData){
        await updateUserData(user.uid, { localData });
        
        alert("Đã lưu thông tin!");
        }
    };


        
        

        console.log(storedUser[0])


    console.log(profile)

    useEffect(()=>{
        const btn_ask_lumina = document.getElementsByClassName("Ask-Lumina-btn");
        const LuminaModel = document.getElementById('luminaModal');
        const CloseBtn = document.getElementById('closeModalBtn');
        const LogoutBtn = document.getElementById('Logout')
        const profileName = document.getElementById('profileName')


        for(let i = 0; i < btn_ask_lumina.length; i++){
            btn_ask_lumina[i].addEventListener('click',()=>{
            profileName.innerText = Object.keys(storedUser)[i]
            LuminaModel.classList.remove('hidden');
            selectedProfile(i);
            })
        }

        CloseBtn.addEventListener('click', ()=>{
            LuminaModel.classList.add('hidden')
           
        })

        LogoutBtn.addEventListener('click', onLogout)




    },[])

    return (
    
    <>

      <div class="fixed bottom-6 right-6 z-10">
            <div class="crystal-ball w-16 h-16  cursor-pointer pulse-glow" id="crystalBall">
                <div class="absolute inset-0 flex items-center justify-center">
                    <span class="text-2xl">🔮</span>
                </div>
            </div>
        </div>
        
      <div class="contaier_dash mx-auto px-4 py-8 mb-20">

        <header class="mystic-container p-6 mb-8 relative overflow-hidden">
            <div class="flex flex-col md:flex-row items-center justify-between">
          
                <div class="mb-4 md:mb-0 flex items-center">
                    <svg class="w-12 h-12 logo-glow" viewBox="0 0 100 100">
                        <defs>
                            <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stop-color="#FFD700"></stop>
                                <stop offset="100%" stop-color="#FFA500"></stop>
                            </linearGradient>
                        </defs>
                        <circle cx="50" cy="50" r="45" fill="url(#logo-gradient)"></circle>
                        <path d="M 30 50 L 45 65 L 70 35" stroke="white" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <h1 class="text-2xl md:text-3xl font-bold text-purple-800 ml-3">Lifemap</h1>
                </div>
                
                <div class="flex items-center">
                    <h2 class="text-xl md:text-2xl font-medium text-purple-800 mr-4">Welcome back, <span id="userName">{user.name}</span> 🌟</h2>
                    <button id="Logout" class="cta-button hover:bg-white/70 text-white-800 font-medium py-2 px-4 rounded-full transition-all">
                        Logout
                    </button>
                </div>
            </div>
            
      
            <div class="absolute top-5 right-10 w-8 h-8 text-2xl floating" style={{animationDelay: "0.5s"}}>✨</div>
            <div class="absolute bottom-5 left-10 w-8 h-8 text-2xl floating" style={{animationDelay: "1s"}}>🌙</div>
            <div class="absolute top-20 left-20 w-8 h-8 text-2xl floating" style={{animationDelay: "1.5s"}}>⭐</div>
        </header>
        
        
        {/* <div class="progress-tracker fixed left-4 top-1/2 transform -translate-y-1/2 z-10 mystic-container p-4 glow-effect hidden md:block">
            <h3 class="text-lg font-bold text-purple-800 mb-4 text-center">Your Journey</h3>
            <div class="progress-tracker-inner flex flex-col space-y-4">
                <div class="tool-progress flex flex-col items-center">
                    <div class="progress-circle">
                        <svg width="40" height="40" viewBox="0 0 40 40">
                            <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stop-color="#a18cd1"></stop>
                                    <stop offset="100%" stop-color="#fbc2eb"></stop>
                                </linearGradient>
                            </defs>
                            <circle class="bg" cx="20" cy="20" r="16"></circle>
                            <circle class="progress" cx="20" cy="20" r="16" stroke-dasharray="100" stroke-dashoffset="0"></circle>
                        </svg>
                        <div class="absolute inset-0 flex items-center justify-center">
                            <span class="text-lg">✔️</span>
                        </div>
                    </div>
                    <span class="text-sm text-purple-800 mt-1">DISC</span>
                </div>
                
                <div class="tool-progress flex flex-col items-center">
                    <div class="progress-circle">
                        <svg width="40" height="40" viewBox="0 0 40 40">
                            <circle class="bg" cx="20" cy="20" r="16"></circle>
                            <circle class="progress" cx="20" cy="20" r="16" stroke-dasharray="100" stroke-dashoffset="30"></circle>
                        </svg>
                        <div class="absolute inset-0 flex items-center justify-center">
                            <span class="text-lg">🌙</span>
                        </div>
                    </div>
                    <span class="text-sm text-purple-800 mt-1">Astrology</span>
                </div>
                
                <div class="tool-progress flex flex-col items-center">
                    <div class="progress-circle">
                        <svg width="40" height="40" viewBox="0 0 40 40">
                            <circle class="bg" cx="20" cy="20" r="16"></circle>
                            <circle class="progress" cx="20" cy="20" r="16" stroke-dasharray="100" stroke-dashoffset="70"></circle>
                        </svg>
                        <div class="absolute inset-0 flex items-center justify-center">
                            <span class="text-lg">🌙</span>
                        </div>
                    </div>
                    <span class="text-sm text-purple-800 mt-1">Tarot</span>
                </div>
                
                <div class="tool-progress flex flex-col items-center">
                    <div class="progress-circle">
                        <svg width="40" height="40" viewBox="0 0 40 40">
                            <circle class="bg" cx="20" cy="20" r="16"></circle>
                            <circle class="progress" cx="20" cy="20" r="16" stroke-dasharray="100" stroke-dashoffset="100"></circle>
                        </svg>
                        <div class="absolute inset-0 flex items-center justify-center">
                            <span class="text-lg">🔒</span>
                        </div>
                    </div>
                    <span class="text-sm text-purple-800 mt-1">Numerology</span>
                </div>
                
                <div class="tool-progress flex flex-col items-center">
                    <div class="progress-circle">
                        <svg width="40" height="40" viewBox="0 0 40 40">
                            <circle class="bg" cx="20" cy="20" r="16"></circle>
                            <circle class="progress" cx="20" cy="20" r="16" stroke-dasharray="100" stroke-dashoffset="100"></circle>
                        </svg>
                        <div class="absolute inset-0 flex items-center justify-center">
                            <span class="text-lg">🔒</span>
                        </div>
                    </div>
                    <span class="text-sm text-purple-800 mt-1">Destiny Matrix</span>
                </div>
            </div>
        </div> */}
        
    
        <div class="md:hidden mystic-container p-4 mb-6">
            <h3 class="text-lg font-bold text-purple-800 mb-2">Your Journey</h3>
            <div class="flex overflow-x-auto space-x-4 pb-2">
                <div class="tool-progress flex flex-col items-center flex-shrink-0">
                    <div class="progress-circle">
                        <svg width="40" height="40" viewBox="0 0 40 40">
                            <defs>
                                <linearGradient id="gradient-mobile" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stop-color="#a18cd1"></stop>
                                    <stop offset="100%" stop-color="#fbc2eb"></stop>
                                </linearGradient>
                            </defs>
                            <circle class="bg" cx="20" cy="20" r="16"></circle>
                            <circle class="progress" cx="20" cy="20" r="16" stroke="url(#gradient-mobile)" stroke-dasharray="100" stroke-dashoffset="0"></circle>
                        </svg>
                        <div class="absolute inset-0 flex items-center justify-center">
                            <span class="text-lg">✔️</span>
                        </div>
                    </div>
                    <span class="text-sm text-purple-800 mt-1">DISC</span>
                </div>
                
                <div class="tool-progress flex flex-col items-center flex-shrink-0">
                    <div class="progress-circle">
                        <svg width="40" height="40" viewBox="0 0 40 40">
                            <circle class="bg" cx="20" cy="20" r="16"></circle>
                            <circle class="progress" cx="20" cy="20" r="16" stroke="url(#gradient-mobile)" stroke-dasharray="100" stroke-dashoffset="30"></circle>
                        </svg>
                        <div class="absolute inset-0 flex items-center justify-center">
                            <span class="text-lg">🌙</span>
                        </div>
                    </div>
                    <span class="text-sm text-purple-800 mt-1">Astrology</span>
                </div>
                
                <div class="tool-progress flex flex-col items-center flex-shrink-0">
                    <div class="progress-circle">
                        <svg width="40" height="40" viewBox="0 0 40 40">
                            <circle class="bg" cx="20" cy="20" r="16"></circle>
                            <circle class="progress" cx="20" cy="20" r="16" stroke="url(#gradient-mobile)" stroke-dasharray="100" stroke-dashoffset="70"></circle>
                        </svg>
                        <div class="absolute inset-0 flex items-center justify-center">
                            <span class="text-lg">🌙</span>
                        </div>
                    </div>
                    <span class="text-sm text-purple-800 mt-1">Tarot</span>
                </div>
                
                <div class="tool-progress flex flex-col items-center flex-shrink-0">
                    <div class="progress-circle">
                        <svg width="40" height="40" viewBox="0 0 40 40">
                            <circle class="bg" cx="20" cy="20" r="16"></circle>
                            <circle class="progress" cx="20" cy="20" r="16" stroke="url(#gradient-mobile)" stroke-dasharray="100" stroke-dashoffset="100"></circle>
                        </svg>
                        <div class="absolute inset-0 flex items-center justify-center">
                            <span class="text-lg">🔒</span>
                        </div>
                    </div>
                    <span class="text-sm text-purple-800 mt-1">Numerology</span>
                </div>
                
                <div class="tool-progress flex flex-col items-center flex-shrink-0">
                    <div class="progress-circle">
                        <svg width="40" height="40" viewBox="0 0 40 40">
                            <circle class="bg" cx="20" cy="20" r="16"></circle>
                            <circle class="progress" cx="20" cy="20" r="16" stroke="url(#gradient-mobile)" stroke-dasharray="100" stroke-dashoffset="100"></circle>
                        </svg>
                        <div class="absolute inset-0 flex items-center justify-center">
                            <span class="text-lg">🔒</span>
                        </div>
                    </div>
                    <span class="text-sm text-purple-800 mt-1">Destiny Matrix</span>
                </div>
            </div>
        </div>
        
    
        <div class="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">


            {storedUser ? (Object.entries(storedUser).map(([key, value]) => {
                return (
                    <div class="mystic-container p-6 glow-effect">
                    <div class="flex items-start mb-4">
                        <div class="w-16 h-16 rounded-full overflow-hidden border-2 border-white mr-4 flex items-center justify-center bg-gradient-to-br from-purple-300 to-pink-200">
                            <span class="text-2xl font-bold text-white">S</span>
                        </div>
                        <div>
                            <h3 class="text-lg font-bold text-purple-800">{key}</h3>
                            <p class="text-sm text-purple-600">Last updated: {value.time}</p>
                            <div class="flex flex-wrap gap-2 mt-2">
                                <span class="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">DISC: {value.highest_disc}</span>
                                <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">♓ Pisces</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-white/50 p-3 rounded-lg mb-4">
                        <p class="text-sm text-purple-800">Destiny Matrix: Creative, intuitive with strong communication skills. Path of inspiration and leadership.</p>
                    </div>
                    
                    <div class="flex space-x-3">
                        <button class="flex-1 bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 text-white font-medium py-2 px-4 rounded-full transition-all shadow-md hover:shadow-lg flex items-center justify-center">
                            <span class="mr-1">🧭</span> View Journey
                        </button>
                        <button class="Ask-Lumina-btn flex-1 bg-gradient-to-r from-blue-400 to-cyan-400 hover:from-blue-500 hover:to-cyan-500 text-white font-medium py-2 px-4 rounded-full transition-all shadow-md hover:shadow-lg flex items-center justify-center ask-lumina" data-profile="Sophia Williams">
                            <span class="mr-1">💬</span> Ask Lumina
                        </button>
                    </div>
                </div>
                );
            })) : ("")}

  
        </div>
    </div>


          
    <div id="luminaModal" class="fixed inset-0 flex items-center justify-center z-50 hidden">
        <div class="absolute inset-0 bg-black/30 backdrop-blur-sm" id="modalOverlay"></div>
        <div class="mystic-container p-6 max-w-2xl w-full mx-4 z-10 transform transition-all">
            <div class="flex justify-between items-center mb-4">
                <div class="flex items-center">
                    <div class="lumina-avatar w-12 h-12 flex items-center justify-center mr-3">
                        <span class="text-2xl">✨</span>
                    </div>
                    <h3 class="text-xl font-bold text-purple-800">Ask Lumina about <span id="profileName">James</span></h3>
                </div>
                <button id="closeModalBtn" class="text-purple-800 hover:text-purple-600">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            
            <div id="chatContainer" ref={endRef} class="bg-white/50 rounded-lg p-4 h-80 overflow-y-auto mb-4">

                {/* <div class="flex mb-4">
                    <div class="lumina-avatar w-10 h-10 flex items-center justify-center mr-3 flex-shrink-0">
                        <span class="text-xl">✨</span>
                    </div>
                    <div class="chat-bubble bg-white/70 p-3 rounded-lg max-w-[80%]">
                        <p class="text-purple-800">Hello! I'm Lumina, your mystical guide. Ask me anything about this profile and I'll provide insights based on their DISC, astrology, and destiny matrix.</p>
                    </div>
                </div>
                
                <div class="flex justify-end mb-4">
                    <div class="bg-purple-100 p-3 rounded-lg max-w-[80%]">
                        <p class="text-purple-800">What should they work on?</p>
                    </div>
                </div> */}


                {messages.map((msg, i) => {
                        
                        if(msg.role === "system"){
                            return null
                        }

                        return (
                        msg.role === "user" ? (
                            <div key={i} class="flex justify-end mb-4">
                            <div class="bg-purple-100 p-3 rounded-lg max-w-[80%]">
                                <p class="text-purple-800">{msg.content}</p>
                            </div>
                            </div>
                        ) : (
                            <div key={i} class="flex mb-4">
                            <div class="lumina-avatar w-10 h-10 flex items-center justify-center mr-3 flex-shrink-0">
                                <span class="text-xl">✨</span>
                            </div>
                            <div class="whitespace-pre-line chat-bubble bg-white/70 p-3 rounded-lg max-w-[80%]">
                                <p class="text-purple-800">{msg.content}</p>
                            </div>
                            </div>
                        )
                        )})}


                        {loading ? (      
                            
                            <div class="flex mb-4">
                            <div class="lumina-avatar w-10 h-10 flex items-center justify-center mr-3 flex-shrink-0">
                                <span class="text-xl">✨</span>
                            </div>
                            <div class="chat-bubble bg-white/70 p-3 rounded-lg max-w-[80%]">
                                <div className="typing-indicator">
                                          <span></span>
                                          <span></span>
                                          <span></span>
                                </div> 
                            </div>
                            </div>
                             ) : ""}



            </div>
            
            <div class="bg-white/50 rounded-lg p-3 mb-4">
                <h4 class="text-sm font-medium text-purple-800 mb-2">Suggested Questions:</h4>
                <div class="flex flex-wrap gap-2">
                    <button class="suggested-question bg-white/70 hover:bg-white text-purple-800 text-sm py-1 px-3 rounded-full transition-all">What are their strengths?</button>
                    <button class="suggested-question bg-white/70 hover:bg-white text-purple-800 text-sm py-1 px-3 rounded-full transition-all">What should they work on?</button>
                    <button class="suggested-question bg-white/70 hover:bg-white text-purple-800 text-sm py-1 px-3 rounded-full transition-all">Give me a brief analysis</button>
                    <button class="suggested-question bg-white/70 hover:bg-white text-purple-800 text-sm py-1 px-3 rounded-full transition-all">Career recommendations?</button>
                </div>
            </div>
            
            <div class="flex">
                <input 
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                    sendMessage();
                    }
                }}                         
                value={input} 
                onChange={(e) => setInput(e.target.value)}                
                type="text" 
                id="questionInput" 
                placeholder="Ask Lumina..." 
                class="flex-1 bg-white/70 border border-purple-200 rounded-l-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                <button onClick={sendMessage} id="askButton" class="bg-gradient-to-r from-blue-400 to-cyan-400 hover:from-blue-500 hover:to-cyan-500 text-white font-medium py-2 px-6 rounded-r-full transition-all">
                    Ask
                </button>
            </div>
        </div>
    </div>

    </>
  );
};

export default Dashboard;
