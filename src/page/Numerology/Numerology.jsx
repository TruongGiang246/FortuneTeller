import { useEffect, useState, useRef } from 'react';
import './NumerologyStyle.css';
import {LifePath, DestinyNumber, SoulNumber, PersonalityNumber, MaturityNumber, BirthDayNumber, AttitudeNumber} from './NumerologyInfo';
function Numerology(){
    const [value, setValue] = useState(["?","?","?","?","?","?","?"]);
    const valueRef = useRef(value);

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  

    useEffect(() => {
        valueRef.current = value;
    }, [value])



    useEffect(()=>{
        // Parralax
        const bg = document.getElementById('bg_Numerology');
        const cloud = document.getElementById('cloud');
        const cloud2 = document.getElementById('cloud2');
        const number_1 = document.getElementById('number_1');
        const number_2 = document.getElementById('number_2');
        const number_3 = document.getElementById('number_3');
        const number_4 = document.getElementById('number_4');
        const number_5 = document.getElementById('number_5');
        const number_6 = document.getElementById('number_6');
        const number_7 = document.getElementById('number_7');
        const number_8 = document.getElementById('number_8');
        const number_9 = document.getElementById('number_9');
        window.addEventListener('scroll',()=>{
            let value = window.scrollY;
            console.log(value);

            bg.style.top = value * 0.5 + 'px';
            cloud.style.left = value * 2 + 'px';
            cloud2.style.right = value * 2 + 'px'; 

            number_1.style.top = value * 1 + 'px';
            number_1.style.opacity = Math.max(1 - value / 300, 0);

            number_2.style.top = value * 0.7 + 'px';
            number_2.style.opacity = Math.max(1 - value / 300, 0);

            number_3.style.top = value * 0.15 + 'px';
            number_3.style.opacity = Math.max(1 - value / 300, 0);

            number_4.style.top = value * 2 + 'px';
            number_4.style.opacity = Math.max(1 - value / 300, 0);

            number_5.style.top = value * -0.2 + 'px';
            number_5.style.opacity = Math.max(1 - value / 300, 0);

            number_6.style.opacity = Math.max(1 - value / 300, 0);

            number_7.style.top = value * -0.5 + 'px';
            number_7.style.opacity = Math.max(1 - value / 300, 0);

            
            number_8.style.top = value * -0.8 + 'px';
            number_8.style.opacity = Math.max(1 - value / 300, 0);

            
            number_9.style.top = value * 0.15 + 'px';
            number_9.style.opacity = Math.max(1 - value / 300, 0);
            
        })



        // Xử lí thông tin
    const buttonSubmit = document.getElementById('buttonLmao');
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
        
        if(ans == 11 || ans == 22){
            return ans;
        }

        while (ans > 9) {
            ans = ans.toString().split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0);
        }
        return ans;
        
    }

    function handleClick(){
        const HoTen = document.getElementById("Firstname").value;
        const days = document.getElementById('days').value;
        const months = document.getElementById('months').value;
        const years = document.getElementById('years').value;
        
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
        
    }

    buttonSubmit.addEventListener('click', handleClick);





        // Add thông tin
        const btnOpen = document.getElementsByClassName('number_circle');
        const model = document.querySelector('.model');
        const btnClose = document.querySelector('.model_footer button');
        const iconClose = document.querySelector('.model_header i');
        const boxHeader = document.querySelector('.model_header h3');
        const box = document.querySelector('.model_body');
        const NameList = [
            "Số chủ đạo",
            "Số vận mệnh",
            "Số linh hồn",
            "Số nhân cách",
            "Số trưởng thành",
            "Số ngày sinh",
            "Số thái độ"
        ]
        const chooseList = [
            LifePath,
            DestinyNumber,
            SoulNumber,
            PersonalityNumber,
            MaturityNumber,
            BirthDayNumber,
            AttitudeNumber
        ]
            for(let i = 0; i < btnOpen.length; i++){
                btnOpen[i].addEventListener('click', () => toggleModel(i));
            }
            btnClose.addEventListener('click',toggleModel);
            iconClose.addEventListener('click', toggleModel);
            model.addEventListener('click', (e) => {
                if(e.target == e.currentTarget){
                    toggleModel();
                }
            });
        



        function toggleModel(i){
            model.classList.toggle('hide');
            boxHeader.innerText = NameList[i];
            if(valueRef.current[i] == 0){
                box.innerHTML = `
                    <h2>Số ... ?</h2>
                    <h4>Vui lòng nhập thông tin...</h4>
                `
            }   
            else if(valueRef.current[i] == 11){
                box.innerHTML = chooseList[i][9].content;
            }else if(valueRef.current[i] == 22){
                box.innerHTML = chooseList[i][10].content
            }else{
                 box.innerHTML = chooseList[i][valueRef.current[i] - 1].content;
            }
            
        }
 
    },[])



    return(
        <>
        <div className='wrapper_Numberology'>
            <img src='/FortuneTeller/Numerology_mainImg/bg.jpg' id='bg_Numerology'/>
            <img src='/FortuneTeller/Numerology_mainImg/cloud.png' id='cloud'/>
            <img src='/FortuneTeller/Numerology_mainImg/cloud.png' id='cloud2'/>
                <h1 className='number sub_title' id='number_1'>1</h1>
                <h1 className='number sub_title' id='number_2'>2</h1>
                <h1 className='number sub_title' id='number_3'>3</h1>
                <h1 className='number sub_title' id='number_4'>4</h1>
                <h1 className='number sub_title' id='number_5'>5</h1>
                <h1 className='number sub_title' id='number_6'>6</h1>
                <h1 className='number sub_title' id='number_7'>7</h1>
                <h1 className='number sub_title' id='number_8'>8</h1>
                <h1 className='number sub_title' id='number_9'>9</h1>
                <h1 className='number sub_title' id='numerology_title'>THẦN SỐ HỌC</h1>
        </div>
        <div className='content_Numerology'>
            <div className='introduce_title'>
                <p>Thần số học (Numerology) là một bộ môn nghiên cứu về sự ảnh hưởng của các con số đối với cuộc sống con người. Dựa trên ngày sinh và tên đầy đủ, thần số học phân tích các con số để khám phá tính cách, tiềm năng, sứ mệnh và con đường phát triển của mỗi người. Hệ thống phổ biến nhất là thần số học Pythagoras, trong đó mỗi con số mang một tần số rung động riêng, phản ánh đặc điểm và ý nghĩa khác nhau. Thông qua thần số học, bạn có thể hiểu rõ bản thân hơn, tận dụng thế mạnh và định hướng cuộc sống một cách tốt hơn.</p>
            </div>
            <div className="form__group field">
                <input type="input" className="form__field" placeholder="Name" name="name" id='Firstname' required />
                <label form="name" className="form__label">Họ và Tên</label>
            </div>
        <div className='input'>
          <div className='label_pos'>
          <label form='days'>Ngày:</label>
          <select name='days' className = "container_input" id="days">
            <option value="01">1</option>
            <option value="02">2</option>
            <option value="03">3</option>
            <option value="04">4</option>
            <option value="05">5</option>
            <option value="06">6</option>
            <option value="07">7</option>
            <option value="08">8</option>
            <option value="09">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
          </select>
          </div>
          <div className='label_pos'>
          <label form='months'>Tháng:</label>
          <select name='months' className = "container_input" id="months">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
          </div>
          <div className='label_pos'>
          <label form='years'>Năm:</label>
          <select name='years' className = "container_input" id="years">
            <option value="1935">1935</option>
            <option value="1936">1936</option>
            <option value="1937">1937</option>
            <option value="1938">1938</option>
            <option value="1939">1939</option>
            <option value="1940">1940</option>
            <option value="1941">1941</option>
            <option value="1942">1942</option>
            <option value="1943">1943</option>
            <option value="1944">1944</option>
            <option value="1945">1945</option>
            <option value="1946">1946</option>
            <option value="1947">1947</option>
            <option value="1948">1948</option>
            <option value="1949">1949</option>
            <option value="1950">1950</option>
            <option value="1951">1951</option>
            <option value="1952">1952</option>
            <option value="1953">1953</option>
            <option value="1954">1954</option>
            <option value="1955">1955</option>
            <option value="1956">1956</option>
            <option value="1957">1957</option>
            <option value="1958">1958</option>
            <option value="1959">1959</option>
            <option value="1960">1960</option>
            <option value="1961">1961</option>
            <option value="1962">1962</option>
            <option value="1963">1963</option>
            <option value="1964">1964</option>
            <option value="1965">1965</option>
            <option value="1966">1966</option>
            <option value="1967">1967</option>
            <option value="1968">1968</option>
            <option value="1969">1969</option>
            <option value="1970">1970</option>
            <option value="1971">1971</option>
            <option value="1972">1972</option>
            <option value="1973">1973</option>
            <option value="1974">1974</option>
            <option value="1975">1975</option>
            <option value="1976">1976</option>
            <option value="1977">1977</option>
            <option value="1978">1978</option>
            <option value="1979">1979</option>
            <option value="1980">1980</option>
            <option value="1981">1981</option>
            <option value="1982">1982</option>
            <option value="1983">1983</option>
            <option value="1984">1984</option>
            <option value="1985">1985</option>
            <option value="1986">1986</option>
            <option value="1987">1987</option>
            <option value="1988">1988</option>
            <option value="1989">1989</option>
            <option value="1990">1990</option>
            <option value="1991">1991</option>
            <option value="1992">1992</option>
            <option value="1993">1993</option>
            <option value="1994">1994</option>
            <option value="1995">1995</option>
            <option value="1996">1996</option>
            <option value="1997">1997</option>
            <option value="1998">1998</option>
            <option value="1999">1999</option>
            <option value="2000">2000</option>
            <option value="2001">2001</option>
            <option value="2002">2002</option>
            <option value="2003">2003</option>
            <option value="2004">2004</option>
            <option value="2005">2005</option>
            <option value="2006">2006</option>
            <option value="2007">2007</option>
            <option value="2008">2008</option>
            <option value="2009">2009</option>
            <option value="2010">2010</option>
            <option value="2011">2011</option>
            <option value="2012">2012</option>
            <option value="2013">2013</option>
            <option value="2014">2014</option>
            <option value="2015">2015</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
          </select>
          </div>
          <div className='label_pos'>
          <button id="buttonLmao">Giải mã ngay</button>
          </div>
          
        </div>
            
        </div>
        <div className='Numerology_Result'>
            <div className='result_inner'>

            
            <div className='item'>
                <div className='number_name'>
                    <h2>Số chủ đạo</h2> 
                </div>
                <div className='number_circle'>
                    <h2>{value[0]}</h2>
                </div>
            </div>
            <div className='item'>
                <div className='number_name'>
                    <h2>Số vận mệnh</h2> 
                </div>
                <div className='number_circle'>
                    <h2>{value[1]}</h2>
                </div>
            </div>
            <div className='item'>
                <div className='number_name'>
                    <h2>Số nội tâm</h2> 
                </div>
                <div className='number_circle'>
                    <h2>{value[2]}</h2>
                </div>
            </div>
            <div className='item'>
                <div className='number_name'>
                    <h2>Số nhân cách</h2> 
                </div>
                <div className='number_circle'>
                    <h2>{value[3]}</h2>
                </div>
            </div>
            <div className='item'>
                <div className='number_name'>
                    <h2>Số trưởng thành</h2> 
                </div>
                <div className='number_circle'>
                    <h2>{value[4]}</h2>
                </div>
            </div>
            <div className='item'>
                <div className='number_name'>
                    <h2>Số ngày sinh</h2> 
                </div>
                <div className='number_circle'>
                    <h2>{value[5]}</h2>
                </div>
            </div>
            <div className='item'>
                <div className='number_name'>
                    <h2>Số thái độ</h2> 
                </div>
                <div className='number_circle'>
                    <h2>{value[6]}</h2>
                </div>
            </div>
            </div>
        </div>
        <div className='model hide'>
            <div className='model_inner'>
                <div className='model_header'>
                    <h3>Thông tin cụ thể</h3>
                    <i className="fa-solid fa-xmark"></i>
                </div>
                <div className='model_body'>

                </div>
                <div className='model_footer'>
                    <button>Close</button>
                </div>
            </div>
        </div>
        </>
    )
}
export default Numerology;