import { useEffect, useState, useRef } from 'react';
import './NumerologyStyle.css';
import { useNavigate } from 'react-router-dom';



const descriptions = {
    1: {
        title: "Người dẫn đầu 🔥",
        description: "Bạn độc lập, quyết đoán và sinh ra để lãnh đạo. Bạn có ý chí mạnh mẽ và luôn nỗ lực để đạt được mục tiêu của mình.",
        traits: ["💼 Khả năng lãnh đạo", "🛤️ Tính độc lập", "🎨 Sự sáng tạo", "💪 Sự quyết tâm"]
    },
    2: {
        title: "Người hòa giải 🤝",
        description: "Bạn khéo léo, hợp tác và nhạy cảm với cảm xúc của người khác. Bạn giỏi tạo ra sự hòa hợp và làm việc nhóm.",
        traits: ["🤝 Tính hợp tác", "🗨️ Sự ngoại giao", "💖 Sự nhạy cảm", "🕊️ Khả năng hòa giải"]
    },
    3: {
        title: "Người giao tiếp sáng tạo 🎭",
        description: "Bạn tỏa sáng khi được thể hiện bản thân, truyền cảm hứng cho người khác và mang lại niềm vui cho môi trường xung quanh.",
        traits: ["🎨 Biểu đạt sáng tạo", "🗣️ Kỹ năng giao tiếp", "🌈 Sự lạc quan", "😄 Tính hướng ngoại"]
    },
    4: {
        title: "Người xây dựng 🧱",
        description: "Bạn thực tế, đáng tin cậy và giỏi xây dựng nền tảng vững chắc. Bạn coi trọng sự ổn định và luôn nỗ lực vì mục tiêu.",
        traits: ["🛠️ Đáng tin cậy", "💼 Làm việc chăm chỉ", "📦 Tổ chức tốt", "📐 Tư duy thực tế"]
    },
    5: {
        title: "Người tìm kiếm tự do 🌍",
        description: "Bạn phiêu lưu, linh hoạt và yêu thích sự đa dạng. Bạn học hỏi qua trải nghiệm và trân trọng sự tự do.",
        traits: ["🔄 Khả năng thích nghi", "🔍 Tính tò mò", "🌄 Tình thần phiêu lưu", "🎒 Tính linh hoạt"]
    },
    6: {
        title: "Người nuôi dưỡng 🌸",
        description: "Bạn giàu tình cảm, có trách nhiệm và hướng đến việc tạo ra sự hòa hợp. Bạn có khả năng chăm sóc và hỗ trợ người khác một cách tự nhiên.",
        traits: ["🤗 Lòng trắc ẩn", "📎 Tinh thần trách nhiệm", "🍼 Sự chăm sóc", "🎶 Sự hòa hợp"]
    },
    7: {
        title: "Người tìm kiếm tri thức 🔍",
        description: "Bạn phân tích sâu sắc, suy tư và luôn khao khát khám phá những bí ẩn của cuộc sống. Bạn có năng khiếu nghiên cứu và phân tích.",
        traits: ["🧠 Phân tích", "🪞 Tự nhìn nhận", "📚 Trí tuệ", "🔬 Kỹ năng nghiên cứu"]
    },
    8: {
        title: "Người thành đạt 🏆",
        description: "Bạn tham vọng, có định hướng mục tiêu và có khả năng lãnh đạo tự nhiên. Bạn xuất sắc trong việc tạo dựng thành công vật chất.",
        traits: ["🎯 Tham vọng", "📊 Tổ chức", "🔧 Thực tế", "👑 Khả năng lãnh đạo"]
    },
    9: {
        title: "Người nhân đạo 🌟",
        description: "Bạn giàu lòng trắc ẩn, lý tưởng và hướng đến việc tạo ra sự khác biệt tích cực. Bạn có khả năng nhìn nhận tổng thể và hướng đến cộng đồng.",
        traits: ["💖 Lòng trắc ẩn", "🌈 Chủ nghĩa lý tưởng", "🎨 Sáng tạo", "🌍 Tư duy toàn cầu"]
    },
    11: {
        title: "Người trực giác 🔮",
        description: "Bạn có trực giác cao, truyền cảm hứng và có những hiểu biết tâm linh đặc biệt. Bạn đến để truyền cảm hứng và nâng tầm người khác.",
        traits: ["🌙 Trực giác", "✨ Khả năng truyền cảm hứng", "🕊️ Chủ nghĩa lý tưởng", "🌊 Sự nhạy cảm"]
    },
    22: {
        title: "Người kiến tạo vĩ đại 🏗️",
        description: "Bạn có tầm nhìn phi thường và khả năng biến những dự án lớn thành hiện thực. Bạn có thể biến ước mơ thành hành động cụ thể.",
        traits: ["🔭 Tầm nhìn", "🧰 Tính thực tế", "🚀 Khả năng lãnh đạo", "📦 Năng lực hiện thực hóa"]
    },
    33: {
        title: "Người thầy tâm linh 🌈",
        description: "Bạn có khả năng nuôi dưỡng và trí tuệ vượt trội. Bạn sinh ra để nâng đỡ nhân loại thông qua sự phục vụ đầy từ bi.",
        traits: ["💞 Lòng trắc ẩn", "📖 Trí tuệ", "🌷 Sự chăm sóc", "💫 Khả năng chữa lành"]
    }
};


const titleNum = ["Số đường đời","Số vận mệnh","Số nội tâm","Số biểu lộ","Số thái độ","Số trưởng thành","Số ngày sinh"]

function Numerology(){
    const [value, setValue] = useState([0,0,0,0,0,0,0]);
    const valueRef = useRef(value);

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  


    // useEffect(() => {
    //     valueRef.current = value;
    // }, [value])



    useEffect(()=>{


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
     

            name = name
            .replace(/Đ/g, "D").replace(/đ/g, "d")        
            .normalize("NFD")                              
            .replace(/[\u0300-\u036f]/g, "")            
            .toUpperCase()                                
            .replace(/[^A-Z]/g, ""); 


            let numbers = name.split("").map(char => {
                return numerologyMap[char]
            });
            
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

            setValue([LifePath, DestinyNumber, SoulNumber, PersonalityNumber, AttitudeNumber,
            MatureNumber, newDays]);
            const numerology = [LifePath, DestinyNumber, SoulNumber, PersonalityNumber, AttitudeNumber, MatureNumber, newDays ];
            const storedUser = localStorage.getItem("user");
            const today = new Date();
            const day = String(today.getDate()).padStart(2, '0');      // 09
            const month = String(today.getMonth() + 1).padStart(2, '0'); // 04 (tháng bắt đầu từ 0)
            const year = today.getFullYear();                          // 2025
            const randomNumber = Math.floor(Math.random() * 9) + 1;
      
        
            const formattedDate = `${day}-${month}-${year}`;
       
        

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
    

    
 
    


  
 
    },[])

    const navigate = useNavigate()
    function handleNavigate(){
        navigate('/Guide', {
            state:{
                number: value,
                mode: 3,
            }
        })
    }



    return(
        <>
        <section className="numerology-gradient text-white py-16 md:py-24 relative overflow-hidden">
        {/* <!-- Floating Numbers Background --> */}
        <div className="floating-numbers" style={{top: "10%", left: "10%"}}>3</div>
        <div className="floating-numbers" style={{top: "30%", left: "20%", animationDelay: "1s"}}>7</div>
        <div className="floating-numbers" style={{top: "15%", left: "80%", animationDelay: "2s"}}>1</div>
        <div className="floating-numbers" style={{top: "60%", left: "15%", animationDelay: "3s"}}>9</div>
        <div className="floating-numbers" style={{top: "70%", left: "70%", animationDelay: "4s"}}>5</div>
        <div className="floating-numbers" style={{top: "40%", left: "60%", animationDelay: "5s"}}>8</div>
        <div className="floating-numbers" style={{top: "20%", left: " 40%", animationDela: "6s"}}>4</div>
        <div className="floating-numbers" style={{top: "80%", left: "30%", animationDelay: "7s"}}>6</div>
        <div className="floating-numbers" style={{top: "50%", left: "85%", animationDelay: "8s"}}>2</div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-3xl md:text-5xl font-bold mb-6">Những Con Số Của Bạn Giấu Bí Mật Gì – Hãy Cùng Giải Mã!</h1>
                <p className="text-lg md:text-xl mb-10 opacity-90">Khám phá ngày sinh của bạn tiết lộ điều gì về điểm mạnh, tính cách và con đường cuộc đời của bạn.</p>
                <div className="flex justify-center">
                    <a href="#numerology-tool" className="cta-button-num px-8 py-4 rounded-full bg-white text-indigo-600 font-semibold text-lg shadow-lg flex items-center">
                        <span>✨ Bắt Đầu Giải Mã Ngay</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </section>
    <section className="py-16 bg-white">
    <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">🔍 Giải Mã Những Con Số, Khám Phá Tiềm Năng Bản Thân</h2>
            <p className="text-lg text-gray-600 mb-6">Thần số học là một khoa học cổ xưa về những con số. Dựa trên ngày sinh và tên của bạn, nó tiết lộ những đặc điểm cốt lõi, tài năng bẩm sinh và sứ mệnh cuộc đời bạn.</p>
            <p className="text-lg text-gray-600">Tại Lifemap, chúng tôi biến những con số thành những hiểu biết sâu sắc — giúp bạn hiểu mình là ai và điều bạn được sinh ra để làm.</p>
        </div>
    </div>
</section>
<section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">💫 Những Điều Số Liệu Tiết Lộ</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">Mỗi con số trong bản đồ thần số học mang một ý nghĩa đặc biệt về các khía cạnh khác nhau của bạn.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* <!-- Life Path Number --> */}
                <div className="number-card bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="bg-indigo-500 h-3"></div>
                    <div className="p-6">
                        <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Số Đường Đời (Life Path Number)</h3>
                        <p className="text-gray-600">Định hướng tổng thể cuộc đời và những bài học bạn cần học. Đây là con số quan trọng nhất trong biểu đồ.</p>
                    </div>
                </div>
                
                {/* <!-- Expression Number --> */}
                <div className="number-card bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="bg-purple-500 h-3"></div>
                    <div className="p-6">
                        <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Số Biểu Hiện (Expression Number)</h3>
                        <p className="text-gray-600">Tài năng và khả năng bẩm sinh. Nó tiết lộ cách bạn thể hiện bản thân và mang tài năng ra thế giới.</p>
                    </div>
                </div>
                
                {/* <!-- Soul Urge Number --> */}
                <div className="number-card bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="bg-pink-500 h-3"></div>
                    <div className="p-6">
                        <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Số Nội Tâm (Soul Urge Number)</h3>
                        <p className="text-gray-600">Mong muốn và động lực sâu thẳm. Nó cho thấy điều gì thật sự thúc đẩy bạn và những gì bạn khao khát nhất.</p>
                    </div>
                </div>
                
                {/* <!-- Birthday Number --> */}
                <div className="number-card bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="bg-blue-500 h-3"></div>
                    <div className="p-6">
                        <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Số Ngày Sinh (Birthday Number)</h3>
                        <p className="text-gray-600">Món quà hoặc tài năng đặc biệt. Nó tiết lộ một thế mạnh độc đáo giúp bạn hoàn thành sứ mệnh cuộc đời.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="numerology-tool" className="py-16 bg-white">
    <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-lg p-8 md:p-10">
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">🔮 Bắt Đầu Giải Mã Thần Số Học</h2>
                    <p className="text-lg text-gray-600">Nhập thông tin bên dưới để khám phá những con số tiết lộ điều gì về bạn.</p>
                </div>
                
                <div className="mb-8">
                    <h3 className="flex items-center text-lg font-semibold text-gray-800 mb-4">
                        <span className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3 text-indigo-600 font-bold">🎯</span>
                        Bạn Cần Chuẩn Bị:
                    </h3>
                    <ul className="space-y-3 text-gray-600 ml-11">
                        <li className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg>
                            Ngày tháng năm sinh đầy đủ (DD/MM/YYYY)
                        </li>
                        <li className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg>
                            Họ tên đầy đủ (tùy chọn, để có phân tích sâu hơn)
                        </li>
                    </ul>
                </div>
                
                <div className="mb-8">
                    <h3 className="flex items-center text-lg font-semibold text-gray-800 mb-4">
                        <span className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3 text-indigo-600 font-bold">🔢</span>
                        Bạn Sẽ Nhận Được:
                    </h3>
                    <ul className="space-y-3 text-gray-600 ml-11">
                        <li className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg>
                            Số Đường Đời → Định hướng cuộc đời
                        </li>
                        <li className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg>
                            Số Biểu Hiện → Tài năng bẩm sinh
                        </li>
                        <li className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg>
                            Số Khao Khát Nội Tâm → Động lực bên tron
                        </li>
                        <li className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg>
                            Số Ngày Sinh → Thế mạnh độc đáo
                        </li>
                    </ul>
                </div>
                
                <form id="numerology-form" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label for="birthdate" className="block text-sm font-medium text-gray-700 mb-1">Ngày Sinh Của Bạn</label>
                            <input type="date" id="birthdate" name="birthdate" className="number-input w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none" required=""/>
                        </div>
                        <div>
                            <label for="fullname" className="block text-sm font-medium text-gray-700 mb-1">Họ Tên Đầy Đủ</label>
                            <input type="text" id="Fullname" name="fullname" placeholder="Nhập họ tên của bạn" className="number-input w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none"/>
                        </div>
                    </div>
                    
                    <div className="text-center">
                        <button type="submit" className="cta-button px-8 py-4 bg-indigo-600 text-white rounded-full font-semibold text-lg shadow-lg">
                            <span className="flex items-center justify-center">
                                <span className="mr-2">Bắt Đầu Giải Mã Thần Số Học</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
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
<section className="py-16 bg-gray-50 hidden" id='wrapper-card'>
        <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Xem Những Con Số Nói Gì Về Bạn</h2>
                    <p className="text-lg text-gray-600">Đây là bản xem trước về bài đọc thần số học dành riêng cho bạn</p>
                </div>
                
                <div id="result-preview" className="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-8">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-bold text-gray-800">Bài Đọc Thần Số Học Của Bạn</h3>
                        <div className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm font-medium">Xem trước</div>
                    </div>
                    
                    <div id='card-container' className="space-y-8">
                        {/* <!-- Life Path Number Preview --> */}

                        
                        {value[0] != 0 ? value.map((value, index)=>(

                            <div className="result-card show">
                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4 shrink-0">
                                    <span className="text-indigo-600 font-bold text-xl">{value}</span>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-800 mb-2">{titleNum[index]} {value} – {descriptions[value].title}</h4>
                                    <p className="text-gray-600 mb-3">{descriptions[value].description}</p>
                                    <div className="bg-indigo-50 rounded-lg p-4">
                                        <h5 className="font-medium text-gray-800 mb-2">Your Key Traits:</h5>
                                        <ul className="space-y-1 text-gray-600">
                                            <li className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                                </svg>
                                                {descriptions[value].traits[0]}
                                            </li>
                                            <li className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                                </svg>
                                                {descriptions[value].traits[1]}
                                            </li>
                                            <li className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                                </svg>
                                                {descriptions[value].traits[2]}
                                            </li>
                                            <li className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
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
                    <div className="text-center mt-8">
                        <p className="text-lg font-medium text-indigo-600 mb-4">🔎 Muốn xem của bạn? Chỉ cần nhấn Bắt đầu!</p>
                        <a  id='ResetBtn' href="#numerology-tool" className="inline-block px-6 py-3 bg-indigo-100 text-indigo-600 rounded-lg font-medium hover:bg-indigo-200 transition-colors">Tính toán mới</a>
                        <button onClick={handleNavigate} className="inline-block px-6 py-3 bg-indigo-100 text-indigo-600 ml-5 rounded-lg font-medium hover:bg-indigo-200 transition-colors">
                        <svg  xmlns="http://www.w3.org/2000/svg" className="inline-block h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path>
                        </svg>
                            Hỏi Lumina
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Bắt Đầu Hành Trình Lifemap Cùng Những Con Số</h2>
                <p className="text-lg mb-8 opacity-90">Chỉ mất 30 giây để bắt đầu khám phá và thấu hiểu chính mình.</p>
                <a href="#numerology-tool" className="inline-block px-8 py-4 bg-white text-indigo-600 rounded-full font-semibold text-lg shadow-lg hover:bg-indigo-50 transition-colors">Bắt Đầu Hành Trình Với Những Con Số →</a>
            </div>
        </div>
    </section>

    <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">❓ Câu Hỏi Thường Gặp</h2>
                    <p className="text-lg text-gray-600">Những điều bạn cần biết về thần số học</p>
                </div>
                
                <div className="space-y-6">
                    <div className="bg-gray-50 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Thần số học là gì?</h3>
                        <p className="text-gray-600">Thần số học là nghiên cứu về các con số và ảnh hưởng của chúng đến cuộc sống con người. Mỗi con số mang một rung động và năng lượng riêng, tiết lộ thông tin về tính cách, tài năng và con đường cuộc đời của bạn.</p>
                    </div>
                    
                    <div className="bg-gray-50 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Thần số học có chính xác không?</h3>
                        <p className="text-gray-600">Nhiều người thấy kết quả thần số học khá chính xác và mang đến nhiều điều bất ngờ. Dù chưa được khoa học chứng minh, nó là một công cụ tuyệt vời để tự chiêm nghiệm và hiểu rõ xu hướng tự nhiên của bản thân.</p>
                    </div>
                    
                    <div className="bg-gray-50 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Số Đường Đời được tính thế nào?</h3>
                        <p className="text-gray-600">Số Đường Đời được tính bằng cách cộng tất cả các chữ số trong ngày sinh, rồi rút gọn về một chữ số (trừ các số chủ 11, 22, 33). Ví dụ: sinh ngày 15/6/1995 → 6+1+5+1+9+9+5 = 36 → 3+6 = 9.</p>
                    </div>
                    
                    <div className="bg-gray-50 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Thần số học có giúp định hướng học tập, nghề nghiệp không?</h3>
                        <p className="text-gray-600">Có! Nó cung cấp cái nhìn về tài năng tự nhiên và lĩnh vực bạn dễ thành công. Điều này giúp bạn chọn ngành học, nghề nghiệp phù hợp với thế mạnh bẩm sinh.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
    )
}
export default Numerology;