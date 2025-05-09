import "./BlogStyle.css"
import { useState, useRef, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import domtoimage from 'dom-to-image-more' 
import Sentances from "./Library";
function Report(){
    const [avatarUrl, setAvatarUrl] = useState(null);
    const [content, setContent] = useState(true);
   
    const location = useLocation()
    const key = location.state.key
    const User = (JSON.parse(localStorage.getItem('user')))[key];
    console.log(User)


    const DISC = {
    "D": "Nhóm Dominance (Thống trị) bao gồm những người quyết đoán, định hướng kết quả và thích kiểm soát. Họ thường là những nhà lãnh đạo tự nhiên, đưa ra quyết định nhanh chóng và đối mặt trực tiếp với thử thách. Tuy nhiên, họ có thể tỏ ra quá cứng rắn hoặc thiếu kiên nhẫn trong giao tiếp.",
    "I": "Nhóm Influence (Ảnh hưởng) gồm những người hướng ngoại, nhiệt tình và có khả năng giao tiếp xuất sắc. Họ giỏi xây dựng mối quan hệ, truyền cảm hứng và thường mang lại năng lượng tích cực cho môi trường xung quanh. Tuy nhiên, họ có thể thiếu chú ý đến chi tiết và dễ bị phân tâm.",
    "S": "Nhóm Steadiness (Ổn định) bao gồm những người kiên nhẫn, đáng tin cậy và hướng đến sự hỗ trợ. Họ coi trọng sự ổn định, hợp tác và thường là những người lắng nghe tốt, duy trì sự hòa hợp trong nhóm. Tuy nhiên, họ có thể gặp khó khăn khi đối mặt với thay đổi hoặc cần đưa ra quyết định nhanh chóng.",
    "C": "Nhóm Conscientiousness (Tận tâm) gồm những người chính xác, phân tích và tuân thủ quy tắc. Họ chú trọng đến chất lượng, chi tiết và thường suy nghĩ logic. Tuy nhiên, họ có thể quá cầu toàn và chậm trong việc ra quyết định do phân tích quá mức."
    };


    const Linking_words = {
    "connect_intro": [
      "Bên cạnh đó, bạn có ",
      "Ngoài ra, bạn có ",
      "Hơn nữa, bạn mang đến ",
      "Không chỉ vậy, bạn còn có "
    ],
    "connect_dev": [
      "Về mặt phát triển bản thân, ",
      "Để tiến xa hơn, ",
      "Trên hành trình hoàn thiện mình, ",
      "Để sống trọn vẹn hơn, "
    ],
    "connect_intro_2": [
        "Bên cạnh đó, bạn hãy ",
        "Ngoài ra, bạn nên ",
        "Hơn nữa, đừng ngần ngại ",
        "Không chỉ vậy, đừng quên "
      ],
  }


   function createRandomPicker(arr) {
        // Lưu lại các chỉ số hiện tại của phần tử chưa được chọn
        let availableIndices = arr.map((_, index) => index);
      
        return function() {
          if (availableIndices.length === 0) {
            return null;  // Hoặc ném lỗi khi đã hết giá trị
          }
          // Lấy chỉ số ngẫu nhiên trong availableIndices
          const randomPos = Math.floor(Math.random() * availableIndices.length);
          const chosenIndex = availableIndices[randomPos];
          // Loại bỏ chỉ số đó ra khỏi availableIndices
          availableIndices.splice(randomPos, 1);
          return arr[chosenIndex];
        };
      }

    const getRandom = createRandomPicker(Linking_words.connect_intro)
    const getRandom_2 = createRandomPicker(Linking_words.connect_dev)
    const getRandom_3 = createRandomPicker(Linking_words.connect_intro_2)

    function generatePersonalityDescription(data, n1, n2, n3, n4) {
    console.log(n1, n2, n3, n4)
    if(!n1 || !n2 || !n3 || !n4){
        return "Hãy sử dụng đầy đủ công cụ để có kết quả tổng hợp chính xác"
    }
    
    return `
        ${data.numerology[n1[0]].personality}
        ${getRandom()}${data.disc[n2].personality}
        ${getRandom()}${data.zodiac[n3[4][2]].personality}
        ${getRandom()}${data.destiny_matrix[n4[4]].personality}
        
    `;
    }

    function generateDevelopDescription(data, n1, n2, n3, n4){
        if(!n1 || !n2 || !n3 || !n4){
            return "Hãy sử dụng đầy đủ công cụ để có kết quả tổng hợp chính xác"
        }

        return `
        ${getRandom_2()}${data.numerology[n1[0]].development}
        ${getRandom_3()}${data.disc[n2].development}
        ${getRandom_3()}${data.zodiac[n3[4][2]].development}
        ${getRandom_3()}${data.destiny_matrix[n4[4]].development}
        `;
    }

    const des = useRef([
            generatePersonalityDescription(Sentances, User.numerology, User.highest_disc, User.horoscope, User.matrix),
            generateDevelopDescription(Sentances, User.numerology, User.highest_disc, User.horoscope, User.matrix)
    ])

    const handleScreenshot = async () => {
        
        const element = document.getElementById("report_screen");

        domtoimage.toPng(element, {
            bgcolor: '#000000', // Đặt nền đen
          }).then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `${key}_LifeMap.png`;
        link.href = dataUrl;
        
        link.click();
        });
      };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          
          reader.onloadend = () => {
            setAvatarUrl(reader.result);
          

            const storedUser = localStorage.getItem("user");
            const user = JSON.parse(storedUser);
            user[key].image = reader.result;
            localStorage.setItem("user", JSON.stringify(user));
          };
          
          reader.readAsDataURL(file);
        }
      };

    useEffect(()=>{
       const fir_page = document.getElementById('fir_page')
       const sec_page = document.getElementById('sec_page');
       const BtnSwap = document.getElementById('swapPage');

       const fir_page_report = document.getElementById('fir_page_report')
       const sec_page_report = document.getElementById('sec_page_report')

        if(BtnSwap){
            BtnSwap.addEventListener('click',()=>{
            fir_page.classList.toggle('hidden')
            sec_page.classList.toggle('hidden')

            fir_page_report.classList.toggle('hidden')
            sec_page_report.classList.toggle('hidden')
       })
        }


    },[])


    return(
        <>
        
        <div class="dashboard-container">
        {/* <!-- Header Section --> */}
        <header class="mb-10">
            <div class="flex flex-col md:flex-row items-center justify-center md:justify-between">
                <div class="flex flex-col md:flex-row items-center mb-6 md:mb-0">
                    <div class="avatar-container mb-4 md:mb-0 md:mr-6">
                        <img 
                            src={ avatarUrl || User.image  || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Ccircle cx='60' cy='60' r='60' fill='%23f0f0f0'/%3E%3Ccircle cx='60' cy='45' r='18' fill='%23d4d4d4'/%3E%3Cpath d='M30 100 Q60 85 90 100 L90 120 L30 120 Z' fill='%23d4d4d4'/%3E%3C/svg%3E"} alt="User Avatar" class="avatar" id="userAvatar"    
                        />
                    </div>
                    <div class="text-center md:text-left">
                        <h1 class="text-3xl md:text-4xl font-bold mb-1">{key}</h1>
                        <p class="text-lg text-gray-600">Personal Report — LifeMap</p>
                    </div>
                </div>
                <div class="flex space-x-3">
                    {/* <button class="btn btn-secondary" id="uploadAvatarBtn">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path>
                        </svg> */}

                        <input type="file" id="upload" style={{display: 'none'}} accept="image/*" onChange={handleImageChange}/>  
                        <label htmlFor="upload" className="btn text-white btn-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path>
                            </svg>
                            Tải Avatar
                        </label>
                        
                    {/* </button> */}
                    <button onClick={handleScreenshot} class="btn btn-primary" id="downloadBtn">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                        </svg>
                        Tải bản đồ
                    </button>
                </div>
            </div>
        </header>

        {/* <!-- Toggle Section --> */}
        <section class="mb-10">
            <div class={`toggle-container ${content ? "personality" : "development"}`} id="reportToggle">
                <div class="toggle-slider"></div>
                <div onClick={() => setContent(!content)}  class="toggle-option" data-toggle="personality">Tính Cách</div>
                <div onClick={() => setContent(!content)}  class="toggle-option" data-toggle="development">Phát Triển</div>
            </div>
            
            <div class="mt-8 card p-6" id="reportContent">
                {content ? (
                <div id="personalityContent" class="fade-enter-active">
                    <h2 class="text-2xl font-bold mb-4 text-center md:text-left">Tính Cách</h2>

                    <p>{des.current[0]}</p>
                </div>
                ) : (
                <div id="developmentContent" class="fade-enter-active">
                    <h2 class="text-2xl font-bold mb-4 text-center md:text-left">Hướng Phát Triển</h2>

                    <p>{des.current[1]}</p>
                </div>
                )}


            </div>
        </section>

        {/* <!-- Number Cards Section --> */}
        {User.numerology ? (
        <section class="mb-10">
            <h2 class="text-2xl font-bold mb-6 text-center md:text-left">Những Con Số Cốt Lõi Của Bạn</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="card p-6 glow">
                    <div class="flex flex-col items-center">
                        <div class="number-circle core-number mb-4">{User.numerology[0]}</div>
                        <h3 class="text-xl font-bold mb-2">Số Chủ Đạo</h3>
                        <p class="text-center text-gray-600">Đại diện cho bản chất bên trong và những đặc điểm tính cách nền tảng của bạn</p>
                    </div>
                </div>
                <div class="card p-6 glow">
                    <div class="flex flex-col items-center">
                        <div class="number-circle destiny-number mb-4">{User.numerology[1]}</div>
                        <h3 class="text-xl font-bold mb-2">Số Định Mệnh</h3>
                        <p class="text-center text-gray-600">Tiết lộ mục đích sống và con đường mà bạn được định sẵn để đi theo</p>
                    </div>
                </div>
                <div class="card p-6 glow">
                    <div class="flex flex-col items-center">
                        <div class="number-circle inner-number mb-4">{User.numerology[2]}</div>
                        <h3 class="text-xl font-bold mb-2">Số Nội Tâm</h3>
                        <p class="text-center text-gray-600">Phản ánh những khát vọng, ước mơ và điều thực sự thúc đẩy bạn</p>
                    </div>
                </div>
            </div>
        </section>
        ) : ""}


        {/* <!-- Horoscope Section --> */}
        
        {User.horoscope ? (
            <>
            <section class="mb-10">
            <h2 class="text-2xl font-bold mb-6 text-center md:text-left">Ảnh hưởng chiêm tinh</h2>
            <div class="card p-6">
                <div class="star-map mb-6" id="starMap">
                    {/* <!-- Stars will be generated by JavaScript --> */}
                <div class="star" style={{width: "2.46542px" ,height: "2.46542px" ,left: "89.5241%" ,top: "78.2409%" ,animationDelay: "0.259786s"}}></div><div class="star" style={{width: "1.12486px" ,height: "1.12486px" ,left: "73.4224%" ,top: "72.9995%" ,animationDelay: "0.517972s"}}></div><div class="star" style={{width: "1.80859px" ,height: "1.80859px" ,left: "60.6876%" ,top: "18.8628%" ,animationDelay: "3.19918s"}}></div><div class="star" style={{width: "1.79544px" ,height: "1.79544px" ,left: "11.167%" ,top: "73.5456%" ,animationDelay: "1.47528s"}}></div><div class="star" style={{width: "2.0671px" ,height: "2.0671px" ,left: "97.3985%" ,top: "31.215%" ,animationDelay: "2.45946s"}}></div><div class="star" style={{width: "2.55898px" ,height: "2.55898px" ,left: "46.7839%" ,top: "93.0462%" ,animationDelay: "0.588179s"}}></div><div class="star" style={{width: "2.33847px" ,height: "2.33847px" ,left: "27.1057%" ,top: "42.2%" ,animationDelay: "2.04952s"}}></div><div class="star" style={{width: "1.05292px" ,height: "1.05292px" ,left: "37.6952%" ,top: "95.1715%" ,animationDelay: "0.536363s"}}></div><div class="star" style={{width: "2.22268px" ,height: "2.22268px" ,left: "72.8823%" ,top: "64.3075%" ,animationDelay: "0.565945s"}}></div><div class="star" style={{width: "2.54189px" ,height: "2.54189px" ,left: "22.441%" ,top: "46.0035%" ,animationDelay: "2.52038s"}}></div><div class="star" style={{width: "1.78399px" ,height: "1.78399px" ,left: "82.2974%" ,top: "76.136%" ,animationDelay: "3.9382s"}}></div><div class="star" style={{width: "2.58667px" ,height: "2.58667px" ,left: "74.1856%" ,top: "50.123%" ,animationDelay: "2.83411s"}}></div><div class="star" style={{width: "2.66387px" ,height: "2.66387px" ,left: "22.7865%" ,top: "64.5007%" ,animationDelay: "0.121827s"}}></div><div class="star" style={{width: "1.60152px" ,height: "1.60152px" ,left: "61.4159%" ,top: "1.83748%" ,animationDelay: "2.73872s"}}></div><div class="star" style={{width: "2.44943px" ,height: "2.44943px" ,left: "67.9782%" ,top: "17.7711%" ,animationDelay: "2.61511s"}}></div><div class="star" style={{width: "2.54025px" ,height: "2.54025px" ,left: "89.5982%" ,top: "75.3047%" ,animationDelay: "3.66039s"}}></div><div class="star" style={{width: "1.93328px" ,height: "1.93328px" ,left: "91.6218%" ,top: "34.528%" ,animationDelay: "0.937337s"}}></div><div class="star" style={{width: "2.92308px" ,height: "2.92308px" ,left: "2.87089%" ,top: "11.4397%" ,animationDelay: "3.84725s"}}></div><div class="star" style={{width: "1.76923px" ,height: "1.76923px" ,left: "69.2516%" ,top: "7.02907%" ,animationDelay: "2.02548s"}}></div><div class="star" style={{width: "2.85049px" ,height: "2.85049px" ,left: "93.7602%" ,top: "88.3154%" ,animationDelay: "2.79996s"}}></div><div class="star" style={{width: "2.3034px" ,height: "2.3034px" ,left: "66.3406%" ,top: "22.3785%" ,animationDelay: "0.306889s"}}></div><div class="star" style={{width: "2.07472px" ,height: "2.07472px" ,left: "3.50401%" ,top: "95.7082%" ,animationDelay: "3.26536s"}}></div><div class="star" style={{width: "1.71534px" ,height: "1.71534px" ,left: "71.5433%" ,top: "7.49897%" ,animationDelay: "0.679801s"}}></div><div class="star" style={{width: "1.88663px" ,height: "1.88663px" ,left: "93.3228%" ,top: "41.1317%" ,animationDelay: "1.79306s"}}></div><div class="star" style={{width: "1.03466px" ,height: "1.03466px" ,left: "85.8471%" ,top: "84.7249%" ,animationDelay: "1.56907s"}}></div><div class="star" style={{width: "1.09379px" ,height: "1.09379px" ,left: "56.0853%" ,top: "72.145%" ,animationDelay: "2.44833s"}}></div><div class="star" style={{width: "2.1364px" ,height: "2.1364px" ,left: "90.1567%" ,top: "1.60326%" ,animationDelay: "2.49461s"}}></div><div class="star" style={{width: "1.40406px" ,height: "1.40406px" ,left: "23.792%" ,top: "45.6687%" ,animationDelay: "0.796446s"}}></div><div class="star" style={{width: "2.19491px" ,height: "2.19491px" ,left: "50.7355%" ,top: "25.3688%" ,animationDelay: "1.32134s"}}></div><div class="star" style={{width: "1.167px" ,height: "1.167px" ,left: "59.7035%" ,top: "24.6647%" ,animationDelay: "0.737745s"}}></div><div class="star" style={{width: "2.56478px" ,height: "2.56478px" ,left: "1.33943%" ,top: "17.4867%" ,animationDelay: "3.89875s"}}></div><div class="star" style={{width: "2.88985px" ,height: "2.88985px" ,left: "29.7673%" ,top: "8.64371%" ,animationDelay: "3.83278s"}}></div><div class="star" style={{width: "2.36131px" ,height: "2.36131px" ,left: "32.5319%" ,top: "70.1349%" ,animationDelay: "0.0671844s"}}></div><div class="star" style={{width: "1.0132px" ,height: "1.0132px" ,left: "53.391%" ,top: "44.8174%" ,animationDelay: "0.440709s"}}></div><div class="star" style={{width: "1.38096px" ,height: "1.38096px" ,left: "47.7176%" ,top: "55.0257%" ,animationDelay: "0.970643s"}}></div><div class="star" style={{width: "2.66898px" ,height: "2.66898px" ,left: "11.6519%" ,top: "6.70403%" ,animationDelay: "2.52066s"}}></div><div class="star" style={{width: "2.38702px" ,height: "2.38702px" ,left: "82.9591%" ,top: "15.0387%" ,animationDelay: "0.80734s"}}></div><div class="star" style={{width: "2.25852px" ,height: "2.25852px" ,left: "99.2203%" ,top: "21.8756%" ,animationDelay: "2.924s"}}></div><div class="star" style={{width: "1.7513px" ,height: "1.7513px" ,left: "38.2642%" ,top: "12.5045%" ,animationDelay: "2.59632s"}}></div><div class="star" style={{width: "1.73802px" ,height: "1.73802px" ,left: "3.60509%" ,top: "21.5557%" ,animationDelay: "3.34745s"}}></div><div class="star" style={{width: "2.81975px" ,height: "2.81975px" ,left: "44.2351%" ,top: "47.4479%" ,animationDelay: "3.69155s"}}></div><div class="star" style={{width: "1.842px" ,height: "1.842px" ,left: "35.2473%" ,top: "18.202%" ,animationDelay: "2.20124s"}}></div><div class="star" style={{width: "1.73139px" ,height: "1.73139px" ,left: "30.7167%" ,top: "18.7446%" ,animationDelay: "2.33307s"}}></div><div class="star" style={{width: "2.986px" ,height: "2.986px" ,left: "18.4524%" ,top: "66.9031%" ,animationDelay: "2.99348s"}}></div><div class="star" style={{width: "2.74421px" ,height: "2.74421px" ,left: "21.393%" ,top: "41.9837%" ,animationDelay: "1.72554s"}}></div><div class="star" style={{width: "2.55522px" ,height: "2.55522px" ,left: "75.9832%" ,top: "81.5808%" ,animationDelay: "3.0737s"}}></div><div class="star" style={{width: "2.28288px" ,height: "2.28288px" ,left: "19.6478%" ,top: "59.1565%" ,animationDelay: "2.32876s"}}></div><div class="star" style={{width: "2.89005px" ,height: "2.89005px" ,left: "23.7426%" ,top: "43.8207%" ,animationDelay: "2.96086s"}}></div><div class="star" style={{width: "1.30902px" ,height: "1.30902px" ,left: "97.4317%" ,top: "9.03357%" ,animationDelay: "3.19916s"}}></div><div class="star" style={{width: "2.07428px" ,height: "2.07428px" ,left: "35.6631%" ,top: "21.667%" ,animationDelay: "3.2612s"}}></div></div>
                
                <div id="swapPage" className="flex justify-between">
                    <h3 class="inline-block text-xl font-bold mb-4">Năng lượng các hành tinh</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" class="inline-block h-8 w-8 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                </div>
                

                <div>
                <div id="fir_page">
                    <div>
                        <div class="flex justify-between mb-2">
                            <span class="font-medium">Mặt trời</span>
                            <span>{User.horoscope[2][0].value}%</span>
                        </div>
                        <div class="bg-gray-200 rounded-full h-6 mb-5">
                            <div class="planet-bar h-6 rounded-full" style={{width: `${User.horoscope[2][0].value}%` ,background: "linear-gradient(90deg, rgb(255, 214, 165), rgb(255, 190, 123))"}}></div>
                        </div>
                    </div>
                    <div>
                        <div class="flex justify-between mb-2">
                            <span class="font-medium">Mặt trăng</span>
                            <span>{User.horoscope[2][1].value}%</span>
                        </div>
                        <div class="bg-gray-200 rounded-full mb-5 h-6">
                            <div class="planet-bar h-6 rounded-full" style={{width: `${User.horoscope[2][1].value}%` ,background: "linear-gradient(90deg, rgb(166, 227, 233), rgb(113, 201, 206))"}}></div>
                        </div>
                    </div>
                    <div>
                        <div class="flex justify-between mb-2">
                            <span class="font-medium">Sao Thủy</span>
                            <span>{User.horoscope[2][2].value}%</span>
                        </div>
                        <div class="bg-gray-200 rounded-full mb-5 h-6">
                            <div class="planet-bar h-6 rounded-full" style={{width: `${User.horoscope[2][2].value}%` ,background: "linear-gradient(90deg, rgb(226, 182, 207), rgb(201, 167, 235))"}}></div>
                        </div>
                    </div>
                    <div>
                        <div class="flex justify-between mb-2">
                            <span class="font-medium">Sao Kim</span>
                            <span>{User.horoscope[2][3].value}%</span>
                        </div>
                        <div class="bg-gray-200 rounded-full mb-5 h-6">
                            <div class="planet-bar h-6 rounded-full" style={{width: `${User.horoscope[2][3].value}%` ,background: "linear-gradient(90deg, rgb(255, 214, 224), rgb(255, 172, 199))"}}></div>
                        </div>
                    </div>
                    <div>
                        <div class="flex justify-between mb-2">
                            <span class="font-medium">Sao Hỏa</span>
                            <span>{User.horoscope[2][4].value}%</span>
                        </div>
                        <div class="bg-gray-200 rounded-full mb-5 h-6">
                            <div class="planet-bar h-6 rounded-full" style={{width: `${User.horoscope[2][4].value}%` ,background: "linear-gradient(90deg, rgb(255, 155, 155), rgb(255, 107, 107))"}}></div>
                        </div>
                    </div>

                </div>
                <div id="sec_page" className="hidden">
             
                        <div>
                        <div class="flex justify-between mb-2">
                            <span class="font-medium">Sao Mộc</span>
                            <span>{User.horoscope[2][5].value}%</span>
                        </div>
                        <div class="bg-gray-200 rounded-full mb-5 h-6">
                            <div class="planet-bar h-6 rounded-full" style={{width: `${User.horoscope[2][4].value}%` ,background: "linear-gradient(90deg, #FFDAC1, #FFBB94)"}}></div>
                        </div>
                    </div>
                    <div>
                        <div class="flex justify-between mb-2">
                            <span class="font-medium">Sao Thổ</span>
                            <span>{User.horoscope[2][6].value}%</span>
                        </div>
                        <div class="bg-gray-200 rounded-full mb-5 h-6">
                            <div class="planet-bar h-6 rounded-full" style={{width: `${User.horoscope[2][4].value}%` ,background: "linear-gradient(90deg, #B5EAD7, #8ED1B5)"}}></div>
                        </div>
                    </div>
                    <div>
                        <div class="flex justify-between mb-2">
                            <span class="font-medium">Thiên vương</span>
                            <span>{User.horoscope[2][7].value}%</span>
                        </div>
                        <div class="bg-gray-200 rounded-full mb-5 h-6">
                            <div class="planet-bar h-6 rounded-full" style={{width: `${User.horoscope[2][4].value}%` ,background: "linear-gradient(90deg, #C7CEEA, #A7B5EB)"}}></div>
                        </div>
                    </div>  
                    <div>
                        <div class="flex justify-between mb-2">
                            <span class="font-medium">Hải vương</span>
                            <span>{User.horoscope[2][8].value}%</span>
                        </div>
                        <div class="bg-gray-200 rounded-full mb-5 h-6">
                            <div class="planet-bar h-6 rounded-full" style={{width: `${User.horoscope[2][4].value}%` ,background: "linear-gradient(90deg, #E2B6CF, #C9A7EB)"}}></div>
                        </div>
                    </div> 
                     
                    <div>
                        <div class="flex justify-between mb-2">
                            <span class="font-medium">Diêm vương</span>
                            <span>{User.horoscope[2][9].value}%</span>
                        </div>
                        <div class="bg-gray-200 rounded-full mb-5 h-6">
                            <div class="planet-bar h-6 rounded-full" style={{width: `${User.horoscope[2][4].value}%` ,background: "linear-gradient(90deg, #FFB6B9, #FF8896)"}}></div>
                        </div>
                    </div>
              
                </div>
                   


                </div>
            </div>
        </section>

        <section class="mb-10">
          
            <div class="card p-6">
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    <div class="flex items-center">
                        <span class="planet-dot" style={{background: "linear-gradient(90deg, #FFD6A5, #FFBE7B)"}}></span>
                        <span>Mặt Trời</span>
                    </div>
                    <div class="flex items-center">
                        <span class="planet-dot" style={{background: "linear-gradient(90deg, #A6E3E9, #71C9CE)"}}></span>
                        <span>Mặt Trăng</span>
                    </div>
                    <div class="flex items-center">
                        <span class="planet-dot" style={{background: "linear-gradient(90deg, #E2B6CF, #C9A7EB)"}}></span>
                        <span>Sao Thủy</span>
                    </div>
                    <div class="flex items-center">
                        <span class="planet-dot" style={{background: "linear-gradient(90deg, #FFD6E0, #FFACC7)"}}></span>
                        <span>Sao Kim</span>
                    </div>
                    <div class="flex items-center">
                        <span class="planet-dot" style={{background: "linear-gradient(90deg, #FF9B9B, #FF6B6B)"}}></span>
                        <span>Sao Hỏa</span>
                    </div>
                    <div class="flex items-center">
                        <span class="planet-dot" style={{background: "linear-gradient(90deg, #FFDAC1, #FFBB94)"}}></span>
                        <span>Sao Mộc</span>
                    </div>
                    <div class="flex items-center">
                        <span class="planet-dot" style={{background: "linear-gradient(90deg, #B5EAD7, #8ED1B5)"}}></span>
                        <span>Sao Thổ</span>
                    </div>
                    <div class="flex items-center">
                        <span class="planet-dot" style={{background: "linear-gradient(90deg, #C7CEEA, #A7B5EB)"}}></span>
                        <span>Thiên vương</span>
                    </div>
                    <div class="flex items-center">
                        <span class="planet-dot" style={{background: "linear-gradient(90deg, #E2B6CF, #C9A7EB)"}}></span>
                        <span>Hải vương</span>
                    </div>
                    <div class="flex items-center">
                        <span class="planet-dot" style={{background: "linear-gradient(90deg, #FFB6B9, #FF8896)"}}></span>
                        <span>Diêm vương</span>
                    </div>
                </div>
                
                <div class="mt-6 p-4 bg-gray-50 rounded-lg">
                    <h4 class="font-bold mb-2">Hành tinh chủ đạo</h4>
                    <p>Vị trí của các thiên thể tại thời điểm bạn sinh ra tạo nên một bản thiết kế năng lượng độc đáo, ảnh hưởng đến tính cách và con đường đời của bạn. Biểu đồ của bạn cho thấy ảnh hưởng mạnh mẽ từ {User.horoscope[4][0]} - {User.horoscope[4][1]}</p>
                </div>
            </div>
        </section>
        </>
        ) : ""}

        {/* <!-- DISC Section --> */}
        {User.disc ? (
            <section class="mb-10">
            <h2 class="text-2xl font-bold mb-6 text-center md:text-left">Tỉ lệ tính cách DISC</h2>
            <div class="card p-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                        <div class="mb-6">
                            <div class="flex justify-between mb-2">
                                <span class="font-medium">Lãnh đạo  (D)</span>
                                <span>{User.disc[0][1]}%</span>
                            </div>
                            <div class="bg-gray-200 rounded-full">
                                <div class="disc-bar" style={{width: `${User.disc[0][1]}%` ,background: "linear-gradient(90deg, rgb(255, 182, 185), rgb(255, 136, 150))"}}></div>
                            </div>
                        </div>
                        <div class="mb-6">
                            <div class="flex justify-between mb-2">
                                <span class="font-medium">Ảnh hưởng (I)</span>
                                <span>{User.disc[1][1]}%</span>
                            </div>
                            <div class="bg-gray-200 rounded-full">
                                <div class="disc-bar" style={{width: `${User.disc[1][1]}%` ,background: "linear-gradient(90deg, rgb(255, 218, 193), rgb(255, 187, 148))"}}></div>
                            </div>
                        </div>
             
                        <div class="mb-6">
                            <div class="flex justify-between mb-2">
                                <span class="font-medium">Chăm sóc (S)</span>
                                <span>{User.disc[2][1]}%</span>
                            </div>
                            <div class="bg-gray-200 rounded-full">
                                <div class="disc-bar" style={{width: `${User.disc[2][1]}%` ,background: "linear-gradient(90deg, rgb(181, 234, 215), rgb(142, 209, 181))"}}></div>
                            </div>
                        </div>
                        <div class="mb-6">
                            <div class="flex justify-between mb-2">
                                <span class="font-medium">Tỉ mỉ (C)</span>
                                <span>{User.disc[3][1]}%</span>
                            </div>
                            <div class="bg-gray-200 rounded-full">
                                <div class="disc-bar" style={{width: `${User.disc[3][1]}%` ,background: "linear-gradient(90deg, rgb(199, 206, 234), rgb(167, 181, 235))"}}></div>
                            </div>
                        </div>
                
                </div>
                
                <div class="mt-6 p-4 bg-gray-50 rounded-lg">
                    <h4 class="font-bold mb-2">Tóm tắt báo cáo DISC</h4>
                    <p>{DISC[User.highest_disc]}</p>
                </div>
            </div>
        </section>
        ) : ""}

        {/* <!-- Destiny Matrix Section --> */}
       {User.matrix ? (
         <section class="mb-10">
            <h2 class="text-2xl font-bold mb-6 text-center md:text-left">Ma trận định mệnh</h2>
            <div class="card p-6">
                <div class="destiny-grid">
                <div className='mb-20 mx-auto  chart-wrapper-report'>
                <div class="mx-auto w-full"><div class="w-full mx-auto"><div class="w-full space-y-10 mx-chart"><div><div class="mb-5 flex justify-center"><div class="space-y-2"><div class="flex justify-center"><div class="flex justify-between items-center w-full"><button class="duration-300 ease-in-out inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-10 w-10 rounded-full p-2 hover:bg-gray-100" data-ph-capture-attribute-chart-nav="ChevronLeft" aria-label="Previous Group"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"></path></svg></button><button type="button" id="InteractiveDropdown" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-ph-capture-attribute-chart-nav="Menu" class="flex text-sm items-center justify-between rounded-lg bg-mx-storm px-5 py-2 text-mx-sand-a transition-all duration-200"><div class="flex mx-auto"><div class="flex w-fit space-x-2"><div class="flex place-items-center space-x-2 font-bold text-mx-sand-a text-nowrap">Apr 21, 2007</div><div aria-hidden="true" class="mx-2 h-5 w-[2px] bg-mx-sand-a/30"></div><div class="w-fit text-left overflow-clip text-nowrap">My Chart</div><div class="flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down" id="interactive-dropdown-chevron-down"><path d="m6 9 6 6 6-6"></path></svg></div></div></div></button><button class="duration-300 ease-in-out inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-10 w-10 rounded-full p-2 hover:bg-gray-100" data-ph-capture-attribute-chart-nav="ChevronRight" aria-label="Next Group"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"></path></svg></button></div></div></div></div><div class="aspect-square "><svg width="100%" height="100%" viewBox="0 0 811 811" fill="none" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer"><g id="www.thematrixofdestiny.com Chart"><g id="destiny-matrix-chart" transform="translate(22, 22)"><g opacity="0.12" id="shapes"><path d="M377 37.5889L716.411 377L377 716.411L37.5886 377L377 37.5889Z" stroke="#323C48" stroke-width="3.00278" stroke-linecap="round" stroke-linejoin="round"></path><rect x="137" y="137" width="480" height="480" stroke="#323C48" stroke-width="3.00278" stroke-linecap="round" stroke-linejoin="round"></rect><path d="M377 716.411V37.5889" stroke="#323C48" stroke-width="3.00278" stroke-linecap="round" stroke-linejoin="round"></path><path d="M137 617L617 137" stroke="#323C48" stroke-width="3.00278" stroke-linecap="round" stroke-linejoin="round"></path><path d="M37.5886 377H716.411" stroke="#323C48" stroke-width="3.00278" stroke-linecap="round" stroke-linejoin="round"></path><path d="M137 137L617 617" stroke="#323C48" stroke-width="3.00278" stroke-linecap="round" stroke-linejoin="round"></path><path id="loveLine" d="M377 617L497 497" stroke="#323C48" stroke-width="3.00278" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="3 6" class=""></path><path id="moneyLine" d="M497 497L617 377" stroke="#323C48" stroke-width="3.00278" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="3 6" class=""></path></g><g opacity="0.12" id="outsidelines"><path d="M363.798 5.74346C372.251 2.24206 381.749 2.24206 390.202 5.74346L630.183 105.147C638.636 108.648 645.352 115.364 648.853 123.817L748.256 363.798C751.758 372.251 751.758 381.749 748.256 390.202L648.853 630.183C645.352 638.636 638.636 645.352 630.183 648.853L390.202 748.256C381.749 751.758 372.251 751.758 363.798 748.256L123.817 648.853C115.364 645.352 108.648 638.636 105.147 630.183L5.74346 390.202C2.24206 381.749 2.24206 372.251 5.74346 363.798L105.147 123.817C108.648 115.364 115.364 108.648 123.817 105.147L363.798 5.74346Z" stroke="#323C48" stroke-width="3.00278" stroke-linejoin="round"></path></g>

                <g id="Chakras">
                    <g id="Group-G" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="G"><circle id="G-circle" cx="377" cy="377" r="52" fill="#FEF08A" class="transition-all duration-1000 ease-in-out"></circle><text id="G-text" class="fill-black text-4xl font-extrabold" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="377" y="377" fill="#000000" font-size="52" style={{whiteSpace: "pre"}}>{User.matrix[4]}</text></g>

                    <g id="Group-L" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="L"><circle id="L-circle" cx="437" cy="557" r="22.5" fill="#374151" class="transition-all duration-1000 ease-in-out"></circle><text id="L-text" class="fill-white text-md font-medium" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="437" y="557" fill="#fff" font-size="22.5" style={{whiteSpace: "pre"}}>{User.matrix[10]}</text></g>

                    <g id="Group-M" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="M"><circle id="M-circle" cx="557" cy="437" r="22.5" fill="#374151" class="transition-all duration-1000 ease-in-out"></circle><text id="M-text" class="fill-white text-md font-medium" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="557" y="437" fill="#fff" font-size="22.5" style={{whiteSpace: "pre"}}>{User.matrix[11]}</text></g>

                    <g id="Group-A8" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="A8"><circle id="A8-circle" cx="716.411" cy="377" r="36" fill="#f87171" class="transition-all duration-1000 ease-in-out"></circle><text id="A8-text" class="fill-black text-2xl font-bold" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="716.411" y="377" fill="#000" font-size="36" style={{whiteSpace: "pre"}}>{User.matrix[2]}</text></g>
                    
                    <g id="Group-A" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="A"><circle id="A-circle" cx="37.5887" cy="377" r="36" fill="#C084FC" class="transition-all duration-1000 ease-in-out"></circle><text id="A-text" class="fill-black text-2xl font-bold" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="37.5887" y="377" fill="#000" font-size="36" style={{whiteSpace: "pre"}}>{User.matrix[0]}</text></g>
                    
                    <g id="Group-A3" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="A3"><circle id="A3-circle" cx="249.5" cy="377" r="21" fill="#10B981" class="transition-all duration-1000 ease-in-out"></circle><text id="A3-text" class="fill-black text-md font-normal" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="249.5" y="377" fill="#000000" font-size="21" style={{whiteSpace: "pre"}}>{User.matrix[20]}</text></g>
                    
                    <g id="Group-A6" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="A6"><circle id="A6-circle" cx="617" cy="377" r="21" fill="#fb8a3c" class="transition-all duration-1000 ease-in-out"></circle><text id="A6-text" class="fill-black text-md font-normal" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="617" y="377" fill="#000000" font-size="21" style={{whiteSpace: "pre"}}>{User.matrix[8]}</text></g>
                    
                    <g id="Group-A2" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="A2"><circle id="A2-circle" cx="137" cy="377" r="21" fill="#7DD3FC" class="transition-all duration-1000 ease-in-out"></circle><text id="A2-text" class="fill-black text-md font-normal" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="137" y="377" fill="#000000" font-size="21" style={{whiteSpace: "pre"}}>{User.matrix[6]}</text></g>
                    
                    <g id="Group-A1" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="A1"><circle id="A1-circle" cx="94.7943" cy="377" r="22.5" fill="#3B82F6" class="transition-all duration-1000 ease-in-out"></circle><text id="A1-text" class="fill-black text-md font-medium" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="94.7943" y="377" fill="#000000" font-size="22.5" style={{whiteSpace: "pre"}}>{User.matrix[14]}</text>
                    
                    </g><g id="Group-A7" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="A7"><circle id="A7-circle" cx="659.206" cy="377" r="22.5" fill="#374151" class="transition-all duration-1000 ease-in-out"></circle><text id="A7-text" class="fill-white text-md font-medium" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="659.206" y="377" fill="#fff" font-size="22.5" style={{whiteSpace: "pre"}}>{User.matrix[15]}</text></g>
                    
                    <g id="Group-B" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="B"><circle id="B-circle" cx="377" cy="37.5889" r="36" fill="#C084FC" class="transition-all duration-1000 ease-in-out"></circle><text id="B-text" class="fill-black text-2xl font-bold" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="377" y="37.5889" fill="#000" font-size="36" style={{whiteSpace: "pre"}}>{User.matrix[1]}</text></g>
                    
                    <g id="Group-B2" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="B2"><circle id="B2-circle" cx="377" cy="137" r="21" fill="#7DD3FC" class="transition-all duration-1000 ease-in-out"></circle><text id="B2-text" class="fill-black text-md font-normal" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="377" y="137" fill="#000000" font-size="21" style={{whiteSpace: "pre"}}>{User.matrix[7]}</text></g>
                    
                    <g id="Group-B1" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="B1"><circle id="B1-circle" cx="377" cy="94.7944" r="22.5" fill="#3B82F6" class="transition-all duration-1000 ease-in-out"></circle><text id="B1-text" class="fill-black text-md font-medium" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="377" y="94.7944" fill="#000000" font-size="22.5" style={{whiteSpace: "pre"}}>{User.matrix[13]}</text></g>
                    
                    <g id="Group-B6" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="B6"><circle id="B6-circle" cx="377" cy="716.411" r="36" fill="#f87171" class="transition-all duration-1000 ease-in-out"></circle><text id="B6-text" class="fill-black text-2xl font-bold" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="377" y="716.411" fill="#000" font-size="36" style={{whiteSpace: "pre"}}>{User.matrix[3]}</text></g>
                    
                    <g id="Group-B4" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="B4"><circle id="B4-circle" cx="377" cy="617" r="21" fill="#fb8a3c" class="transition-all duration-1000 ease-in-out"></circle><text id="B4-text" class="fill-black text-md font-normal" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="377" y="617" fill="#000000" font-size="21" style={{whiteSpace: "pre"}}>{User.matrix[5]}</text></g>
                    
                    <g id="Group-B3" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="B3"><circle id="B3-circle" cx="377" cy="249.5" r="21" fill="#10B981" class="transition-all duration-1000 ease-in-out"></circle><text id="B3-text" class="fill-black text-md font-normal" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="377" y="249.5" fill="#000000" font-size="21" style={{whiteSpace: "pre"}}>{User.matrix[21]}</text></g>
                    
                    <g id="Group-B5" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="B5"><circle id="B5-circle" cx="377" cy="659.206" r="22.5" fill="#374151" class="transition-all duration-1000 ease-in-out"></circle><text id="B5-text" class="fill-white text-md font-medium" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="377" y="659.206" fill="#fff" font-size="22.5" style={{whiteSpace: "pre"}}>{User.matrix[12]}</text></g>
                    
                    <g id="Group-C" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="C"><circle id="C-circle" cx="137" cy="617" r="36" fill="#374151" class="transition-all duration-1000 ease-in-out"></circle><text id="C-text" class="fill-white text-2xl font-bold" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="137" y="617" fill="#fff" font-size="36" style={{whiteSpace: "pre"}}>{User.matrix[19]}</text></g>

                    <g id="Group-C2" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="C2"><circle id="C2-circle" cx="207.2945" cy="546.7055" r="21" fill="#374151" class="transition-all duration-1000 ease-in-out"></circle><text id="C2-text" class="fill-white text-md font-normal" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="207.2945" y="546.7055" fill="#fff" font-size="21" style={{whiteSpace: "pre"}}>{User.matrix[28]}</text></g>
                    
                    <g id="Group-C1" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="C1"><circle id="C1-circle" cx="177.4505" cy="576.5495" r="22.5" fill="#374151" class="transition-all duration-1000 ease-in-out"></circle><text id="C1-text" class="fill-white text-md font-medium" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="177.4505" y="576.5495" fill="#fff" font-size="22.5" style={{whiteSpace: "pre"}}>{User.matrix[29]}</text></g>
                    
                    <g id="Group-C5" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="C5"><circle id="C5-circle" cx="617" cy="137" r="36" fill="#374151" class="transition-all duration-1000 ease-in-out"></circle><text id="C5-text" class="fill-white text-2xl font-bold" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="617" y="137" fill="#fff" font-size="36" style={{whiteSpace: "pre"}}>{User.matrix[17]}</text></g>
                    
                    
                    
                    <g id="Group-C3" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="C3"><circle id="C3-circle" cx="546.7055" cy="207.2945" r="21" fill="#374151" class="transition-all duration-1000 ease-in-out"></circle><text id="C3-text" class="fill-white text-md font-normal" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="546.7055" y="207.2945" fill="#fff" font-size="21" style={{whiteSpace: "pre"}}>{User.matrix[24]}</text></g>
                    
                    <g id="Group-C4" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="C4"><circle id="C4-circle" cx="576.5495" cy="177.4505" r="22.5" fill="#374151" class="transition-all duration-1000 ease-in-out"></circle><text id="C4-text" class="fill-white text-md font-medium" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="576.5495" y="177.4505" fill="#fff" font-size="22.5" style={{whiteSpace: "pre"}}>{User.matrix[25]}</text></g>
                    
                    <g id="Group-D6" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="D6"><circle id="D6-circle" cx="617" cy="617" r="36" fill="#374151" class="transition-all duration-1000 ease-in-out"></circle><text id="D6-text" class="fill-white text-2xl font-bold" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="617" y="617" fill="#fff" font-size="36" style={{whiteSpace: "pre"}}>{User.matrix[18]}</text></g>
                    
                    
                    
                    <g id="Group-D4" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="D4"><circle id="D4-circle" cx="546.7055" cy="546.706" r="22.5" fill="#374151" class="transition-all duration-1000 ease-in-out"></circle><text id="D4-text" class="fill-white text-md font-medium" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="546.7055" y="546.706" fill="#fff" font-size="22.5" style={{whiteSpace: "pre"}}>{User.matrix[26]}</text></g>
                    
                    <g id="Group-D5" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="D5"><circle id="D5-circle" cx="576.5495" cy="576.5495" r="22.5" fill="#374151" class="transition-all duration-1000 ease-in-out"></circle><text id="D5-text" class="fill-white text-md font-medium" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="576.5495" y="576.5495" fill="#fff" font-size="22.5" style={{whiteSpace: "pre"}}>{User.matrix[27]}</text></g>
                    
                    <g id="Group-D" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="D"><circle id="D-circle" cx="137" cy="137" r="36" fill="#374151" class="transition-all duration-1000 ease-in-out"></circle><text id="D-text" class="fill-white text-2xl font-bold" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="137" y="137" fill="#fff" font-size="36" style={{whiteSpace: "pre"}}>{User.matrix[16]}</text></g>
                    
                    <g id="Group-D2" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="D2"><circle id="D2-circle" cx="207.2945" cy="207.2945" r="21" fill="#374151" class="transition-all duration-1000 ease-in-out"></circle><text id="D2-text" class="fill-white text-md font-normal" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="207.2945" y="207.2945" fill="#fff" font-size="21" style={{whiteSpace: "pre"}}>{User.matrix[22]}</text></g>
                    
                    <g id="Group-D1" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="D1"><circle id="D1-circle" cx="177.4505" cy="177.4505" r="22.5" fill="#374151" class="transition-all duration-1000 ease-in-out"></circle><text id="D1-text" class="fill-white text-md font-medium" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="177.4505" y="177.4505" fill="#fff" font-size="22.5" style={{whiteSpace: "pre"}}>{User.matrix[23]}</text></g>
                    
                    <g id="Group-D3" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="D3"><circle id="D3-circle" cx="497" cy="497" r="22.5" fill="#374151" class="transition-all duration-1000 ease-in-out"></circle><text id="D3-text" class="fill-white text-md font-medium" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="497" y="497" fill="#fff" font-size="22.5" style={{whiteSpace: "pre"}}>{User.matrix[9]}</text></g></g><g id="Icons"><g id="Heart" class=""><path d="M397 524.137C397 529 401.02 531.591 403.962 533.911C405 534.729 406 535.5 407 535.5C408 535.5 409 534.73 410.038 533.91C412.981 531.592 417 529 417 524.138C417 519.275 411.5 515.826 407 520.502C402.5 515.825 397 519.274 397 524.137Z" fill="#FC5555"></path></g><g id="$" class=""><path d="M527 396.5V416.5" stroke="#07CF7F" stroke-width="2" stroke-linejoin="round"></path><path d="M532 399.5H524.5C523.572 399.5 522.682 399.869 522.025 400.525C521.369 401.182 521 402.072 521 403C521 403.928 521.369 404.818 522.025 405.475C522.682 406.131 523.572 406.5 524.5 406.5H529.5C530.428 406.5 531.318 406.869 531.975 407.525C532.631 408.182 533 409.072 533 410C533 410.928 532.631 411.818 531.975 412.475C531.318 413.131 530.428 413.5 529.5 413.5H521" stroke="#07CF7F" stroke-width="2" stroke-linejoin="round"></path></g></g>

                <g id="logo" transform="translate(604, 684)"><path d="M34.292 53.278h6.922c8.211 0 11.807-4.645 11.807-9.433 0-5.088-3.642-9.637-11.806-9.637h-6.923c.148 1.004.2 1.885.2 3.23v12.616c0 1.345-.052 2.22-.2 3.224zm5.501-.636V34.82h1.422c4.35 0 6.183 3.326 6.183 9.025 0 5.4-1.834 8.797-6.184 8.797h-1.42zm21.734 1.105c2.909 0 5.7-1.86 6.749-5.623L67.838 48c-.708 2.175-2.323 3.47-4.156 3.47-2.664 0-4.11-2.813-4.376-5.624h8.776c-.101-3.616-3.157-5.674-6.433-5.674-3.52 0-6.967 2.424-6.967 6.677 0 4.182 3.3 6.897 6.845 6.897zm-2.272-8.827c0-2.69.805-4.156 2.252-4.156 1.319 0 1.88 1.268 1.905 4.446h-4.157v-.29zm16.941 8.827c3.01 0 5.919-1.273 5.919-3.937 0-4.6-8.654-4.793-8.654-7.656 0-.805.657-1.345 1.686-1.345 1.268 0 2.027.958 2.715 1.982.463.662 1.075 1.37 2.098 1.37 1.126 0 1.737-.932 1.717-2.104-1.615-1.171-3.963-1.884-6.138-1.884-3.275 0-5.333 1.395-5.333 3.718 0 4.6 8.267 4.818 8.267 7.778 0 .876-.759 1.441-1.859 1.441-1.248 0-2.277-.784-3.153-2.837-.443-.932-1.248-1.467-2.103-1.467-.709 0-1.32.367-1.763 1.172.76 2.592 3.744 3.769 6.601 3.769zm12.984 0c2.76 0 4.497-2.078 4.94-5.893h-.463c-.296 2.297-1.203 3.616-2.47 3.616-.979 0-1.59-.952-1.59-2.47v-7.702h4.009v-.636H85.71c3.52-.657 4.665-2.954 4.665-5.231H85.88c0 3.84-.316 5.23-2.297 5.23h-.296v.637h1.808v8.069c0 2.714 1.544 4.38 4.086 4.38zm6.87-.469h4.962c-.148-1.023-.194-1.93-.194-3.224v-6.163c0-1.294.046-2.2.194-3.23H96.05c.148 1.03.194 1.936.194 3.23v6.163c0 1.294-.046 2.2-.194 3.224zm-.122-16.426l2.613 2.516 2.567-2.516-2.567-2.521-2.613 2.52zm17.237 16.426h4.889c-.173-1.023-.219-1.93-.219-3.224v-5.577c0-2.735-1.344-4.304-3.596-4.304-1.884 0-3.764 1.125-4.813 2.766.02-.856.097-1.539.193-2.277h-4.889c.148 1.029.193 1.935.193 3.229v6.163c0 1.294-.045 2.2-.193 3.224h4.889c-.147-1.023-.193-1.93-.193-3.224V43.82c.606-1.055 1.538-1.712 2.419-1.712.999 0 1.513.734 1.513 2.348v5.598c0 1.294-.046 2.2-.193 3.224zm8.75 6.041c2.445 0 3.866-1.151 5.037-4.034l4.085-9.83c.561-1.416.856-2.104.978-3.077.072-.417.123-.81.097-1.446a2.384 2.384 0 00-1.711-.708c-.907 0-1.661.54-1.661 1.563 0 1.422 1.391 1.86 1.391 3.301 0 .611-.27 1.467-.637 2.399l-1.467 3.59-1.589-4.716c-.586-1.808-1.1-3.596-.881-5.7h-5.868c.347.785.983 2.278 1.544 4.086l2.76 8.531h3.133l-.708 1.686c-.861 2.13-1.691 2.863-2.766 2.863-1.859 0-1.885-2.226-3.835-2.226-1.055 0-1.788.662-2.007 2.154.952.83 2.322 1.564 4.105 1.564zM20.306 46.88c2.165 0 3.494-1.522 3.494-3.3 0-1.782-1.32-3.29-3.494-3.29-2.17 0-3.49 1.508-3.49 3.29 0 1.778 1.33 3.3 3.49 3.3zm-2.17-3.3c0-1.945.871-3.117 2.17-3.117 1.304 0 2.175 1.172 2.175 3.117 0 1.94-.881 3.123-2.175 3.123-1.289 0-2.17-1.182-2.17-3.123zm6.698 3.163h1.156a7.565 7.565 0 01-.06-1.074v-2.93h1.115v-.182h-1.116l-.183-1.07c-.072-.616.122-1.075.54-1.075.26 0 .504.245.784.52.138.163.306.295.545.295.306 0 .453-.244.52-.565-.612-.29-1.131-.438-1.564-.438-.988 0-1.67.596-1.67 1.803v.53h-.587v.183h.586v2.929c0 .433-.015.733-.066 1.074zM32.112 25.931h.76l7.334-17.307v13.813c0 1.345-.046 2.226-.194 3.225h5.72c-.147-.999-.193-1.88-.193-3.225V9.821c0-1.345.046-2.226.193-3.224h-5.378l-5.282 12.346-5.135-12.346h-5.694c.148.973.194 1.833.194 3.224v7.778c0 2.735-.27 6.158-.734 8.063h2.13c-.464-1.951-.734-5.328-.734-8.043V8.818l7.013 17.113zm20.048.2c1.834 0 3.84-1.101 4.87-3.744 0 1.125.096 2.348.29 3.275h4.767c-.56-1.513-.682-2.297-.682-4.396v-3.647c0-3.199-2.348-5.058-6.066-5.058-2.175 0-4.447.683-6.235 1.758-.02 1.787.566 2.617 1.712 2.617 1.176 0 1.762-.784 2.276-1.64.56-.927 1.223-2.149 2.491-2.149.978 0 1.543.733 1.543 1.885 0 2.22-1.981 2.857-3.988 3.494-2.297.759-4.69 1.467-4.69 4.105 0 2.226 1.756 3.5 3.712 3.5zm.688-4.697c0-1.37.759-2.053 2.297-2.908 1.003-.49 1.518-.708 1.86-1.274v3.23c0 2.225-1.249 3.203-2.349 3.203-.927 0-1.808-.687-1.808-2.251zm16.11 4.696c2.761 0 4.498-2.078 4.941-5.893h-.469c-.29 2.297-1.197 3.616-2.465 3.616-.978 0-1.589-.952-1.589-2.465v-7.706h4.009v-.632h-7.9c3.524-.662 4.67-2.96 4.67-5.236h-4.497c0 3.84-.316 5.236-2.297 5.236h-.296v.632h1.809v8.073c0 2.71 1.543 4.375 4.085 4.375zm6.795-.468h4.89c-.143-1.024-.194-1.93-.194-3.225v-4.35c.856-2.057 2.496-2.057 3.84-2.057 1.294 0 2.079-1.05 2.079-2.124a2.65 2.65 0 00-.346-1.32c-2.787 0-4.28 1.096-5.573 4.524v-.836c0-1.293.051-2.2.194-3.224h-4.89c.148 1.024.199 1.93.199 3.224v6.163c0 1.294-.051 2.2-.199 3.225zm12.469 0h4.966c-.148-1.024-.199-1.93-.199-3.225v-6.163c0-1.293.051-2.2.199-3.224h-4.966c.148 1.024.199 1.93.199 3.224v6.163c0 1.294-.052 2.2-.2 3.225zM88.1 9.235l2.618 2.516 2.567-2.516-2.567-2.516L88.1 9.235zm14.526 16.427h6.061c-.56-.708-1.049-1.416-2.297-3.372l-2.007-3.082c1.299-.876 2.741-2.348 3.301-4.13.199-.56.295-1.152.295-1.763a2.463 2.463 0 00-1.737-.708c-.906 0-1.66.54-1.66 1.569 0 1.146.902 1.66.902 2.638 0 .662-.489 1.248-1.391 1.982l-1.299-1.982c-.978-1.538-1.66-2.714-1.737-3.764h-6.06c.539.683 1.002 1.37 2.296 3.347l2.374 3.621-.688.881c-1.93 2.588-3.3 4.228-3.81 4.763h3.668c-.123-1.095-.347-2.955.707-4.421l.49-.663.901 1.396c.907 1.441 1.615 2.638 1.691 3.688zM2.5 19.34h1.497a7.549 7.549 0 01-.077-1.206v-5.766c.8.025 1.462.137 2.165.438l.24-.617H.181l.239.617c.703-.3 1.365-.413 2.155-.438v5.766c0 .504-.02.835-.077 1.207zm7.7 0h1.294a7.842 7.842 0 01-.071-1.206v-2.099c0-1.003-.494-1.553-1.304-1.553-.703 0-1.4.432-1.803 1.084V13.31c0-.489.015-.825.071-1.212H7.093c.056.387.077.723.077 1.212v4.824c0 .483-.02.825-.077 1.207h1.294a7.85 7.85 0 01-.071-1.207V15.83c.29-.514.749-.835 1.197-.835.489 0 .764.341.764 1.039v2.099c0 .483-.02.825-.077 1.207zm4.432.159c1.054 0 2.007-.734 2.338-2.038l-.138-.025c-.24.891-.902 1.467-1.68 1.467-1.09 0-1.732-1.172-1.732-2.404v-.01h3.422c-.04-1.228-1.039-2.008-2.195-2.008-1.273 0-2.42.963-2.42 2.47 0 1.503 1.131 2.547 2.405 2.547zm-1.202-3.2c.046-1.008.514-1.64 1.192-1.64.621 0 .983.546 1.008 1.64h-2.2z" fill="#323C48" opacity="1"></path>
                </g>
                
                </g>
                <g id="cycles" transform="translate(-8, -5)"><g id="dots-and-energies"><g id="d-and-e-0"><circle cx="48.1769" cy="359.324" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="28.176900000000003" y="361.324" class="fill-chakras-root text-xs">7</text><circle cx="59.9399" cy="330.642" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="39.9399" y="332.642" class="fill-chakras-root text-xs">4</text><circle cx="71.7029" cy="301.96000000000004" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="51.7029" y="303.96000000000004" class="fill-chakras-root text-xs">14</text><circle cx="83.4659" cy="273.278" r="3.25" fill="#D9D9D9" stroke="#000" stroke-width="0.5"></circle><text x="63.465900000000005" y="275.278" class="fill-chakras-root text-sm font-bold">10</text><circle cx="95.22890000000001" cy="244.596" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="75.22890000000001" y="246.596" class="fill-chakras-root text-xs">9</text><circle cx="106.9919" cy="215.91400000000002" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="86.9919" y="217.91400000000002" class="fill-chakras-root text-xs">17</text><circle cx="118.7549" cy="187.23200000000003" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="98.7549" y="189.23200000000003" class="fill-chakras-root text-xs">6</text></g><g id="d-and-e-10"><circle cx="194.384" cy="114.807" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="184.384" y="104.807" class="fill-chakras-root text-xs">7</text><circle cx="222.101" cy="103.327" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="212.101" y="93.327" class="fill-chakras-root text-xs">18</text><circle cx="249.81799999999998" cy="91.84700000000001" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="239.81799999999998" y="81.84700000000001" class="fill-chakras-root text-xs">11</text><circle cx="277.53499999999997" cy="80.367" r="3.25" fill="#D9D9D9" stroke="#000" stroke-width="0.5"></circle><text x="267.53499999999997" y="70.367" class="fill-chakras-root text-sm font-bold">11</text><circle cx="305.25199999999995" cy="68.887" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="295.25199999999995" y="58.887" class="fill-chakras-root text-xs">8</text><circle cx="332.96899999999994" cy="57.407" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="322.96899999999994" y="47.407" class="fill-chakras-root text-xs">15</text><circle cx="360.686" cy="45.92700000000001" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="350.686" y="35.92700000000001" class="fill-chakras-root text-xs">19</text></g><g id="d-and-e-20"><circle cx="453.649" cy="46.1904" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="458.649" y="36.1904" class="fill-chakras-root text-xs">7</text><circle cx="481.365" cy="57.6704" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="486.365" y="47.6704" class="fill-chakras-root text-xs">21</text><circle cx="509.081" cy="69.15039999999999" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="514.081" y="59.15039999999999" class="fill-chakras-root text-xs">11</text><circle cx="536.797" cy="80.6304" r="3.25" fill="#D9D9D9" stroke="#000" stroke-width="0.5"></circle><text x="541.797" y="70.6304" class="fill-chakras-root text-sm font-bold">17</text><circle cx="564.513" cy="92.1104" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="569.513" y="82.1104" class="fill-chakras-root text-xs">20</text><circle cx="592.229" cy="103.5904" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="597.229" y="93.5904" class="fill-chakras-root text-xs">3</text><circle cx="619.9449999999999" cy="115.07039999999999" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="624.9449999999999" y="105.07039999999999" class="fill-chakras-root text-xs">16</text></g><g id="d-and-e-30"><circle cx="693.325" cy="185.381" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="705.325" y="187.381" class="fill-chakras-root text-xs">21</text><circle cx="705.086" cy="214.064" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="717.086" y="216.064" class="fill-chakras-root text-xs">8</text><circle cx="716.8470000000001" cy="242.747" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="728.8470000000001" y="244.747" class="fill-chakras-root text-xs">3</text><circle cx="728.6080000000001" cy="271.43" r="3.25" fill="#D9D9D9" stroke="#000" stroke-width="0.5"></circle><text x="740.6080000000001" y="273.43" class="fill-chakras-root text-sm font-bold">22</text><circle cx="740.369" cy="300.113" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="752.369" y="302.113" class="fill-chakras-root text-xs">8</text><circle cx="752.13" cy="328.796" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="764.13" y="330.796" class="fill-chakras-root text-xs">4</text><circle cx="763.8910000000001" cy="357.47900000000004" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="775.8910000000001" y="359.47900000000004" class="fill-chakras-root text-xs">13</text></g><g id="d-and-e-40"><circle cx="691.187" cy="627.581" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="703.187" y="631.581" class="fill-chakras-root text-xs">21</text><circle cx="702.95" cy="598.899" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="714.95" y="602.899" class="fill-chakras-root text-xs">5</text><circle cx="714.713" cy="570.217" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="726.713" y="574.217" class="fill-chakras-root text-xs">12</text><circle cx="726.476" cy="541.5350000000001" r="3.25" fill="#D9D9D9" stroke="#000" stroke-width="0.5"></circle><text x="738.476" y="545.5350000000001" class="fill-chakras-root text-sm font-bold">7</text><circle cx="738.239" cy="512.8530000000001" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="750.239" y="516.8530000000001" class="fill-chakras-root text-xs">5</text><circle cx="750.002" cy="484.17100000000005" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="762.002" y="488.17100000000005" class="fill-chakras-root text-xs">16</text><circle cx="761.765" cy="455.48900000000003" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="773.765" y="459.48900000000003" class="fill-chakras-root text-xs">7</text></g><g id="d-and-e-50"><circle cx="453.649" cy="760.137" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="453.649" y="780.137" class="fill-chakras-root text-xs">19</text><circle cx="481.366" cy="748.6569999999999" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="481.366" y="768.6569999999999" class="fill-chakras-root text-xs">12</text><circle cx="509.08299999999997" cy="737.1769999999999" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="509.08299999999997" y="757.1769999999999" class="fill-chakras-root text-xs">17</text><circle cx="536.8" cy="725.6969999999999" r="3.25" fill="#D9D9D9" stroke="#000" stroke-width="0.5"></circle><text x="536.8" y="745.6969999999999" class="fill-chakras-root text-sm font-bold">5</text><circle cx="564.517" cy="714.217" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="564.517" y="734.217" class="fill-chakras-root text-xs">8</text><circle cx="592.2339999999999" cy="702.737" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="592.2339999999999" y="722.737" class="fill-chakras-root text-xs">21</text><circle cx="619.951" cy="691.257" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="619.951" y="711.257" class="fill-chakras-root text-xs">10</text></g><g id="d-and-e-60"><circle cx="194.38" cy="692.19" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="189.38" y="712.19" class="fill-chakras-root text-xs">19</text><circle cx="222.09699999999998" cy="703.671" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="217.09699999999998" y="723.671" class="fill-chakras-root text-xs">9</text><circle cx="249.814" cy="715.152" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="244.814" y="735.152" class="fill-chakras-root text-xs">8</text><circle cx="277.531" cy="726.633" r="3.25" fill="#D9D9D9" stroke="#000" stroke-width="0.5"></circle><text x="272.531" y="746.633" class="fill-chakras-root text-sm font-bold">17</text><circle cx="305.248" cy="738.114" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="300.248" y="758.114" class="fill-chakras-root text-xs">5</text><circle cx="332.965" cy="749.595" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="327.965" y="769.595" class="fill-chakras-root text-xs">6</text><circle cx="360.682" cy="761.076" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="355.682" y="781.076" class="fill-chakras-root text-xs">13</text></g><g id="d-and-e-70"><circle cx="51.1869" cy="453.641" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="31.1869" y="457.641" class="fill-chakras-root text-xs">10</text><circle cx="62.9499" cy="482.322" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="42.9499" y="486.322" class="fill-chakras-root text-xs">7</text><circle cx="74.7129" cy="511.00300000000004" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="54.712900000000005" y="515.003" class="fill-chakras-root text-xs">11</text><circle cx="86.4759" cy="539.684" r="3.25" fill="#D9D9D9" stroke="#000" stroke-width="0.5"></circle><text x="66.4759" y="543.684" class="fill-chakras-root text-sm font-bold">4</text><circle cx="98.2389" cy="568.365" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="78.2389" y="572.365" class="fill-chakras-root text-xs">18</text><circle cx="110.0019" cy="597.046" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="90.0019" y="601.046" class="fill-chakras-root text-xs">14</text><circle cx="121.76490000000001" cy="625.7270000000001" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="101.76490000000001" y="629.7270000000001" class="fill-chakras-root text-xs">6</text></g></g><g id="chart-cycles"><g id="ranges"><g id="age-8-9"><text x="127" y="202" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>8-9</text><text x="115" y="223" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>7-8</text><text x="108" y="248" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>6-7</text><text x="84" y="306" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>3-4</text><text x="72" y="335" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>2-3</text><text x="60" y="362" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>1-2</text></g><g id="age-18-19"><text x="344" y="61" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>18-19</text><text x="318" y="75" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>17-18</text><text x="294" y="85" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>16-17</text><text x="256" y="105" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>13-14</text><text x="222" y="120" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>12-13</text><text x="193" y="133" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>11-12</text></g><g id="age-21-22"><text x="446" y="65" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>21-22</text><text x="468" y="77" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>22-23</text><text x="488" y="87" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>23-24</text><text x="542" y="109" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>26-27</text><text x="570" y="120" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>27-28</text><text x="598" y="131" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>28-29</text></g><g id="age-31-32"><text x="688" y="205" class="fill-slate-600 text-[8px]" text-anchor="end" style={{fill: "rgb(71, 85, 105)"}}>31-32</text><text x="701" y="224" class="fill-slate-600 text-[8px]" text-anchor="end" style={{fill: "rgb(71, 85, 105)"}}>32-33</text><text x="706" y="248" class="fill-slate-600 text-[8px]" text-anchor="end" style={{fill: "rgb(71, 85, 105)"}}>33-34</text><text x="732" y="306" class="fill-slate-600 text-[8px]" text-anchor="end" style={{fill: "rgb(71, 85, 105)"}}>36-37</text><text x="745" y="335" class="fill-slate-600 text-[8px]" text-anchor="end" style={{fill: "rgb(71, 85, 105)"}}>37-38</text><text x="758" y="362" class="fill-slate-600 text-[8px]" text-anchor="end" style={{fill: "rgb(71, 85, 105)"}}>38-39</text></g><g id="age-41-42"><text x="750" y="456" class="fill-slate-600 text-[8px]" text-anchor="end" style={{fill: "rgb(71, 85, 105)"}}>41-42</text><text x="738" y="485" class="fill-slate-600 text-[8px]" text-anchor="end" style={{fill: "rgb(71, 85, 105)"}}>42-43</text><text x="726" y="514" class="fill-slate-600 text-[8px]" text-anchor="end" style={{fill: "rgb(71, 85, 105)"}}>43-44</text><text x="702" y="572" class="fill-slate-600 text-[8px]" text-anchor="end" style={{fill: "rgb(71, 85, 105)"}}>46-47</text><text x="695" y="589" class="fill-slate-600 text-[8px]" text-anchor="end" style={{fill: "rgb(71, 85, 105)"}}>47-48</text><text x="688" y="606" class="fill-slate-600 text-[8px]" text-anchor="end" style={{fill: "rgb(71, 85, 105)"}}>48-49</text></g><g id="age-51-52"><text x="626" y="683" class="fill-slate-600 text-[8px]" text-anchor="end" style={{fill: "rgb(71, 85, 105)"}}>51-52</text><text x="602" y="694" class="fill-slate-600 text-[8px]" text-anchor="end" style={{fill: "rgb(71, 85, 105)"}}>52-53</text><text x="574" y="707" class="fill-slate-600 text-[8px]" text-anchor="end" style={{fill: "rgb(71, 85, 105)"}}>53-54</text><text x="515" y="726" class="fill-slate-600 text-[8px]" text-anchor="end" style={{fill: "rgb(71, 85, 105)"}}>56-57</text><text x="491" y="738" class="fill-slate-600 text-[8px]" text-anchor="end" style={{fill: "rgb(71, 85, 105)"}}>57-58</text><text x="470" y="750" class="fill-slate-600 text-[8px]" text-anchor="end" style={{fill: "rgb(71, 85, 105)"}}>58-59</text></g><g id="age-68-69"><text x="190" y="683" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>68-69</text><text x="219" y="694" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>67-68</text><text x="242" y="707" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>66-67</text><text x="301" y="726" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>63-64</text><text x="320" y="738" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>62-63</text><text x="345" y="750" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>61-62</text></g><g id="age-78-79"><text x="65" y="456" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>78-79</text><text x="76" y="484" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>77-78</text><text x="87" y="512" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>76-77</text><text x="109" y="568" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>73-74</text><text x="118" y="591" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>72-73</text><text x="126" y="608" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>71-72</text></g></g><g id="quintuple-cycles"><g id="age-0"><text x="19" y="398" class="fill-black text-[8px] font-semibold" text-anchor="middle">0</text><text x="19" y="408" class="fill-black text-[8px] font-semibold" text-anchor="middle">years</text><text x="19" y="418" class="fill-black text-[8px] font-semibold" text-anchor="middle">old</text></g><g id="age-5"><g id="quantuple-age-5"><text x="104" y="273" class="fill-black text-[8px] font-semibold" text-anchor="end">5</text><text x="107" y="273" class="fill-black text-[8px] font-semibold" text-anchor="start">years</text><text x="107" y="283" class="fill-black text-[8px] font-semibold" text-anchor="start">old</text></g></g><g id="age-10"><text x="123" y="122" class="fill-black text-[8px] font-semibold" text-anchor="middle">10</text><text x="123" y="132" class="fill-black text-[8px] font-semibold" text-anchor="middle">years old</text></g><g id="age-15"><g id="quantuple-age-15"><text x="290.84" y="96.212" class="fill-black text-[8px] font-semibold" text-anchor="end">15</text><text x="293.84" y="96.212" class="fill-black text-[8px] font-semibold" text-anchor="start">years</text><text x="293.84" y="106.212" class="fill-black text-[8px] font-semibold" text-anchor="start">old</text></g></g><g id="age-20"><text x="405" y="20" class="fill-black text-[8px] font-semibold" text-anchor="middle">20 years old</text></g><g id="age-25"><g id="quantuple-age-25"><text x="517.84" y="96.212" class="fill-black text-[8px] font-semibold" text-anchor="end">25</text><text x="520.84" y="96.212" class="fill-black text-[8px] font-semibold" text-anchor="start">years</text><text x="520.84" y="106.212" class="fill-black text-[8px] font-semibold" text-anchor="start">old</text></g></g><g id="age-30"><text x="694" y="122" class="fill-black text-[8px] font-semibold" text-anchor="middle">30</text><text x="694" y="132" class="fill-black text-[8px] font-semibold" text-anchor="middle">years old</text></g><g id="age-35"><g id="quantuple-age-35"><text x="694" y="273" class="fill-black text-[8px] font-semibold" text-anchor="end">35</text><text x="697" y="273" class="fill-black text-[8px] font-semibold" text-anchor="start">years</text><text x="697" y="283" class="fill-black text-[8px] font-semibold" text-anchor="start">old</text></g></g><g id="age-40"><text x="796" y="398" class="fill-black text-[8px] font-semibold" text-anchor="middle">40</text><text x="796" y="408" class="fill-black text-[8px] font-semibold" text-anchor="middle">years</text><text x="796" y="418" class="fill-black text-[8px] font-semibold" text-anchor="middle">old</text></g><g id="age-45"><g id="quantuple-age-45"><text x="694" y="539.212" class="fill-black text-[8px] font-semibold" text-anchor="end">45</text><text x="697" y="539.212" class="fill-black text-[8px] font-semibold" text-anchor="start">years</text><text x="697" y="549.212" class="fill-black text-[8px] font-semibold" text-anchor="start">old</text></g></g><g id="age-50"><text x="680" y="683" class="fill-black text-[8px] font-semibold" text-anchor="middle">50</text><text x="680" y="693" class="fill-black text-[8px] font-semibold" text-anchor="middle">years old</text></g><g id="age-55"><g id="quantuple-age-55"><text x="517.84" y="705" class="fill-black text-[8px] font-semibold" text-anchor="end">55</text><text x="520.84" y="705" class="fill-black text-[8px] font-semibold" text-anchor="start">years</text><text x="520.84" y="715" class="fill-black text-[8px] font-semibold" text-anchor="start">old</text></g></g><g id="age-60"><text x="405" y="790" class="fill-black text-[8px] font-semibold" text-anchor="middle">60 years old</text></g><g id="age-65"><g id="quantuple-age-65"><text x="290.84" y="705" class="fill-black text-[8px] font-semibold" text-anchor="end">65</text><text x="293.84" y="705" class="fill-black text-[8px] font-semibold" text-anchor="start">years</text><text x="293.84" y="715" class="fill-black text-[8px] font-semibold" text-anchor="start">old</text></g></g><g id="age-70"><text x="127" y="683" class="fill-black text-[8px] font-semibold" text-anchor="middle">70</text><text x="127" y="693" class="fill-black text-[8px] font-semibold" text-anchor="middle">years old</text></g><g id="age-75"><g id="quantuple-age-75"><text x="108.84" y="539.212" class="fill-black text-[8px] font-semibold" text-anchor="end">75</text><text x="111.84" y="539.212" class="fill-black text-[8px] font-semibold" text-anchor="start">years</text><text x="111.84" y="549.212" class="fill-black text-[8px] font-semibold" text-anchor="start">old</text></g></g></g></g></g></g></svg></div></div></div></div></div>
            </div>
                </div>
                
                <div class="mt-6 p-4 bg-gray-50 rounded-lg">
                    <h4 class="font-bold mb-2">Matrix Interpretation</h4>
                    <p>Your destiny matrix reveals a strong connection between your life path number (7) and your expression number (9). This indicates a period of spiritual growth and intellectual discovery. The recurring pattern of 4-1-6 suggests stability in your foundation while pursuing higher knowledge.</p>
                </div>
            </div>
        </section>
       ) : ""}

        {/* <!-- Footer/Legend Section --> */}
        
    </div>
     {/* <!----------------------- Hidden --------------------------> */}
        
        <div id="report_screen" className="dashboard-container-screen">
     


        <header class="mb-10">
            <div class="flex flex-row items-center justify-between">
                <div class="flex flex-row items-center mb-0">
                    <div class="avatar-container mb-0 mr-6">
                        <img 
                            src={ avatarUrl || User.image  || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Ccircle cx='60' cy='60' r='60' fill='%23f0f0f0'/%3E%3Ccircle cx='60' cy='45' r='18' fill='%23d4d4d4'/%3E%3Cpath d='M30 100 Q60 85 90 100 L90 120 L30 120 Z' fill='%23d4d4d4'/%3E%3C/svg%3E"} alt="User Avatar" class="avatar" id="userAvatar"    
                        />
                    </div>
                    <div class="text-left">
                        <h1 class="text-4xl font-bold mb-1">{key}</h1>
                        <p class="text-lg text-gray-600">Personal Report — LifeMap</p>
                    </div>
                </div>

            </div>
        </header>


        {/* <!-- Toggle Section --> */}
        <section class="mb-10">
            <div class={`toggle-container ${content ? "personality" : "development"}`}>
                <div class="toggle-slider"></div>
                <div onClick={() => setContent(!content)}  class="toggle-option" data-toggle="personality">Tính Cách</div>
                <div onClick={() => setContent(!content)}  class="toggle-option" data-toggle="development">Phát Triển</div>
            </div>
            
            <div class="mt-8 card p-6" id="reportContent">
                {content ? (
                <div id="personalityContent" class="fade-enter-active">
                    <h2 class="text-2xl font-bold mb-4 text-center md:text-left">Tính Cách</h2>

                    <p>{des.current[0]}</p>
                </div>
                ) : (
                <div id="developmentContent" class="fade-enter-active">
                    <h2 class="text-2xl font-bold mb-4 text-center md:text-left">Hướng Phát Triển</h2>

                    <p>{des.current[1]}</p>
                </div>
                )}


            </div>
        </section>

        {/* <!-- Number Cards Section --> */}
        {User.numerology ? (
             <section class="mb-10">
            <h2 class="text-3xl font-bold mb-6 text-left">Những Con Số Cốt Lõi Của Bạn</h2>
            <div class="grid grid-cols-3 gap-6">
                <div class="card p-6 glow">
                    <div class="flex flex-col items-center">
                        <div class="number-circle core-number mb-4">{User.numerology[0]}</div>
                        <h3 class="text-xl font-bold mb-2">Số Chủ Đạo</h3>
                        <p class="text-center text-gray-600">Đại diện cho bản chất bên trong và những đặc điểm tính cách nền tảng của bạn</p>
                    </div>
                </div>
                <div class="card p-6 glow">
                    <div class="flex flex-col items-center">
                        <div class="number-circle destiny-number mb-4">{User.numerology[1]}</div>
                        <h3 class="text-xl font-bold mb-2">Số Định Mệnh</h3>
                        <p class="text-center text-gray-600">Tiết lộ mục đích sống và con đường mà bạn được định sẵn để đi theo</p>
                    </div>
                </div>
                <div class="card p-6 glow">
                    <div class="flex flex-col items-center">
                        <div class="number-circle inner-number mb-4">{User.numerology[2]}</div>
                        <h3 class="text-xl font-bold mb-2">Số Nội Tâm</h3>
                        <p class="text-center text-gray-600">Phản ánh những khát vọng, ước mơ và điều thực sự thúc đẩy bạn</p>
                    </div>
                </div>
            </div>
        </section>
        ) : ""}

        {/* <!-- Horoscope Section --> */}
        {User.horoscope ? (
            <section class="mb-10">
            <h2 class="text-3xl font-bold mb-6 text-left">Ảnh hưởng chiêm tinh</h2>
            <div class="card p-6">
                {/* <div class="star-map mb-6" id="starMap">
                
                <div class="star" style={{width: "2.46542px" ,height: "2.46542px" ,left: "89.5241%" ,top: "78.2409%" ,animationDelay: "0.259786s"}}></div><div class="star" style={{width: "1.12486px" ,height: "1.12486px" ,left: "73.4224%" ,top: "72.9995%" ,animationDelay: "0.517972s"}}></div><div class="star" style={{width: "1.80859px" ,height: "1.80859px" ,left: "60.6876%" ,top: "18.8628%" ,animationDelay: "3.19918s"}}></div><div class="star" style={{width: "1.79544px" ,height: "1.79544px" ,left: "11.167%" ,top: "73.5456%" ,animationDelay: "1.47528s"}}></div><div class="star" style={{width: "2.0671px" ,height: "2.0671px" ,left: "97.3985%" ,top: "31.215%" ,animationDelay: "2.45946s"}}></div><div class="star" style={{width: "2.55898px" ,height: "2.55898px" ,left: "46.7839%" ,top: "93.0462%" ,animationDelay: "0.588179s"}}></div><div class="star" style={{width: "2.33847px" ,height: "2.33847px" ,left: "27.1057%" ,top: "42.2%" ,animationDelay: "2.04952s"}}></div><div class="star" style={{width: "1.05292px" ,height: "1.05292px" ,left: "37.6952%" ,top: "95.1715%" ,animationDelay: "0.536363s"}}></div><div class="star" style={{width: "2.22268px" ,height: "2.22268px" ,left: "72.8823%" ,top: "64.3075%" ,animationDelay: "0.565945s"}}></div><div class="star" style={{width: "2.54189px" ,height: "2.54189px" ,left: "22.441%" ,top: "46.0035%" ,animationDelay: "2.52038s"}}></div><div class="star" style={{width: "1.78399px" ,height: "1.78399px" ,left: "82.2974%" ,top: "76.136%" ,animationDelay: "3.9382s"}}></div><div class="star" style={{width: "2.58667px" ,height: "2.58667px" ,left: "74.1856%" ,top: "50.123%" ,animationDelay: "2.83411s"}}></div><div class="star" style={{width: "2.66387px" ,height: "2.66387px" ,left: "22.7865%" ,top: "64.5007%" ,animationDelay: "0.121827s"}}></div><div class="star" style={{width: "1.60152px" ,height: "1.60152px" ,left: "61.4159%" ,top: "1.83748%" ,animationDelay: "2.73872s"}}></div><div class="star" style={{width: "2.44943px" ,height: "2.44943px" ,left: "67.9782%" ,top: "17.7711%" ,animationDelay: "2.61511s"}}></div><div class="star" style={{width: "2.54025px" ,height: "2.54025px" ,left: "89.5982%" ,top: "75.3047%" ,animationDelay: "3.66039s"}}></div><div class="star" style={{width: "1.93328px" ,height: "1.93328px" ,left: "91.6218%" ,top: "34.528%" ,animationDelay: "0.937337s"}}></div><div class="star" style={{width: "2.92308px" ,height: "2.92308px" ,left: "2.87089%" ,top: "11.4397%" ,animationDelay: "3.84725s"}}></div><div class="star" style={{width: "1.76923px" ,height: "1.76923px" ,left: "69.2516%" ,top: "7.02907%" ,animationDelay: "2.02548s"}}></div><div class="star" style={{width: "2.85049px" ,height: "2.85049px" ,left: "93.7602%" ,top: "88.3154%" ,animationDelay: "2.79996s"}}></div><div class="star" style={{width: "2.3034px" ,height: "2.3034px" ,left: "66.3406%" ,top: "22.3785%" ,animationDelay: "0.306889s"}}></div><div class="star" style={{width: "2.07472px" ,height: "2.07472px" ,left: "3.50401%" ,top: "95.7082%" ,animationDelay: "3.26536s"}}></div><div class="star" style={{width: "1.71534px" ,height: "1.71534px" ,left: "71.5433%" ,top: "7.49897%" ,animationDelay: "0.679801s"}}></div><div class="star" style={{width: "1.88663px" ,height: "1.88663px" ,left: "93.3228%" ,top: "41.1317%" ,animationDelay: "1.79306s"}}></div><div class="star" style={{width: "1.03466px" ,height: "1.03466px" ,left: "85.8471%" ,top: "84.7249%" ,animationDelay: "1.56907s"}}></div><div class="star" style={{width: "1.09379px" ,height: "1.09379px" ,left: "56.0853%" ,top: "72.145%" ,animationDelay: "2.44833s"}}></div><div class="star" style={{width: "2.1364px" ,height: "2.1364px" ,left: "90.1567%" ,top: "1.60326%" ,animationDelay: "2.49461s"}}></div><div class="star" style={{width: "1.40406px" ,height: "1.40406px" ,left: "23.792%" ,top: "45.6687%" ,animationDelay: "0.796446s"}}></div><div class="star" style={{width: "2.19491px" ,height: "2.19491px" ,left: "50.7355%" ,top: "25.3688%" ,animationDelay: "1.32134s"}}></div><div class="star" style={{width: "1.167px" ,height: "1.167px" ,left: "59.7035%" ,top: "24.6647%" ,animationDelay: "0.737745s"}}></div><div class="star" style={{width: "2.56478px" ,height: "2.56478px" ,left: "1.33943%" ,top: "17.4867%" ,animationDelay: "3.89875s"}}></div><div class="star" style={{width: "2.88985px" ,height: "2.88985px" ,left: "29.7673%" ,top: "8.64371%" ,animationDelay: "3.83278s"}}></div><div class="star" style={{width: "2.36131px" ,height: "2.36131px" ,left: "32.5319%" ,top: "70.1349%" ,animationDelay: "0.0671844s"}}></div><div class="star" style={{width: "1.0132px" ,height: "1.0132px" ,left: "53.391%" ,top: "44.8174%" ,animationDelay: "0.440709s"}}></div><div class="star" style={{width: "1.38096px" ,height: "1.38096px" ,left: "47.7176%" ,top: "55.0257%" ,animationDelay: "0.970643s"}}></div><div class="star" style={{width: "2.66898px" ,height: "2.66898px" ,left: "11.6519%" ,top: "6.70403%" ,animationDelay: "2.52066s"}}></div><div class="star" style={{width: "2.38702px" ,height: "2.38702px" ,left: "82.9591%" ,top: "15.0387%" ,animationDelay: "0.80734s"}}></div><div class="star" style={{width: "2.25852px" ,height: "2.25852px" ,left: "99.2203%" ,top: "21.8756%" ,animationDelay: "2.924s"}}></div><div class="star" style={{width: "1.7513px" ,height: "1.7513px" ,left: "38.2642%" ,top: "12.5045%" ,animationDelay: "2.59632s"}}></div><div class="star" style={{width: "1.73802px" ,height: "1.73802px" ,left: "3.60509%" ,top: "21.5557%" ,animationDelay: "3.34745s"}}></div><div class="star" style={{width: "2.81975px" ,height: "2.81975px" ,left: "44.2351%" ,top: "47.4479%" ,animationDelay: "3.69155s"}}></div><div class="star" style={{width: "1.842px" ,height: "1.842px" ,left: "35.2473%" ,top: "18.202%" ,animationDelay: "2.20124s"}}></div><div class="star" style={{width: "1.73139px" ,height: "1.73139px" ,left: "30.7167%" ,top: "18.7446%" ,animationDelay: "2.33307s"}}></div><div class="star" style={{width: "2.986px" ,height: "2.986px" ,left: "18.4524%" ,top: "66.9031%" ,animationDelay: "2.99348s"}}></div><div class="star" style={{width: "2.74421px" ,height: "2.74421px" ,left: "21.393%" ,top: "41.9837%" ,animationDelay: "1.72554s"}}></div><div class="star" style={{width: "2.55522px" ,height: "2.55522px" ,left: "75.9832%" ,top: "81.5808%" ,animationDelay: "3.0737s"}}></div><div class="star" style={{width: "2.28288px" ,height: "2.28288px" ,left: "19.6478%" ,top: "59.1565%" ,animationDelay: "2.32876s"}}></div><div class="star" style={{width: "2.89005px" ,height: "2.89005px" ,left: "23.7426%" ,top: "43.8207%" ,animationDelay: "2.96086s"}}></div><div class="star" style={{width: "1.30902px" ,height: "1.30902px" ,left: "97.4317%" ,top: "9.03357%" ,animationDelay: "3.19916s"}}></div><div class="star" style={{width: "2.07428px" ,height: "2.07428px" ,left: "35.6631%" ,top: "21.667%" ,animationDelay: "3.2612s"}}></div></div> */}
                
                <h3 class="text-xl font-bold mb-4">Năng lượng các hành tinh</h3>
                                <div>
                <div id="fir_page_report">
                    <div>
                        <div class="flex justify-between mb-2">
                            <span class="font-medium">Mặt trời</span>
                            <span>{User.horoscope[2][0].value}%</span>
                        </div>
                        <div class="bg-gray-200 rounded-full h-6 mb-5">
                            <div class="planet-bar h-6 rounded-full" style={{width: `${User.horoscope[2][0].value}%` ,background: "linear-gradient(90deg, rgb(255, 214, 165), rgb(255, 190, 123))"}}></div>
                        </div>
                    </div>
                    <div>
                        <div class="flex justify-between mb-2">
                            <span class="font-medium">Mặt trăng</span>
                            <span>{User.horoscope[2][1].value}%</span>
                        </div>
                        <div class="bg-gray-200 rounded-full mb-5 h-6">
                            <div class="planet-bar h-6 rounded-full" style={{width: `${User.horoscope[2][1].value}%` ,background: "linear-gradient(90deg, rgb(166, 227, 233), rgb(113, 201, 206))"}}></div>
                        </div>
                    </div>
                    <div>
                        <div class="flex justify-between mb-2">
                            <span class="font-medium">Sao Thủy</span>
                            <span>{User.horoscope[2][2].value}%</span>
                        </div>
                        <div class="bg-gray-200 rounded-full mb-5 h-6">
                            <div class="planet-bar h-6 rounded-full" style={{width: `${User.horoscope[2][2].value}%` ,background: "linear-gradient(90deg, rgb(226, 182, 207), rgb(201, 167, 235))"}}></div>
                        </div>
                    </div>
                    <div>
                        <div class="flex justify-between mb-2">
                            <span class="font-medium">Sao Kim</span>
                            <span>{User.horoscope[2][3].value}%</span>
                        </div>
                        <div class="bg-gray-200 rounded-full mb-5 h-6">
                            <div class="planet-bar h-6 rounded-full" style={{width: `${User.horoscope[2][3].value}%` ,background: "linear-gradient(90deg, rgb(255, 214, 224), rgb(255, 172, 199))"}}></div>
                        </div>
                    </div>
                    <div>
                        <div class="flex justify-between mb-2">
                            <span class="font-medium">Sao Hỏa</span>
                            <span>{User.horoscope[2][4].value}%</span>
                        </div>
                        <div class="bg-gray-200 rounded-full mb-5 h-6">
                            <div class="planet-bar h-6 rounded-full" style={{width: `${User.horoscope[2][4].value}%` ,background: "linear-gradient(90deg, rgb(255, 155, 155), rgb(255, 107, 107))"}}></div>
                        </div>
                    </div>

                </div>
                <div id="sec_page_report" className="hidden">
             
                        <div>
                        <div class="flex justify-between mb-2">
                            <span class="font-medium">Sao Mộc</span>
                            <span>{User.horoscope[2][5].value}%</span>
                        </div>
                        <div class="bg-gray-200 rounded-full mb-5 h-6">
                            <div class="planet-bar h-6 rounded-full" style={{width: `${User.horoscope[2][4].value}%` ,background: "linear-gradient(90deg, #FFDAC1, #FFBB94)"}}></div>
                        </div>
                    </div>
                    <div>
                        <div class="flex justify-between mb-2">
                            <span class="font-medium">Sao Thổ</span>
                            <span>{User.horoscope[2][6].value}%</span>
                        </div>
                        <div class="bg-gray-200 rounded-full mb-5 h-6">
                            <div class="planet-bar h-6 rounded-full" style={{width: `${User.horoscope[2][4].value}%` ,background: "linear-gradient(90deg, #B5EAD7, #8ED1B5)"}}></div>
                        </div>
                    </div>
                    <div>
                        <div class="flex justify-between mb-2">
                            <span class="font-medium">Thiên vương</span>
                            <span>{User.horoscope[2][7].value}%</span>
                        </div>
                        <div class="bg-gray-200 rounded-full mb-5 h-6">
                            <div class="planet-bar h-6 rounded-full" style={{width: `${User.horoscope[2][4].value}%` ,background: "linear-gradient(90deg, #C7CEEA, #A7B5EB)"}}></div>
                        </div>
                    </div>  
                    <div>
                        <div class="flex justify-between mb-2">
                            <span class="font-medium">Hải vương</span>
                            <span>{User.horoscope[2][8].value}%</span>
                        </div>
                        <div class="bg-gray-200 rounded-full mb-5 h-6">
                            <div class="planet-bar h-6 rounded-full" style={{width: `${User.horoscope[2][4].value}%` ,background: "linear-gradient(90deg, #E2B6CF, #C9A7EB)"}}></div>
                        </div>
                    </div> 
                     
                    <div>
                        <div class="flex justify-between mb-2">
                            <span class="font-medium">Diêm vương</span>
                            <span>{User.horoscope[2][9].value}%</span>
                        </div>
                        <div class="bg-gray-200 rounded-full mb-5 h-6">
                            <div class="planet-bar h-6 rounded-full" style={{width: `${User.horoscope[2][4].value}%` ,background: "linear-gradient(90deg, #FFB6B9, #FF8896)"}}></div>
                        </div>
                    </div>
              
                </div>
                   


                </div>
            </div>
        </section>
        ) : ""}

        

        {/* <!-- DISC Section --> */}
        {User.disc ? (
            <section class="mb-10">
            <h2 class="text-3xl font-bold mb-6 text-left">Tỉ lệ tính cách DISC</h2>
            <div class="card p-6">
                <div class="grid grid-cols-2 gap-6">
                  
                        <div class="mb-6">
                            <div class="flex justify-between mb-2">
                                <span class="font-medium">Lãnh đạo  (D)</span>
                                <span>{User.disc[0][1]}%</span>
                            </div>
                            <div class="bg-gray-200 rounded-full">
                                <div class="disc-bar" style={{width: `${User.disc[0][1]}%` ,background: "linear-gradient(90deg, rgb(255, 182, 185), rgb(255, 136, 150))"}}></div>
                            </div>
                        </div>
                        <div class="mb-6">
                            <div class="flex justify-between mb-2">
                                <span class="font-medium">Ảnh hưởng (I)</span>
                                <span>{User.disc[1][1]}%</span>
                            </div>
                            <div class="bg-gray-200 rounded-full">
                                <div class="disc-bar" style={{width: `${User.disc[1][1]}%` ,background: "linear-gradient(90deg, rgb(255, 218, 193), rgb(255, 187, 148))"}}></div>
                            </div>
                        </div>
             
                        <div class="mb-6">
                            <div class="flex justify-between mb-2">
                                <span class="font-medium">Chăm sóc (S)</span>
                                <span>{User.disc[2][1]}%</span>
                            </div>
                            <div class="bg-gray-200 rounded-full">
                                <div class="disc-bar" style={{width: `${User.disc[2][1]}%` ,background: "linear-gradient(90deg, rgb(181, 234, 215), rgb(142, 209, 181))"}}></div>
                            </div>
                        </div>
                        <div class="mb-6">
                            <div class="flex justify-between mb-2">
                                <span class="font-medium">Tỉ mỉ (C)</span>
                                <span>{User.disc[3][1]}%</span>
                            </div>
                            <div class="bg-gray-200 rounded-full">
                                <div class="disc-bar" style={{width: `${User.disc[3][1]}%` ,background: "linear-gradient(90deg, rgb(199, 206, 234), rgb(167, 181, 235))"}}></div>
                            </div>
                        </div>
                
                </div>
                
                <div class="mt-6 p-4 bg-gray-50 rounded-lg">
                     <h4 class="font-bold mb-2">Tóm tắt báo cáo DISC</h4>
                    <p>{DISC[User.highest_disc]}</p>
                </div>
            </div>
        </section>
        ) : ""}

        {/* <!-- Destiny Matrix Section --> */}
        {User.matrix ? (
             <section class="mb-10">
            <h2 class="text-3xl font-bold mb-6 text-left">Ma trận định mệnh</h2>
            <div class="card p-6">
                <div class="destiny-grid">
                <div className='mb-20 mx-auto  chart-wrapper-report'>
                <div class="mx-auto w-full"><div class="w-full mx-auto"><div class="w-full space-y-10 mx-chart"><div><div class="mb-5 flex justify-center"><div class="space-y-2"><div class="flex justify-center"><div class="flex justify-between items-center w-full"><button class="duration-300 ease-in-out inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-10 w-10 rounded-full p-2 hover:bg-gray-100" data-ph-capture-attribute-chart-nav="ChevronLeft" aria-label="Previous Group"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"></path></svg></button><button type="button" id="InteractiveDropdown" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-ph-capture-attribute-chart-nav="Menu" class="flex text-sm items-center justify-between rounded-lg bg-mx-storm px-5 py-2 text-mx-sand-a transition-all duration-200"><div class="flex mx-auto"><div class="flex w-fit space-x-2"><div class="flex place-items-center space-x-2 font-bold text-mx-sand-a text-nowrap">Apr 21, 2007</div><div aria-hidden="true" class="mx-2 h-5 w-[2px] bg-mx-sand-a/30"></div><div class="w-fit text-left overflow-clip text-nowrap">My Chart</div><div class="flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down" id="interactive-dropdown-chevron-down"><path d="m6 9 6 6 6-6"></path></svg></div></div></div></button><button class="duration-300 ease-in-out inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-10 w-10 rounded-full p-2 hover:bg-gray-100" data-ph-capture-attribute-chart-nav="ChevronRight" aria-label="Next Group"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"></path></svg></button></div></div></div></div><div class="aspect-square "><svg width="100%" height="100%" viewBox="0 0 811 811" fill="none" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer"><g id="www.thematrixofdestiny.com Chart"><g id="destiny-matrix-chart" transform="translate(22, 22)"><g opacity="0.12" id="shapes"><path d="M377 37.5889L716.411 377L377 716.411L37.5886 377L377 37.5889Z" stroke="#323C48" stroke-width="3.00278" stroke-linecap="round" stroke-linejoin="round"></path><rect x="137" y="137" width="480" height="480" stroke="#323C48" stroke-width="3.00278" stroke-linecap="round" stroke-linejoin="round"></rect><path d="M377 716.411V37.5889" stroke="#323C48" stroke-width="3.00278" stroke-linecap="round" stroke-linejoin="round"></path><path d="M137 617L617 137" stroke="#323C48" stroke-width="3.00278" stroke-linecap="round" stroke-linejoin="round"></path><path d="M37.5886 377H716.411" stroke="#323C48" stroke-width="3.00278" stroke-linecap="round" stroke-linejoin="round"></path><path d="M137 137L617 617" stroke="#323C48" stroke-width="3.00278" stroke-linecap="round" stroke-linejoin="round"></path><path id="loveLine" d="M377 617L497 497" stroke="#323C48" stroke-width="3.00278" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="3 6" class=""></path><path id="moneyLine" d="M497 497L617 377" stroke="#323C48" stroke-width="3.00278" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="3 6" class=""></path></g><g opacity="0.12" id="outsidelines"><path d="M363.798 5.74346C372.251 2.24206 381.749 2.24206 390.202 5.74346L630.183 105.147C638.636 108.648 645.352 115.364 648.853 123.817L748.256 363.798C751.758 372.251 751.758 381.749 748.256 390.202L648.853 630.183C645.352 638.636 638.636 645.352 630.183 648.853L390.202 748.256C381.749 751.758 372.251 751.758 363.798 748.256L123.817 648.853C115.364 645.352 108.648 638.636 105.147 630.183L5.74346 390.202C2.24206 381.749 2.24206 372.251 5.74346 363.798L105.147 123.817C108.648 115.364 115.364 108.648 123.817 105.147L363.798 5.74346Z" stroke="#323C48" stroke-width="3.00278" stroke-linejoin="round"></path></g>

                <g id="Chakras">
                    <g id="Group-G" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="G"><circle id="G-circle" cx="377" cy="377" r="52" fill="#FEF08A" class="transition-all duration-1000 ease-in-out"></circle><text id="G-text" class="fill-black text-4xl font-extrabold" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="377" y="377" fill="#000000" font-size="52" style={{whiteSpace: "pre"}}>{User.matrix[4]}</text></g>

                    <g id="Group-L" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="L"><circle id="L-circle" cx="437" cy="557" r="22.5" fill="#374151" class="transition-all duration-1000 ease-in-out"></circle><text id="L-text" class="fill-white text-md font-medium" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="437" y="557" fill="#fff" font-size="22.5" style={{whiteSpace: "pre"}}>{User.matrix[10]}</text></g>

                    <g id="Group-M" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="M"><circle id="M-circle" cx="557" cy="437" r="22.5" fill="#374151" class="transition-all duration-1000 ease-in-out"></circle><text id="M-text" class="fill-white text-md font-medium" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="557" y="437" fill="#fff" font-size="22.5" style={{whiteSpace: "pre"}}>{User.matrix[11]}</text></g>

                    <g id="Group-A8" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="A8"><circle id="A8-circle" cx="716.411" cy="377" r="36" fill="#f87171" class="transition-all duration-1000 ease-in-out"></circle><text id="A8-text" class="fill-black text-2xl font-bold" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="716.411" y="377" fill="#000" font-size="36" style={{whiteSpace: "pre"}}>{User.matrix[2]}</text></g>
                    
                    <g id="Group-A" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="A"><circle id="A-circle" cx="37.5887" cy="377" r="36" fill="#C084FC" class="transition-all duration-1000 ease-in-out"></circle><text id="A-text" class="fill-black text-2xl font-bold" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="37.5887" y="377" fill="#000" font-size="36" style={{whiteSpace: "pre"}}>{User.matrix[0]}</text></g>
                    
                    <g id="Group-A3" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="A3"><circle id="A3-circle" cx="249.5" cy="377" r="21" fill="#10B981" class="transition-all duration-1000 ease-in-out"></circle><text id="A3-text" class="fill-black text-md font-normal" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="249.5" y="377" fill="#000000" font-size="21" style={{whiteSpace: "pre"}}>{User.matrix[20]}</text></g>
                    
                    <g id="Group-A6" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="A6"><circle id="A6-circle" cx="617" cy="377" r="21" fill="#fb8a3c" class="transition-all duration-1000 ease-in-out"></circle><text id="A6-text" class="fill-black text-md font-normal" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="617" y="377" fill="#000000" font-size="21" style={{whiteSpace: "pre"}}>{User.matrix[8]}</text></g>
                    
                    <g id="Group-A2" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="A2"><circle id="A2-circle" cx="137" cy="377" r="21" fill="#7DD3FC" class="transition-all duration-1000 ease-in-out"></circle><text id="A2-text" class="fill-black text-md font-normal" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="137" y="377" fill="#000000" font-size="21" style={{whiteSpace: "pre"}}>{User.matrix[6]}</text></g>
                    
                    <g id="Group-A1" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="A1"><circle id="A1-circle" cx="94.7943" cy="377" r="22.5" fill="#3B82F6" class="transition-all duration-1000 ease-in-out"></circle><text id="A1-text" class="fill-black text-md font-medium" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="94.7943" y="377" fill="#000000" font-size="22.5" style={{whiteSpace: "pre"}}>{User.matrix[14]}</text>
                    
                    </g><g id="Group-A7" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="A7"><circle id="A7-circle" cx="659.206" cy="377" r="22.5" fill="#374151" class="transition-all duration-1000 ease-in-out"></circle><text id="A7-text" class="fill-white text-md font-medium" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="659.206" y="377" fill="#fff" font-size="22.5" style={{whiteSpace: "pre"}}>{User.matrix[15]}</text></g>
                    
                    <g id="Group-B" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="B"><circle id="B-circle" cx="377" cy="37.5889" r="36" fill="#C084FC" class="transition-all duration-1000 ease-in-out"></circle><text id="B-text" class="fill-black text-2xl font-bold" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="377" y="37.5889" fill="#000" font-size="36" style={{whiteSpace: "pre"}}>{User.matrix[1]}</text></g>
                    
                    <g id="Group-B2" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="B2"><circle id="B2-circle" cx="377" cy="137" r="21" fill="#7DD3FC" class="transition-all duration-1000 ease-in-out"></circle><text id="B2-text" class="fill-black text-md font-normal" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="377" y="137" fill="#000000" font-size="21" style={{whiteSpace: "pre"}}>{User.matrix[7]}</text></g>
                    
                    <g id="Group-B1" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="B1"><circle id="B1-circle" cx="377" cy="94.7944" r="22.5" fill="#3B82F6" class="transition-all duration-1000 ease-in-out"></circle><text id="B1-text" class="fill-black text-md font-medium" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="377" y="94.7944" fill="#000000" font-size="22.5" style={{whiteSpace: "pre"}}>{User.matrix[13]}</text></g>
                    
                    <g id="Group-B6" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="B6"><circle id="B6-circle" cx="377" cy="716.411" r="36" fill="#f87171" class="transition-all duration-1000 ease-in-out"></circle><text id="B6-text" class="fill-black text-2xl font-bold" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="377" y="716.411" fill="#000" font-size="36" style={{whiteSpace: "pre"}}>{User.matrix[3]}</text></g>
                    
                    <g id="Group-B4" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="B4"><circle id="B4-circle" cx="377" cy="617" r="21" fill="#fb8a3c" class="transition-all duration-1000 ease-in-out"></circle><text id="B4-text" class="fill-black text-md font-normal" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="377" y="617" fill="#000000" font-size="21" style={{whiteSpace: "pre"}}>{User.matrix[5]}</text></g>
                    
                    <g id="Group-B3" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="B3"><circle id="B3-circle" cx="377" cy="249.5" r="21" fill="#10B981" class="transition-all duration-1000 ease-in-out"></circle><text id="B3-text" class="fill-black text-md font-normal" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="377" y="249.5" fill="#000000" font-size="21" style={{whiteSpace: "pre"}}>{User.matrix[21]}</text></g>
                    
                    <g id="Group-B5" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="B5"><circle id="B5-circle" cx="377" cy="659.206" r="22.5" fill="#374151" class="transition-all duration-1000 ease-in-out"></circle><text id="B5-text" class="fill-white text-md font-medium" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="377" y="659.206" fill="#fff" font-size="22.5" style={{whiteSpace: "pre"}}>{User.matrix[12]}</text></g>
                    
                    <g id="Group-C" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="C"><circle id="C-circle" cx="137" cy="617" r="36" fill="#374151" class="transition-all duration-1000 ease-in-out"></circle><text id="C-text" class="fill-white text-2xl font-bold" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="137" y="617" fill="#fff" font-size="36" style={{whiteSpace: "pre"}}>{User.matrix[19]}</text></g>

                    <g id="Group-C2" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="C2"><circle id="C2-circle" cx="207.2945" cy="546.7055" r="21" fill="#374151" class="transition-all duration-1000 ease-in-out"></circle><text id="C2-text" class="fill-white text-md font-normal" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="207.2945" y="546.7055" fill="#fff" font-size="21" style={{whiteSpace: "pre"}}>{User.matrix[28]}</text></g>
                    
                    <g id="Group-C1" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="C1"><circle id="C1-circle" cx="177.4505" cy="576.5495" r="22.5" fill="#374151" class="transition-all duration-1000 ease-in-out"></circle><text id="C1-text" class="fill-white text-md font-medium" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="177.4505" y="576.5495" fill="#fff" font-size="22.5" style={{whiteSpace: "pre"}}>{User.matrix[29]}</text></g>
                    
                    <g id="Group-C5" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="C5"><circle id="C5-circle" cx="617" cy="137" r="36" fill="#374151" class="transition-all duration-1000 ease-in-out"></circle><text id="C5-text" class="fill-white text-2xl font-bold" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="617" y="137" fill="#fff" font-size="36" style={{whiteSpace: "pre"}}>{User.matrix[17]}</text></g>
                    
                    
                    
                    <g id="Group-C3" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="C3"><circle id="C3-circle" cx="546.7055" cy="207.2945" r="21" fill="#374151" class="transition-all duration-1000 ease-in-out"></circle><text id="C3-text" class="fill-white text-md font-normal" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="546.7055" y="207.2945" fill="#fff" font-size="21" style={{whiteSpace: "pre"}}>{User.matrix[24]}</text></g>
                    
                    <g id="Group-C4" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="C4"><circle id="C4-circle" cx="576.5495" cy="177.4505" r="22.5" fill="#374151" class="transition-all duration-1000 ease-in-out"></circle><text id="C4-text" class="fill-white text-md font-medium" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="576.5495" y="177.4505" fill="#fff" font-size="22.5" style={{whiteSpace: "pre"}}>{User.matrix[25]}</text></g>
                    
                    <g id="Group-D6" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="D6"><circle id="D6-circle" cx="617" cy="617" r="36" fill="#374151" class="transition-all duration-1000 ease-in-out"></circle><text id="D6-text" class="fill-white text-2xl font-bold" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="617" y="617" fill="#fff" font-size="36" style={{whiteSpace: "pre"}}>{User.matrix[18]}</text></g>
                    
                    
                    
                    <g id="Group-D4" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="D4"><circle id="D4-circle" cx="546.7055" cy="546.706" r="22.5" fill="#374151" class="transition-all duration-1000 ease-in-out"></circle><text id="D4-text" class="fill-white text-md font-medium" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="546.7055" y="546.706" fill="#fff" font-size="22.5" style={{whiteSpace: "pre"}}>{User.matrix[26]}</text></g>
                    
                    <g id="Group-D5" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="D5"><circle id="D5-circle" cx="576.5495" cy="576.5495" r="22.5" fill="#374151" class="transition-all duration-1000 ease-in-out"></circle><text id="D5-text" class="fill-white text-md font-medium" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="576.5495" y="576.5495" fill="#fff" font-size="22.5" style={{whiteSpace: "pre"}}>{User.matrix[27]}</text></g>
                    
                    <g id="Group-D" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="D"><circle id="D-circle" cx="137" cy="137" r="36" fill="#374151" class="transition-all duration-1000 ease-in-out"></circle><text id="D-text" class="fill-white text-2xl font-bold" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="137" y="137" fill="#fff" font-size="36" style={{whiteSpace: "pre"}}>{User.matrix[16]}</text></g>
                    
                    <g id="Group-D2" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="D2"><circle id="D2-circle" cx="207.2945" cy="207.2945" r="21" fill="#374151" class="transition-all duration-1000 ease-in-out"></circle><text id="D2-text" class="fill-white text-md font-normal" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="207.2945" y="207.2945" fill="#fff" font-size="21" style={{whiteSpace: "pre"}}>{User.matrix[22]}</text></g>
                    
                    <g id="Group-D1" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="D1"><circle id="D1-circle" cx="177.4505" cy="177.4505" r="22.5" fill="#374151" class="transition-all duration-1000 ease-in-out"></circle><text id="D1-text" class="fill-white text-md font-medium" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="177.4505" y="177.4505" fill="#fff" font-size="22.5" style={{whiteSpace: "pre"}}>{User.matrix[23]}</text></g>
                    
                    <g id="Group-D3" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="D3"><circle id="D3-circle" cx="497" cy="497" r="22.5" fill="#374151" class="transition-all duration-1000 ease-in-out"></circle><text id="D3-text" class="fill-white text-md font-medium" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="497" y="497" fill="#fff" font-size="22.5" style={{whiteSpace: "pre"}}>{User.matrix[9]}</text></g></g><g id="Icons"><g id="Heart" class=""><path d="M397 524.137C397 529 401.02 531.591 403.962 533.911C405 534.729 406 535.5 407 535.5C408 535.5 409 534.73 410.038 533.91C412.981 531.592 417 529 417 524.138C417 519.275 411.5 515.826 407 520.502C402.5 515.825 397 519.274 397 524.137Z" fill="#FC5555"></path></g><g id="$" class=""><path d="M527 396.5V416.5" stroke="#07CF7F" stroke-width="2" stroke-linejoin="round"></path><path d="M532 399.5H524.5C523.572 399.5 522.682 399.869 522.025 400.525C521.369 401.182 521 402.072 521 403C521 403.928 521.369 404.818 522.025 405.475C522.682 406.131 523.572 406.5 524.5 406.5H529.5C530.428 406.5 531.318 406.869 531.975 407.525C532.631 408.182 533 409.072 533 410C533 410.928 532.631 411.818 531.975 412.475C531.318 413.131 530.428 413.5 529.5 413.5H521" stroke="#07CF7F" stroke-width="2" stroke-linejoin="round"></path></g></g>

                <g id="logo" transform="translate(604, 684)"><path d="M34.292 53.278h6.922c8.211 0 11.807-4.645 11.807-9.433 0-5.088-3.642-9.637-11.806-9.637h-6.923c.148 1.004.2 1.885.2 3.23v12.616c0 1.345-.052 2.22-.2 3.224zm5.501-.636V34.82h1.422c4.35 0 6.183 3.326 6.183 9.025 0 5.4-1.834 8.797-6.184 8.797h-1.42zm21.734 1.105c2.909 0 5.7-1.86 6.749-5.623L67.838 48c-.708 2.175-2.323 3.47-4.156 3.47-2.664 0-4.11-2.813-4.376-5.624h8.776c-.101-3.616-3.157-5.674-6.433-5.674-3.52 0-6.967 2.424-6.967 6.677 0 4.182 3.3 6.897 6.845 6.897zm-2.272-8.827c0-2.69.805-4.156 2.252-4.156 1.319 0 1.88 1.268 1.905 4.446h-4.157v-.29zm16.941 8.827c3.01 0 5.919-1.273 5.919-3.937 0-4.6-8.654-4.793-8.654-7.656 0-.805.657-1.345 1.686-1.345 1.268 0 2.027.958 2.715 1.982.463.662 1.075 1.37 2.098 1.37 1.126 0 1.737-.932 1.717-2.104-1.615-1.171-3.963-1.884-6.138-1.884-3.275 0-5.333 1.395-5.333 3.718 0 4.6 8.267 4.818 8.267 7.778 0 .876-.759 1.441-1.859 1.441-1.248 0-2.277-.784-3.153-2.837-.443-.932-1.248-1.467-2.103-1.467-.709 0-1.32.367-1.763 1.172.76 2.592 3.744 3.769 6.601 3.769zm12.984 0c2.76 0 4.497-2.078 4.94-5.893h-.463c-.296 2.297-1.203 3.616-2.47 3.616-.979 0-1.59-.952-1.59-2.47v-7.702h4.009v-.636H85.71c3.52-.657 4.665-2.954 4.665-5.231H85.88c0 3.84-.316 5.23-2.297 5.23h-.296v.637h1.808v8.069c0 2.714 1.544 4.38 4.086 4.38zm6.87-.469h4.962c-.148-1.023-.194-1.93-.194-3.224v-6.163c0-1.294.046-2.2.194-3.23H96.05c.148 1.03.194 1.936.194 3.23v6.163c0 1.294-.046 2.2-.194 3.224zm-.122-16.426l2.613 2.516 2.567-2.516-2.567-2.521-2.613 2.52zm17.237 16.426h4.889c-.173-1.023-.219-1.93-.219-3.224v-5.577c0-2.735-1.344-4.304-3.596-4.304-1.884 0-3.764 1.125-4.813 2.766.02-.856.097-1.539.193-2.277h-4.889c.148 1.029.193 1.935.193 3.229v6.163c0 1.294-.045 2.2-.193 3.224h4.889c-.147-1.023-.193-1.93-.193-3.224V43.82c.606-1.055 1.538-1.712 2.419-1.712.999 0 1.513.734 1.513 2.348v5.598c0 1.294-.046 2.2-.193 3.224zm8.75 6.041c2.445 0 3.866-1.151 5.037-4.034l4.085-9.83c.561-1.416.856-2.104.978-3.077.072-.417.123-.81.097-1.446a2.384 2.384 0 00-1.711-.708c-.907 0-1.661.54-1.661 1.563 0 1.422 1.391 1.86 1.391 3.301 0 .611-.27 1.467-.637 2.399l-1.467 3.59-1.589-4.716c-.586-1.808-1.1-3.596-.881-5.7h-5.868c.347.785.983 2.278 1.544 4.086l2.76 8.531h3.133l-.708 1.686c-.861 2.13-1.691 2.863-2.766 2.863-1.859 0-1.885-2.226-3.835-2.226-1.055 0-1.788.662-2.007 2.154.952.83 2.322 1.564 4.105 1.564zM20.306 46.88c2.165 0 3.494-1.522 3.494-3.3 0-1.782-1.32-3.29-3.494-3.29-2.17 0-3.49 1.508-3.49 3.29 0 1.778 1.33 3.3 3.49 3.3zm-2.17-3.3c0-1.945.871-3.117 2.17-3.117 1.304 0 2.175 1.172 2.175 3.117 0 1.94-.881 3.123-2.175 3.123-1.289 0-2.17-1.182-2.17-3.123zm6.698 3.163h1.156a7.565 7.565 0 01-.06-1.074v-2.93h1.115v-.182h-1.116l-.183-1.07c-.072-.616.122-1.075.54-1.075.26 0 .504.245.784.52.138.163.306.295.545.295.306 0 .453-.244.52-.565-.612-.29-1.131-.438-1.564-.438-.988 0-1.67.596-1.67 1.803v.53h-.587v.183h.586v2.929c0 .433-.015.733-.066 1.074zM32.112 25.931h.76l7.334-17.307v13.813c0 1.345-.046 2.226-.194 3.225h5.72c-.147-.999-.193-1.88-.193-3.225V9.821c0-1.345.046-2.226.193-3.224h-5.378l-5.282 12.346-5.135-12.346h-5.694c.148.973.194 1.833.194 3.224v7.778c0 2.735-.27 6.158-.734 8.063h2.13c-.464-1.951-.734-5.328-.734-8.043V8.818l7.013 17.113zm20.048.2c1.834 0 3.84-1.101 4.87-3.744 0 1.125.096 2.348.29 3.275h4.767c-.56-1.513-.682-2.297-.682-4.396v-3.647c0-3.199-2.348-5.058-6.066-5.058-2.175 0-4.447.683-6.235 1.758-.02 1.787.566 2.617 1.712 2.617 1.176 0 1.762-.784 2.276-1.64.56-.927 1.223-2.149 2.491-2.149.978 0 1.543.733 1.543 1.885 0 2.22-1.981 2.857-3.988 3.494-2.297.759-4.69 1.467-4.69 4.105 0 2.226 1.756 3.5 3.712 3.5zm.688-4.697c0-1.37.759-2.053 2.297-2.908 1.003-.49 1.518-.708 1.86-1.274v3.23c0 2.225-1.249 3.203-2.349 3.203-.927 0-1.808-.687-1.808-2.251zm16.11 4.696c2.761 0 4.498-2.078 4.941-5.893h-.469c-.29 2.297-1.197 3.616-2.465 3.616-.978 0-1.589-.952-1.589-2.465v-7.706h4.009v-.632h-7.9c3.524-.662 4.67-2.96 4.67-5.236h-4.497c0 3.84-.316 5.236-2.297 5.236h-.296v.632h1.809v8.073c0 2.71 1.543 4.375 4.085 4.375zm6.795-.468h4.89c-.143-1.024-.194-1.93-.194-3.225v-4.35c.856-2.057 2.496-2.057 3.84-2.057 1.294 0 2.079-1.05 2.079-2.124a2.65 2.65 0 00-.346-1.32c-2.787 0-4.28 1.096-5.573 4.524v-.836c0-1.293.051-2.2.194-3.224h-4.89c.148 1.024.199 1.93.199 3.224v6.163c0 1.294-.051 2.2-.199 3.225zm12.469 0h4.966c-.148-1.024-.199-1.93-.199-3.225v-6.163c0-1.293.051-2.2.199-3.224h-4.966c.148 1.024.199 1.93.199 3.224v6.163c0 1.294-.052 2.2-.2 3.225zM88.1 9.235l2.618 2.516 2.567-2.516-2.567-2.516L88.1 9.235zm14.526 16.427h6.061c-.56-.708-1.049-1.416-2.297-3.372l-2.007-3.082c1.299-.876 2.741-2.348 3.301-4.13.199-.56.295-1.152.295-1.763a2.463 2.463 0 00-1.737-.708c-.906 0-1.66.54-1.66 1.569 0 1.146.902 1.66.902 2.638 0 .662-.489 1.248-1.391 1.982l-1.299-1.982c-.978-1.538-1.66-2.714-1.737-3.764h-6.06c.539.683 1.002 1.37 2.296 3.347l2.374 3.621-.688.881c-1.93 2.588-3.3 4.228-3.81 4.763h3.668c-.123-1.095-.347-2.955.707-4.421l.49-.663.901 1.396c.907 1.441 1.615 2.638 1.691 3.688zM2.5 19.34h1.497a7.549 7.549 0 01-.077-1.206v-5.766c.8.025 1.462.137 2.165.438l.24-.617H.181l.239.617c.703-.3 1.365-.413 2.155-.438v5.766c0 .504-.02.835-.077 1.207zm7.7 0h1.294a7.842 7.842 0 01-.071-1.206v-2.099c0-1.003-.494-1.553-1.304-1.553-.703 0-1.4.432-1.803 1.084V13.31c0-.489.015-.825.071-1.212H7.093c.056.387.077.723.077 1.212v4.824c0 .483-.02.825-.077 1.207h1.294a7.85 7.85 0 01-.071-1.207V15.83c.29-.514.749-.835 1.197-.835.489 0 .764.341.764 1.039v2.099c0 .483-.02.825-.077 1.207zm4.432.159c1.054 0 2.007-.734 2.338-2.038l-.138-.025c-.24.891-.902 1.467-1.68 1.467-1.09 0-1.732-1.172-1.732-2.404v-.01h3.422c-.04-1.228-1.039-2.008-2.195-2.008-1.273 0-2.42.963-2.42 2.47 0 1.503 1.131 2.547 2.405 2.547zm-1.202-3.2c.046-1.008.514-1.64 1.192-1.64.621 0 .983.546 1.008 1.64h-2.2z" fill="#323C48" opacity="1"></path>
                </g>
                
                </g>
                <g id="cycles" transform="translate(-8, -5)"><g id="dots-and-energies"><g id="d-and-e-0"><circle cx="48.1769" cy="359.324" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="28.176900000000003" y="361.324" class="fill-chakras-root text-xs">7</text><circle cx="59.9399" cy="330.642" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="39.9399" y="332.642" class="fill-chakras-root text-xs">4</text><circle cx="71.7029" cy="301.96000000000004" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="51.7029" y="303.96000000000004" class="fill-chakras-root text-xs">14</text><circle cx="83.4659" cy="273.278" r="3.25" fill="#D9D9D9" stroke="#000" stroke-width="0.5"></circle><text x="63.465900000000005" y="275.278" class="fill-chakras-root text-sm font-bold">10</text><circle cx="95.22890000000001" cy="244.596" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="75.22890000000001" y="246.596" class="fill-chakras-root text-xs">9</text><circle cx="106.9919" cy="215.91400000000002" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="86.9919" y="217.91400000000002" class="fill-chakras-root text-xs">17</text><circle cx="118.7549" cy="187.23200000000003" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="98.7549" y="189.23200000000003" class="fill-chakras-root text-xs">6</text></g><g id="d-and-e-10"><circle cx="194.384" cy="114.807" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="184.384" y="104.807" class="fill-chakras-root text-xs">7</text><circle cx="222.101" cy="103.327" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="212.101" y="93.327" class="fill-chakras-root text-xs">18</text><circle cx="249.81799999999998" cy="91.84700000000001" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="239.81799999999998" y="81.84700000000001" class="fill-chakras-root text-xs">11</text><circle cx="277.53499999999997" cy="80.367" r="3.25" fill="#D9D9D9" stroke="#000" stroke-width="0.5"></circle><text x="267.53499999999997" y="70.367" class="fill-chakras-root text-sm font-bold">11</text><circle cx="305.25199999999995" cy="68.887" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="295.25199999999995" y="58.887" class="fill-chakras-root text-xs">8</text><circle cx="332.96899999999994" cy="57.407" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="322.96899999999994" y="47.407" class="fill-chakras-root text-xs">15</text><circle cx="360.686" cy="45.92700000000001" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="350.686" y="35.92700000000001" class="fill-chakras-root text-xs">19</text></g><g id="d-and-e-20"><circle cx="453.649" cy="46.1904" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="458.649" y="36.1904" class="fill-chakras-root text-xs">7</text><circle cx="481.365" cy="57.6704" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="486.365" y="47.6704" class="fill-chakras-root text-xs">21</text><circle cx="509.081" cy="69.15039999999999" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="514.081" y="59.15039999999999" class="fill-chakras-root text-xs">11</text><circle cx="536.797" cy="80.6304" r="3.25" fill="#D9D9D9" stroke="#000" stroke-width="0.5"></circle><text x="541.797" y="70.6304" class="fill-chakras-root text-sm font-bold">17</text><circle cx="564.513" cy="92.1104" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="569.513" y="82.1104" class="fill-chakras-root text-xs">20</text><circle cx="592.229" cy="103.5904" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="597.229" y="93.5904" class="fill-chakras-root text-xs">3</text><circle cx="619.9449999999999" cy="115.07039999999999" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="624.9449999999999" y="105.07039999999999" class="fill-chakras-root text-xs">16</text></g><g id="d-and-e-30"><circle cx="693.325" cy="185.381" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="705.325" y="187.381" class="fill-chakras-root text-xs">21</text><circle cx="705.086" cy="214.064" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="717.086" y="216.064" class="fill-chakras-root text-xs">8</text><circle cx="716.8470000000001" cy="242.747" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="728.8470000000001" y="244.747" class="fill-chakras-root text-xs">3</text><circle cx="728.6080000000001" cy="271.43" r="3.25" fill="#D9D9D9" stroke="#000" stroke-width="0.5"></circle><text x="740.6080000000001" y="273.43" class="fill-chakras-root text-sm font-bold">22</text><circle cx="740.369" cy="300.113" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="752.369" y="302.113" class="fill-chakras-root text-xs">8</text><circle cx="752.13" cy="328.796" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="764.13" y="330.796" class="fill-chakras-root text-xs">4</text><circle cx="763.8910000000001" cy="357.47900000000004" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="775.8910000000001" y="359.47900000000004" class="fill-chakras-root text-xs">13</text></g><g id="d-and-e-40"><circle cx="691.187" cy="627.581" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="703.187" y="631.581" class="fill-chakras-root text-xs">21</text><circle cx="702.95" cy="598.899" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="714.95" y="602.899" class="fill-chakras-root text-xs">5</text><circle cx="714.713" cy="570.217" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="726.713" y="574.217" class="fill-chakras-root text-xs">12</text><circle cx="726.476" cy="541.5350000000001" r="3.25" fill="#D9D9D9" stroke="#000" stroke-width="0.5"></circle><text x="738.476" y="545.5350000000001" class="fill-chakras-root text-sm font-bold">7</text><circle cx="738.239" cy="512.8530000000001" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="750.239" y="516.8530000000001" class="fill-chakras-root text-xs">5</text><circle cx="750.002" cy="484.17100000000005" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="762.002" y="488.17100000000005" class="fill-chakras-root text-xs">16</text><circle cx="761.765" cy="455.48900000000003" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="773.765" y="459.48900000000003" class="fill-chakras-root text-xs">7</text></g><g id="d-and-e-50"><circle cx="453.649" cy="760.137" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="453.649" y="780.137" class="fill-chakras-root text-xs">19</text><circle cx="481.366" cy="748.6569999999999" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="481.366" y="768.6569999999999" class="fill-chakras-root text-xs">12</text><circle cx="509.08299999999997" cy="737.1769999999999" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="509.08299999999997" y="757.1769999999999" class="fill-chakras-root text-xs">17</text><circle cx="536.8" cy="725.6969999999999" r="3.25" fill="#D9D9D9" stroke="#000" stroke-width="0.5"></circle><text x="536.8" y="745.6969999999999" class="fill-chakras-root text-sm font-bold">5</text><circle cx="564.517" cy="714.217" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="564.517" y="734.217" class="fill-chakras-root text-xs">8</text><circle cx="592.2339999999999" cy="702.737" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="592.2339999999999" y="722.737" class="fill-chakras-root text-xs">21</text><circle cx="619.951" cy="691.257" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="619.951" y="711.257" class="fill-chakras-root text-xs">10</text></g><g id="d-and-e-60"><circle cx="194.38" cy="692.19" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="189.38" y="712.19" class="fill-chakras-root text-xs">19</text><circle cx="222.09699999999998" cy="703.671" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="217.09699999999998" y="723.671" class="fill-chakras-root text-xs">9</text><circle cx="249.814" cy="715.152" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="244.814" y="735.152" class="fill-chakras-root text-xs">8</text><circle cx="277.531" cy="726.633" r="3.25" fill="#D9D9D9" stroke="#000" stroke-width="0.5"></circle><text x="272.531" y="746.633" class="fill-chakras-root text-sm font-bold">17</text><circle cx="305.248" cy="738.114" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="300.248" y="758.114" class="fill-chakras-root text-xs">5</text><circle cx="332.965" cy="749.595" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="327.965" y="769.595" class="fill-chakras-root text-xs">6</text><circle cx="360.682" cy="761.076" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="355.682" y="781.076" class="fill-chakras-root text-xs">13</text></g><g id="d-and-e-70"><circle cx="51.1869" cy="453.641" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="31.1869" y="457.641" class="fill-chakras-root text-xs">10</text><circle cx="62.9499" cy="482.322" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="42.9499" y="486.322" class="fill-chakras-root text-xs">7</text><circle cx="74.7129" cy="511.00300000000004" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="54.712900000000005" y="515.003" class="fill-chakras-root text-xs">11</text><circle cx="86.4759" cy="539.684" r="3.25" fill="#D9D9D9" stroke="#000" stroke-width="0.5"></circle><text x="66.4759" y="543.684" class="fill-chakras-root text-sm font-bold">4</text><circle cx="98.2389" cy="568.365" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="78.2389" y="572.365" class="fill-chakras-root text-xs">18</text><circle cx="110.0019" cy="597.046" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="90.0019" y="601.046" class="fill-chakras-root text-xs">14</text><circle cx="121.76490000000001" cy="625.7270000000001" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="101.76490000000001" y="629.7270000000001" class="fill-chakras-root text-xs">6</text></g></g><g id="chart-cycles"><g id="ranges"><g id="age-8-9"><text x="127" y="202" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>8-9</text><text x="115" y="223" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>7-8</text><text x="108" y="248" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>6-7</text><text x="84" y="306" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>3-4</text><text x="72" y="335" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>2-3</text><text x="60" y="362" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>1-2</text></g><g id="age-18-19"><text x="344" y="61" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>18-19</text><text x="318" y="75" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>17-18</text><text x="294" y="85" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>16-17</text><text x="256" y="105" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>13-14</text><text x="222" y="120" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>12-13</text><text x="193" y="133" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>11-12</text></g><g id="age-21-22"><text x="446" y="65" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>21-22</text><text x="468" y="77" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>22-23</text><text x="488" y="87" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>23-24</text><text x="542" y="109" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>26-27</text><text x="570" y="120" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>27-28</text><text x="598" y="131" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>28-29</text></g><g id="age-31-32"><text x="688" y="205" class="fill-slate-600 text-[8px]" text-anchor="end" style={{fill: "rgb(71, 85, 105)"}}>31-32</text><text x="701" y="224" class="fill-slate-600 text-[8px]" text-anchor="end" style={{fill: "rgb(71, 85, 105)"}}>32-33</text><text x="706" y="248" class="fill-slate-600 text-[8px]" text-anchor="end" style={{fill: "rgb(71, 85, 105)"}}>33-34</text><text x="732" y="306" class="fill-slate-600 text-[8px]" text-anchor="end" style={{fill: "rgb(71, 85, 105)"}}>36-37</text><text x="745" y="335" class="fill-slate-600 text-[8px]" text-anchor="end" style={{fill: "rgb(71, 85, 105)"}}>37-38</text><text x="758" y="362" class="fill-slate-600 text-[8px]" text-anchor="end" style={{fill: "rgb(71, 85, 105)"}}>38-39</text></g><g id="age-41-42"><text x="750" y="456" class="fill-slate-600 text-[8px]" text-anchor="end" style={{fill: "rgb(71, 85, 105)"}}>41-42</text><text x="738" y="485" class="fill-slate-600 text-[8px]" text-anchor="end" style={{fill: "rgb(71, 85, 105)"}}>42-43</text><text x="726" y="514" class="fill-slate-600 text-[8px]" text-anchor="end" style={{fill: "rgb(71, 85, 105)"}}>43-44</text><text x="702" y="572" class="fill-slate-600 text-[8px]" text-anchor="end" style={{fill: "rgb(71, 85, 105)"}}>46-47</text><text x="695" y="589" class="fill-slate-600 text-[8px]" text-anchor="end" style={{fill: "rgb(71, 85, 105)"}}>47-48</text><text x="688" y="606" class="fill-slate-600 text-[8px]" text-anchor="end" style={{fill: "rgb(71, 85, 105)"}}>48-49</text></g><g id="age-51-52"><text x="626" y="683" class="fill-slate-600 text-[8px]" text-anchor="end" style={{fill: "rgb(71, 85, 105)"}}>51-52</text><text x="602" y="694" class="fill-slate-600 text-[8px]" text-anchor="end" style={{fill: "rgb(71, 85, 105)"}}>52-53</text><text x="574" y="707" class="fill-slate-600 text-[8px]" text-anchor="end" style={{fill: "rgb(71, 85, 105)"}}>53-54</text><text x="515" y="726" class="fill-slate-600 text-[8px]" text-anchor="end" style={{fill: "rgb(71, 85, 105)"}}>56-57</text><text x="491" y="738" class="fill-slate-600 text-[8px]" text-anchor="end" style={{fill: "rgb(71, 85, 105)"}}>57-58</text><text x="470" y="750" class="fill-slate-600 text-[8px]" text-anchor="end" style={{fill: "rgb(71, 85, 105)"}}>58-59</text></g><g id="age-68-69"><text x="190" y="683" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>68-69</text><text x="219" y="694" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>67-68</text><text x="242" y="707" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>66-67</text><text x="301" y="726" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>63-64</text><text x="320" y="738" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>62-63</text><text x="345" y="750" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>61-62</text></g><g id="age-78-79"><text x="65" y="456" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>78-79</text><text x="76" y="484" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>77-78</text><text x="87" y="512" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>76-77</text><text x="109" y="568" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>73-74</text><text x="118" y="591" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>72-73</text><text x="126" y="608" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>71-72</text></g></g><g id="quintuple-cycles"><g id="age-0"><text x="19" y="398" class="fill-black text-[8px] font-semibold" text-anchor="middle">0</text><text x="19" y="408" class="fill-black text-[8px] font-semibold" text-anchor="middle">years</text><text x="19" y="418" class="fill-black text-[8px] font-semibold" text-anchor="middle">old</text></g><g id="age-5"><g id="quantuple-age-5"><text x="104" y="273" class="fill-black text-[8px] font-semibold" text-anchor="end">5</text><text x="107" y="273" class="fill-black text-[8px] font-semibold" text-anchor="start">years</text><text x="107" y="283" class="fill-black text-[8px] font-semibold" text-anchor="start">old</text></g></g><g id="age-10"><text x="123" y="122" class="fill-black text-[8px] font-semibold" text-anchor="middle">10</text><text x="123" y="132" class="fill-black text-[8px] font-semibold" text-anchor="middle">years old</text></g><g id="age-15"><g id="quantuple-age-15"><text x="290.84" y="96.212" class="fill-black text-[8px] font-semibold" text-anchor="end">15</text><text x="293.84" y="96.212" class="fill-black text-[8px] font-semibold" text-anchor="start">years</text><text x="293.84" y="106.212" class="fill-black text-[8px] font-semibold" text-anchor="start">old</text></g></g><g id="age-20"><text x="405" y="20" class="fill-black text-[8px] font-semibold" text-anchor="middle">20 years old</text></g><g id="age-25"><g id="quantuple-age-25"><text x="517.84" y="96.212" class="fill-black text-[8px] font-semibold" text-anchor="end">25</text><text x="520.84" y="96.212" class="fill-black text-[8px] font-semibold" text-anchor="start">years</text><text x="520.84" y="106.212" class="fill-black text-[8px] font-semibold" text-anchor="start">old</text></g></g><g id="age-30"><text x="694" y="122" class="fill-black text-[8px] font-semibold" text-anchor="middle">30</text><text x="694" y="132" class="fill-black text-[8px] font-semibold" text-anchor="middle">years old</text></g><g id="age-35"><g id="quantuple-age-35"><text x="694" y="273" class="fill-black text-[8px] font-semibold" text-anchor="end">35</text><text x="697" y="273" class="fill-black text-[8px] font-semibold" text-anchor="start">years</text><text x="697" y="283" class="fill-black text-[8px] font-semibold" text-anchor="start">old</text></g></g><g id="age-40"><text x="796" y="398" class="fill-black text-[8px] font-semibold" text-anchor="middle">40</text><text x="796" y="408" class="fill-black text-[8px] font-semibold" text-anchor="middle">years</text><text x="796" y="418" class="fill-black text-[8px] font-semibold" text-anchor="middle">old</text></g><g id="age-45"><g id="quantuple-age-45"><text x="694" y="539.212" class="fill-black text-[8px] font-semibold" text-anchor="end">45</text><text x="697" y="539.212" class="fill-black text-[8px] font-semibold" text-anchor="start">years</text><text x="697" y="549.212" class="fill-black text-[8px] font-semibold" text-anchor="start">old</text></g></g><g id="age-50"><text x="680" y="683" class="fill-black text-[8px] font-semibold" text-anchor="middle">50</text><text x="680" y="693" class="fill-black text-[8px] font-semibold" text-anchor="middle">years old</text></g><g id="age-55"><g id="quantuple-age-55"><text x="517.84" y="705" class="fill-black text-[8px] font-semibold" text-anchor="end">55</text><text x="520.84" y="705" class="fill-black text-[8px] font-semibold" text-anchor="start">years</text><text x="520.84" y="715" class="fill-black text-[8px] font-semibold" text-anchor="start">old</text></g></g><g id="age-60"><text x="405" y="790" class="fill-black text-[8px] font-semibold" text-anchor="middle">60 years old</text></g><g id="age-65"><g id="quantuple-age-65"><text x="290.84" y="705" class="fill-black text-[8px] font-semibold" text-anchor="end">65</text><text x="293.84" y="705" class="fill-black text-[8px] font-semibold" text-anchor="start">years</text><text x="293.84" y="715" class="fill-black text-[8px] font-semibold" text-anchor="start">old</text></g></g><g id="age-70"><text x="127" y="683" class="fill-black text-[8px] font-semibold" text-anchor="middle">70</text><text x="127" y="693" class="fill-black text-[8px] font-semibold" text-anchor="middle">years old</text></g><g id="age-75"><g id="quantuple-age-75"><text x="108.84" y="539.212" class="fill-black text-[8px] font-semibold" text-anchor="end">75</text><text x="111.84" y="539.212" class="fill-black text-[8px] font-semibold" text-anchor="start">years</text><text x="111.84" y="549.212" class="fill-black text-[8px] font-semibold" text-anchor="start">old</text></g></g></g></g></g></g></svg></div></div></div></div></div>
            </div>
                </div>
                
                <div class="mt-6 p-4 bg-gray-50 rounded-lg">
                    <h4 class="font-bold mb-2">Matrix Interpretation</h4>
                    <p>Your destiny matrix reveals a strong connection between your life path number (7) and your expression number (9). This indicates a period of spiritual growth and intellectual discovery. The recurring pattern of 4-1-6 suggests stability in your foundation while pursuing higher knowledge.</p>
                </div>
            </div>
        </section>
        ) : ""}

        {/* <!-- Footer/Legend Section --> */}
        
    </div>
    </>
    )
}
export default Report