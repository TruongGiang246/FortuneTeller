import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import "./TarotAreaStyle.css";
import { Link, useNavigate } from "react-router-dom";
import tarotCards from "./TarotResult";


const TarotCard = ({frontImage, backImage, condit }) => {
    const [flipped, setFlipped] = useState(false);


    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return (
      <motion.div
        className="tarot-card"
        onClick={() => {
            if(condit){
              setFlipped(!flipped)
            }
        }}
        animate={{ rotateY: flipped ? 0 : 180 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.07 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="card-inner">
          <img
            src={flipped ? frontImage : backImage}
            alt="Tarot Card"
            className="card-face"
          />
        </div>
      </motion.div>
    );
  };


  
const TarotReading = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const time = ["past","present","future"];
    const celticMean = ["Hiện tại", "Thử thách", "Gốc rễ", "Quá khứ gần", "Mục tiêu / Ý Thức", "Tương lai gần", "Bạn là ai lúc này", "Môi trường xung quanh", "Hy vọng và nỗi sợ", "Kết quả"]

    const [cardNumber, setCardNumbber] = useState([])
    
        // Create floating stars in background
  
      // Interpretations based on intent and card position
      const interpretations = {
          love: {
              "one-card": [
                  "This card suggests your love life is entering a phase of {0}. Consider how {1} might influence your relationships right now."
              ],
              "three-card": [
                  "In the past, your love life was characterized by {0}. This foundation has led to your present situation of {1}. If you continue on this path, you can expect {2} in your future romantic endeavors.",
                  "Your past relationships were influenced by {0}, creating your current experience of {1}. Moving forward, embrace {2} to find fulfillment in love."
              ],
              "celtic-cross": [
                  "The core of your love situation involves {0}, which is being challenged by {1}. In the past, {2} influenced your relationships, while {3} is what you're consciously aware of now. You're aspiring toward {4}, but need to be aware that {5} could be coming soon. Your approach should involve {6}, considering the environmental factors of {7}. Your hopes around love involve {8}, with an ultimate outcome pointing toward {9}."
              ],
              "custom": [
                  "This card reveals {0} as an important aspect of your love life right now. Consider how this energy is manifesting in your relationships."
              ]
          },
          studies: {
              "one-card": [
                  "Your academic journey is currently aligned with {0}. Consider how embracing {1} might help you succeed in your studies."
              ],
              "three-card": [
                  "Your educational foundation was built on {0}, leading to your current academic situation characterized by {1}. If you continue on this path, expect your educational future to involve {2}.",
                  "Previously, your learning was influenced by {0}. Now you're experiencing {1} in your studies. To reach your academic goals, focus on developing {2}."
              ],
              "celtic-cross": [
                  "The core of your academic situation involves {0}, which is being challenged by {1}. In the past, {2} influenced your learning, while {3} represents your conscious thoughts about education now. You're aspiring toward {4} academically, but be aware that {5} may affect your studies soon. Your approach should involve {6}, considering the environmental factors of {7}. Your hopes around education involve {8}, with an ultimate outcome pointing toward {9}."
              ],
              "custom": [
                  "This card reveals {0} as a key influence in your educational journey. Consider how this energy might be guiding your learning process."
              ]
          },
          career: {
              "one-card": [
                  "Your professional life is currently experiencing {0}. Embracing {1} could help you navigate your career path more effectively."
              ],
              "three-card": [
                  "Your career foundation was built on {0}, which has led to your current professional situation of {1}. If you continue on this path, your career future points toward {2}.",
                  "In your professional past, {0} was a major influence. Currently, your work life is characterized by {1}. To achieve your career goals, focus on developing {2}."
              ],
              "celtic-cross": [
                  "The core of your career situation involves {0}, which is being challenged by {1}. In the past, {2} influenced your professional life, while {3} represents what you're consciously aware of now. You're aspiring toward {4} professionally, but be aware that {5} may affect your career soon. Your approach should involve {6}, considering the environmental factors of {7}. Your hopes around work involve {8}, with an ultimate outcome pointing toward {9}."
              ],
              "custom": [
                  "This card reveals {0} as a significant aspect of your professional journey right now. Consider how this energy is manifesting in your career."
              ]
          },
      }

    console.log(cardNumber)

    useEffect(()=>{


        function getUniqueRandomNumbers(count, min, max) {
            const numbers = new Set();
            while (numbers.size < count) {
              const rand = Math.floor(Math.random() * (max - min + 1)) + min;
              numbers.add(rand);
            }
            return Array.from(numbers);
          }
          
 // Ví dụ: [3, 21, 10]

        const intentCard = document.getElementsByClassName('intent-card');
        const intentSelection = document.getElementById('intent-selection')
        const spreadSelection = document.getElementById('spread-selection');
        const spreadCard = document.getElementsByClassName('spread-card');
        const cardDrawing = document.getElementById('card-drawing')
        
        const readingResults = document.getElementById('reading-results')
        const backToIntent = document.getElementById('back-to-intent')
        const backToSpread = document.getElementById('back-to-spread')
        const backToCards = document.getElementById('back-to-cards')
        const newReading = document.getElementById('new-reading')


        newReading.onclick = () =>{
            readingResults.classList.add('hidden');
            intentSelection.classList.remove('hidden');
        }

        backToIntent.onclick = () => {
            spreadSelection.classList.add('hidden');
            intentSelection.classList.remove('hidden');
        }

        backToSpread.onclick = () => {
            spreadSelection.classList.remove('hidden');
            cardDrawing.classList.add('hidden');
        }

        backToCards.onclick = () => {
            readingResults.classList.add('hidden');
            cardDrawing.classList.remove('hidden');
        }

        for(let i = 0; i < intentCard.length; i++){
            intentCard[i].addEventListener('click',()=>{
                console.log('ddd')
                spreadSelection.classList.remove('hidden')
                intentSelection.classList.add('hidden')
            })
            
        }
        for(let i = 0; i < spreadCard.length; i++){
            spreadCard[i].addEventListener('click',()=>{
                spreadSelection.classList.add('hidden')
                cardDrawing.classList.remove('hidden')

                if(i == 1){
                    const uniqueRandomArray = getUniqueRandomNumbers(3, 0, 21);
                    setCardNumbber(uniqueRandomArray)
                }else if(i == 2){
                    const uniqueRandomArray = getUniqueRandomNumbers(10, 0, 21);
                    setCardNumbber(uniqueRandomArray)
                }else{
                    const uniqueRandomArray = getUniqueRandomNumbers(1, 0, 21);
                    setCardNumbber(uniqueRandomArray)
                }


                
            })

        }



    },[])

    useEffect(()=>{
        const tarotCard = document.getElementsByClassName('tarot-card')
        const readingResults = document.getElementById('reading-results')
        const cardDrawing = document.getElementById('card-drawing')
        const cardText = document.getElementById('card-text')
        let click = 0;
        for(let i = 0; i < tarotCard.length; i++){
            tarotCard[i].addEventListener('click',()=>{
                tarotCard[i].classList.add('flipped')
                click += 1;
                update(click);
            },{once: true})
            
            tarotCard[i].classList.remove('flipped')
        }  
        function update(click){
            if(cardNumber.length == click){
                setTimeout(()=>{
                    readingResults.classList.remove('hidden');
                    cardDrawing.classList.add('hidden')
                }, 1400)
                click = 0;
                console.log(click)
            }
            cardText.innerHTML = generateTarotReading(cardNumber, cardNumber.length)
        }

    },[cardNumber])


    function generateTarotReading(cards, type) {
        if (!Array.isArray(cards) || cards.length === 0) {
            return "Không có lá bài nào được cung cấp.";
        }
    
        switch (type) {
            case 1:
                return `Lá bài bạn rút là ${tarotCards[cards[0]].name} 🌟: ${tarotCards[cards[0]].description}`;
            
            case 3:
                if (cards.length < 3) return "Cần ít nhất 3 lá bài cho trải bài 3 lá.";
                return `<strong>Bạn bắt đầu với</strong> ${tarotCards[cards[0]].keywords.toLowerCase()} – ${tarotCards[cards[0]].description}.
                       <strong>Điều đó dẫn đến hiện tại với</strong> ${tarotCards[cards[1]].keywords.toLowerCase()} – ${tarotCards[cards[1]].description}.
                       <strong>Và nếu bạn tiếp tục trên con đường này, bạn sẽ gặp</strong> ${tarotCards[cards[2]].keywords.toLowerCase()} – ${tarotCards[cards[2]].description}.`;
            
            case 10:
                if (cards.length < 10) return "Cần đủ 10 lá cho trải bài Celtic Cross.";

                return `
                <h3 class="text-xl font-medium text-white mb-3">Trải bài Celtic Cross của bạn</h3><br>
                    1. <strong>Hiện tại:</strong> ${tarotCards[cards[0]].name} – ${tarotCards[cards[0]].description}<br><br>
                    2. <strong>Thử thách:</strong> ${tarotCards[cards[1]].name} – ${tarotCards[cards[1]].description}<br><br>
                    3. <strong>Gốc rễ:</strong> ${tarotCards[cards[2]].name} – ${tarotCards[cards[2]].description}<br><br>
                    4. <strong>Quá khứ gần:</strong> ${tarotCards[cards[3]].name} – ${tarotCards[cards[3]].description}<br><br>
                    5. <strong>Mục tiêu / Ý thức:</strong> ${tarotCards[cards[4]].name} – ${tarotCards[cards[4]].description}<br><br>
                    6. <strong>Tương lai gần:</strong> ${tarotCards[cards[5]].name} – ${tarotCards[cards[5]].description}<br><br>
                    7. <strong>Bạn là ai lúc này:</strong> ${tarotCards[cards[6]].name} – ${tarotCards[cards[6]].description}<br><br>
                    8. <strong>Môi trường xung quanh:</strong> ${tarotCards[cards[7]].name} – ${tarotCards[cards[7]].description}<br><br>
                    9. <strong>Hy vọng và nỗi sợ:</strong> ${tarotCards[cards[8]].name} – ${tarotCards[cards[8]].description}<br><br>
                    10. <strong>Kết quả:</strong> ${tarotCards[cards[9]].name} – ${tarotCards[cards[9]].description}
                `

            
            default:
                return "Kiểu trải bài không hợp lệ.";
        }
    }
        

    

    return (
      <div className="tarot-wrapper pt-10 pb-20">
          <div class="container mx-auto px-4 py-8 relative z-10">
        {/* <!-- Header --> */}
        <header class="text-center mb-8">
            <h1 class="text-4xl md:text-5xl font-bold text-white mb-2">Lifemap Tarot</h1>
            <p class="text-lg text-purple-200">Discover Yourself to Grow</p>
        </header>
        
        {/* <!-- Step 1: Intent Selection --> */}
        <div id="intent-selection" class="fade-in">
            <h2 class="text-2xl md:text-3xl text-center text-white mb-6">What do you want insight into today?</h2>
            
            <div class="intent-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div class="intent-card rounded-xl p-6 text-center cursor-pointer" data-intent="love">
                    <div class="text-5xl mb-4 floating_item">❤️</div>
                    <h3 class="text-xl font-medium text-white">Love &amp; Relationships</h3>
                    <p class="text-purple-200 mt-2">Guidance for your heart and connections</p>
                </div>
                
                <div class="intent-card rounded-xl p-6 text-center cursor-pointer" data-intent="studies">
                    <div class="text-5xl mb-4 floating_item">📚</div>
                    <h3 class="text-xl font-medium text-white">Studies &amp; Learning</h3>
                    <p class="text-purple-200 mt-2">Insight for your educational journey</p>
                </div>
                
                <div class="intent-card rounded-xl p-6 text-center cursor-pointer" data-intent="career">
                    <div class="text-5xl mb-4 floating_item">💼</div>
                    <h3 class="text-xl font-medium text-white">Career &amp; Direction</h3>
                    <p class="text-purple-200 mt-2">Clarity for your professional path</p>
                </div>
                
                <div class="intent-card rounded-xl p-6 text-center cursor-pointer" data-intent="growth">
                    <div class="text-5xl mb-4 floating_item">🌱</div>
                    <h3 class="text-xl font-medium text-white">Self-growth &amp; Emotions</h3>
                    <p class="text-purple-200 mt-2">Support for personal development</p>
                </div>
                
                <div class="intent-card rounded-xl p-6 text-center cursor-pointer" data-intent="general">
                    <div class="text-5xl mb-4 floating_item">❓</div>
                    <h3 class="text-xl font-medium text-white">General Guidance</h3>
                    <p class="text-purple-200 mt-2">Open insights for your journey</p>
                </div>
            </div>
        </div>
        
        {/* <!-- Step 2: Spread Selection --> */}
        <div id="spread-selection" class="fade-in hidden">
            <div class="flex items-center mb-8">
                <button id="back-to-intent" class="tarot-back-btn text-purple-200 hover:text-white flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
                    </svg>
                    Back
                </button>
            </div>
            
            <h2 class="text-2xl md:text-3xl text-center text-white mb-2">Choose a Tarot layout</h2>
            <p id="intent-display" class="text-center text-purple-200 mb-6">For your Studies &amp; Learning reading</p>
            
            <div class="spread-grid grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div class="spread-card rounded-xl p-6 cursor-pointer" data-spread="one-card">
                    <h3 class="text-xl font-medium text-white mb-3">One Card</h3>
                    <div class="flex justify-center my-4">
                        <div class="w-16 h-24 bg-indigo-300 bg-opacity-30 border border-white border-opacity-40 rounded-lg"></div>
                    </div>
                    <p class="text-purple-200">Quick insight for immediate guidance</p>
                </div>
                
                <div class="spread-card rounded-xl p-6 cursor-pointer" data-spread="three-card">
                    <h3 class="text-xl font-medium text-white mb-3">Three Cards</h3>
                    <div class="flex justify-center space-x-2 my-4">
                        <div class="w-12 h-20 bg-indigo-300 bg-opacity-30 border border-white border-opacity-40 rounded-lg"></div>
                        <div class="w-12 h-20 bg-indigo-300 bg-opacity-30 border border-white border-opacity-40 rounded-lg"></div>
                        <div class="w-12 h-20 bg-indigo-300 bg-opacity-30 border border-white border-opacity-40 rounded-lg"></div>
                    </div>
                    <p class="text-purple-200">Past, Present, Future reading</p>
                </div>
                
                <div class="spread-card rounded-xl p-6 cursor-pointer" data-spread="celtic-cross">
                    <h3 class="text-xl font-medium text-white mb-3">Celtic Cross</h3>
                    <div class="flex justify-center my-4">
                        <div class="grid grid-cols-3 gap-1">
                            <div class="w-8 h-12 bg-indigo-300 bg-opacity-0"></div>
                            <div class="w-8 h-12 bg-indigo-300 bg-opacity-30 border border-white border-opacity-40 rounded-lg"></div>
                            <div class="w-8 h-12 bg-indigo-300 bg-opacity-0"></div>
                            <div class="w-8 h-12 bg-indigo-300 bg-opacity-30 border border-white border-opacity-40 rounded-lg"></div>
                            <div class="w-8 h-12 bg-indigo-300 bg-opacity-30 border border-white border-opacity-40 rounded-lg"></div>
                            <div class="w-8 h-12 bg-indigo-300 bg-opacity-30 border border-white border-opacity-40 rounded-lg"></div>
                            <div class="w-8 h-12 bg-indigo-300 bg-opacity-0"></div>
                            <div class="w-8 h-12 bg-indigo-300 bg-opacity-30 border border-white border-opacity-40 rounded-lg"></div>
                            <div class="w-8 h-12 bg-indigo-300 bg-opacity-0"></div>
                        </div>
                    </div>
                    <p class="text-purple-200">Full in-depth reading with 10 cards</p>
                </div>
                
                <div class="spread-card rounded-xl p-6 cursor-pointer" data-spread="custom">
                    <h3 class="text-xl font-medium text-white mb-3">Custom Draw</h3>
                    <div class="flex justify-center my-4">
                        <div class="w-12 h-20 bg-indigo-300 bg-opacity-30 border border-white border-opacity-40 rounded-lg transform -rotate-12"></div>
                        <div class="w-12 h-20 bg-indigo-300 bg-opacity-30 border border-white border-opacity-40 rounded-lg transform rotate-6 -ml-4"></div>
                    </div>
                    <p class="text-purple-200">Draw cards as you need them</p>
                </div>
            </div>
        </div>
        
        {/* <!-- Step 3: Card Drawing --> */}
        <div id="card-drawing" class="fade-in hidden">
            <div class="flex w-20 ml-50 items-center mb-8">
                <button id="back-to-spread" class="tarot-back-btn text-purple-200 hover:text-white flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
                    </svg>
                    Back
                </button>
            </div>
            
            <h2 class="text-2xl md:text-3xl text-center text-white mb-2">Your <span id="spread-type-display">Three Card</span> Reading</h2>
            <p id="reading-intent-display" class="text-center text-purple-200 mb-6">For Self-growth &amp; Emotions</p>
            
            <div class="text-center mb-8">
                <p class="text-white text-lg">When you're ready, tap each card to reveal its meaning</p>
            </div>
            
            <div class="card-drawing-area flex flex-wrap justify-center gap-6 mb-10">

                {cardNumber.length != 0 ? (
                    cardNumber.map((card, index)=>{
                        
                        return(
                            <div class="tarot-card" data-index={index}>
                            <div class="tarot-card-inner">
                                <div class="tarot-card-front">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="text-purple-200 opacity-30">
                                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                        <circle cx="12" cy="12" r="4"></circle>
                                        <line x1="3" y1="12" x2="21" y2="12"></line>
                                        <line x1="12" y1="3" x2="12" y2="21"></line>
                                    </svg>
                                </div>
        
                                <div class="tarot-card-back">
                                    <div class="text-6xl mb-2">{tarotCards[card].image}</div>
                                    <h3 class="text-lg font-medium">{tarotCards[card].name}</h3>
                                    <p class="text-sm text-gray-600 mt-1">{tarotCards[card].keywords}</p>
                                    <div class="mt-auto pt-3 text-xs text-center text-gray-500">{cardNumber.length == 3 ? (time[index]) : (celticMean[index])}</div>
                                </div>
                            </div>
                        </div>
                        )
                    })
                ) : ""}
            </div>
        </div>
        
        {/* <!-- Step 4: Reading Results --> */}
        <div id="reading-results" class="fade-in hidden">
            <div class="flex items-center mb-8">
                <button id="back-to-cards" class="tarot-back-btn text-purple-200 hover:text-white flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
                    </svg>
                    Back to Cards
                </button>
            </div>
            
            <h2 class="text-2xl md:text-3xl text-center text-white mb-2">Your Reading Interpretation</h2>
            <p id="results-intent-display" class="text-center text-purple-200 mb-8">For Self-growth &amp; Emotions</p>
            
            <div class="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 md:p-8 max-w-4xl mx-auto mb-8">
                <div id="reading-interpretation" class="space-y-6">
                {cardNumber.length != 0 ? (
                    cardNumber.map((card, index)=>{
                        return(
                        <div class="slide-in" style={{animationDelay: `${index*0.2}`}}>
                            <div class="flex items-center mb-3">
                                <div class="text-4xl mr-3">{tarotCards[card].image}</div>
                                <div>
                                    <h3 class="text-xl font-medium text-white">{tarotCards[card].name}</h3>
                                    <p class="text-purple-200">{cardNumber.length == 3 ? (time[index]) : (celticMean[index])}</p>
                                </div>
                            </div>
                            <p class="text-white">{tarotCards[card].description}</p>
                        </div>
                        )   
                    })
                ) : ""}


                
                <div class="slide-in mt-8 pt-6 border-t border-white border-opacity-20" style={{animationDelay: `${cardNumber.length*0.2}`}}>
                    <h3 class="text-xl font-medium text-white mb-3">Overall Reading</h3>
                    <p id="card-text" class="text-white">
                    </p>
                </div>
                
                </div>
            </div>
            
            <div class="flex flex-wrap justify-center gap-4">
                <button id="save-reading" class="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full flex items-center transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h1a2 2 0 012 2v7a2 2 0 01-2 2H8a2 2 0 01-2-2v-7a2 2 0 012-2h1v5.586l-1.293-1.293zM13 6a1 1 0 10-2 0v3a1 1 0 102 0V6z"></path>
                    </svg>
                    Save Reading
                </button>
                <Link to="/Guide"><button id="ask-lumina" class="px-6 py-3 bg-transparent border border-purple-400 hover:border-purple-300 text-purple-200 hover:text-white rounded-full flex items-center transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path>
                    </svg>
                    Ask Lumina for deeper insight
                </button></Link>
            </div>
            
            <div id="new-reading" class="text-center mt-10">
                <button class="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full transition-all">
                    Start a New Reading
                </button>
            </div>
        </div>
    </div>
      </div>
    );
  };
  
  export default TarotReading;
  