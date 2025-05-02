import { useEffect, useState, useRef } from 'react';
import './NumerologyStyle.css';
import {LifePath, DestinyNumber, SoulNumber, PersonalityNumber, MaturityNumber, BirthDayNumber, AttitudeNumber} from './NumerologyInfo';
function Numerology(){
    const [value, setValue] = useState([0,0,0,0,0,0,0]);
    const valueRef = useRef(value);

    // useEffect(() => {
    //     window.scrollTo(0, 0);
    //   }, []);
  

    useEffect(() => {
        valueRef.current = value;
    }, [value])



    useEffect(()=>{



        // Xử lí thông tin
    const buttonSubmit = document.getElementById('btn-submit');

    const buttonReset = document.getElementById('new-reading-btn')
    
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
        const HoTen = document.getElementById("Fullname").value;
        const days = document.getElementById('day').value;
        const months = document.getElementById('month').value;
        const years = document.getElementById('year').value;
        const remove_hidden = document.getElementsByClassName('results-container-number');
        const opacity_1 = document.getElementsByClassName('result-card');
        
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

        remove_hidden[0].classList.remove('hidden');


        setInterval(()=>{
            for(let i = 0; i < opacity_1.length; i++){
                opacity_1[i].classList.add('opac_1');
            }
        },1000)
        
    }

    function handleReset(){
        const remove_hidden = document.getElementsByClassName('results-container-number');
        const opacity_1 = document.getElementsByClassName('result-card');
        remove_hidden[0].classList.add('hidden');


            for(let i = 0; i < opacity_1.length; i++){
                opacity_1[i].classList.remove('opac_1');
            }
   
    }


    buttonSubmit.addEventListener('click', handleClick);
    buttonReset.addEventListener('click', handleReset);

    return () => {
        buttonSubmit.removeEventListener('click', handleClick);
        
      };

 
    },[])



    return(


    <>
        <div className='content_Numerology'>


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
   
        

        <div className="stars_wrapper" id="stars">
                    <div class="star" style={{top:"19.8052%", left:"41.9932%", width:"1.89984px", height:"1.89984px", animationDelay:"3.05505s"}}></div><div class="star" style={{top:"75.0558%", left:"61.5046%", width:"2.65074px", height:"2.65074px", animationDelay:"2.51227s"}}></div><div class="star" style={{top:"91.8745%", left:"4.79258%", width:"0.273154px", height:"0.273154px", animationDelay:"2.62305s"}}></div><div class="star" style={{top:"50.0144%", left:"53.123%", width:"2.68939px", height:"2.68939px", animationDelay:"2.32408s"}}></div><div class="star" style={{top:"48.3947%", left:"60.5718%", width:"0.935171px", height:"0.935171px", animationDelay:"0.524603s"}}></div><div class="star" style={{top:"96.3899%", left:"1.83341%", width:"0.806714px", height:"0.806714px", animationDelay:"4.14544s"}}></div><div class="star" style={{top:"49.5446%", left:"54.7812%", width:"1.92081px", height:"1.92081px", animationDelay:"3.63123s"}}></div><div class="star" style={{top:"7.8947%", left:"86.8002%", width:"0.884967px", height:"0.884967px", animationDelay:"1.35296s"}}></div><div class="star" style={{top:"27.6578%", left:"17.5039%", width:"1.30815px", height:"1.30815px", animationDelay:"1.99237s"}}></div><div class="star" style={{top:"0.913537%", left:"7.22867%", width:"2.89608px", height:"2.89608px", animationDelay:"0.043261s"}}></div><div class="star" style={{top:"1.36024%", left:"29.9772%", width:"0.947202px", height:"0.947202px", animationDelay:"4.0915s"}}></div><div class="star" style={{top:"9.84494%", left:"85.0621%", width:"2.86702px", height:"2.86702px", animationDelay:"0.0155516s"}}></div><div class="star" style={{top:"95.7617%", left:"49.9693%", width:"0.370293px", height:"0.370293px", animationDelay:"4.77532s"}}></div><div class="star" style={{top:"97.2189%", left:"7.23999%", width:"1.94328px", height:"1.94328px", animationDelay:"0.68787s"}}></div><div class="star" style={{top:"86.9303%", left:"93.2047%", width:"2.4647px", height:"2.4647px", animationDelay:"4.37854s"}}></div><div class="star" style={{top:"42.9158%", left:"98.2304%", width:"0.0515086px", height:"0.0515086px", animationDelay:"0.752162s"}}></div><div class="star" style={{top:"38.5891%", left:"68.3747%", width:"2.18105px", height:"2.18105px", animationDelay:"3.98925s"}}></div><div class="star" style={{top:"77.3506%", left:"31.6645%", width:"0.0201579px", height:"0.0201579px", animationDelay:"0.0438948s"}}></div><div class="star" style={{top:"14.1308%", left:"81.8129%", width:"1.28826px", height:"1.28826px", animationDelay:"2.35296s"}}></div><div class="star" style={{top:"90.2069%", left:"95.4614%", width:"1.16672px", height:"1.16672px", animationDelay:"4.67372s"}}></div><div class="star" style={{top:"81.7658%", left:"69.2558%", width:"0.210943px", height:"0.210943px", animationDelay:"3.57772s"}}></div><div class="star" style={{top:"90.7208%", left:"95.4745%", width:"2.4339px", height:"2.4339px", animationDelay:"4.653s"}}></div><div class="star" style={{top:"65.542%", left:"55.8737%", width:"2.00849px", height:"2.00849px", animationDelay:"2.34581s"}}></div><div class="star" style={{top:"39.9606%", left:"34.0807%", width:"1.24762px", height:"1.24762px", animationDelay:"1.05648s"}}></div><div class="star" style={{top:"84.2229%", left:"28.1237%", width:"0.899002px", height:"0.899002px", animationDelay:"1.28051s"}}></div><div class="star" style={{top:"48.3216%", left:"46.7178%", width:"1.37941px", height:"1.37941px", animationDelay:"2.46729s"}}></div><div class="star" style={{top:"60.2399%", left:"60.5209%", width:"2.5825px", height:"2.5825px", animationDelay:"3.49507s"}}></div><div class="star" style={{top:"52.7124%", left:"59.8149%", width:"2.62498px", height:"2.62498px", animationDelay:"2.84826s"}}></div><div class="star" style={{top:"8.69818%", left:"28.0854%", width:"1.35819px", height:"1.35819px", animationDelay:"1.22742s"}}></div><div class="star" style={{top:"24.8536%", left:"40.653%", width:"2.27053px", height:"2.27053px", animationDelay:"4.6389s"}}></div><div class="star" style={{top:"61.241%", left:"65.4757%", width:"2.39857px", height:"2.39857px", animationDelay:"3.22073s"}}></div><div class="star" style={{top:"35.0161%", left:"2.89031%", width:"1.50062px", height:"1.50062px", animationDelay:"4.43821s"}}></div><div class="star" style={{top:"90.8031%", left:"21.0381%", width:"2.09884px", height:"2.09884px", animationDelay:"2.60551s"}}></div><div class="star" style={{top:"54.0546%", left:"23.8115%", width:"2.33233px", height:"2.33233px", animationDelay:"1.55965s"}}></div><div class="star" style={{top:"48.7482%", left:"26.3681%", width:"1.74201px", height:"1.74201px", animationDelay:"3.55362s"}}></div><div class="star" style={{top:"85.9551%", left:"37.7233%", width:"1.76759px", height:"1.76759px", animationDelay:"3.45691s"}}></div><div class="star" style={{top:"28.3464%", left:"63.9856%", width:"2.23706px", height:"2.23706px", animationDelay:"0.533519s"}}></div><div class="star" style={{top:"10.6966%", left:"92.065%", width:"1.42894px", height:"1.42894px", animationDelay:"3.58798s"}}></div><div class="star" style={{top:"86.4524%", left:"61.3166%", width:"1.67549px", height:"1.67549px", animationDelay:"0.160154s"}}></div><div class="star" style={{top:"20.6215%", left:"78.0789%", width:"0.139686px", height:"0.139686px", animationDelay:"1.8011s"}}></div><div class="star" style={{top:"4.52562%", left:"59.551%", width:"0.321204px", height:"0.321204px", animationDelay:"2.40128s"}}></div><div class="star" style={{top:"19.8703%", left:"96.7173%", width:"2.02616px", height:"2.02616px", animationDelay:"2.88542s"}}></div><div class="star" style={{top:"51.2892%", left:"65.6423%", width:"2.30063px", height:"2.30063px", animationDelay:"3.58723s"}}></div><div class="star" style={{top:"40.7673%", left:"38.4031%", width:"1.15836px", height:"1.15836px", animationDelay:"0.752357s"}}></div><div class="star" style={{top:"12.0494%", left:"29.2855%", width:"2.07737px", height:"2.07737px", animationDelay:"0.129367s"}}></div><div class="star" style={{top:"56.074%", left:"55.6455%", width:"0.667634px", height:"0.667634px", animationDelay:"4.2414s"}}></div><div class="star" style={{top:"16.8898%", left:"14.4695%", width:"0.199028px", height:"0.199028px", animationDelay:"2.45869s"}}></div><div class="star" style={{top:"12.7961%", left:"30.7607%", width:"2.22977px", height:"2.22977px", animationDelay:"0.392644s"}}></div><div class="star" style={{top:"4.1732%", left:"82.8166%", width:"0.157482px", height:"0.157482px", animationDelay:"3.52949s"}}></div><div class="star" style={{top:"95.8148%", left:"89.9964%", width:"0.150518px", height:"0.150518px", animationDelay:"1.26684s"}}></div><div class="star" style={{top:"69.0529%", left:"44.1527%", width:"1.00274px", height:"1.00274px", animationDelay:"2.79066s"}}></div><div class="star" style={{top:"91.9103%", left:"28.2756%", width:"0.554815px", height:"0.554815px", animationDelay:"4.10934s"}}></div><div class="star" style={{top:"67.1543%", left:"2.52404%", width:"2.71684px", height:"2.71684px", animationDelay:"4.10186s"}}></div><div class="star" style={{top:"76.5921%", left:"32.2153%", width:"1.20503px", height:"1.20503px", animationDelay:"3.03109s"}}></div><div class="star" style={{top:"71.1146%", left:"86.1181%", width:"2.03417px", height:"2.03417px", animationDelay:"4.17182s"}}></div><div class="star" style={{top:"98.984%", left:"58.3372%", width:"1.66486px", height:"1.66486px", animationDelay:"2.49495s"}}></div><div class="star" style={{top:"68.3667%", left:"5.9808%", width:"2.84149px", height:"2.84149px", animationDelay:"1.85223s"}}></div><div class="star" style={{top:"37.4355%", left:"63.0297%", width:"1.40763px", height:"1.40763px", animationDelay:"0.241236s"}}></div><div class="star" style={{top:"87.2186%", left:"61.3452%", width:"1.66853px", height:"1.66853px", animationDelay:"2.2465s"}}></div><div class="star" style={{top:"29.156%", left:"17.6033%", width:"2.75829px", height:"2.75829px", animationDelay:"2.87976s"}}></div><div class="star" style={{top:"72.0194%", left:"23.0451%", width:"1.80714px", height:"1.80714px", animationDelay:"3.22707s"}}></div><div class="star" style={{top:"3.89549%", left:"76.3431%", width:"1.75696px", height:"1.75696px", animationDelay:"4.45922s"}}></div><div class="star" style={{top:"57.0093%", left:"13.907%", width:"0.144961px", height:"0.144961px", animationDelay:"1.92393s"}}></div><div class="star" style={{top:"9.9969%", left:"76.5062%", width:"1.9143px", height:"1.9143px", animationDelay:"2.2912s"}}></div><div class="star" style={{top:"15.8077%", left:"11.8557%", width:"2.68745px", height:"2.68745px", animationDelay:"1.73024s"}}></div><div class="star" style={{top:"37.3922%", left:"27.2212%", width:"1.98984px", height:"1.98984px", animationDelay:"4.77044s"}}></div><div class="star" style={{top:"32.8497%", left:"15.9889%", width:"0.416604px", height:"0.416604px", animationDelay:"0.267435s"}}></div><div class="star" style={{top:"54.9699%", left:"54.2799%", width:"0.977832px", height:"0.977832px", animationDelay:"0.446749s"}}></div><div class="star" style={{top:"92.9154%", left:"11.2855%", width:"2.20789px", height:"2.20789px", animationDelay:"3.39286s"}}></div><div class="star" style={{top:"46.0172%", left:"65.8658%", width:"1.02454px", height:"1.02454px", animationDelay:"1.04196s"}}></div><div class="star" style={{top:"75.1557%", left:"22.5968%", width:"0.101426px", height:"0.101426px", animationDelay:"1.75096s"}}></div><div class="star" style={{top:"85.5141%", left:"31.7787%", width:"0.335304px", height:"0.335304px", animationDelay:"1.01035s"}}></div><div class="star" style={{top:"99.9053%", left:"33.1384%", width:"0.477101px", height:"0.477101px", animationDelay:"0.684641s"}}></div><div class="star" style={{top:"36.6028%", left:"54.9858%", width:"2.10527px", height:"2.10527px", animationDelay:"1.85659s"}}></div><div class="star" style={{top:"4.63048%", left:"85.1755%", width:"0.0166235px", height:"0.0166235px", animationDelay:"0.0761788s"}}></div><div class="star" style={{top:"24.9586%", left:"12.0708%", width:"2.21396px", height:"2.21396px", animationDelay:"3.07074s"}}></div><div class="star" style={{top:"40.7367%", left:"7.69788%", width:"2.76912px", height:"2.76912px", animationDelay:"3.91604s"}}></div><div class="star" style={{top:"61.803%", left:"38.9154%", width:"0.398273px", height:"0.398273px", animationDelay:"0.367916s"}}></div><div class="star" style={{top:"75.5764%", left:"64.5252%", width:"0.560666px", height:"0.560666px", animationDelay:"1.81791s"}}></div><div class="star" style={{top:"76.8092%", left:"47.2251%", width:"2.04297px", height:"2.04297px", animationDelay:"4.14461s"}}></div><div class="star" style={{top:"53.4326%", left:"25.4184%", width:"1.07925px", height:"1.07925px", animationDelay:"3.92808s"}}></div><div class="star" style={{top:"58.5661%", left:"39.3358%", width:"1.62001px", height:"1.62001px", animationDelay:"4.318s"}}></div><div class="star" style={{top:"82.5682%", left:"43.666%", width:"1.23392px", height:"1.23392px", animationDelay:"3.20827s"}}></div><div class="star" style={{top:"35.6025%", left:"19.9779%", width:"1.84076px", height:"1.84076px", animationDelay:"1.11409s"}}></div><div class="star" style={{top:"87.2739%", left:"83.8633%", width:"0.811251px", height:"0.811251px", animationDelay:"2.25023s"}}></div><div class="star" style={{top:"60.3708%", left:"0.15906%", width:"2.90076px", height:"2.90076px", animationDelay:"2.00416s"}}></div><div class="star" style={{top:"6.0973%", left:"87.4311%", width:"1.22179px", height:"1.22179px", animationDelay:"4.32862s"}}></div><div class="star" style={{top:"61.758%", left:"31.1689%", width:"1.29821px", height:"1.29821px", animationDelay:"1.43134s"}}></div><div class="star" style={{top:"80.6667%", left:"3.83406%", width:"2.3584px", height:"2.3584px", animationDelay:"0.693529s"}}></div><div class="star" style={{top:"71.6217%", left:"89.0661%", width:"0.468248px", height:"0.468248px", animationDelay:"3.0579s"}}></div><div class="star" style={{top:"89.1977%", left:"98.3313%", width:"1.93531px", height:"1.93531px", animationDelay:"1.06172s"}}></div><div class="star" style={{top:"35.3784%", left:"29.0264%", width:"0.789448px", height:"0.789448px", animationDelay:"1.4523s"}}></div><div class="star" style={{top:"76.8468%", left:"34.1495%", width:"2.13164px", height:"2.13164px", animationDelay:"1.64383s"}}></div><div class="star" style={{top:"7.97917%", left:"26.0764%", width:"1.74417px", height:"1.74417px", animationDelay:"4.60061s"}}></div><div class="star" style={{top:"35.4058%", left:"33.0381%", width:"0.851303px", height:"0.851303px", animationDelay:"4.62504s"}}></div><div class="star" style={{top:"75.6567%", left:"40.4932%", width:"2.64226px", height:"2.64226px", animationDelay:"2.35207s"}}></div><div class="star" style={{top:"61.6847%", left:"57.1589%", width:"0.373004px", height:"0.373004px", animationDelay:"0.0561002s"}}></div><div class="star" style={{top:"67.2273%", left:"15.5222%", width:"0.28525px", height:"0.28525px", animationDelay:"3.22356s"}}></div><div class="star" style={{top:"47.6526%", left:"0.422941%", width:"1.30639px", height:"1.30639px", animationDelay:"3.20507s"}}></div><div class="star" style={{top:"50.4993%", left:"82.1512%", width:"0.0855203px", height:"0.0855203px", animationDelay:"2.44408s"}}></div><div class="star" style={{top:"61.603%", left:"3.05892%", width:"0.313271px", height:"0.313271px", animationDelay:"2.2697s"}}></div><div class="star" style={{top:"39.6009%", left:"43.5297%", width:"0.912285px", height:"0.912285px", animationDelay:"2.8693s"}}></div><div class="star" style={{top:"9.01501%", left:"6.70229%", width:"0.83307px", height:"0.83307px", animationDelay:"2.59776s"}}></div><div class="star" style={{top:"52.4585%", left:"57.8514%", width:"2.10764px", height:"2.10764px", animationDelay:"0.225242s"}}></div><div class="star" style={{top:"19.0931%", left:"47.9641%", width:"1.88956px", height:"1.88956px", animationDelay:"3.80356s"}}></div><div class="star" style={{top:"8.92433%", left:"21.3369%", width:"1.40071px", height:"1.40071px", animationDelay:"2.54941s"}}></div><div class="star" style={{top:"55.5721%", left:"74.2876%", width:"0.440671px", height:"0.440671px", animationDelay:"1.12178s"}}></div><div class="star" style={{top:"89.9591%", left:"58.0137%", width:"0.358183px", height:"0.358183px", animationDelay:"3.20409s"}}></div><div class="star" style={{top:"3.55072%", left:"75.1401%", width:"1.14014px", height:"1.14014px", animationDelay:"4.32835s"}}></div><div class="star" style={{top:"54.6253%", left:"13.1557%", width:"2.87987px", height:"2.87987px", animationDelay:"1.62804s"}}></div><div class="star" style={{top:"61.0378%", left:"33.7639%", width:"0.580464px", height:"0.580464px", animationDelay:"1.39952s"}}></div><div class="star" style={{top:"7.06647%", left:"19.804%", width:"1.69995px", height:"1.69995px", animationDelay:"1.20982s"}}></div><div class="star" style={{top:"97.8761%", left:"23.3749%", width:"2.81919px", height:"2.81919px", animationDelay:"1.97439s"}}></div><div class="star" style={{top:"20.5195%", left:"45.5781%", width:"1.28715px", height:"1.28715px", animationDelay:"3.10643s"}}></div><div class="star" style={{top:"92.1834%", left:"71.4992%", width:"1.46869px", height:"1.46869px", animationDelay:"2.36385s"}}></div><div class="star" style={{top:"14.0602%", left:"40.342%", width:"2.4997px", height:"2.4997px", animationDelay:"0.315563s"}}></div><div class="star" style={{top:"98.8909%", left:"79.9113%", width:"1.94223px", height:"1.94223px", animationDelay:"2.60561s"}}></div><div class="star" style={{top:"93.1432%", left:"81.9088%", width:"1.76904px", height:"1.76904px", animationDelay:"0.245575s"}}></div><div class="star" style={{top:"0.88491%", left:"12.4494%", width:"0.390803px", height:"0.390803px", animationDelay:"2.21185s"}}></div><div class="star" style={{top:"3.6341%", left:"98.4111%", width:"0.625567px", height:"0.625567px", animationDelay:"0.149832s"}}></div><div class="star" style={{top:"87.7769%", left:"69.1516%", width:"2.74822px", height:"2.74822px", animationDelay:"0.560163s"}}></div><div class="star" style={{top:"1.07756%", left:"22.6205%", width:"0.582482px", height:"0.582482px", animationDelay:"1.3343s"}}></div><div class="star" style={{top:"92.521%", left:"77.4879%", width:"0.0657048px", height:"0.0657048px", animationDelay:"0.498757s"}}></div><div class="star" style={{top:"65.5838%", left:"4.38296%", width:"0.161336px", height:"0.161336px", animationDelay:"3.87357s"}}></div><div class="star" style={{top:"85.1296%", left:"8.96637%", width:"0.452308px", height:"0.452308px", animationDelay:"0.677878s"}}></div><div class="star" style={{top:"46.1433%", left:"66.7572%", width:"2.79103px", height:"2.79103px", animationDelay:"4.14635s"}}></div><div class="star" style={{top:"34.5594%", left:"84.8377%", width:"2.2811px", height:"2.2811px", animationDelay:"2.13787s"}}></div><div class="star" style={{top:"51.0217%", left:"56.662%", width:"0.896952px", height:"0.896952px", animationDelay:"3.53491s"}}></div><div class="star" style={{top:"64.7434%", left:"26.5646%", width:"0.200174px", height:"0.200174px", animationDelay:"1.73817s"}}></div><div class="star" style={{top:"77.1561%", left:"32.9349%", width:"1.03442px", height:"1.03442px", animationDelay:"1.16673s"}}></div><div class="star" style={{top:"26.0468%", left:"10.0171%", width:"2.45585px", height:"2.45585px", animationDelay:"1.0458s"}}></div><div class="star" style={{top:"44.5205%", left:"63.4678%", width:"1.72282px", height:"1.72282px", animationDelay:"3.43079s"}}></div><div class="star" style={{top:"5.00827%", left:"60.3657%", width:"0.820728px", height:"0.820728px", animationDelay:"0.303486s"}}></div><div class="star" style={{top:"35.6943%", left:"56.351%", width:"0.436219px", height:"0.436219px", animationDelay:"2.99894s"}}></div><div class="star" style={{top:"77.8272%", left:"73.385%", width:"2.25888px", height:"2.25888px", animationDelay:"4.06425s"}}></div><div class="star" style={{top:"73.8209%", left:"17.8165%", width:"2.97201px", height:"2.97201px", animationDelay:"4.8107s"}}></div><div class="star" style={{top:"65.6375%", left:"67.5483%", width:"2.35443px", height:"2.35443px", animationDelay:"0.136991s"}}></div><div class="star" style={{top:"7.74261%", left:"0.585533%", width:"0.201226px", height:"0.201226px", animationDelay:"0.808115s"}}></div><div class="star" style={{top:"94.274%", left:"5.93419%", width:"0.902153px", height:"0.902153px", animationDelay:"0.724916s"}}></div><div class="star" style={{top:"74.0051%", left:"62.702%", width:"0.0783613px", height:"0.0783613px", animationDelay:"0.996819s"}}></div><div class="star" style={{top:"2.68122%", left:"27.309%", width:"2.70733px", height:"2.70733px", animationDelay:"0.910121s"}}></div><div class="star" style={{top:"97.5819%", left:"77.2271%", width:"0.856993px", height:"0.856993px", animationDelay:"2.86282s"}}></div><div class="star" style={{top:"87.8094%", left:"68.726%", width:"2.49258px", height:"2.49258px", animationDelay:"3.91211s"}}></div><div class="star" style={{top:"75.2596%", left:"5.31249%", width:"1.07558px", height:"1.07558px", animationDelay:"2.51774s"}}></div><div class="star" style={{top:"61.1847%", left:"76.2406%", width:"2.6921px", height:"2.6921px", animationDelay:"2.17007s"}}></div><div class="star" style={{top:"87.6815%", left:"39.9403%", width:"1.40928px", height:"1.40928px", animationDelay:"1.42851s"}}></div><div class="star" style={{top:"9.07399%", left:"41.9768%", width:"0.490658px", height:"0.490658px", animationDelay:"3.65695s"}}></div><div class="star" style={{top:"56.5318%", left:"17.7716%", width:"1.90149px", height:"1.90149px", animationDelay:"3.88786s"}}></div><div class="star" style={{top:"0.0641631%", left:"0.720272%", width:"2.50248px", height:"2.50248px", animationDelay:"2.65134s"}}></div><div class="star" style={{top:"7.27275%", left:"80.3623%", width:"1.96018px", height:"1.96018px", animationDelay:"1.6958s"}}></div>
                    </div>
                        <div class="light-beam" style={{width: "800px", height: "800px", top: "-200px", left: "-200px"}}></div>
                    <div class="light-beam" style={{width: "600px", height: "600px", bottom: "-100px", right: "-100px"}}></div>

                    <svg class="sacred-geometry" style={{top: "5%",left: "5%",width: "300px",height: "300px"}}>
                        <circle cx="150" cy="150" r="145" stroke="#d4af37" stroke-width="1" fill="none"></circle>
                        <circle cx="150" cy="150" r="120" stroke="#d4af37" stroke-width="1" fill="none"></circle>
                        <circle cx="150" cy="150" r="95" stroke="#d4af37" stroke-width="1" fill="none"></circle>
                        <circle cx="150" cy="150" r="70" stroke="#d4af37" stroke-width="1" fill="none"></circle>
                        <circle cx="150" cy="150" r="45" stroke="#d4af37" stroke-width="1" fill="none"></circle>
                        <line x1="5" y1="150" x2="295" y2="150" stroke="#d4af37" stroke-width="1"></line>
                        <line x1="150" y1="5" x2="150" y2="295" stroke="#d4af37" stroke-width="1"></line>
                        <line x1="33" y1="33" x2="267" y2="267" stroke="#d4af37" stroke-width="1"></line>
                        <line x1="33" y1="267" x2="267" y2="33" stroke="#d4af37" stroke-width="1"></line>
                    </svg>


                    <svg class="sacred-geometry" style={{bottom: "5%",right: "5%",width: "250px",height: "250px"}}>
                        <polygon points="125,10 160,100 250,100 175,160 200,250 125,200 50,250 75,160 0,100 90,100" stroke="#d4af37" stroke-width="1" fill="none"></polygon>
                        <circle cx="125" cy="125" r="115" stroke="#d4af37" stroke-width="1" fill="none"></circle>
                        <circle cx="125" cy="125" r="75" stroke="#d4af37" stroke-width="1" fill="none"></circle>
                        <circle cx="125" cy="125" r="35" stroke="#d4af37" stroke-width="1" fill="none"></circle>
                    </svg>


                    <div id="number-symbols">
                        <div class="number-symbol" style={{top: "25.6235%",left: "75.172%",fontSize: "40.7298px",transform: "rotate(45.997deg)"}}>II</div>
                        <div class="number-symbol" style={{top: "0.295721%",left: "45.5185%",fontSize: "22.264px",transform: "rotate(269.207deg)"}}>IX</div>
                        <div class="number-symbol" style={{top: "5.59908%",left: "80.9616%",fontSize: "27.6526px",transform: "rotate(314.039deg)"}}>III</div>
                        <div class="number-symbol" style={{top: "42.9882%",left: "60.8998%",fontSize: "48.7859px",transform: "rotate(182.576deg)"}}>2</div>
                        <div class="number-symbol" style={{top: "50.6471%",left: "1.72215%",fontSize: "34.7336px",transform: "rotate(51.392deg)"}}>VII</div>
                        <div class="number-symbol" style={{top: "67.8711%",left: "49.9883%",fontSize: "53.7362px",transform: "rotate(15.0183deg)"}}>8</div>
                        <div class="number-symbol" style={{top: "57.7744%",left: "40.6603%",fontSize: "45.0643px",transform: "rotate(292.146deg)"}}>1</div>
                        <div class="number-symbol" style={{top: "52.6839%",left: "13.3994%",fontSize: "28.072px",transform: "rotate(273.966deg)"}}>2</div>
                        <div class="number-symbol" style={{top: "58.3849%",left: "80.3498%",fontSize: "25.8053px",transform: "rotate(264.152deg)"}}>5</div>
                        <div class="number-symbol" style={{top: "89.6834%",left: "38.8303%",fontSize: "27.4534px",transform: "rotate(107.004deg)"}}>3</div>
                        <div class="number-symbol" style={{top: "4.29111%",left: "40.3977%",fontSize: "53.1015px",transform: "rotate(57.0939deg)"}}>9</div>
                        <div class="number-symbol" style={{top: "89.82%",left: "66.2595%",fontSize: "29.0391px",transform: "rotate(105.147deg)"}}>4</div>
                        <div class="number-symbol" style={{top: "80.8788%",left: "89.7398%",fontSize: "26.6392px",transform: "rotate(143.869deg)"}}>VIII</div>
                        <div class="number-symbol" style={{top: "1.0229%",left: "22.0304%",fontSize: "46.514px",transform: "rotate(308.072deg)"}}>I</div>
                        <div class="number-symbol" style={{top: "8.93281%",left: "14.9361%",fontSize: "42.6594px",transform: "rotate(107.042deg)"}}>IV</div>
                        <div class="number-symbol" style={{top: "57.3446%",left: "9.61908%",fontSize: "27.6707px",transform: "rotate(163.779deg)"}}>IV</div>
                        <div class="number-symbol" style={{top: "72.4391%",left: "64.8605%",fontSize: "41.9218px",transform: "rotate(256.383deg)"}}>VIII</div>
                        <div class="number-symbol" style={{top: "23.7413%",left: "18.443%",fontSize: "51.6603px",transform: "rotate(69.566deg)"}}>VI</div>
                        <div class="number-symbol" style={{top: "55.1367%",left: "96.2601%",fontSize: "41.1551px",transform: "rotate(155.961deg)"}}>IX</div>
                        <div class="number-symbol" style={{top: "56.6338%",left: "34.8945%",fontSize: "34.1763px",transform: "rotate(303.228deg)"}}>III</div>
                    </div>

    <div class="container_numerology mx-auto px-4 py-12 relative z-10">
        <header class="text-center mb-12">
            <h1 class="title text-4xl md:text-5xl text-white font-bold mb-3">Mystic Numerology</h1>
            <p class="text-gray-400 text-lg max-w-2xl mx-auto">Discover the hidden meanings in your numbers and unlock the cosmic secrets of your personal numerology chart.</p>
        </header>
        
        <div class="form-container max-w-xl mx-auto rounded-2xl p-8 mb-12">
            <div id="numerology-form" class="space-y-6">
                <div>
                    <label for="fullname" class="block text-yellow-100 mb-2 text-lg">Full Name</label>
                    <input type="text" id="Fullname" name="fullname" placeholder="Enter your full birth name" class="input-field w-full px-4 py-3 rounded-lg text-lg" required=""/>
                </div>
                
                <div class="grid grid-cols-3 gap-4">
                    <div>
                        <label for="day" class="block text-yellow-100 mb-2 text-lg">Day</label>
                        <input type="number" id="day" name="day" min="1" max="31" placeholder="DD" class="input-field w-full px-4 py-3 rounded-lg text-lg" required=""/>
                    </div>
                    <div>
                        <label for="month" class="block text-yellow-100 mb-2 text-lg">Month</label>
                        <input type="number" id="month" name="month" min="1" max="12" placeholder="MM" class="input-field w-full px-4 py-3 rounded-lg text-lg" required=""/>
                    </div>
                    <div>
                        <label for="year" class="block text-yellow-100 mb-2 text-lg">Year</label>
                        <input type="number" id="year" name="year" min="1900" max="2023" placeholder="YYYY" class="input-field w-full px-4 py-3 rounded-lg text-lg" required=""/>
                    </div>
                </div>
                
                <div class="text-center pt-4">
                    <button id='btn-submit' class="calculate-btn px-8 py-3 rounded-full text-gray-900 font-semibold text-lg">
                        Calculate Reading
                    </button>
                </div>
            </div>
        </div>
        
        <div id="results-container" class="max-w-5xl results-container-number mx-auto hidden">
            <h2 class="title text-3xl text-center text-white font-bold mb-8">Your Numerology Reading</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             
                <div class="result-card rounded-xl p-6 relative overflow-hidden" data-delay="0">
                    <div class="card-symbol absolute top-4 right-4 opacity-30">
                        <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
                            <circle cx="50" cy="50" r="45" stroke="#d4af37" stroke-width="2"></circle>
                            <path d="M50 5 L95 50 L50 95 L5 50 Z" stroke="#d4af37" stroke-width="2" fill="none"></path>
                        </svg>
                    </div>
                    <h3 class="title text-xl text-yellow-100 mb-2">Life Path Number</h3>
                    <div class="flex items-center mb-4">
                        <span id="life-path-number" class="text-4xl font-bold golden-text mr-2">{value[0]}</span>
                        <span class="text-gray-400">The Mediator</span>
                    </div>
                    <p id="life-path-meaning" class="text-gray-300">{LifePath[value[0]].content}</p>
                </div>
                
             
                <div class="result-card rounded-xl p-6 relative overflow-hidden" data-delay="100">
                    <div class="card-symbol absolute top-4 right-4 opacity-30">
                        <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
                            <circle cx="50" cy="50" r="45" stroke="#d4af37" stroke-width="2"></circle>
                            <path d="M50 5 L65 35 L95 35 L70 55 L80 85 L50 70 L20 85 L30 55 L5 35 L35 35 Z" stroke="#d4af37" stroke-width="2" fill="none"></path>
                        </svg>
                    </div>
                    <h3 class="title text-xl text-yellow-100 mb-2">Destiny Number</h3>
                    <div class="flex items-center mb-4">
                        <span id="destiny-number" class="text-4xl font-bold golden-text mr-2">{value[1]}</span>
                        <span class="text-gray-400">The Adventurer</span>
                    </div>
                    <p id="destiny-meaning" class="text-gray-300">{DestinyNumber[value[1]].content}</p>
                </div>
                
           
                <div class="result-card rounded-xl p-6 relative overflow-hidden" data-delay="200">
                    <div class="card-symbol absolute top-4 right-4 opacity-30">
                        <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
                            <circle cx="50" cy="50" r="45" stroke="#d4af37" stroke-width="2"></circle>
                            <path d="M50 5 C25 5 5 25 5 50 C5 75 25 95 50 95 C75 95 95 75 95 50" stroke="#d4af37" stroke-width="2" fill="none"></path>
                            <circle cx="30" cy="40" r="5" stroke="#d4af37" stroke-width="1.5" fill="none"></circle>
                            <circle cx="70" cy="40" r="5" stroke="#d4af37" stroke-width="1.5" fill="none"></circle>
                            <path d="M30 70 Q50 85 70 70" stroke="#d4af37" stroke-width="1.5" fill="none"></path>
                        </svg>
                    </div>
                    <h3 class="title text-xl text-yellow-100 mb-2">Soul Urge Number</h3>
                    <div class="flex items-center mb-4">
                        <span id="soul-urge-number" class="text-4xl font-bold golden-text mr-2">{value[2]}</span>
                        <span class="text-gray-400">The Seeker</span>
                    </div>
                    <p id="soul-urge-meaning" class="text-gray-300">{SoulNumber[value[2]].content}</p>
                </div>
              
                <div class="result-card rounded-xl p-6 relative overflow-hidden" data-delay="300">
                    <div class="card-symbol absolute top-4 right-4 opacity-30">
                        <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
                            <circle cx="50" cy="50" r="45" stroke="#d4af37" stroke-width="2"></circle>
                            <path d="M50 15 L85 50 L50 85 L15 50 Z" stroke="#d4af37" stroke-width="2" fill="none"></path>
                            <circle cx="50" cy="50" r="15" stroke="#d4af37" stroke-width="1.5" fill="none"></circle>
                        </svg>
                    </div>
                    <h3 class="title text-xl text-yellow-100 mb-2">Personality Number</h3>
                    <div class="flex items-center mb-4">
                        <span id="personality-number" class="text-4xl font-bold golden-text mr-2">{value[3]}</span>
                        <span class="text-gray-400">The Seeker</span>
                    </div>
                    <p id="personality-meaning" class="text-gray-300">{PersonalityNumber[value[3]].content}</p>
                </div>
                
               
                <div class="result-card rounded-xl p-6 relative overflow-hidden" data-delay="400">
                    <div class="card-symbol absolute top-4 right-4 opacity-30">
                        <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
                            <circle cx="50" cy="50" r="45" stroke="#d4af37" stroke-width="2"></circle>
                            <circle cx="50" cy="50" r="25" stroke="#d4af37" stroke-width="1.5" fill="none"></circle>
                            <line x1="50" y1="5" x2="50" y2="25" stroke="#d4af37" stroke-width="1.5"></line>
                            <line x1="50" y1="75" x2="50" y2="95" stroke="#d4af37" stroke-width="1.5"></line>
                            <line x1="5" y1="50" x2="25" y2="50" stroke="#d4af37" stroke-width="1.5"></line>
                            <line x1="75" y1="50" x2="95" y2="50" stroke="#d4af37" stroke-width="1.5"></line>
                        </svg>
                    </div>
                    <h3 class="title text-xl text-yellow-100 mb-2">Mature Number</h3>
                    <div class="flex items-center mb-4">
                        <span id="birthday-number" class="text-4xl font-bold golden-text mr-2">{value[4]}</span>
                        <span class="text-gray-400">The Builder</span>
                    </div>
                    <p id="birthday-meaning" class="text-gray-300">{MaturityNumber[value[4]].content}</p>
                </div>
                
             
                <div class="result-card rounded-xl p-6 relative overflow-hidden" data-delay="500">
                    <div class="card-symbol absolute top-4 right-4 opacity-30">
                        <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
                            <circle cx="50" cy="50" r="45" stroke="#d4af37" stroke-width="2"></circle>
                            <path d="M30 30 L70 30 L70 70 L30 70 Z" stroke="#d4af37" stroke-width="1.5" fill="none"></path>
                            <path d="M20 20 L80 20 L80 80 L20 80 Z" stroke="#d4af37" stroke-width="1.5" fill="none"></path>
                        </svg>
                    </div>
                    <h3 class="title text-xl text-yellow-100 mb-2">Birth Number</h3>
                    <div class="flex items-center mb-4">
                        <span id="expression-number" class="text-4xl font-bold golden-text mr-2">{value[5]}</span>
                        <span class="text-gray-400">The Adventurer</span>
                    </div>
                    <p id="expression-meaning" class="text-gray-300">{BirthDayNumber[value[5]].content}</p>
                </div>
                
            
                <div class="result-card rounded-xl p-6 relative overflow-hidden col-span-1 md:col-span-2 lg:col-span-3" data-delay="600">
                    <div class="card-symbol absolute top-4 right-4 opacity-30">
                        <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
                            <circle cx="50" cy="50" r="45" stroke="#d4af37" stroke-width="2"></circle>
                            <path d="M30 30 C30 20 70 20 70 30 C70 40 30 40 30 50 C30 60 70 60 70 70 C70 80 30 80 30 70" stroke="#d4af37" stroke-width="1.5" fill="none"></path>
                        </svg>
                    </div>
                    <h3 class="title text-xl text-yellow-100 mb-2">Attitude Number</h3>
                    <div class="flex items-center mb-4">
                        <span id="karmic-number" class="text-4xl font-bold golden-text mr-2">{value[6]}</span>
                        <span class="text-gray-400">The Transformer</span>
                    </div>
                    <p id="karmic-meaning" class="text-gray-300">{AttitudeNumber[value[6]].content}</p>
                </div>
            </div>
            
            <div class="text-center mt-10">
                <button id="new-reading-btn" class="calculate-btn px-8 py-3 rounded-full text-gray-900 font-semibold text-lg">
                    New Reading
                </button>
            </div>

        </div>
    </div>
    </div>
    </>
    )
}
export default Numerology;