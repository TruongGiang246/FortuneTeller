import React, { useEffect, useState } from "react";
import "./AstroChartRequestStyle.css"
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { PieChart, XAxis, YAxis, Pie, Cell, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import vi from 'date-fns/locale/vi'


const COLORS3 = ['#0088FE', '#00C49F', '#FFBB28'];
const COLORS4 = ['#FF0000', '#FFD700', '#00C49F', '#0088FE'];
const AstroChartRequest = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState(new Date(2025, 0, 1));
  const [time, setTime] = useState(new Date(2025, 0, 1, 0, 0));
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
      {name: "Thiên vương tinh", value: 0},
      {name: "Hải vương tinh", value: 0},
      {name: "Diêm vương tinh", value: 0}
      
    ]
  ])

  registerLocale('vi', vi);
  setDefaultLocale('vi');

  const fetchAstroChart = async () => {

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
  console.log(element_push)



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
    {name: "Mặt trời", value: sun},
    {name: "Mặt trăng", value: moon},
    {name: "Thủy tinh", value: mer},
    {name: "Kim tinh", value: venus},
    {name: "Sao hỏa", value: mars},
    {name: "Sao mộc", value: jupiter},
    {name: "Sao thổ", value: saturn},
    {name: "Thiên vương tinh", value: uranus},
    {name: "Hải vương tinh", value: neptune},
    {name: "Diêm vương tinh", value: pluto}
  ],
  [
    response.chart
  ]
])



}
   
  

  },[response]);

useEffect(()=>{
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');      // 09
  const month = String(today.getMonth() + 1).padStart(2, '0'); // 04 (tháng bắt đầu từ 0)
  const year = today.getFullYear();                          // 2025

  const randomNumber = Math.floor(Math.random() * 9) + 1;
  const formattedDate = `${day}-${month}-${year}`;
  console.log(formattedDate); // "09-04-2025"

  console.log(SumData[3])
  if(SumData[3]){
    console.log(SumData)
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





  return (
    <div className="wrapper">
      <div className="content_box">
        <h1>Lập lá số</h1>
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
        <button className="get_chart" onClick={fetchAstroChart} disabled={loading}>
        {loading ? "Loading..." : "Get Astro Chart"}
        </button>
      </div>

      </div>


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
              <div className="des_content">
                  <h2>Tính Tiên Phong</h2>
                  <p>xin chào</p>
              </div>
              <div className="des_content">
                  <h2>Tính Kiên Định</h2>
                  <p>xin chào</p>
              </div>
              <div className="des_content">
                  <h2>Tính Linh Hoạt</h2>
                  <p>xin chào</p>
              </div>
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
              <div className="des_content">
                  <h2>Tính Lửa</h2>
                  <p>xin chào</p>
              </div>
              <div className="des_content">
                  <h2>Tính Đất</h2>
                  <p>xin chào</p>
              </div>
              <div className="des_content">
                  <h2>Tính Nước</h2>
                  <p>xin chào</p>
              </div>
              <div className="des_content">
                  <h2>Tính Khí</h2>
                  <p>xin chào</p>
              </div>
          </div>
        </div>


        <div className="feature_box nope">
          <h1>Các nhân tố</h1>
            <div className="feature_wrapper_2">
              <ResponsiveContainer width="100%" height={450}>
                <BarChart data={SumData[2]}>
                    <XAxis tick={{ style: { fontWeight: 'bold', fill: 'white', fontSize: '18px'} }} dataKey="name"/>
                    <YAxis domain={[0, 100]} tickCount={6}  tick={{ style: { fontWeight: 'bold', fill: 'white', fontSize: '18px'} }}allowDecimals={false} />
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
              <div className="des_content">
                  <h2>Tính Lửa</h2>
                  <p>xin chào</p>
              </div>
              <div className="des_content">
                  <h2>Tính Đất</h2>
                  <p>xin chào</p>
              </div>
              <div className="des_content">
                  <h2>Tính Nước</h2>
                  <p>xin chào</p>
              </div>
              <div className="des_content">
                  <h2>Tính Khí</h2>
                  <p>xin chào</p>
              </div>
          </div>
          </div>
        </div>
      ) : ""}

    </div>
  );
};

export default AstroChartRequest;
