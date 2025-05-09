
import "./AstroChartRequestStyle.css"
import 'react-datepicker/dist/react-datepicker.css';
import { PieChart, XAxis, YAxis, Pie, Cell, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import vi from 'date-fns/locale/vi'
import CustomLegend from "../Blog/CustomLegend";
import domtoimage from "dom-to-image-more";
import { useState, useEffect } from "react";




const COLORS4T = ['	#EF4444B3', '#10B981B3', '#FACC15B3', '#3B82F6B3']
const COLORS3T = ['#6366F1B3', '#8B5CF6B3', '#EC4899B3']
const zodiacMap = {
  "Ari": "Bạch Dương",
  "Tau": "Kim Ngưu",
  "Gem": "Song Tử",
  "Can": "Cự Giải",
  "Leo": "Sư Tử",
  "Vir": "Xử Nữ",
  "Lib": "Thiên Bình",
  "Sco": "Bọ Cạp",
  "Sag": "Nhân Mã",
  "Cap": "Ma Kết",
  "Aqu": "Bảo Bình",
  "Pis": "Song Ngư"
};

const COLORS10 = [
  "#FFD700","#B0C4DE","#C0C0C0","#FF69B4","#FF4500","#D2691E","#708090","#40E0D0","#4169E1","#800080"
]





const PlantColors = [
  {name: "Mặt trời", color: "#FFD700"},
  {name: "Mặt trăng", color: "#B0C4DE"},
  {name: "Thủy tinh", color: "#C0C0C0"},
  {name: "Kim tinh", color: "#FF69B4"},
  {name: "Sao hỏa", color: "#FF4500"},
  {name: "Sao mộc", color: "#D2691E"},
  {name: "Sao thổ", color: "#708090"},
  {name: "Thiên vương", color: "#40E0D0"},
  {name: "Hải vương", color: "#4169E1"},
  {name: "Diêm vương", color: "#800080"}
]
const AstroChartRequest = () => {

  const [dominatZodiac, setDominateZodiac] = useState([])

  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    // Create starry background
  
    
    // Show floating elements with delay
    const floatingElements = document.querySelectorAll('.floating');
    floatingElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '0.6';
        }, index * 200 + 500);
    });
    

    
    // Navigation between panels
    const navItems = document.querySelectorAll('.nav-item');
    const contentPanels = document.querySelectorAll('.content-panel');
    
    navItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            // Update active nav item
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
            
            // Show selected content panel
            contentPanels.forEach(panel => panel.classList.remove('active'));
            contentPanels[index].classList.add('active');
        });
    });
});




  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState(new Date(2025, 0, 1));
  const [time, setTime] = useState(new Date(2025, 0, 1, 0, 0));
  const [tick, setTick] = useState(false);

  const handleScreenshot = async () => {

    setTick(prev => !prev);
    setTimeout(() => {
      setTick(prev => !prev);
    }, 1200);
        
    const element = document.getElementById("horoscope_img_download");

    domtoimage.toPng(element).then((dataUrl) => {
    const link = document.createElement("a");
    link.download = "personal_horoscope.png";
    link.href = dataUrl;

    
    link.click();
    });
  };

  const [SumData, setSumData] = useState([
    [
      {name: 'Linh hoạt', value: 0},
      {name: 'Tiên Phong', value: 0},
      {name: 'Kiên định', value: 0},
    ],
    [
      {name: "Lửa", value: 0},
      {name: "Đất", value: 0},
      {name: "Khí", value: 0},
      {name: "Nước", value: 0}
    ],
    [
      {name: "Mặt trời", value: 0},
      {name: "Mặt trăng", value: 0},
      {name: "Thủy tinh", value: 0},
      {name: "Kim tinh", value: 0},
      {name: "Sao hỏa", value: 0},
      {name: "Sao mộc", value: 0},
      {name: "Sao thổ", value: 0},
      {name: "Thiên vương", value: 0},
      {name: "Hải vương", value: 0},
      {name: "Diêm vương", value: 0}
    ],
    ["Chart here"],
    [
      "Sample",
      "Sample",
      "Sample"
    ]
  ])
  const [des, setDes] = useState({
    element: [],
    modality: []
  });


  registerLocale('vi', vi);
  setDefaultLocale('vi');

  const fetchAstroChart = async (mode) => {
    const resultsSection = document.getElementById('resultsSection');
    const nameInputSection = document.getElementById('nameInputSection')
    const [year, month, day] = date.split('-').map(Number)
    const [hours, minute] = time.split(':').map(Number)

    if(mode == 1){
      const NamePerson = document.getElementById('Name').value;
      const BirthPlace = document.getElementById('place_birth').value
      const inputWrapper = document.getElementsByClassName('content_Horoscope');
  
      setLoading(true);
      const data = {
        subject: {
          year: year,
          month: month,
          day: day,
          hour: hours,
          minute: minute,
          longitude: 106.3425,
          latitude: 20.4491,
          city: BirthPlace,
          nation: "VN",
          timezone: "Asia/Ho_Chi_Minh",
          name: NamePerson,
          zodiac_type: "Tropic",
          sidereal_mode: null,
          perspective_type: "Apparent Geocentric",
          houses_system_identifier: "P",
        },
        theme: "classic",
        language: "EN",
        wheel_only: false,
      };
  
      try {
        const res = await fetch("https://astrologer.p.rapidapi.com/api/v4/birth-chart", {
          method: "POST",
          headers: {
            "x-rapidapi-key": "3c5c39e0fdmshb9e435523552215p10d56fjsnc394ff83fd8e",
            "x-rapidapi-host": "astrologer.p.rapidapi.com",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const result = await res.json();
        resultsSection.classList.remove('hidden')
        nameInputSection.classList.add('hidden')
        setResponse(result);
        // inputWrapper[0].classList.add('nope');
      } catch (error) {
        console.error("Error fetching astrology chart:", error);
      } finally {
        setLoading(false);
      }
    }else if(mode == 2){
      const NamePerson = document.getElementById('Name').value;
      const BirthPlace = document.getElementById('place_birth').value
      const NamePerson2 = document.getElementById('Name2').value;
      const BirthPlace2 = document.getElementById('place_birth2').value

      const inputWrapper = document.getElementsByClassName('content_Horoscope');
  
      setLoading(true);
      const data = {
        first_subject: {
          year: date.getFullYear(),
          month: date.getMonth() + 1,
          day: date.getDate(),
          hour:time.getHours(),
          minute: time.getMinutes(),
          longitude: 106.3425,
          latitude: 20.4491,
          city: BirthPlace,
          nation: "VN",
          timezone: "Asia/Ho_Chi_Minh",
          name: NamePerson,
          zodiac_type: "Tropic",
          sidereal_mode: null,
          perspective_type: "Apparent Geocentric",
          houses_system_identifier: "P",
        },
        second_subject: {
          year: date2.getFullYear(),
          month: date2.getMonth() + 1,
          day: date2.getDate(),
          hour:time2.getHours(),
          minute: time2.getMinutes(),
          longitude: 106.3425,
          latitude: 20.4491,
          city: BirthPlace2,
          nation: "VN",
          timezone: "Asia/Ho_Chi_Minh",
          name: NamePerson2,
          zodiac_type: "Tropic",
          sidereal_mode: null,
          perspective_type: "Apparent Geocentric",
          houses_system_identifier: "P",
        },
      };
  
      try {
        const res = await fetch("https://astrologer.p.rapidapi.com/api/v4/relationship-score", {
          method: "POST",
          headers: {
            "x-rapidapi-key": "3c5c39e0fdmshb9e435523552215p10d56fjsnc394ff83fd8e",
            "x-rapidapi-host": "astrologer.p.rapidapi.com",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const result = await res.json();
        setResponse2(result);
        // inputWrapper[0].classList.add('nope');
      } catch (error) {
        console.error("Error fetching astrology chart:", error);
      } finally {
        setLoading(false);
      }
    }





  };


useEffect(()=>{ 

  if(response){


  const featureBox = document.getElementsByClassName('tab-content');
  const btn_lists = document.getElementsByClassName('button_feature');
  const downloadButton = document.getElementsByClassName('feature_box_horoscope');

  
  for(let i = 0; i < btn_lists.length; i++){
    btn_lists[i].onclick = () => {
      for(let j = 0; j < btn_lists.length; j++){
        featureBox[j].classList.remove('active');
        btn_lists[j].classList.remove('active');
      }
      downloadButton[0].classList.add('active');
      featureBox[i].classList.add('active');
      if(i == 0){
        downloadButton[0].classList.add('active');
      }
      btn_lists[i].classList.add('active')
    }
  }

  let element_push = [0, 0, 0, 0];
  const element = document.querySelector('[kr\\:node="Elements_Percentages"]').querySelectorAll('*');
  for(let i = 1; i < element.length; i++){
    const number = element[i].innerHTML.match(/\d+/);
    element_push[i] = number[0];
  }



const planetsToGet = ['Sun', 'Moon', 'Mercury', 'Venus', 'Mars','Jupiter','Saturn','Uranus','Neptune','Pluto', 'Ascendant', 'Descendant'];
const planetsInfo = planetsToGet.map(planetName => {
const planet = response.data[planetName.toLowerCase()]; // Lấy thông tin của hành tinh từ data
if (planet) {
  return {
    name: planet.name,
    quality: planet.quality,
    element: planet.element,
    sign: planet.sign,
    sign_num: planet.sign_num,
    house: planet.house,
  };
}

return null; // Nếu không có hành tinh này, trả về null
}).filter(planet => planet !== null); // Loại bỏ những kết quả null


let absolute = 0, mutable = 0, cardinal = 0;

let sun, moon, mer, venus, mars, jupiter, saturn, uranus, neptune, pluto;
const filterZodiac = {
"Leo": 0,
"Can": 0,
"Tau": 0,
"Gem": 0,
"Vir": 0,
"Lib": 0,
"Ari": 0,
"Sco": 0,
"Sag": 0,
"Pis": 0,
"Cap": 0,
"Aqu": 0,
}

const filterPlanet = {
  "Sun": 0,
  "Moon": 0,
  "Mercury": 0,
  "Venus": 0,
  "Mars": 0,
  "Jupiter": 0,
  "Saturn": 0,
  "Uranus": 0,
  "Neptune": 0,
  "Pluto": 0,
}

const filterHouse = {
"First_House": 0,
"Second_House": 0,
"Third_House": 0,
"Fourth_House": 0,
"Fifth_House": 0,
"Sixth_House": 0,
"Seventh_House": 0,
"Eighth_House": 0,
"Ninth_House": 0,
"Tenth_House": 0,
"Eleventh_House": 0,
"Twelfth_House": 0
}

const master = {
  "Sun1":"Leo",
  "Moon1":"Can",
  "Mer1":"Gem",
  "Mer2":"Vir",
  "Venus1":"Tau",
  "Venus2":"Lib",
  "Mars1":"Ari",
  "Mars2":"Sco",
  "Jupiter1":"Sag",
  "Jupiter2":"Pis",
  "Saturn1":"Cap",
  "Saturn2":"Aqu",
  "Uranus1":"Aqu",
  "Neptune1":"Pis",
  "Pluto1":"Sco",
}

planetsInfo.forEach(planet =>{
if(planet.quality == 'Fixed'){
  absolute++;
}else if(planet.quality == 'Mutable'){
  mutable++;
}else{
  cardinal++;
}


let number1 = 3, number2 = 3;
  if(planet.sign == "Leo" || planet.sign == "Can" || planet.house == "Fifth_House"  || planet.house == "Fourth_House" || planet.name == "sun" || planet.name == "moon"){
    number1 = 5;
    number2 = 5;
  }

  if(master[planet.name + "1"] == planet.sign || master[planet.name + "2"] == planet.sign){
    number1 *= 3;
  }
  

  filterZodiac[planet.sign] += number1;
  filterHouse[planet.house] += number2;
   

})


response.aspects.forEach(angle => {
  let number1, number2;
  if(angle.aspect == "sextile"){
    number1 = 2;
    number2 = 2;
  }else{
    number1 = 5;
    number2 = 5;
  }
  if(angle.p1_name == "Sun" || angle.p1_name == "Moon"){
    if(number1 == 2) number1 *= 2;
    if(number1 == 5) number1 = 6;
    number2 = 10;
  }else if(angle.p2_name == "Sun" || angle.p2_name == "Moon"){
    if(number2 == 2) number2 *= 2;
    if(number2 == 5) number2 = 6;
    number1 = 10;
  }
  filterPlanet[angle.p1_name] += number1;
  filterPlanet[angle.p2_name] += number2;

  })   


sun = filterZodiac["Leo"] + filterHouse["Fifth_House"] + filterPlanet["Sun"]
moon = filterZodiac["Can"] + filterHouse["Fourth_House"] + filterPlanet["Moon"]
mer = filterZodiac["Gem"] + filterZodiac["Vir"] + filterHouse["Third_House"] + filterHouse["Sixth_House"] + filterPlanet["Mercury"]
venus = filterZodiac["Tau"] + filterZodiac["Lib"] + filterHouse["Second_House"] + filterHouse["Seventh_House"] + filterPlanet["Venus"]
mars = filterZodiac["Ari"] + filterZodiac["Sco"] + filterHouse["First_House"] + filterHouse["Eighth_House"] + filterPlanet["Mars"]
jupiter = filterZodiac["Sag"] + filterZodiac["Pis"] + filterHouse["Ninth_House"] + filterHouse["Twelfth_House"] + filterPlanet["Jupiter"]
saturn = filterZodiac["Cap"] + filterZodiac["Aqu"] + filterHouse["Tenth_House"] + filterHouse["Eleventh_House"]  + filterPlanet["Saturn"]
uranus = filterZodiac["Aqu"] + filterHouse["Eleventh_House"] + filterPlanet["Uranus"]
neptune = filterZodiac["Pis"] + filterHouse["Twelfth_House"] + filterPlanet["Neptune"]
pluto = filterZodiac["Sco"] + filterHouse["Eighth_House"] + filterPlanet["Pluto"]


const hightest_planet = [sun, moon, mer, venus, mars, jupiter, saturn, uranus, neptune, pluto];
const planetName = ["Mặt trời", "Mặt trăng", "Sao Thủy", "Sao Kim", "Sao Mộc", "Sao Thổ","Sao Thiên vương","Sao Hải vương","Sao Diêm vương"]
const comments = [
  "☀️ Bạn tỏa sáng với sự tự tin và mục tiêu rõ ràng. Cách bạn thể hiện bản thân truyền cảm hứng cho những người xung quanh.",
  "🌙 Bạn rất nhạy cảm với cảm xúc và trực giác. Bạn luôn tìm kiếm sự an yên, an toàn và kết nối về mặt cảm xúc.",
  "🗣️ Bạn có trí óc tò mò và nhanh nhạy. Bạn giao tiếp tốt, thích học hỏi và chia sẻ ý tưởng.",
  "💖 Bạn có xu hướng bị thu hút bởi cái đẹp, sự hòa hợp và các mối quan hệ. Sự duyên dáng và khéo léo giúp bạn dễ dàng kết nối với người khác.",
  "🔥 Bạn tràn đầy năng lượng và quyết tâm. Niềm đam mê và sự chủ động giúp bạn tiến gần đến mục tiêu.",
  "🌟 Bạn lạc quan và hào phóng. Bạn yêu thích sự phát triển, khám phá và mở rộng tầm nhìn.",
  "⏳ Bạn kỷ luật và có trách nhiệm. Thử thách không làm bạn sợ — ngược lại, nó giúp bạn trưởng thành hơn.",
  "⚡ Bạn sáng tạo và nổi loạn. Bạn coi trọng tự do và thích phá vỡ những khuôn mẫu cũ.",
  "🌊 Bạn mơ mộng và nhạy cảm. Bạn bị thu hút bởi nghệ thuật, tâm linh và giúp đỡ người khác.",
  "🔮 Bạn mãnh liệt và đầy tính chuyển hóa. Bạn có khát khao thay đổi và phát triển bản thân sâu sắc."
];
let indexHigh = -999;
let indexPos = 0;
for(let i = 0; i < hightest_planet.length; i++){
  if(hightest_planet[i] > indexHigh){
    indexHigh = hightest_planet[i];
    indexPos = i;
  }
}




setDominateZodiac([
  zodiacMap[planetsInfo[0].sign],
  zodiacMap[planetsInfo[1].sign],
  zodiacMap[planetsInfo[10].sign],
])

const sumOfQualities = mutable + cardinal + absolute;
const QualitiesOfPercents = [
  Math.round((mutable/sumOfQualities)*100),
  Math.round((cardinal/sumOfQualities)*100),
  Math.round((absolute/sumOfQualities)*100)
]

setSumData([
  [
    {name: 'Linh hoạt', value: QualitiesOfPercents[0]},
    {name: 'Tiên Phong', value: QualitiesOfPercents[1]},
    {name: 'Kiên định', value: QualitiesOfPercents[2]},
  ],
  [
    {name: "Lửa", value: parseInt(element_push[1])},
    {name: "Đất", value: parseInt(element_push[2])},
    {name: "Khí", value: parseInt(element_push[3])},
    {name: "Nước", value: parseInt(element_push[4])}
  ],
  [
    {name: "Mặt trời", value: sun, color: "#FFD700"},
    {name: "Mặt trăng", value: moon, color: "#B0C4DE"},
    {name: "Thủy tinh", value: mer, color: "#C0C0C0"},
    {name: "Kim tinh", value: venus, color: "#FF69B4"},
    {name: "Sao hỏa", value: mars, color: "#FF4500"},
    {name: "Sao mộc", value: jupiter, color: "#D2691E"},
    {name: "Sao thổ", value: saturn, color: "#708090"},
    {name: "Thiên vương", value: uranus, color: "#40E0D0"},
    {name: "Hải vương", value: neptune, color: "#4169E1"},
    {name: "Diêm vương", value: pluto, color: "#800080"}
  ],
  [
    response.chart
  ],
  [
    planetName[indexPos],
    comments[indexPos],
    planetsInfo[0].sign
  ]
  
])


  

  let strong_weak = [0, 0, 0, 0]
  let check_balance = 0;
  for(let i = 1; i < element_push.length; i++){
    
    if(element_push[i] < 15){
      strong_weak[i-1] = 1
    }else if(element_push[i] > 35){
      strong_weak[i-1] = 2
    }else{
      check_balance++;
    }
  }

  const modalitySum = mutable + cardinal + absolute;


  let check_balance_2 = 0;
  const perMut = (mutable / modalitySum)*100
  const perCar = (cardinal / modalitySum)*100
  const perFix = (absolute / modalitySum)*100

  const lmao = [perCar, perFix, perMut]

  let strong_weak_2 = [0, 0, 0];
  for(let i = 0; i < 3; i++){
    if(lmao[i] < 23){
      strong_weak_2[i] = 1
    }else if(lmao[i] > 43){
      strong_weak[i] = 2
    }else{
      check_balance_2++;
    }
  }
  

}

  },[response]);

useEffect(()=>{
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');      // 09
  const month = String(today.getMonth() + 1).padStart(2, '0'); // 04 (tháng bắt đầu từ 0)
  const year = today.getFullYear();                          // 2025

  const randomNumber = Math.floor(Math.random() * 9) + 1;
  const formattedDate = `${day}-${month}-${year}`; // "09-04-2025"
  const NamePerson = document.getElementById('Name').value;
  if(SumData[4][1] != "sample" && NamePerson){
    

    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      // Nếu chưa có gì trong localStorage
      const user = {
        [NamePerson]: {
          horoscope: SumData,
          time: formattedDate,
          avt: randomNumber
        },
      };
      localStorage.setItem("user", JSON.stringify(user));
      console.log("User mới đã được lưu.");
    } else {
      // Nếu đã có user trong localStorage
      const user = JSON.parse(storedUser);

      if (!user[NamePerson]) {
        // Nếu chưa có người dùng này
        user[NamePerson] = { 
          horoscope: SumData,
          time: formattedDate,
          avt: randomNumber
        };
        console.log("Đã thêm người dùng mới vào user.");
      } else {
        // Nếu đã có người dùng này, cập nhật numerology
        user[NamePerson].horoscope = SumData;
        if(!user[NamePerson].time){
          user[NamePerson].time = formattedDate
          user[NamePerson].avt = randomNumber
        }
        console.log("Đã cập nhật Bản đồ sao cho người dùng.");
      }

      // Lưu lại toàn bộ object user
      localStorage.setItem("user", JSON.stringify(user));
    }
  }
},[SumData])




  return (
    <div className="astro_wrapper">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="floating text-4xl" style={{top: "15%",left: "10%",animationDuration: "6s", opacity: "0.6"}}>✨</div>
          <div className="floating text-3xl" style={{top: "25%", right: "15%", animationDuration: "7s", opacity: "0.6"}}>🌙</div>
          <div className="floating text-4xl" style={{bottom: "20%", left: "15%", animationDuration: "8s", opacity: "0.6"}}>⭐</div>
          <div className="floating text-3xl" style={{bottom: "30%", right: "10%", animationDuration: "9s", opacity: "0.6"}}>🪐</div>
          <div className="floating text-4xl" style={{top: "60%", left: "20%", animationDuration: "7.5s", opacity: "0.6"}}>💫</div>
          <div className="floating text-3xl" style={{top: "40%", right: "25%", animationDuration: "6.5s", opacity: "0.6"}}>🌠</div>
      </div>

      <header className="w-full max-w-6xl mx-auto px-4 py-4 flex justify-center items-center">

        
        <div className="text-sm text-indigo-700 font-medium">
            Astrology Map
        </div>
    </header>
      <main className="w-full max-w-6xl mx-auto px-4 py-6">
        {/* <!-- Name Input Section --> */}
        <div id="nameInputSection" className="fade-in">
            <div className="mb-10 bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-xl max-w-lg mx-auto">
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">✨ Bản Đồ Vũ Trụ Của Bạn</h2>
                    <p className="text-gray-600 leading-relaxed">
                    Khám phá cách các vì sao và hành tinh ảnh hưởng đến tính cách, điểm mạnh và con đường tiềm năng của bạn.
                    </p>
                </div>
                
                {/* <!-- Name Input --> */}
                <div className="mb-8">
                    <label for="name" className="block text-gray-700 font-medium mb-2">Nhập tên của bạn để khám phá bản đồ sao cá nhân</label>
                    <input type="text" id="Name" className="input-field w-full px-5 py-4 bg-white/70 rounded-xl text-gray-800 text-lg outline-none" placeholder="e.g., Linh, Kai"/>
                </div>
                <div className="mb-8">
                    <label for="name" className="block text-gray-700 font-medium mb-2">Nhập nơi sinh</label>
                    <input type="text" id="place_birth" className="input-field w-full px-5 py-4 bg-white/70 rounded-xl text-gray-800 text-lg outline-none" placeholder="e.g., Hà Nội, TP.HCM"/>
                </div>


      


                    <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label for="birthdate" className="block text-sm font-medium text-gray-700 mb-1">Chọn Ngày Sinh:</label>
                            <input value={date} onChange={(e)=> setDate(e.target.value)} type="date" id="birthdate" name="birthdate" className="number-input w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none" required=""/>
                        </div>
                        <div>
                            <label for="birth-time" className="block text-sm font-medium text-gray-700 mb-1">Chọn giờ sinh:</label>
                            <input value={time} onChange={(e)=> setTime(e.target.value)} type="time" placeholder="Enter your full name" id="birth-time"  className="number-input w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none" name="birth-time" required/>
                        </div>
                    </div>



                
                {/* <!-- Reveal Button --> */}
                <div className="flex justify-center">
                    <button id="revealButton" className="reveal-btn w-full md:w-2/3 py-4 rounded-xl text-white font-bold text-lg shadow-lg disabled:opacity-70" onClick={() => fetchAstroChart(1)} disabled={loading}>
                    {loading ? "Loading..." : "Nhận Bản Đồ"}
                    </button>
                </div>
            </div>
        </div>
        
        {/* <!-- Results Section --> */}
        <div id="resultsSection" className="hidden">
            <div className="flex flex-col md:flex-row gap-6">
                {/* <!-- Sidebar Navigation (Vertical on desktop, horizontal on mobile) --> */}
                <div className="sidebar bg-white/40 backdrop-blur-sm rounded-2xl p-4 md:w-64 flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-x-visible">
                    <button className="nav-item active flex flex-col md:flex-row items-center p-3 rounded-xl w-full">
                        <span className="text-xl">🌌</span>
                        <span className="mt-1 md:mt-0 md:ml-3 font-medium">Bản đồ sao</span>
                    </button>
                    
                    <button className="nav-item flex flex-col md:flex-row items-center p-3 rounded-xl w-full">
                        <span className="text-xl">📊</span>
                        <span className="mt-1 md:mt-0 md:ml-3 font-medium">Hành tinh</span>
                    </button>
                    
                    <button className="nav-item flex flex-col md:flex-row items-center p-3 rounded-xl w-full">
                        <span className="text-xl">🔵</span>
                        <span className="mt-1 md:mt-0 md:ml-3 font-medium">Tính chất</span>
                    </button>
                    
                    <button className="nav-item flex flex-col md:flex-row items-center p-3 rounded-xl w-full">
                        <span className="text-xl">🟣</span>
                        <span className="mt-1 md:mt-0 md:ml-3 font-medium">Nguyên tố</span>
                    </button>
                </div>
                
                {/* <!-- Content Panel --> */}
                <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 md:p-8 flex-1 shadow-lg">
                    {/* <!-- Birth Chart Panel --> */}
                    <div id="birthChartPanel" className="content-panel active">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 inline-block">Bản đồ chiêm tinh của bạn</h2>
                        <button onClick={handleScreenshot} className="inline-block ml-3 cta-button hover:bg-white/70 text-white font-medium py-1 px-5 rounded-full transition-all">
                        {tick ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>                         
                        ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M12 3v13" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                          <path d="M7 12l5 5 5-5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                          <path d="M3 17v4h18v-4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                        )}


                        </button>
                        <p className="text-gray-600 mb-6">🪐 Bản đồ sao này cho thấy vị trí các hành tinh vào thời điểm bạn chào đời, tiết lộ bản thiết kế vũ trụ của bạn.</p>
                        
                        <div className="birth-chart-container">
                            {/* <!-- SVG Birth Chart --> */}
                            {(response) ? (
                            <>
                            <div className="screen_shoot_horoscope_wrapper">                          
                                  <div className="feature_box nope horoscope_img" dangerouslySetInnerHTML={{ __html: response.chart }}></div>                           
                            </div>

                            <div id="hidden-content">
                              <div id="horoscope_img_download" className="horoscope_img_screen" dangerouslySetInnerHTML={{ __html: response.chart }}></div>
                            </div>
                            </>
                          ) : ("")}
                            
                            {/* <!-- Planet Markers --> */}

                        </div>
                        
                        <div className="mt-8 bg-indigo-50 rounded-xl p-4">
                            <h3 className="font-semibold text-indigo-800 mb-2">Your Dominant Signs</h3>

                            <div className="flex flex-wrap gap-3">
                                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full">Mặt trời {dominatZodiac[0]}</span>
                                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full">Mặt trăng {dominatZodiac[1]}</span>
                                <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full">Cung mọc {dominatZodiac[2]}</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* <!-- Planet Influence Panel --> */}
                    <div id="planetInfluencePanel" className="content-panel">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Ảnh hưởng của các hành tinh</h2>
                        <p className="text-gray-600 mb-6">Khám phá mức độ mỗi hành tinh tác động đến tính cách và con đường đời của bạn.</p>
                        
                        <div className="plant_inner">
                              <ResponsiveContainer width="100%" height="100%">
                              <BarChart data={SumData[2]}>
                                  <XAxis hide tick={{ angle: -65, dy: 30, style: {fontWeight: 'bold', fill: 'white', fontSize: '11px'} }} dataKey="name"/>
                                  <YAxis domain={[0, 100]} tickCount={6}  tick={{  style: { fill: 'black', fontSize: '18px'} }}allowDecimals={false} />
                                  <Tooltip />
                                  <Bar dataKey="value" fill="#8884d8">
                                      {SumData[2].map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS10[index % COLORS10.length]} />
                                      ))}
                          
                                  </Bar>
                          
                                </BarChart>
                              </ResponsiveContainer>
                              <div className="adj_Astro">
                                <CustomLegend data={PlantColors}/>                      
                              </div>
                        </div>
                        
                        <div className="mt-8 bg-indigo-50 rounded-xl p-4">
                            <h3 className="font-semibold text-indigo-800 mb-2">Hành tinh chủ đạo của bạn</h3>
                            <p className="text-gray-700">
                                <span className="font-medium">{SumData[4][0]}</span> - {SumData[4][1]}
                            </p>
                        </div>
                    </div>
                    
                    {/* <!-- Qualities Panel --> */}
                    <div id="qualitiesPanel" className="content-panel">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Đặc Tính Chiêm Tinh</h2>
                    <p className="text-gray-600 mb-6">Sự phân bố năng lượng của bạn giữa năng lượng Tiên phong, Kiên định, và Linh hoạt thể hiện cách bạn tiếp cận các thử thách và sự thay đổi.</p>

                        
                        <div className="flex justify-center">
                            <div className="quality_inner">
                            <ResponsiveContainer width="100%" height={300}>
                              <PieChart>
                                <Pie data={SumData[0]} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" dataKey="value">
                                  {SumData[0].map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS3T[index % COLORS3T.length]} />
                                  ))}
                                </Pie>
                                <Tooltip active={false}/>
                                <Legend />
                              </PieChart>
                            </ResponsiveContainer>
                            </div>
                        </div>
                        
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-indigo-50 rounded-xl p-4">
                                <h3 className="font-semibold text-indigo-800 mb-1">{`Linh hoạt (${SumData[0][0].value}%)`}</h3>
                                <p className="text-sm text-gray-600">Khả năng thích ứng, linh hoạt, đa dạng</p>
                            </div>
                            <div className="bg-purple-50 rounded-xl p-4">
                                <h3 className="font-semibold text-purple-800 mb-1">{`Tiên Phong (${SumData[0][1].value}%)`}</h3>
                                <p className="text-sm text-gray-600">Khởi xướng, lãnh đạo, hướng hành động</p>
                            </div>
                            <div className="bg-pink-50 rounded-xl p-4">
                                <h3 className="font-semibold text-pink-800 mb-1">{`Kiên Định (${SumData[0][2].value}%)`}</h3>
                                <p className="text-sm text-gray-600">Sự ổn định, quyết tâm, kiên trì</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* <!-- Elements Panel --> */}
                    <div id="elementsPanel" className="content-panel">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Cân Bằng Nguyên Tố</h2>
                        <p className="text-gray-600 mb-6">Sự phân bố các yếu tố Lửa, Đất, Khí và Nước của bạn tiết lộ tính cách cơ bản của bạn.</p>
                        
                        <div className="flex justify-center">
                            <div className="elements_inner">
                            <ResponsiveContainer width="100%" height={300}>
                                <PieChart>
                                  <Pie data={SumData[1]} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" dataKey="value">
                                    {SumData[1].map((entry, index) => (
                                      <Cell key={`cell-${index}`} fill={COLORS4T[index % COLORS4T.length]} />
                                    ))}
                                  </Pie>
                                  <Tooltip active={false}/>
                                  <Legend />
                                </PieChart>
                            </ResponsiveContainer> 
                            </div>
                        </div>
                        
                        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="bg-red-50 rounded-xl p-4">
                                <h3 className="font-semibold text-red-800 mb-1">{`Lửa (${SumData[1][0].value}%)`}</h3>
                                <p className="text-sm text-gray-600">Đam mê, năng lượng, cảm hứng</p>
                            </div>
                            <div className="bg-green-50 rounded-xl p-4">
                                <h3 className="font-semibold text-green-800 mb-1">{`Đất (${SumData[1][1].value}%)`}</h3>
                                <p className="text-sm text-gray-600">Tính thực tế, ổn định, đáng tin cậy</p>
                            </div>
                            <div className="bg-yellow-50 rounded-xl p-4">
                                <h3 className="font-semibold text-yellow-800 mb-1">{`Khí (${SumData[1][2].value}%)`}</h3>
                                <p className="text-sm text-gray-600">Trí tuệ, giao tiếp, xã hội</p>
                            </div>
                            <div className="bg-blue-50 rounded-xl p-4">
                                <h3 className="font-semibold text-blue-800 mb-1">{`Nước (${SumData[1][3].value}%)`}</h3>
                                <p className="text-sm text-gray-600">Cảm xúc, trực giác, nhạy cảm</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    </div>
    
  );
};

export default AstroChartRequest;
