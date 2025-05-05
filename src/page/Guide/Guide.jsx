import './Guide.css'
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
function Guide(){

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


const sendMessage = async () => {
  if (!input.trim()) return;

  const newMessages = [...messages, { role: "user", content: input }];
  setMessages(newMessages);
  setInput("");
  setLoading(true);
  console.log(newMessages)

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












useEffect(()=>{
  // Create starry background
  // createStars();
  
  // Navigation between sections
  const toggle_progress = document.getElementById('chatToggle');
  const progress_bar = document.getElementById('progressTracker')
  const welcomeSection = document.getElementById('welcome');
  const guidedPathsSection = document.getElementById('guidedPaths');
  const chatSection = document.getElementById('chatSection');
  const progressTracker = document.getElementById('progressTracker');
  const showPathsBtn = document.getElementById('showPathsBtn');
  const showChatBtn = document.getElementById('showChatBtn');
  const backBtn = document.getElementById('BackBtn')

  
  toggle_progress.addEventListener('click',()=>{
    progress_bar.classList.remove('hidden');
    toggle_progress.classList.add('hidden');
  })
  progressTracker.addEventListener('click',()=>{
    toggle_progress.classList.remove('hidden');
    progressTracker.classList.add('hidden');
  })

  backBtn.addEventListener('click', ()=>{
    welcomeSection.classList.remove('hidden');
    chatSection.classList.add('hidden');
    guidedPathsSection.classList.add('hidden');
    guidedPathsSection.classList.add('fade-in');
    backBtn.classList.add('hidden')
  })

  showPathsBtn.addEventListener('click', () => {
      welcomeSection.classList.add('hidden');
      chatSection.classList.add('hidden');
      guidedPathsSection.classList.remove('hidden');
      guidedPathsSection.classList.add('fade-in');
      backBtn.classList.remove('hidden')
  });
  
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
          addUserMessage(message);
          
          // Simulate assistant response
          setTimeout(() => {
              let response = "";
              if (message.includes("start")) {
                  response = "I recommend starting with the DISC personality assessment. It's a quick way to understand your behavioral style and strengths. Would you like to begin that now?";
              } else if (message.includes("strengths")) {
                  response = "To discover your strengths, we can use the DISC assessment and your astrology chart together. The DISC shows your behavioral tendencies, while astrology reveals your natural talents and potential challenges.";
              } else if (message.includes("DISC")) {
                  response = "DISC is a personality assessment that identifies four main behavioral styles: Dominant (direct, results-oriented), Influential (outgoing, enthusiastic), Steady (patient, reliable), and Conscientious (analytical, precise). Everyone has a unique blend of these styles!";
              }
              
              addAssistantMessage(response);
          }, 1000);
      });
  });
  
  // Mobile progress button
  const mobileProgressBtn = document.getElementById('mobileProgressBtn');
  let progressVisible = false;
  
  mobileProgressBtn.addEventListener('click', () => {
      if (progressVisible) {
          progressTracker.classList.add('hidden');
          progressVisible = false;
      } else {
          progressTracker.classList.remove('hidden');
          progressVisible = true;
      }
  });
  
  // Chat input functionality
  const chatInput = document.querySelector('input[type="text"]');
  const sendButton = chatInput.nextElementSibling;
  

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
   <div class="star-bg" id="starBackground"></div>
{/*     
    <!-- Header with Logo --> */}
    <header class="w-full max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div id='BackBtn' class="hidden flex items-center gap-2">
            <div class="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center">
                {/* <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                </svg> */}
                <i class="fa-solid fa-arrow-left" style={{color: "#ffffff"}}></i>
            </div>
            <h1 class="text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">Back</h1>
        </div>
        
        <div class="text-sm text-indigo-700 font-medium">
            Your Personal Guide
        </div>
    </header>

    {/* <!-- Main Content --> */}
    <main class="w-full max-w-6xl mx-auto px-4 py-6">
        {/* <!-- Welcome Section --> */}
        <section id="welcome" class="mb-12 fade-in">
            <div class="flex flex-col items-center">
                {/* <!-- Lumina Avatar --> */}
                <div class="relative mb-6">
                    <div class="absolute inset-0 rounded-full bg-purple-300 blur-xl opacity-50 glow"></div>
                    <div class="relative floating_guide">
                        <svg class="w-48 h-48 md:w-56 md:h-56" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                           
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
                <h2 class="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">
                    Hi, I'm Lumina! Let's discover who you are – together.
                </h2>
                
                {/* <!-- Action Buttons --> */}
                <div class="flex flex-col md:flex-row gap-4 w-full max-w-md">
                    <button id="showPathsBtn" class="btn-primary flex-1 py-4 px-6 rounded-xl text-white font-bold text-lg shadow-lg flex items-center justify-center gap-2">
                        <span class="text-xl">✨</span>
                        Choose a Guided Path
                    </button>
                    <button id="showChatBtn" class="btn-secondary flex-1 py-4 px-6 rounded-xl text-white font-bold text-lg shadow-lg flex items-center justify-center gap-2">
                        <span class="text-xl">💬</span>
                        Chat with Lumina
                    </button>
                </div>
            </div>
        </section>
        
        {/* <!-- Guided Path Section --> */}
        <section id="guidedPaths" class="mb-12 hidden">
            <h3 class="text-xl md:text-2xl font-bold text-gray-800 mb-6">Choose Your Journey</h3>
            
            <div class="path-cards flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-3">
                {/* <!-- Path Card 1 --> */}
                <div class="path-card rounded-2xl shadow-lg p-6 flex flex-col min-w-[280px] md:min-w-0">
                    <div class="h-12 w-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                    </div>
                    <h4 class="text-lg font-semibold text-gray-800 mb-2">Understand Your Strengths</h4>
                    <p class="text-gray-600 mb-4 flex-grow">Discover your natural talents through DISC personality assessment and astrological insights.</p>
                    <div class="mb-4">
                        <div class="flex items-center gap-2 text-xs text-gray-500 mb-1">
                            <span>DISC</span>
                            <span>+</span>
                            <span>Astrology</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress-fill" style={{width: "25%"}}></div>
                        </div>
                    </div>
                    <button class="btn-primary py-2 px-4 rounded-lg text-white font-medium">Start Path</button>
                </div>
                
                {/* <!-- Path Card 2 --> */}
                <div class="path-card rounded-2xl shadow-lg p-6 flex flex-col min-w-[280px] md:min-w-0">
                    <div class="h-12 w-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                        </svg>
                    </div>
                    <h4 class="text-lg font-semibold text-gray-800 mb-2">Find Your Life Direction</h4>
                    <p class="text-gray-600 mb-4 flex-grow">Uncover your life purpose and potential paths through numerology and destiny matrix.</p>
                    <div class="mb-4">
                        <div class="flex items-center gap-2 text-xs text-gray-500 mb-1">
                            <span>Numerology</span>
                            <span>+</span>
                            <span>Destiny Matrix</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress-fill" style={{width: "0%"}}></div>
                        </div>
                    </div>
                    <button class="btn-primary py-2 px-4 rounded-lg text-white font-medium">Start Path</button>
                </div>
                
                {/* <!-- Path Card 3 --> */}
                <div class="path-card rounded-2xl shadow-lg p-6 flex flex-col min-w-[280px] md:min-w-0">
                    <div class="h-12 w-12 rounded-xl bg-pink-100 flex items-center justify-center text-pink-600 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                        </svg>
                    </div>
                    <h4 class="text-lg font-semibold text-gray-800 mb-2">Explore Your Inner World</h4>
                    <p class="text-gray-600 mb-4 flex-grow">Dive deep into your subconscious through astrology insights and tarot symbolism.</p>
                    <div class="mb-4">
                        <div class="flex items-center gap-2 text-xs text-gray-500 mb-1">
                            <span>Astrology</span>
                            <span>+</span>
                            <span>Tarot</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress-fill" style={{width: "60%"}}></div>
                        </div>
                    </div>
                    <button class="btn-primary py-2 px-4 rounded-lg text-white font-medium">Continue Path</button>
                </div>
            </div>
        </section>
        
        {/* <!-- Chat Section --> */}
        <section id="chatSection" class="hidden">
            <div class="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden">
                {/* <!-- Chat Header --> */}
                <div class="bg-gradient-to-r from-indigo-500 to-purple-500 p-4 flex items-center gap-3">
                    <div class="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center avatar-glow">
                        <svg class="w-6 h-6" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20" r="19" fill="#c4b5fd"></circle>
                            <circle cx="20" cy="17" r="8" fill="#fef3c7"></circle>
                            <path d="M12,17 C12,11 16,9 20,9 C24,9 28,11 28,17" fill="#9d4edd"></path>
                            <circle cx="17" cy="16" r="1" fill="#4b5563"></circle>
                            <circle cx="23" cy="16" r="1" fill="#4b5563"></circle>
                            <path d="M17,19 Q20,22 23,19" stroke="#4b5563" stroke-width="0.6" fill="transparent"></path>
                        </svg>
                    </div>
                    <div>
                        <h3 class="text-white font-bold">Lumina</h3>
                        <p class="text-white/80 text-xs">Your personal guide</p>
                    </div>
                </div>
                
                {/* <!-- Chat Messages --> */}
                <div ref={endRef} class="chat-container p-4" id="chatContainer">
      
    



                    {messages.map((msg, i) => {
                        
                        if(msg.role === "system"){
                            return null
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
                                <div  className="whitespace-pre-line assistant-message rounded-2xl rounded-tl-none p-3 max-w-[80%] bg-gray-100">
                                        <p>{msg.content}</p>
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
                <div class="px-4 pb-3">
                    <div class="text-xs text-gray-500 mb-2">Quick replies:</div>
                    <div class="flex flex-wrap gap-2">
                        <button class="quick-reply bg-indigo-100 hover:bg-indigo-200 text-indigo-700 px-3 py-1 rounded-full text-sm">Where do I start?</button>
                        <button class="quick-reply bg-indigo-100 hover:bg-indigo-200 text-indigo-700 px-3 py-1 rounded-full text-sm">Tell me about my strengths</button>
                        <button class="quick-reply bg-indigo-100 hover:bg-indigo-200 text-indigo-700 px-3 py-1 rounded-full text-sm">What's DISC?</button>
                    </div>
                </div>
                
                {/* <!-- Chat Input --> */}
                <div class="border-t border-gray-200 p-4">
                    <div class="flex gap-2">
                        <input
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                            sendMessage();
                            }
                        }}                        
                        type="text" 
                        value={input} 
                        onChange={(e) => setInput(e.target.value)} 
                        class="flex-grow bg-white/70 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-300" 
                        placeholder="Ask me anything..."/>
                        <button   
 
                        onClick={sendMessage} 
                        class="btn-primary rounded-xl px-4 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>


        <button id="chatToggle" class="chat-toggle fixed bottom-6 right-6 w-14 h-14 rounded-full flex items-center justify-center z-50 floating">
          <div class="crystal-ball">
              <i class="fas fa-star text-amber-300 text-sm z-10"></i>
          </div>
      </button>
        
        {/* <!-- Progress Tracker Panel --> */}
        <section id="progressTracker" class="absolute bottom-4 justify-evenly right-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-4 w-64 hidden">
            <h4 class="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
                Your Progress
            </h4>
            
            <div class="space-y-3">
                {/* <!-- Completed Tool --> */}
                <div class="flex items-center gap-2">
                    <div class="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </div>
                    <span class="text-sm text-gray-700">DISC Assessment</span>
                </div>
                
                {/* <!-- In Progress Tool --> */}
                <div class="flex items-center gap-2">
                    <div class="h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                        <span class="text-xs">🌙</span>
                    </div>
                    <span class="text-sm text-gray-700">Astrology Chart</span>
                </div>
                
                {/* <!-- Suggested Tool --> */}
                <div class="flex items-center gap-2">
                    <div class="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                        <span class="text-xs">🌱</span>
                    </div>
                    <span class="text-sm text-gray-500">Numerology</span>
                </div>
                
                {/* <!-- Suggested Tool --> */}
                <div class="flex items-center gap-2">
                    <div class="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                        <span class="text-xs">🌱</span>
                    </div>
                    <span class="text-sm text-gray-500">Tarot Reading</span>
                </div>
            </div>
            
            <div class="mt-4 pt-3 border-t border-gray-200">
                <div class="flex justify-between items-center text-xs text-gray-500 mb-1">
                    <span>Overall Progress</span>
                    <span>25%</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style={{width: "25%"}}></div>
                </div>
            </div>
        </section>
        
        {/* <!-- Mobile Progress Button --> */}
        <div class="fixed bottom-4 right-4 md:hidden">
            <button id="mobileProgressBtn" class="h-12 w-12 rounded-full bg-white shadow-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
            </button>
        </div>
    </main>
    
    
        </div>
    )
}
export default Guide