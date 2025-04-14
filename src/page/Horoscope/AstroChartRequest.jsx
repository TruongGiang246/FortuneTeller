import React, { useEffect, useState } from "react";
import "./AstroChartRequestStyle.css"
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { PieChart, XAxis, YAxis, Pie, Cell, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import vi from 'date-fns/locale/vi'
import { ElementDescriptions, ModalityDescriptions, planetDes } from "./Library_Astro";


const COLORS3 = ['#0088FE', '#00C49F', '#FFBB28'];
const COLORS4 = ['#FF0000', '#FFD700', '#00C49F', '#0088FE'];
const AstroChartRequest = () => {
  const [response, setResponse] = useState(null);
  const [response2, setResponse2] = useState(null)
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState(new Date(2025, 0, 1));
  const [time, setTime] = useState(new Date(2025, 0, 1, 0, 0));
  const [date2, setDate2] = useState(new Date(2025, 0, 1, 0, 0));
  const [time2, setTime2] = useState(new Date(2025, 0, 1, 0, 0))

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
    ]
  ])
  const [des, setDes] = useState({
    element: [],
    modality: []
  });
  const [swapInput, setSwapInput] = useState(true);

  registerLocale('vi', vi);
  setDefaultLocale('vi');

  const fetchAstroChart = async (mode) => {

    if(mode == 1){
      const NamePerson = document.getElementById('Name').value;
      const BirthPlace = document.getElementById('place_birth').value
      const inputWrapper = document.getElementsByClassName('content_box');
  
      setLoading(true);
      const data = {
        subject: {
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
        setResponse(result);
        inputWrapper[0].classList.add('nope');
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

      const inputWrapper = document.getElementsByClassName('content_box');
  
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
        inputWrapper[0].classList.add('nope');
      } catch (error) {
        console.error("Error fetching astrology chart:", error);
      } finally {
        setLoading(false);
      }
    }





  };


useEffect(()=>{ 

  if(response){


  const featureBox = document.getElementsByClassName('feature_box');
  const btn_lists = document.getElementsByClassName('button_feature');
  
  for(let i = 0; i < btn_lists.length; i++){
    btn_lists[i].onclick = () => {
      for(let j = 0; j < btn_lists.length; j++){
        featureBox[j].classList.add('nope');
        btn_lists[j].classList.remove('chosen');
      }
      featureBox[i].classList.remove('nope');
      btn_lists[i].classList.add('chosen')
    }
  }

  let element_push = [];
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


let fixed = 0, mutable = 0, cardinal = 0;

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
  fixed++;
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



// console.log(planetsInfo)
// console.log(fixed, mutable, cardinal)

// console.log(sun, moon, mer, venus, mars, jupiter, saturn, uranus, neptune, pluto)



setSumData([
  [
    {name: 'Linh hoạt', value: mutable},
    {name: 'Tiên Phong', value: cardinal},
    {name: 'Kiên định', value: fixed},
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
    response.data.sun.sign
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

  const modalitySum = mutable + cardinal + fixed;


  let check_balance_2 = 0;
  const perMut = (mutable / modalitySum)*100
  const perCar = (cardinal / modalitySum)*100
  const perFix = (fixed / modalitySum)*100

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

  const insetData = {
    element: [strong_weak[0], strong_weak[1], strong_weak[2], strong_weak[3]],
    modality: [strong_weak_2[0], strong_weak_2[1], strong_weak_2[2]],
    ifBalance: check_balance,
    ifBalance_2: check_balance_2
  }

  setDes(insetData)
  

}

  },[response]);

useEffect(()=>{
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');      // 09
  const month = String(today.getMonth() + 1).padStart(2, '0'); // 04 (tháng bắt đầu từ 0)
  const year = today.getFullYear();                          // 2025

  const randomNumber = Math.floor(Math.random() * 9) + 1;
  const formattedDate = `${day}-${month}-${year}`; // "09-04-2025"

  if(SumData[3]){
    const NamePerson = document.getElementById('Name').value;

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


console.log(response2)


  return (
    <div className="wrapper">
      <div className="content_box">


        {swapInput ? (
        <>
          <h1>Lập lá số cá nhân<i onClick={()=>setSwapInput(!swapInput)} class="fa-solid fa-heart"></i></h1>
          <div className="content_input">
            <h2 form="Name">Họ Tên:</h2>
            <input type="text" id="Name" name="Name"/>
          </div>

          <div className="content_input">
          <h2>Ngày  / Tháng / Năm:</h2>
          <DatePicker
            selected={date}
            onChange={(date)=> setDate(date)}
            locale="vi"
            dateFormat="dd/MM/yyyy"
            isClearable
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
          />
          </div>
          <div className="content_input">
          <h2>Giờ Sinh:</h2>
          <DatePicker
            selected={time}
            onChange={(time)=> setTime(time)}
            locale="vi"
            showTimeSelect
            showTimeSelectOnly
            timeFormat="HH:mm"
            dateFormat="HH:mm"
          />
          </div>
          <div className="content_input">
            <h2>Nơi Sinh:</h2>
            <input type="text" id="place_birth"/>
          </div>
          <div className="get_chart_wrapper"> 
          <button className="get_chart" onClick={() => fetchAstroChart(1)} disabled={loading}>
          {loading ? "Loading..." : "Get Astro Chart"}
          </button>
          </div>
        </>
        ) : (
        <>
          <h1>Điểm hòa hợp đôi<i onClick={()=>setSwapInput(!swapInput)} class="fa-solid fa-person"></i></h1>
          <div className="content_input">
            <h2 form="Name">Họ Tên Người 1:</h2>
            <input type="text" id="Name" name="Name"/>
          </div>

          <div className="content_input">
          <h2>Ngày  / Tháng / Năm:</h2>
          <DatePicker
            selected={date}
            onChange={(date)=> setDate(date)}
            locale="vi"
            dateFormat="dd/MM/yyyy"
            isClearable
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
          />
          </div>
          <div className="content_input">
          <h2>Giờ Sinh:</h2>
          <DatePicker
            selected={time}
            onChange={(time)=> setTime(time)}
            locale="vi"
            showTimeSelect
            showTimeSelectOnly
            timeFormat="HH:mm"
            dateFormat="HH:mm"
          />
          </div>
          <div className="content_input">
            <h2>Nơi Sinh:</h2>
            <input type="text" id="place_birth"/>
          </div>
          <hr/>
          {/* Người sinh 2 */}
          <div className="content_input">
            <h2 form="Name">Họ Tên Người 2:</h2>
            <input type="text" id="Name2" name="Name"/>
          </div>

          <div className="content_input">
          <h2>Ngày  / Tháng / Năm:</h2>
          <DatePicker
            selected={date2}
            onChange={(date)=> setDate2(date)}
            locale="vi"
            dateFormat="dd/MM/yyyy"
            isClearable
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
          />
          </div>
          <div className="content_input">
          <h2>Giờ Sinh:</h2>
          <DatePicker
            selected={time2}
            onChange={(time)=> setTime2(time)}
            locale="vi"
            showTimeSelect
            showTimeSelectOnly
            timeFormat="HH:mm"
            dateFormat="HH:mm"
          />
          </div>
          <div className="content_input">
            <h2>Nơi Sinh:</h2>
            <input type="text" id="place_birth2"/>
          </div>


          <div className="get_chart_wrapper"> 
          <button className="get_chart" onClick={() => fetchAstroChart(2)} disabled={loading}>
          {loading ? "Loading..." : "Get Astro Chart"}
          </button>
          </div>
          </>
        )}



      </div>

      {response2 ? (
        <div>
          <div className="wrapper_feature relationship">
            <h1>Mức độ hòa hợp:</h1>
            <div className="feature_relationship">
              <h2>{response2.data.first_subject.name}</h2>
              <div className="heart">
                
              </div>
              <h2>{response2.data.second_subject.name}</h2>
              <p>{Math.round((response2.score / 44)*100)}</p>
            </div>
            <p className="note">*Điểm trên thang 0-100</p>
          </div>
        </div>
      ) : ""}

      {response ? (
        <div className="wrapper_feature">
        <div className="feature">
          <button className="button_feature">Bản đồ sao</button>
          <button className="button_feature">Tính chất</button>
          <button className="button_feature">Nguyên tố</button>
          <button className="button_feature">Nhân tố hành tinh</button>
        </div>
        <div className="feature_box nope horoscope_img" dangerouslySetInnerHTML={{ __html: response.chart }} />


        <div className="feature_box">
        <h1>Cân bằng tính chất</h1>
        <div className="feature_wrapper">
        <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={SumData[0]} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" dataKey="value">
                {SumData[0].map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS3[index % COLORS3.length]} />
                ))}
              </Pie>
              <Tooltip active={false}/>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
          </div>
          <div className="description">
          <h1>Tính chất</h1>

            {des.ifBalance_2 == 3 ? (
                <div className="des_content">
                  <h2>Cân bằng tổng thể</h2>
                  <p>{ModalityDescriptions.overallBalance.description}</p>
                </div>
            ) : (

              des.modality.map((data, index)=>{

                if(data == 1){
                  return(
                    <div className="des_content">
                      <h2>Thiếu tính {ModalityDescriptions[index].name}</h2>
                      <p>{ModalityDescriptions[index].lack}</p>
                    </div>
                    )
                }
                if(data == 2){
                  return(
                    <div className="des_content">
                      <h2>Nhiều tính {ModalityDescriptions[index].name}</h2>
                      <p>{ModalityDescriptions[index].excess}</p>
                    </div>
                    )
                }
                })

            )}
             
          </div>
        </div>

        <div className="feature_box nope">
        <h1>Cân bằng nguyên tố</h1>
        <div className="feature_wrapper">
        <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={SumData[1]} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" dataKey="value">
                {SumData[1].map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS4[index % COLORS4.length]} />
                ))}
              </Pie>
              <Tooltip active={false}/>
              <Legend />
            </PieChart>
        </ResponsiveContainer>     
        </div>  
        <div className="description">
              <h1>Nguyên tố</h1>
              {des.ifBalance == 4 ? (
                <div className="des_content">
                    <h2>Cân bằng tổng thể</h2>
                    <p>{ElementDescriptions.overallBalance.description}</p>
                </div>              
              ) : (
                des.element.map((data, index)=>{

            

                  if(data == 1){
                    return(
                      <div className="des_content">
                        <h2>Thiếu nguyên tố {ElementDescriptions[index].name}</h2>
                        <p>{ElementDescriptions[index].lack}</p>
                      </div>
                      )
                  }
                  if(data == 2){
                    return(
                      <div className="des_content">
                        <h2>Nhiều nguyên tố {ElementDescriptions[index].name}</h2>
                        <p>{ElementDescriptions[index].excess}</p>
                      </div>
                      )
                  }
                  
  
                })
              )}
              
          </div>
        </div>


        <div className="feature_box nope">
          <h1>Các nhân tố</h1>
            <div className="feature_wrapper_2">
              <ResponsiveContainer width="100%" height={450}>
                <BarChart data={SumData[2]}>
                    <XAxis tick={{ angle: -45, dy: 20, style: {fontWeight: 'bold', fill: 'white', fontSize: '12px'} }} dataKey="name"/>
                    <YAxis domain={[0, 100]} tickCount={6}  tick={{  style: {  fontWeight: 'bold', fill: 'white', fontSize: '18px'} }}allowDecimals={false} />
                    <Tooltip />
                    <Bar dataKey="value" fill="#8884d8">
                        {SumData[2].map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS4[index % COLORS4.length]} />
                        ))}
            
                    </Bar>
            
                  </BarChart>
                </ResponsiveContainer>
 
            </div>
            <div className="description">

              {SumData[2].map((data, index)=>{
                if(index > 6){
                  return null
                }
                return(
                  <div className="des_content">
                    <h2>Mẫu người {data.name} - Điểm {data.value}</h2>
                    <p>{planetDes[index]}</p>
                  </div>
                )
              })}
          </div>
          </div>
        </div>
      ) : ""}

    </div>
  );
};

export default AstroChartRequest;
