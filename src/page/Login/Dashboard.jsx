// src/components/Dashboard.jsx
import React, { useState, useEffect, useRef } from "react";
import { getUserData, updateUserData } from "./getUserData";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import { useNavigate } from "react-router-dom";


const Dashboard = ({ user, onLogout, setMenuData }) => {
    
    const navigate = useNavigate()
    function handleNavigate(key){
        navigate('/Report',{
            state: {
                key: key
            }
        });
    }
    const storedUser = JSON.parse(localStorage.getItem("user"));
    let names = [];
    if(storedUser){
      names = Object.keys(storedUser); 
    }
    const [deleteConfirm, setDeleteConfirm] = useState(null);
    const handleDelete = (indexToDelete) => {
        const userData = JSON.parse(localStorage.getItem("user")) || {};
        delete userData[names[indexToDelete]];
        localStorage.setItem("user", JSON.stringify(userData));
    
        // Cập nhật danh sách tên (nếu bạn hiển thị từ state)
    
    
        setDeleteConfirm(null);
      };
    
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);


    const endRef = useRef(null);

    const [messages, setMessages] = useState([
            { role: "system", content: "Bạn là một chatbot hướng dẫn người dùng khám phá bản thân qua các công cụ như chiêm tinh, thần số học, và DISC." },
            { role: "assistant", content: "Chào bạn! Tôi là một chatbot hướng dẫn người dùng khám phá bản thân qua các công cụ như chiêm tinh, thần số học, và DISC. Tôi có thể giúp bạn khám phá bản thân. Hãy ấn nút **Gửi hồ sơ** để tôi biết về bạn" },
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

    
    const sendMessage = async (mode) => {
        
    
        const arrayValue = Object.values(storedUser)[profile]
        let ProfileToAI = `Dưới đây là thông tin một người dùng:`
        let newMessages = []
        let fakeMesage = []

        switch (mode){
            case 1:
                newMessages = [...messages, { role: "user", content: input }];
                setMessages(newMessages)
            break;

            case 2:
                if(arrayValue.numerology){
                    ProfileToAI += `
            Thần số học:
            - Số Đường đời(Lifepath): ${arrayValue.numerology[0]}
            - Số Sứ mệnh (DestinyNumber): ${arrayValue.numerology[1]}
            - Số Linh hồn(SoulNumber): ${arrayValue.numerology[2]}
            - Số Biểu lộ(PersonalityNumber): ${arrayValue.numerology[3]}
            - Số Thái độ(MatureNumber): ${arrayValue.numerology[4]}
            - Số Trưởng thành(BirthDayNumber): ${arrayValue.numerology[5]}
            - Số Ngày sinh(AttitudeNumber): ${arrayValue.numerology[6]}          
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
            - Linh hoạt(Mutable): ${arrayValue.horoscope[0][0].value}%
            - Tiên phong(Cardinal): ${arrayValue.horoscope[0][1].value}%
            - Kiên định(Fixed): ${arrayValue.horoscope[0][2].value}%
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
            - Giới hạn độ dài trong khoảng 500 từ
                `
            newMessages = [...messages, { role: "user", content: ProfileToAI }];
            fakeMesage = [...messages, { role: "user", content: "Đã gửi hồ sơ" }]
            setMessages(fakeMesage);

            break;

        }
        // if (!input.trim()) return;
        // const newMessages = [...messages, { role: "user", content: ProfileToAI }];
        
        
        setInput("");
        setLoading(true);
        
        
      
        try {
          const recentMess = newMessages.slice(-6);
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
            setMessages([...newMessages, { role: "assistant", content: reply }]);
         }else if(mode == 2){
            setMessages([...fakeMesage, { role: "assistant", content: reply }]);
         }
            
   
          



        } catch (error) {
          console.error("API error:", error);

          if(mode == 1){
            setMessages([...newMessages, { role: "assistant", content: "Lỗi khi gọi API." }]);
         }else if(mode == 2){
            setMessages([...fakeMesage, { role: "assistant", content: "Lỗi khi gọi API." }]);
         }
        }
      
        setLoading(false);
      };

    
    // <--------------------------MESSAGE_HANDLE----------------------------->
    useEffect(() => {
        if(user.uid){
            getUserData(user.uid).then((data) => {      
                setMenuData(data);
                });
        }

     

   
    }, [user.uid]);

    const handleSave = async () => {
        const localData = localStorage.getItem('user');
        if(localData){
        await updateUserData(user.uid, { localData });
        
        alert("Đã lưu thông tin!");
        }
    };


    function getLastNameInitial(fullName) {
    // Tách họ tên thành mảng các từ
        const nameParts = fullName.trim().split(' ');
        // Lấy phần tử cuối (tức tên) và chữ cái đầu tiên của nó
        const lastName = nameParts[nameParts.length - 1];
        const initial = lastName.charAt(0).toUpperCase();
        return initial;
    }
        



    useEffect(()=>{
        const btn_ask_lumina = document.getElementsByClassName("Ask-Lumina-btn");
        const LuminaModel = document.getElementById('luminaModal');
        const CloseBtn = document.getElementById('closeModalBtn');
        const LogoutBtn = document.getElementById('Logout')
        const profileName = document.getElementById('profileName')
        const SavedBtn = document.getElementById('save-btn')
        const BackBtn = document.getElementById('BackBtn')
        const Suggested_box = document.getElementById('Suggested_box')
        const Suggested_lists = document.getElementById('Suggested_lists')
        const ContainerChat = document.getElementById('chatContainer')


        for(let i = 0; i < btn_ask_lumina.length; i++){
            btn_ask_lumina[i].addEventListener('click',()=>{
            profileName.innerText = Object.keys(storedUser)[i]
            LuminaModel.classList.remove('hidden');
            selectedProfile(i);
            setMessages([
            { role: "system", content: "Bạn là một chatbot hướng dẫn người dùng khám phá bản thân qua các công cụ như chiêm tinh, thần số học, và DISC." },
            { role: "assistant", content: "Chào bạn! Tôi là một chatbot hướng dẫn người dùng khám phá bản thân qua các công cụ như chiêm tinh, thần số học, và DISC. Tôi có thể giúp bạn khám phá bản thân. Hãy ấn nút **Gửi hồ sơ** để tôi biết về bạn" },
        ])
            })
        }

        CloseBtn.addEventListener('click', ()=>{
            LuminaModel.classList.add('hidden')
           
        })
        Suggested_box.addEventListener('click', ()=>{
            Suggested_lists.classList.toggle('hidden')
            ContainerChat.classList.toggle('h-96')
         
        })

        if(BackBtn){
            BackBtn.addEventListener('click', ()=>onLogout(2))
        }else{
            LogoutBtn.addEventListener('click', ()=>onLogout(1))
            SavedBtn.addEventListener('click', handleSave)
        }
        




        const suggestedQuestion = document.querySelectorAll('.suggested-question');


        suggestedQuestion.forEach(button => {
            button.addEventListener('click', () => {
                const message = button.textContent;  
            
                setInput(message)     
            });
        });


    },[])


    

    return (
    
    <>


        
      <div className="contaier_dash mx-auto px-4 py-8 mb-20">

        <header className="mystic-container p-6 mb-8 relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between">
          
                <div className="mb-4 md:mb-0 flex items-center">
                    <svg className="w-12 h-12 logo-glow" viewBox="0 0 100 100">
                        <defs>
                            <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stop-color="#FFD700"></stop>
                                <stop offset="100%" stop-color="#FFA500"></stop>
                            </linearGradient>
                        </defs>
                        <circle cx="50" cy="50" r="45" fill="url(#logo-gradient)"></circle>
                        <path d="M 30 50 L 45 65 L 70 35" stroke="white" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <h1 className="text-2xl md:text-3xl font-bold text-purple-800 ml-3">Lifemap</h1>
                </div>
                
                <div className="flex items-center">
                    {user.name ? (
                        <>
                        <h2 className="text-xl md:text-2xl font-medium text-purple-800 mr-4">Welcome back, <span id="userName">{user.name}</span> 🌟</h2>
                        <button id="save-btn" className="cta-button hover:bg-white/70 text-white-800 font-medium py-2 px-4 rounded-full transition-all">
                            Save
                        </button>
                        <button id="Logout" className="ml-4 cta-button hover:bg-white/70 text-white-800 font-medium py-2 px-4 rounded-full transition-all">
                            Logout
                        </button>   
                        </>                    
                    ) : (
                        <>
                        <div>
                        <h2 className="text-xl md:text-2xl font-medium text-purple-800 mb-2">Hồ sơ cục bộ 🌟</h2>
                        <p className="text-sm mr-4">*Hãy đăng nhập để có thể lưu trên cloud</p>
                        </div>

                        
                        <button id="BackBtn" className="ml-4 cta-button hover:bg-white/70 text-white font-medium py-2 px-4 rounded-full transition-all">
                            Về trang Login
                        </button>
                        </>

                    )}

                </div>
            </div>
            
      
            <div className="absolute top-5 right-10 w-8 h-8 text-2xl floating" style={{animationDelay: "0.5s"}}>✨</div>
            <div className="absolute bottom-5 left-10 w-8 h-8 text-2xl floating" style={{animationDelay: "1s"}}>🌙</div>
            <div className="absolute top-20 left-20 w-8 h-8 text-2xl floating" style={{animationDelay: "1.5s"}}>⭐</div>
        </header>

        
        <div className="mystic-container p-6 mb-8 relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between">
          

                <p className="text-xl md:text-2xl font-medium text-purple-800 mr-4">Số hồ sơ: <span id="userName">{names.length}</span> 🌟</p>
      
            </div>
            
      
            <div className="absolute top-5 right-10 w-8 h-8 text-2xl floating" style={{animationDelay: "0.5s"}}>✨</div>
            <div className="absolute bottom-5 left-10 w-8 h-8 text-2xl floating" style={{animationDelay: "1s"}}>🌙</div>
            <div className="absolute top-20 left-20 w-8 h-8 text-2xl floating" style={{animationDelay: "1.5s"}}>⭐</div>
        </div>
        

        
    
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">


            {storedUser ? (Object.entries(storedUser).map(([key, value], index) => {
                return (
                    <div className="relative mystic-container p-6 glow-effect">
                    <div className="flex items-start mb-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white mr-4 flex items-center justify-center bg-gradient-to-br from-purple-300 to-pink-200">
                            <span className="text-2xl font-bold text-white">{getLastNameInitial(key)}</span>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-purple-800">{key}</h3>
                            <p className="text-sm text-purple-600">{value.time}</p>
                            <div className="flex flex-wrap gap-2 mt-2">
                                <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">DISC: {value.highest_disc}</span>
                                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">{value.horoscope ? (value.horoscope[4][2]) : "Cung:"}</span>
                            </div>
                        </div>
                    </div>
                    
                  
                        {/* <p className="text-sm text-purple-800">  
                        </p> */}
                    <div className="bg-white/50 p-3 rounded-lg mb-4 min-h-fit sm:h-[14rem] mt-3 w-full">
                    <h4 className="text-purple-800 font-medium mb-2">Công Cụ Đã Xem:</h4>
                        <div className="grid grid-cols-3 gap-2">
                            {value.numerology ? (
                            <div className="bg-purple-100/50 p-3 rounded-lg flex flex-col items-center">
                                <span className="text-2xl">🔢</span>
                                <span className="text-xs text-purple-800 mt-1">T.Số học</span>
                            </div>
                            ) : ""}
                            {value.horoscope ? (
                            <div className="bg-purple-100 p-3 rounded-lg flex flex-col items-center">
                                <span className="text-2xl">💫</span>
                                <span className="text-xs text-purple-800 mt-1">Chiêm tinh</span>
                            </div>
                            ) : ""}
                            {value.matrix ? (
                            <div className="bg-purple-100/50 p-3 rounded-lg flex flex-col items-center">
                                <span className="text-2xl">🧩</span>
                                <span className="text-xs text-purple-800 mt-1">Ma trận</span>
                            </div>
                            ) : ""}
                            {value.disc ? (
                            <div className="bg-purple-100/50 p-3 rounded-lg flex flex-col items-center">
                                <span className="text-2xl">📊</span>
                                <span className="text-xs text-purple-800 mt-1">DISC</span>
                            </div>
                            ) : ""}
                            
                        </div>
                    </div>
                 
                    
                    <div className="flex space-x-3">
                        <button onClick={()=>handleNavigate(key)} className="flex-1 bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 text-white font-medium py-2 px-4 rounded-full transition-all shadow-md hover:shadow-lg flex items-center justify-center">
                            <span className="mr-1">🧭</span> Xem Profile
                        </button>
                        <button className="Ask-Lumina-btn flex-1 bg-gradient-to-r from-blue-400 to-cyan-400 hover:from-blue-500 hover:to-cyan-500 text-white font-medium py-2 px-4 rounded-full transition-all shadow-md hover:shadow-lg flex items-center justify-center ask-lumina" data-profile="Sophia Williams">
                            <span className="mr-1">💬</span> Hỏi Lumina
                        </button>
                    </div>
                
                <div className="absolute flex flex-col sm:flex-row box_erase">
                    {deleteConfirm === index ? (
                  <>
                    <button className="border-2 mb-2 border-white erase_btn_format bg-gradient-to-br from-purple-300 to-pink-200" onClick={() => setDeleteConfirm(null)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M18 6L6 18" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M6 6l12 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    </button>
                    <button className="border-2 sm:ml-2 ml-0 border-white erase_btn_format bg-gradient-to-br from-purple-300 to-pink-200" onClick={() => handleDelete(index)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    </button>
                  </>
                ) : (
                  <button className="border-2 border-white erase_btn_format bg-gradient-to-br from-purple-300 to-pink-200" onClick={() => setDeleteConfirm(index)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M3 6h18" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M10 11v6M14 11v6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </button>
                )}
                </div>
                </div>
                );
            })) : ("")}

  
        </div>
    </div>


          
    <div id="luminaModal" className="fixed inset-0 flex items-center justify-center z-50 hidden">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" id="modalOverlay"></div>
        <div className="mystic-container p-[0.5rem] sm:p-4 max-w-2xl w-full mx-4 z-10 transform transition-all">
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                    <div className="lumina-avatar flex items-center p-[0.3rem] justify-center mr-3">
                        <span className="text-2xl">✨</span>
                    </div>
                    <h3 className="text-xl font-bold text-purple-800">Ask Lumina about <span id="profileName">James</span></h3>
                </div>
                <button id="closeModalBtn" className="text-purple-800 hover:text-purple-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            
            <div id="chatContainer" ref={endRef} className="transition-all duration-500 bg-white/50 rounded-lg p-4 h-64 h-96 overflow-y-auto mb-4">



                {messages.map((msg, i) => {
                        
                        if(msg.role === "system"){
                            return null
                        }

                        if(msg.role == "assistant" && i == 1){
                            return(
                                <>
                                <div key={i} className="flex mb-4">
                                <div className="lumina-avatar w-10 h-10 flex items-center justify-center mr-3 flex-shrink-0">
                                    <span className="text-xl">✨</span>
                                </div>
                                <div className="chat-bubble bg-white/70 p-3 rounded-lg max-w-[80%]">
                                    <ReactMarkdown remarkPlugins={[remarkBreaks]}>{msg.content}</ReactMarkdown>
                                    <button onClick={()=>sendMessage(2)} className="mt-2 cta-button hover:bg-white/70 text-white font-medium py-2 px-4 rounded-full transition-all">Gửi hồ sơ</button>
                                </div>
                                </div>

                                </>
                            )
                        }

                    

                        return (
                        msg.role === "user" ? (
                            <div key={i} className="flex justify-end mb-4">
                            <div className="bg-purple-100 p-3 rounded-lg max-w-[80%]">
                                <p className="text-purple-800">{msg.content}</p>
                            </div>
                            </div>
                        ) : (
                            <div key={i} className="flex mb-4">
                            <div className="lumina-avatar w-10 h-10 flex items-center justify-center mr-3 flex-shrink-0">
                                <span className="text-xl">✨</span>
                            </div>
                            <div className="chat-bubble bg-white/70 p-3 rounded-lg max-w-[80%]">
                                <ReactMarkdown remarkPlugins={[remarkBreaks]}>{msg.content}</ReactMarkdown>
                            </div>
                            </div>
                        )
                        )})}


                        {loading ? (      
                            
                            <div className="flex mb-4">
                            <div className="lumina-avatar w-10 h-10 flex items-center justify-center mr-3 flex-shrink-0">
                                <span className="text-xl">✨</span>
                            </div>
                            <div className="chat-bubble bg-white/70 p-3 rounded-lg max-w-[80%]">
                                <div className="typing-indicator">
                                          <span></span>
                                          <span></span>
                                          <span></span>
                                </div> 
                            </div>
                            </div>
                             ) : ""}



            </div>
            
            <div  className="bg-white/50 rounded-lg p-3 mb-4">
                <div  id="Suggested_box" className="flex justify-between w-full">
                    <h4 className="text-sm font-medium text-purple-800">Suggested Questions:</h4>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
                    </svg>
                </div>
                
                <div id="Suggested_lists" className="flex flex-wrap gap-2 hidden h-[10rem] overflow-y-auto mt-2">
                    <button className="suggested-question bg-white/70 hover:bg-white text-purple-800 text-sm py-1 px-3 rounded-full transition-all">Điểm mạnh của họ là gì?</button>
                    <button className="suggested-question bg-white/70 hover:bg-white text-purple-800 text-sm py-1 px-3 rounded-full transition-all">Điểm yếu của họ là gì?</button>
                    <button className="suggested-question bg-white/70 hover:bg-white text-purple-800 text-sm py-1 px-3 rounded-full transition-all">Nghề nghiệp phù hợp của họ?</button>
                    <button className="suggested-question bg-white/70 hover:bg-white text-purple-800 text-sm py-1 px-3 rounded-full transition-all">Họ tương tác với người khác ra sao?</button>
                    <button className="suggested-question bg-white/70 hover:bg-white text-purple-800 text-sm py-1 px-3 rounded-full transition-all">Những thử thách nào họ có thể gặp phải?</button>
                    <button className="suggested-question bg-white/70 hover:bg-white text-purple-800 text-sm py-1 px-3 rounded-full transition-all">Làm sao họ có thể cải thiện bản thân?</button>
                    <button className="suggested-question bg-white/70 hover:bg-white text-purple-800 text-sm py-1 px-3 rounded-full transition-all">Giá trị cốt lõi của họ là gì?</button>
                    <button className="suggested-question bg-white/70 hover:bg-white text-purple-800 text-sm py-1 px-3 rounded-full transition-all">Điều gì làm họ trở nên đặc biệt?</button>
                </div>
            </div>
            
            <div className="flex">
                <input 
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                    sendMessage(1);
                    }
                }}                         
                value={input} 
                onChange={(e) => setInput(e.target.value)}                
                type="text" 
                id="questionInput" 
                placeholder="Ask Lumina..." 
                className="flex-1 bg-white/70 border border-purple-200 rounded-l-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                <button onClick={()=>sendMessage(1)} id="askButton" className="bg-gradient-to-r from-blue-400 to-cyan-400 hover:from-blue-500 hover:to-cyan-500 text-white font-medium py-2 px-6 rounded-r-full transition-all">
                    Ask
                </button>
            </div>
        </div>
    </div>

    </>
  );
};

export default Dashboard;
