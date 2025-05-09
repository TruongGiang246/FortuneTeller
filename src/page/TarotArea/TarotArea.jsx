import { useEffect, useState, useRef } from "react";
import "./TarotAreaStyle.css";
import { useNavigate } from "react-router-dom";
import tarotCards from "./TarotResult";



const TarotReading = () => {
    const navigate = useNavigate()
    function handleNavigate(){
        navigate('/Guide', {
            state: {
                card: cardNumber,
                reason: Reason.current,
                mode: 2
            }
        })
    }
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const time = ["Quá khứ","Hiện tại","Tương lai"];
    const celticMean = ["Hiện tại", "Thử thách", "Gốc rễ", "Quá khứ gần", "Mục tiêu / Ý Thức", "Tương lai gần", "Bạn là ai lúc này", "Môi trường xung quanh", "Hy vọng và nỗi sợ", "Kết quả"]

    const Reason = useRef([]);
    const [cardNumber, setCardNumbber] = useState([])
    const ReasonList = ["Tình yêu & Các mối quan hệ","Học tập & Tri thức","Sự nghiệp & Định hướng","Phát triển bản thân & Cảm xúc","Thông điệp chung"]
    const Type = ["Trải bài một lá","Trải bài ba lá","Trải bài Celtic Cross"]

 


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
        const intentDisplay = document.getElementById('intent-display')
        const readingIntentDisplay = document.getElementById('reading-intent-display')
        const spreadTypeDisplay = document.getElementById('spread-type-display')
        

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
                intentDisplay.innerText = ReasonList[i]
                readingIntentDisplay.innerText = ReasonList[i]
                Reason.current[0] = ReasonList[i]
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
                    spreadTypeDisplay.innerText = Type[i] + " của bạn"
                    Reason.current[1] = Type[i]
                }else if(i == 2){
                    const uniqueRandomArray = getUniqueRandomNumbers(10, 0, 21);
                    setCardNumbber(uniqueRandomArray)
                    spreadTypeDisplay.innerText = Type[i] + " của bạn"
                    Reason.current[1] = Type[i]
                }else{
                    const uniqueRandomArray = getUniqueRandomNumbers(1, 0, 21);
                    setCardNumbber(uniqueRandomArray)
                    spreadTypeDisplay.innerText = Type[i] + " của bạn"
                    Reason.current[1] = Type[i]
                }


                
            })

        }



    },[])

    useEffect(()=>{
        const tarotCard = document.getElementsByClassName('tarot-card')
        const readingResults = document.getElementById('reading-results')
        const cardDrawing = document.getElementById('card-drawing')
        const cardText = document.getElementById('card-text')
        const resultsIntentDisplay = document.getElementById('results-intent-display')
        
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
                resultsIntentDisplay.innerText = Reason.current[0]
                setTimeout(()=>{
                    readingResults.classList.remove('hidden');
                    cardDrawing.classList.add('hidden')
                }, 1400)
                click = 0;
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
            <p class="text-lg text-purple-200">Khám phá tương lai</p>
        </header>
        
        {/* <!-- Step 1: Intent Selection --> */}
        <div id="intent-selection" class="fade-in">
            <h2 class="text-2xl md:text-3xl text-center text-white mb-6">Hôm nay bạn muốn nhận thông điệp về điều gì?</h2>
            
            <div class="intent-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div class="intent-card rounded-xl p-6 text-center cursor-pointer" data-intent="love">
                    <div class="text-5xl mb-4 floating_item">❤️</div>
                    <h3 class="text-xl font-medium text-white">Love &amp; Tình yêu & Các mối quan hệ</h3>
                    <p class="text-purple-200 mt-2">Lời khuyên dành cho trái tim và các kết nối của bạn</p>
                </div>
                
                <div class="intent-card rounded-xl p-6 text-center cursor-pointer" data-intent="studies">
                    <div class="text-5xl mb-4 floating_item">📚</div>
                    <h3 class="text-xl font-medium text-white">Học tập &amp; Tri thức</h3>
                    <p class="text-purple-200 mt-2">Những gợi ý giúp hành trình học tập của bạn suôn sẻ hơn</p>
                </div>
                
                <div class="intent-card rounded-xl p-6 text-center cursor-pointer" data-intent="career">
                    <div class="text-5xl mb-4 floating_item">💼</div>
                    <h3 class="text-xl font-medium text-white">Sự nghiệp &amp; Định hướng</h3>
                    <p class="text-purple-200 mt-2">Làm rõ con đường phát triển nghề nghiệp của bạn</p>
                </div>
                
                <div class="intent-card rounded-xl p-6 text-center cursor-pointer" data-intent="growth">
                    <div class="text-5xl mb-4 floating_item">🌱</div>
                    <h3 class="text-xl font-medium text-white">Phát triển bản thân &amp; Cảm xúc</h3>
                    <p class="text-purple-200 mt-2">Hỗ trợ cho sự trưởng thành và chữa lành nội tâm</p>
                </div>
                
                <div class="intent-card rounded-xl p-6 text-center cursor-pointer" data-intent="general">
                    <div class="text-5xl mb-4 floating_item">❓</div>
                    <h3 class="text-xl font-medium text-white">Thông điệp chung</h3>
                    <p class="text-purple-200 mt-2">Những gợi ý tổng quan cho hành trình của bạn</p>
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
            
            <h2 class="text-2xl md:text-3xl text-center text-white mb-2">Chọn một trải bài Tarot</h2>
            <p id="intent-display" class="text-center text-purple-200 mb-6"></p>
            
            <div class="spread-grid grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div class="spread-card rounded-xl p-6 cursor-pointer" data-spread="one-card">
                    <h3 class="text-xl font-medium text-white mb-3">Một lá bài</h3>
                    <div class="flex justify-center my-4">
                        <div class="w-16 h-24 bg-indigo-300 bg-opacity-30 border border-white border-opacity-40 rounded-lg"></div>
                    </div>
                    <p class="text-purple-200">Thông điệp nhanh cho lời khuyên tức thời</p>
                </div>
                
                <div class="spread-card rounded-xl p-6 cursor-pointer" data-spread="three-card">
                    <h3 class="text-xl font-medium text-white mb-3">Ba lá bài</h3>
                    <div class="flex justify-center space-x-2 my-4">
                        <div class="w-12 h-20 bg-indigo-300 bg-opacity-30 border border-white border-opacity-40 rounded-lg"></div>
                        <div class="w-12 h-20 bg-indigo-300 bg-opacity-30 border border-white border-opacity-40 rounded-lg"></div>
                        <div class="w-12 h-20 bg-indigo-300 bg-opacity-30 border border-white border-opacity-40 rounded-lg"></div>
                    </div>
                    <p class="text-purple-200">Trải bài Quá khứ, Hiện tại, Tương lai</p>
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
                    <p class="text-purple-200">Trải bài chuyên sâu với 10 lá bài</p>
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
            
            <h2 class="text-2xl md:text-3xl text-center text-white mb-2" id="spread-type-display"></h2>
            <p id="reading-intent-display" class="text-center text-purple-200 mb-6"></p>
            
            <div class="text-center mb-8">
                <p class="text-white text-lg">Khi bạn sẵn sàng, hãy chạm vào từng lá bài để khám phá ý nghĩa của nó</p>
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
            
            <h2 class="text-2xl md:text-3xl text-center text-white mb-2">Giải Mã Trải Bài Của Bạn</h2>
            <p id="results-intent-display" class="text-center text-purple-200 mb-8"></p>
            
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
                <button onClick={handleNavigate} id="save-reading" class="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full flex items-center transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path>
                    </svg>
                    Hỏi Lumina để hiểu rõ hơn
                </button>

            </div>
            
            <div id="new-reading" class="text-center mt-10">
                <button class="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full transition-all">
                    Bắt đầu Trải Bài Mới
                </button>
            </div>
        </div>
    </div>
      </div>
    );
  };
  
  export default TarotReading;
  