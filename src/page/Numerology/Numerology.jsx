import { useEffect, useState, useRef } from 'react';
import './NumerologyStyle.css';
import {LifePath, DestinyNumber, SoulNumber, PersonalityNumber, MaturityNumber, BirthDayNumber, AttitudeNumber} from './NumerologyInfo';
import { da } from 'date-fns/locale';


const descriptions = {
    1: {
        title: "The Leader",
        description: "You're independent, determined, and born to lead. You have strong willpower and are driven to achieve your goals.",
        traits: ["Natural leadership", "Independence", "Originality", "Determination"]
    },
    2: {
        title: "The Mediator",
        description: "You're diplomatic, cooperative, and sensitive to others' needs. You excel at creating harmony and working with others.",
        traits: ["Cooperation", "Diplomacy", "Sensitivity", "Peacemaking"]
    },
    3: {
        title: "The Creative Communicator",
        description: "You shine when expressing yourself, inspiring others, and bringing joy to your environment.",
        traits: ["Creative expression", "Communication skills", "Optimism", "Social nature"]
    },
    4: {
        title: "The Builder",
        description: "You're practical, reliable, and excellent at creating solid foundations. You value stability and work hard to achieve your goals.",
        traits: ["Reliability", "Hard work", "Organization", "Practical thinking"]
    },
    5: {
        title: "The Freedom Seeker",
        description: "You're adventurous, versatile, and crave variety. You learn through experience and value your independence.",
        traits: ["Adaptability", "Curiosity", "Adventure", "Resourcefulness"]
    },
    6: {
        title: "The Nurturer",
        description: "You're caring, responsible, and focused on creating harmony. You have a natural ability to support and help others.",
        traits: ["Compassion", "Responsibility", "Nurturing", "Harmony"]
    },
    7: {
        title: "The Seeker",
        description: "You're analytical, thoughtful, and drawn to understanding life's mysteries. You have a natural gift for research and analysis.",
        traits: ["Analysis", "Introspection", "Wisdom", "Research skills"]
    },
    8: {
        title: "The Achiever",
        description: "You're ambitious, goal-oriented, and have natural leadership abilities. You excel at creating material success.",
        traits: ["Ambition", "Organization", "Practicality", "Leadership"]
    },
    9: {
        title: "The Humanitarian",
        description: "You're compassionate, idealistic, and focused on making a difference. You have a natural ability to see the big picture.",
        traits: ["Compassion", "Idealism", "Creativity", "Global thinking"]
    },
    11: {
        title: "The Intuitive",
        description: "You're highly intuitive, inspirational, and have unique spiritual insights. You're here to inspire and elevate others.",
        traits: ["Intuition", "Inspiration", "Idealism", "Sensitivity"]
    },
    22: {
        title: "The Master Builder",
        description: "You have extraordinary vision and the ability to manifest large-scale projects. You can turn dreams into reality.",
        traits: ["Vision", "Practicality", "Leadership", "Manifestation"]
    },
    33: {
        title: "The Master Teacher",
        description: "You have exceptional nurturing abilities and wisdom to share. You're here to uplift humanity through compassionate service.",
        traits: ["Compassion", "Wisdom", "Nurturing", "Healing"]
    }
};

function Numerology(){
    const [value, setValue] = useState([0,0,0,0,0,0,0]);
    const valueRef = useRef(value);

    // useEffect(() => {
    //     window.scrollTo(0, 0);
    //   }, []);
  


    // useEffect(() => {
    //     valueRef.current = value;
    // }, [value])



    useEffect(()=>{



    //     // Xử lí thông tin
    // const buttonSubmit = document.getElementById('btn-submit');

    // const buttonReset = document.getElementById('new-reading-btn')



    const mobileMenuButton = document.querySelector('.md\\:hidden');
    const mobileMenu = document.querySelector('.md\\:flex.items-center.space-x-8');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            if (mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.remove('hidden');
                mobileMenu.classList.add('flex', 'flex-col', 'absolute', 'top-16', 'left-0', 'right-0', 'bg-white', 'shadow-md', 'p-4', 'z-50');
            } else {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex', 'flex-col', 'absolute', 'top-16', 'left-0', 'right-0', 'bg-white', 'shadow-md', 'p-4', 'z-50');
            }
        });
    }
    
    // Numerology form submission
    const numerologyForm = document.getElementById('numerology-form');

    const cardContainer = document.getElementById('wrapper-card')
    const ResetBtn = document.getElementById('ResetBtn')
    ResetBtn.onclick = () => {
        cardContainer.classList.add('hidden');
    }

    if (numerologyForm) {
        numerologyForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const birthdateInput = document.getElementById('birthdate').value.split("-");
            const birthdate = birthdateInput.reverse()
            
            
            console.log(birthdate[0], birthdate[1], birthdate[2])
           


            const HoTen = document.getElementById("Fullname").value;
            const days = birthdate[0];
            const months = birthdate[1];
            const years = birthdate[2];

            const newDays = Sum([days]);
            const newMonths = Sum([months]);
            const newYears = Sum([years]);

            const NumberHoTen = normalizeName(HoTen, 0);
            const LifePath = Sum([newDays, newMonths, newYears]);
            const DestinyNumber = Sum([NumberHoTen]);
            const SoulNumber = Sum([normalizeName(HoTen, 1)]);
            const PersonalityNumber = Sum([normalizeName(HoTen, 2)]);
            const AttitudeNumber = Sum([newDays, newMonths]);
            const MatureNumber = Sum([LifePath, DestinyNumber]);

            setValue([LifePath, DestinyNumber, SoulNumber, PersonalityNumber, 
            MatureNumber, newDays, AttitudeNumber]);
            const numerology = [LifePath, DestinyNumber, SoulNumber, PersonalityNumber, MatureNumber, newDays, AttitudeNumber];
            const storedUser = localStorage.getItem("user");
            const today = new Date();
            const day = String(today.getDate()).padStart(2, '0');      // 09
            const month = String(today.getMonth() + 1).padStart(2, '0'); // 04 (tháng bắt đầu từ 0)
            const year = today.getFullYear();                          // 2025
            const randomNumber = Math.floor(Math.random() * 9) + 1;
            console.log(randomNumber)
        
            const formattedDate = `${day}-${month}-${year}`;
            console.log(formattedDate); // "09-04-2025"
        

            if (!storedUser) {
            
            const user = {
                [HoTen]: {
                numerology: numerology,
                time: formattedDate,
                avt: randomNumber
                },
            };
            localStorage.setItem("user", JSON.stringify(user));
            console.log("User mới đã được lưu.");
            } else {
            
            const user = JSON.parse(storedUser);
            
            if (!user[HoTen]) {
            
                user[HoTen] = { 
                    numerology: numerology,
                    time: formattedDate,
                    avt: randomNumber
                };
                console.log("Đã thêm người dùng mới vào user.");
            } else {
        
                user[HoTen].numerology = numerology;
                if(!user[HoTen].time){
                    user[HoTen].time = formattedDate,
                    user[HoTen].avt = randomNumber
                }
                console.log("Đã cập nhật numerology cho người dùng.");
            }
            
            localStorage.setItem("user", JSON.stringify(user));
            }

        
            cardContainer.classList.remove('hidden');
            
        


            document.getElementById('result-preview').scrollIntoView({ behavior: 'smooth' });
        });
    }
    

    
 
    function normalizeName(name, mode) {
        let numerologyMap = {
            "A": 1, "J": 1, "S": 1,
            "B": 2, "K": 2, "T": 2,
            "C": 3, "L": 3, "U": 3,
            "D": 4, "M": 4, "V": 4,
            "E": 5, "N": 5, "W": 5,
            "F": 6, "O": 6, "X": 6,
            "G": 7, "P": 7, "Y": 7,
            "H": 8, "Q": 8, "Z": 8,
            "I": 9, "R": 9
        };
        let ans = 0;
        if(mode == 1){
            numerologyMap = {
                "A": 1, "J": 0, "S": 0,
                "B": 0, "K": 0, "T": 0,
                "C": 0, "L": 0, "U": 3,
                "D": 0, "M": 0, "V": 0,
                "E": 5, "N": 0, "W": 0,
                "F": 0, "O": 6, "X": 0,
                "G": 0, "P": 0, "Y": 0,
                "H": 0, "Q": 0, "Z": 0,
                "I": 9, "R": 0
            }
        }else if(mode == 2){
            numerologyMap = {
                "A": 0, "J": 1, "S": 1,
                "B": 2, "K": 2, "T": 2,
                "C": 3, "L": 3, "U": 0,
                "D": 4, "M": 4, "V": 4,
                "E": 0, "N": 5, "W": 5,
                "F": 6, "O": 0, "X": 6,
                "G": 7, "P": 7, "Y": 7,
                "H": 8, "Q": 8, "Z": 8,
                "I": 0, "R": 9
            };
        }
        name = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase().replace(/[^A-Z]/g, "");
        let numbers = name.split("").map(char => numerologyMap[char] || 0);
        for(let i = 0; i < numbers.length; i++){
            ans += numbers[i];
        }
        return ans;
    }



    function Sum(dateString){
        let ans = 0;
        for(let i = 0; i < dateString.length; i++){
          let number = parseInt(dateString[i], 10);
          ans += number;
        }
        
        if(ans == 11 || ans == 22 || ans == 33){
            return ans;
        }

        while (ans > 9) {
            ans = ans.toString().split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0);
        }
        return ans;
        
    }


  
 
    },[])



    return(
        <>
        <section class="numerology-gradient text-white py-16 md:py-24 relative overflow-hidden">
        {/* <!-- Floating Numbers Background --> */}
        <div class="floating-numbers" style={{top: "10%", left: "10%"}}>3</div>
        <div class="floating-numbers" style={{top: "30%", left: "20%", animationDelay: "1s"}}>7</div>
        <div class="floating-numbers" style={{top: "15%", left: "80%", animationDelay: "2s"}}>1</div>
        <div class="floating-numbers" style={{top: "60%", left: "15%", animationDelay: "3s"}}>9</div>
        <div class="floating-numbers" style={{top: "70%", left: "70%", animationDelay: "4s"}}>5</div>
        <div class="floating-numbers" style={{top: "40%", left: "60%", animationDelay: "5s"}}>8</div>
        <div class="floating-numbers" style={{top: "20%", left: " 40%", animationDela: "6s"}}>4</div>
        <div class="floating-numbers" style={{top: "80%", left: "30%", animationDelay: "7s"}}>6</div>
        <div class="floating-numbers" style={{top: "50%", left: "85%", animationDelay: "8s"}}>2</div>
        
        <div class="container mx-auto px-4 md:px-6 relative z-10">
            <div class="max-w-4xl mx-auto text-center">
                <h1 class="text-3xl md:text-5xl font-bold mb-6">Your Numbers Hold the Clues – Let's Unlock Them!</h1>
                <p class="text-lg md:text-xl mb-10 opacity-90">Discover what your birth date reveals about your strengths, personality, and life path.</p>
                <div class="flex justify-center">
                    <a href="#numerology-tool" class="cta-button-num px-8 py-4 rounded-full bg-white text-indigo-600 font-semibold text-lg shadow-lg flex items-center">
                        <span>Start Your Reading</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </section>
    <section class="py-16 bg-white">
    <div class="container mx-auto px-4 md:px-6">
        <div class="max-w-3xl mx-auto text-center">
            <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Decode Your Numbers, Discover Your Potential</h2>
            <p class="text-lg text-gray-600 mb-6">Numerology is the ancient science of numbers. Based on your birth date and name, it reveals your core traits, natural talents, and life mission.</p>
            <p class="text-lg text-gray-600">At Lifemap, we turn numbers into insights – so you can understand who you are and what you're meant to do.</p>
        </div>
    </div>
</section>
<section class="py-12 bg-gray-50">
        <div class="container mx-auto px-4 md:px-6">
            <div class="text-center mb-12">
                <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-4">What Your Numbers Reveal</h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">Each number in your numerology chart has a special meaning about different aspects of who you are.</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* <!-- Life Path Number --> */}
                <div class="number-card bg-white rounded-xl shadow-md overflow-hidden">
                    <div class="bg-indigo-500 h-3"></div>
                    <div class="p-6">
                        <div class="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                            </svg>
                        </div>
                        <h3 class="text-xl font-bold text-gray-800 mb-2">Life Path Number</h3>
                        <p class="text-gray-600">Your overall life direction and the lessons you're here to learn. This is the most important number in your chart.</p>
                    </div>
                </div>
                
                {/* <!-- Expression Number --> */}
                <div class="number-card bg-white rounded-xl shadow-md overflow-hidden">
                    <div class="bg-purple-500 h-3"></div>
                    <div class="p-6">
                        <div class="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path>
                            </svg>
                        </div>
                        <h3 class="text-xl font-bold text-gray-800 mb-2">Expression Number</h3>
                        <p class="text-gray-600">Your natural talents and abilities. This number reveals how you express yourself and your gifts to the world.</p>
                    </div>
                </div>
                
                {/* <!-- Soul Urge Number --> */}
                <div class="number-card bg-white rounded-xl shadow-md overflow-hidden">
                    <div class="bg-pink-500 h-3"></div>
                    <div class="p-6">
                        <div class="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                            </svg>
                        </div>
                        <h3 class="text-xl font-bold text-gray-800 mb-2">Soul Urge Number</h3>
                        <p class="text-gray-600">Your inner desires and motivations. This number shows what truly drives you and what you want most in life.</p>
                    </div>
                </div>
                
                {/* <!-- Birthday Number --> */}
                <div class="number-card bg-white rounded-xl shadow-md overflow-hidden">
                    <div class="bg-blue-500 h-3"></div>
                    <div class="p-6">
                        <div class="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                        </div>
                        <h3 class="text-xl font-bold text-gray-800 mb-2">Birthday Number</h3>
                        <p class="text-gray-600">Your special gift or talent. This number reveals a unique strength you possess that helps you fulfill your life path.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="numerology-tool" class="py-16 bg-white">
    <div class="container mx-auto px-4 md:px-6">
        <div class="max-w-4xl mx-auto">
            <div class="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-lg p-8 md:p-10">
                <div class="text-center mb-8">
                    <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Start Your Numerology Reading</h2>
                    <p class="text-lg text-gray-600">Enter your details below to discover what your numbers reveal about you</p>
                </div>
                
                <div class="mb-8">
                    <h3 class="flex items-center text-lg font-semibold text-gray-800 mb-4">
                        <span class="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3 text-indigo-600 font-bold">🎯</span>
                        What You'll Need:
                    </h3>
                    <ul class="space-y-3 text-gray-600 ml-11">
                        <li class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg>
                            Your full birth date (DD/MM/YYYY)
                        </li>
                        <li class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg>
                            Your full name (optional for deeper reading)
                        </li>
                    </ul>
                </div>
                
                <div class="mb-8">
                    <h3 class="flex items-center text-lg font-semibold text-gray-800 mb-4">
                        <span class="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3 text-indigo-600 font-bold">🔢</span>
                        What You'll Get:
                    </h3>
                    <ul class="space-y-3 text-gray-600 ml-11">
                        <li class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg>
                            Life Path Number – Your direction in life
                        </li>
                        <li class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg>
                            Expression Number – Your natural gifts
                        </li>
                        <li class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg>
                            Soul Urge Number – What drives you
                        </li>
                        <li class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg>
                            Birthday Number – Your unique strength
                        </li>
                    </ul>
                </div>
                
                <form id="numerology-form" class="space-y-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label for="birthdate" class="block text-sm font-medium text-gray-700 mb-1">Your Birth Date</label>
                            <input type="date" id="birthdate" name="birthdate" class="number-input w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none" required=""/>
                        </div>
                        <div>
                            <label for="fullname" class="block text-sm font-medium text-gray-700 mb-1">Your Full Name (Optional)</label>
                            <input type="text" id="Fullname" name="fullname" placeholder="Enter your full name" class="number-input w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none"/>
                        </div>
                    </div>
                    
                    <div class="text-center">
                        <button type="submit" class="cta-button px-8 py-4 bg-indigo-600 text-white rounded-full font-semibold text-lg shadow-lg">
                            <span class="flex items-center justify-center">
                                <span class="mr-2">Start Your Numerology Reading</span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                </svg>
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
<section class="py-16 bg-gray-50 hidden" id='wrapper-card'>
        <div class="container mx-auto px-4 md:px-6">
            <div class="max-w-4xl mx-auto">
                <div class="text-center mb-12">
                    <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-4">See What Your Numbers Reveal</h2>
                    <p class="text-lg text-gray-600">Here's a preview of what your personalized reading will look like</p>
                </div>
                
                <div id="result-preview" class="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-8">
                    <div class="flex items-center justify-between mb-6">
                        <h3 class="text-xl font-bold text-gray-800">Your Numerology Reading</h3>
                        <div class="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm font-medium">Preview</div>
                    </div>
                    
                    <div id='card-container' class="space-y-8">
                        {/* <!-- Life Path Number Preview --> */}

                        
                        {value[0] != 0 ? value.map((value)=>(

                            <div class="result-card show">
                            <div class="flex items-start">
                                <div class="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4 shrink-0">
                                    <span class="text-indigo-600 font-bold text-xl">{value}</span>
                                </div>
                                <div>
                                    <h4 class="text-lg font-semibold text-gray-800 mb-2">Life Path {value} – {descriptions[value].title}</h4>
                                    <p class="text-gray-600 mb-3">{descriptions[value].description}</p>
                                    <div class="bg-indigo-50 rounded-lg p-4">
                                        <h5 class="font-medium text-gray-800 mb-2">Your Key Traits:</h5>
                                        <ul class="space-y-1 text-gray-600">
                                            <li class="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-indigo-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                                </svg>
                                                {descriptions[value].traits[0]}
                                            </li>
                                            <li class="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-indigo-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                                </svg>
                                                {descriptions[value].traits[1]}
                                            </li>
                                            <li class="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-indigo-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                                </svg>
                                                {descriptions[value].traits[2]}
                                            </li>
                                            <li class="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-indigo-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                                </svg>
                                                {descriptions[value].traits[3]}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            </div>    

                        )) : ""}

    

                    </div>                
                    <div class="text-center mt-8">
                        <p class="text-lg font-medium text-indigo-600 mb-4">🔎 Want to see yours? Just click Start!</p>
                        <a  id='ResetBtn' href="#numerology-tool" class="inline-block px-6 py-3 bg-indigo-100 text-indigo-600 rounded-lg font-medium hover:bg-indigo-200 transition-colors">Go to Calculator</a>
                        <button class="inline-block px-6 py-3 bg-indigo-100 text-indigo-600 ml-5 rounded-lg font-medium hover:bg-indigo-200 transition-colors">Ask Lumina</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="py-16 bg-indigo-600 text-white">
        <div class="container mx-auto px-4 md:px-6">
            <div class="max-w-3xl mx-auto text-center">
                <h2 class="text-2xl md:text-3xl font-bold mb-6">Begin Your Lifemap with Numbers</h2>
                <p class="text-lg mb-8 opacity-90">It only takes 30 seconds to start understanding yourself.</p>
                <a href="#numerology-tool" class="inline-block px-8 py-4 bg-white text-indigo-600 rounded-full font-semibold text-lg shadow-lg hover:bg-indigo-50 transition-colors">Begin Your Lifemap with Numbers →</a>
            </div>
        </div>
    </section>

    <section class="py-16 bg-white">
        <div class="container mx-auto px-4 md:px-6">
            <div class="max-w-3xl mx-auto">
                <div class="text-center mb-12">
                    <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
                    <p class="text-lg text-gray-600">Everything you need to know about numerology</p>
                </div>
                
                <div class="space-y-6">
                    <div class="bg-gray-50 rounded-xl p-6">
                        <h3 class="text-lg font-semibold text-gray-800 mb-2">What is numerology?</h3>
                        <p class="text-gray-600">Numerology is the study of numbers and their influence on human life. It's based on the idea that each number has its own vibration and energy that can reveal information about a person's character, talents, and life path.</p>
                    </div>
                    
                    <div class="bg-gray-50 rounded-xl p-6">
                        <h3 class="text-lg font-semibold text-gray-800 mb-2">How accurate is numerology?</h3>
                        <p class="text-gray-600">Many people find numerology readings to be surprisingly accurate and insightful. While it's not scientifically proven, numerology can be a helpful tool for self-reflection and understanding your natural tendencies and potential.</p>
                    </div>
                    
                    <div class="bg-gray-50 rounded-xl p-6">
                        <h3 class="text-lg font-semibold text-gray-800 mb-2">How is my Life Path number calculated?</h3>
                        <p class="text-gray-600">Your Life Path number is calculated by adding all the digits in your birth date and reducing to a single digit (except for master numbers 11, 22, and 33). For example, if you were born on June 15, 1995, you would add 6+1+5+1+9+9+5 = 36, then 3+6 = 9.</p>
                    </div>
                    
                    <div class="bg-gray-50 rounded-xl p-6">
                        <h3 class="text-lg font-semibold text-gray-800 mb-2">Can numerology help with my school and career choices?</h3>
                        <p class="text-gray-600">Yes! Numerology can provide insights into your natural talents and the types of activities where you're likely to excel. This can help guide your educational and career decisions by aligning them with your innate strengths.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
    )
}
export default Numerology;