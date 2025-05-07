
import './Matrixdes.css'
import { useEffect, useState } from 'react';
import { energies, safeZone, karmaInfo, talentInfo, relationshipInfo, financialInfo } from './MatrixInfo';
function Matrixdes(){
    const [value, setValue] = useState([])


    
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);


    useEffect(()=>{




      
        // DOM Elements
        const matrixForm = document.getElementById('matrix-form');

        const loadingSection = document.getElementById('loading-section');

        const fullnameInput = document.getElementById('Fullname');
        const daySelect = document.getElementById('day');
        const monthSelect = document.getElementById('month');
        const yearSelect = document.getElementById('year');
        const userNameDisplay = document.getElementById('user-name-display');
        const luminaNameDisplay = document.getElementById('lumina-name-display');


         
      function Sum(dateString){
        let ans = 0;
        for(let i = 0; i < dateString.length; i++){
          let number = parseInt(dateString[i], 10);
          ans += number;
        }
        
        while (ans > 22) {
            ans = ans.toString().split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0);
        }
        return ans;
      }
        
        // Toggle card content
        document.querySelectorAll('.toggle-card').forEach(button => {
            button.addEventListener('click', () => {
                const card = button.closest('.matrix-card');
                const content = card.querySelector('.card-content');
                const showText = button.querySelector('.show-text');
                const hideText = button.querySelector('.hide-text');
                const showIcon = button.querySelector('.show-icon');
                const hideIcon = button.querySelector('.hide-icon');
                
                if (content.classList.contains('hidden')) {
                    // Show content
                    content.classList.remove('hidden');
                    content.classList.add('expand');
                    showText.classList.add('hidden');
                    hideText.classList.remove('hidden');
                    showIcon.classList.add('hidden');
                    hideIcon.classList.remove('hidden');
                } else {
                    // Hide content
                    content.classList.add('collapse');
                    setTimeout(() => {
                        content.classList.add('hidden');
                        content.classList.remove('collapse');
                    }, 500);
                    showText.classList.remove('hidden');
                    hideText.classList.add('hidden');
                    showIcon.classList.remove('hidden');
                    hideIcon.classList.add('hidden');
                }
            });
        });
        
        // Form submission
        matrixForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Show loading animation
            introSection.classList.add('hidden');
            loadingSection.classList.remove('hidden');
            
            // // Get user input
            // const fullname = fullnameInput.value;
            // const day = parseInt(daySelect.value);
            // const month = parseInt(monthSelect.value);
            // const year = parseInt(yearSelect.value);


            const HoTen = document.getElementById("Fullname").value
            const days = document.getElementById('days').value;
            const months = document.getElementById('months').value;
            const years = document.getElementById('years').value;
            const newDays = Sum([days]);
            const newYears = Sum([years])

            const karma = Sum([days, months, years]);

            const comfort_zone = Sum([newDays, months, newYears, karma])
            const number_6 = Sum([karma, comfort_zone]);
            const number_7 = Sum([newDays, comfort_zone]);
            const number_8 = Sum([months, comfort_zone]);
            const number_9 = Sum([newYears, comfort_zone]);
            const number_10 = Sum([number_6, number_9]);
            const number_11 = Sum([number_6, number_10]);
            const number_12 = Sum([number_9, number_10]);
            const number_13 = Sum([karma, number_6]);
            const number_14 = Sum([number_8, months]);
            const number_15 = Sum([newDays, number_7]);
            const number_16 = Sum([newYears, number_9]);
            const number_17 = Sum([newDays, months]);
            const number_18 = Sum([months, newYears]);
            const number_19 = Sum([newYears, karma]);
            const number_20 = Sum([karma, newDays]);
            const number_21 = Sum([number_7, comfort_zone]);
            const number_22 = Sum([number_8, comfort_zone]);
            const number_23 = Sum([number_17, comfort_zone]);
            const number_24 = Sum([number_23, number_17]);
            const number_25 = Sum([number_18, comfort_zone])
            const number_26 = Sum([number_25, number_18]);
            const number_27 = Sum([number_19, comfort_zone]);
            const number_28 = Sum([number_19, number_27]);
            const number_29 = Sum([number_20, comfort_zone]);
            const number_30 = Sum([number_29, number_20]);


            setValue([newDays, months, newYears, karma, comfort_zone, number_6, number_7,
                number_8, number_9, number_10, number_11, number_12, number_13, number_14, number_15, number_16, number_17, number_18, number_19, number_20, number_21, number_22, number_23, number_24,
                number_25, number_26, number_27, number_28, number_29, number_30
              ]);


            
            // Calculate "destiny numbers" based on input
            // This is a simplified version for demonstration purposes
            // const calculateNumber = (name, birthdate) => {
            //     // Simple algorithm: sum ASCII values of name and modulo with 9, then add 1
            //     let nameSum = 0;
            //     for (let i = 0; i < name.length; i++) {
            //         nameSum += name.charCodeAt(i);
            //     }
                
            //     // Use birthdate to create another number
            //     const dateSum = day + month + (year % 100);
                
            //     // Combine and get a number between 1-9
            //     return ((nameSum + dateSum) % 9) + 1;
            // };
            


            
            // Update the numbers in the result cardscomfort_zone
            document.querySelector('.soul-path-number').textContent = comfort_zone;
            document.querySelector('.karmic-number').textContent = karma;
            document.querySelector('.strengths-number').textContent = karma;
            document.querySelector('.challenge-number').textContent = karma;
            document.querySelector('.spiritual-number').textContent = karma;
            document.querySelector('.direction-number').textContent = karma;
            
            console.log(comfort_zone, typeof(comfort_zone))
            // Display user name
            const firstName = HoTen.split(' ')[0];
            userNameDisplay.textContent = firstName;
            luminaNameDisplay.textContent = firstName;
            
            // Simulate calculation time
            setTimeout(() => {
                loadingSection.classList.add('hidden');
                resultsSection.classList.remove('hidden');
                
                // Scroll to results
                resultsSection.scrollIntoView({ behavior: 'smooth' });
            }, 1400);



            const storedUser = localStorage.getItem("user");

            const today = new Date();
            const day = String(today.getDate()).padStart(2, '0');      // 09
            const month = String(today.getMonth() + 1).padStart(2, '0'); // 04 (tháng bắt đầu từ 0)
            const year = today.getFullYear();                          // 2025
            const randomNumber = Math.floor(Math.random() * 9) + 1;
          
            const formattedDate = `${day}-${month}-${year}`;
            console.log(formattedDate); // "09-04-2025"
          
      
            const matrix = [newDays, Number(months), newYears, karma, comfort_zone, number_6, number_7,
                number_8, number_9, number_10, number_11, number_12, number_13, number_14, number_15, number_16, number_17, number_18, number_19, number_20, number_21, number_22, number_23, number_24,
                number_25, number_26, number_27, number_28, number_29, number_30
              ]

            if (!storedUser) {
              // Nếu chưa có gì trong localStorage
              const user = {
                [HoTen]: {
                  matrix: matrix,
                  time: formattedDate,
                  avt: randomNumber
                },
              };
              localStorage.setItem("user", JSON.stringify(user));
              console.log("User mới đã được lưu.");
            } else {
              // Nếu đã có user trong localStorage
              const user = JSON.parse(storedUser);
      
              if (!user[HoTen]) {
                // Nếu chưa có người dùng này
                user[HoTen] = { 
                  matrix: matrix,
                  time: formattedDate,
                  avt: randomNumber
                 };
                console.log("Đã thêm người dùng mới vào user.");
              } else {
                // Nếu đã có người dùng này, cập nhật numerology
                user[HoTen].matrix = matrix;
                if(!user[HoTen].time){
                  user[HoTen].time = formattedDate,
                  user[HoTen].avt = randomNumber
                }
                console.log("Đã cập nhật disc cho người dùng.");
              }
      
              // Lưu lại toàn bộ object user
              localStorage.setItem("user", JSON.stringify(user));
            }
        });
        
        

        


      const ButtonSubmit = document.getElementById("buttonLmao");


      const resultsSection = document.getElementById('results-section')
      const introSection = document.getElementById('intro-section')


      const impression = document.getElementById('impression');
      const safe = document.getElementById('safe_zone');
      const talent = document.getElementById('talent')
      const karmaText = document.getElementById('karma')
      const relationshipText = document.getElementById('relationship')
      const financialText = document.getElementById('financial')

      // function handNext(){
      //   introSection.classList.add('hidden')
      //   resultsSection.classList.remove('hidden')
      // }


  
      function handleClick(){


        
        // handNext()
  
        console.log(comfort_zone)
        
        impression.innerHTML = `
        <h2>${energies[newDays-1].title}</h2>
        <p>${energies[newDays-1].description}</p>
      `;
      
        safe.innerHTML = `
        <h2>${safeZone[comfort_zone-1].title}</h2>
        <p>${safeZone[comfort_zone-1].description}</p>
        `
  
        karmaText.innerHTML = karmaInfo[karma-1].content;
        relationshipText.innerHTML = relationshipInfo[number_6-1].content
        financialText.innerHTML = financialInfo[number_10-1].content
        talent.innerHTML = talentInfo[Number(months)-1].content;
  

        






        
      }



      // ButtonSubmit.addEventListener("click", handleClick);
    },[])



    
    useEffect(()=>{
      const titleButton = document.body.getElementsByClassName('information_matrix_text');
      const infoGroups = document.body.getElementsByClassName('information_text_slide');

      for(let i = 0; i < titleButton.length; i++){
        titleButton[i].onclick = () =>{
          infoGroups[i].classList.toggle('ani');
        }
      }
    },[])

    

    return(
        <>
    <div className="wrap_Matrix">
      <div class="symbol text-6xl top-20 left-[10%] floating">✧</div>
      <div class="symbol text-5xl top-40 right-[15%] floating-slow">△</div>
      <div class="symbol text-7xl bottom-40 left-[20%] floating">⬠</div>
      <div class="symbol text-5xl bottom-60 right-[25%] floating-slow">⚝</div>
      <div class="symbol text-6xl top-[30%] left-[30%] floating">⟡</div>
      <div class="symbol text-5xl top-[60%] right-[5%] floating-slow">⬟</div>\
      <div class="container mx-auto px-4 py-12 max-w-5xl">
        {/* <!-- Introduction Section --> */}
        <div id="intro-section" class="bg-white bg-opacity-40 rounded-3xl p-8 md:p-12 shadow-lg glow mb-12 fade-in relative overflow-hidden">
            <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-100/50 to-transparent z-0"></div>
            <div class="relative z-10">
                <div class="text-center">
                    <h1 class="text-4xl md:text-5xl font-bold text-indigo-900 mb-6">Unlock Your Inner Blueprint</h1>
                    <p class="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">The Destiny Matrix is a powerful map of your hidden strengths and life lessons. All it takes is your name and birthdate.</p>
                </div>
                
                {/* <!-- Input Form --> */}
                <div class="max-w-md mx-auto bg-white bg-opacity-70 rounded-2xl p-6 shadow-md">
                    <form id="matrix-form" class="space-y-6">
                        <div>
                            <label for="fullname" class="block text-gray-700 font-medium mb-2">Full Name</label>
                            <input type="text" id="Fullname" name="fullname" class="w-full px-4 py-3 rounded-xl border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 transition" placeholder="Enter your full name" required=""/>
                        </div>
                        
                        <div>
                            <label class="block text-gray-700 font-medium mb-2">Date of Birth</label>
                            <div class="grid grid-cols-3 gap-4">
                                <div>
                                    <select id="days" class="w-full px-4 py-3 rounded-xl border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 transition" required="">
                                        <option value="" disabled="" selected="">Day</option>
                                        {/* <!-- Days 1-31 --> */}
                                      <option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option>
                                    </select>
                                </div>
                                <div>
                                    <select id="months" class="w-full px-4 py-3 rounded-xl border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 transition" required="">
                                        <option value="" disabled="" selected="">Month</option>
                                        <option value="1">January</option>
                                        <option value="2">February</option>
                                        <option value="3">March</option>
                                        <option value="4">April</option>
                                        <option value="5">May</option>
                                        <option value="6">June</option>
                                        <option value="7">July</option>
                                        <option value="8">August</option>
                                        <option value="9">September</option>
                                        <option value="10">October</option>
                                        <option value="11">November</option>
                                        <option value="12">December</option>
                                    </select>
                                </div>
                                <div>
                                    <select id="years" class="w-full px-4 py-3 rounded-xl border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 transition" required="">
                                        <option value="" disabled="" selected="">Year</option>
                                          <option value="2009">2009</option><option value="2008">2008</option><option value="2007">2007</option><option value="2006">2006</option><option value="2005">2005</option><option value="2004">2004</option><option value="2003">2003</option><option value="2002">2002</option><option value="2001">2001</option><option value="2000">2000</option><option value="1999">1999</option><option value="1998">1998</option><option value="1997">1997</option><option value="1996">1996</option><option value="1995">1995</option><option value="1994">1994</option><option value="1993">1993</option><option value="1992">1992</option><option value="1991">1991</option><option value="1990">1990</option><option value="1989">1989</option><option value="1988">1988</option><option value="1987">1987</option><option value="1986">1986</option><option value="1985">1985</option><option value="1984">1984</option><option value="1983">1983</option><option value="1982">1982</option><option value="1981">1981</option><option value="1980">1980</option><option value="1979">1979</option><option value="1978">1978</option><option value="1977">1977</option><option value="1976">1976</option><option value="1975">1975</option><option value="1974">1974</option><option value="1973">1973</option><option value="1972">1972</option><option value="1971">1971</option><option value="1970">1970</option><option value="1969">1969</option><option value="1968">1968</option><option value="1967">1967</option><option value="1966">1966</option><option value="1965">1965</option><option value="1964">1964</option><option value="1963">1963</option><option value="1962">1962</option><option value="1961">1961</option><option value="1960">1960</option><option value="1959">1959</option><option value="1958">1958</option><option value="1957">1957</option><option value="1956">1956</option><option value="1955">1955</option><option value="1954">1954</option><option value="1953">1953</option><option value="1952">1952</option><option value="1951">1951</option><option value="1950">1950</option><option value="1949">1949</option><option value="1948">1948</option><option value="1947">1947</option><option value="1946">1946</option><option value="1945">1945</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        
                        <div class="text-center">
                            <button id="matrix-form" class="bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300 pulse">
                                Reveal My Matrix
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
        {/* <!-- Loading Animation --> */}
        <div id="loading-section" class="hidden text-center py-20">
            <div class="inline-block relative">
                <div class="w-20 h-20 rounded-full border-4 border-t-indigo-600 border-r-purple-500 border-b-pink-400 border-l-blue-400 animate-spin"></div>
                <div class="absolute inset-0 flex items-center justify-center">
                    <span class="text-2xl">✨</span>
                </div>
            </div>
            <p class="mt-6 text-lg text-indigo-800">Calculating your Destiny Matrix...</p>
        </div>
        
        {/* <!-- Results Section --> */}
        <div id="results-section" class="hidden fade-in">
            <div className='mb-20 mx-auto  chart-wrapper'>
                <div class="mx-auto w-full"><div class="w-full mx-auto"><div class="w-full space-y-10 mx-chart"><div><div class="mb-5 flex justify-center"><div class="space-y-2 w-full"><div class="flex justify-center"><div class="flex justify-between items-center w-full"><button class="duration-300 ease-in-out inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-10 w-10 rounded-full p-2 hover:bg-gray-100" data-ph-capture-attribute-chart-nav="ChevronLeft" aria-label="Previous Group"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"></path></svg></button><button type="button" id="InteractiveDropdown" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-ph-capture-attribute-chart-nav="Menu" class="flex text-sm items-center justify-between rounded-lg bg-mx-storm px-5 py-2 text-mx-sand-a transition-all duration-200"><div class="flex mx-auto"><div class="flex w-fit space-x-2"><div class="flex place-items-center space-x-2 font-bold text-mx-sand-a text-nowrap">Apr 21, 2007</div><div aria-hidden="true" class="mx-2 h-5 w-[2px] bg-mx-sand-a/30"></div><div class="w-fit text-left overflow-clip text-nowrap">My Chart</div><div class="flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down" id="interactive-dropdown-chevron-down"><path d="m6 9 6 6 6-6"></path></svg></div></div></div></button><button class="duration-300 ease-in-out inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-10 w-10 rounded-full p-2 hover:bg-gray-100" data-ph-capture-attribute-chart-nav="ChevronRight" aria-label="Next Group"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"></path></svg></button></div></div></div></div><div class="aspect-square "><svg width="100%" height="100%" viewBox="0 0 811 811" fill="none" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer"><g id="www.thematrixofdestiny.com Chart"><g id="destiny-matrix-chart" transform="translate(22, 22)"><g opacity="0.12" id="shapes"><path d="M377 37.5889L716.411 377L377 716.411L37.5886 377L377 37.5889Z" stroke="#323C48" stroke-width="3.00278" stroke-linecap="round" stroke-linejoin="round"></path><rect x="137" y="137" width="480" height="480" stroke="#323C48" stroke-width="3.00278" stroke-linecap="round" stroke-linejoin="round"></rect><path d="M377 716.411V37.5889" stroke="#323C48" stroke-width="3.00278" stroke-linecap="round" stroke-linejoin="round"></path><path d="M137 617L617 137" stroke="#323C48" stroke-width="3.00278" stroke-linecap="round" stroke-linejoin="round"></path><path d="M37.5886 377H716.411" stroke="#323C48" stroke-width="3.00278" stroke-linecap="round" stroke-linejoin="round"></path><path d="M137 137L617 617" stroke="#323C48" stroke-width="3.00278" stroke-linecap="round" stroke-linejoin="round"></path><path id="loveLine" d="M377 617L497 497" stroke="#323C48" stroke-width="3.00278" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="3 6" class=""></path><path id="moneyLine" d="M497 497L617 377" stroke="#323C48" stroke-width="3.00278" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="3 6" class=""></path></g><g opacity="0.12" id="outsidelines"><path d="M363.798 5.74346C372.251 2.24206 381.749 2.24206 390.202 5.74346L630.183 105.147C638.636 108.648 645.352 115.364 648.853 123.817L748.256 363.798C751.758 372.251 751.758 381.749 748.256 390.202L648.853 630.183C645.352 638.636 638.636 645.352 630.183 648.853L390.202 748.256C381.749 751.758 372.251 751.758 363.798 748.256L123.817 648.853C115.364 645.352 108.648 638.636 105.147 630.183L5.74346 390.202C2.24206 381.749 2.24206 372.251 5.74346 363.798L105.147 123.817C108.648 115.364 115.364 108.648 123.817 105.147L363.798 5.74346Z" stroke="#323C48" stroke-width="3.00278" stroke-linejoin="round"></path></g>

{/* 
                setValue([newDays, months, newYears, karma, comfort_zone, number_6, number_7,
                number_8, number_9, number_10, number_11, number_12, number_13, number_14, number_15, number_16, number_17, number_18, number_19, number_20, number_21, number_22, number_23, number_24,
                number_25, number_26, number_27, number_28, number_29, number_30
              ]); */}

                <g id="Chakras">
                    <g id="Group-G" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="G"><circle id="G-circle" cx="377" cy="377" r="52" fill="#FEF08A" class="transition-all duration-1000 ease-in-out"></circle><text id="G-text" class="fill-black text-4xl font-extrabold" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="377" y="377" fill="#000000" font-size="52" style={{whiteSpace: "pre"}}>{value[4]}</text></g>

                    <g id="Group-L" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="L"><circle id="L-circle" cx="437" cy="557" r="22.5" fill="#374151" class="transition-all duration-1000 ease-in-out"></circle><text id="L-text" class="fill-white text-md font-medium" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="437" y="557" fill="#fff" font-size="22.5" style={{whiteSpace: "pre"}}>{value[10]}</text></g>

                    <g id="Group-M" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="M"><circle id="M-circle" cx="557" cy="437" r="22.5" fill="#374151" class="transition-all duration-1000 ease-in-out"></circle><text id="M-text" class="fill-white text-md font-medium" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="557" y="437" fill="#fff" font-size="22.5" style={{whiteSpace: "pre"}}>{value[11]}</text></g>

                    <g id="Group-A8" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="A8"><circle id="A8-circle" cx="716.411" cy="377" r="36" fill="#f87171" class="transition-all duration-1000 ease-in-out"></circle><text id="A8-text" class="fill-black text-2xl font-bold" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="716.411" y="377" fill="#000" font-size="36" style={{whiteSpace: "pre"}}>{value[2]}</text></g>
                    
                    <g id="Group-A" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="A"><circle id="A-circle" cx="37.5887" cy="377" r="36" fill="#C084FC" class="transition-all duration-1000 ease-in-out"></circle><text id="A-text" class="fill-black text-2xl font-bold" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="37.5887" y="377" fill="#000" font-size="36" style={{whiteSpace: "pre"}}>{value[0]}</text></g>
                    
                    <g id="Group-A3" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="A3"><circle id="A3-circle" cx="249.5" cy="377" r="21" fill="#10B981" class="transition-all duration-1000 ease-in-out"></circle><text id="A3-text" class="fill-black text-md font-normal" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="249.5" y="377" fill="#000000" font-size="21" style={{whiteSpace: "pre"}}>{value[20]}</text></g>
                    
                    <g id="Group-A6" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="A6"><circle id="A6-circle" cx="617" cy="377" r="21" fill="#fb8a3c" class="transition-all duration-1000 ease-in-out"></circle><text id="A6-text" class="fill-black text-md font-normal" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="617" y="377" fill="#000000" font-size="21" style={{whiteSpace: "pre"}}>{value[8]}</text></g>
                    
                    <g id="Group-A2" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="A2"><circle id="A2-circle" cx="137" cy="377" r="21" fill="#7DD3FC" class="transition-all duration-1000 ease-in-out"></circle><text id="A2-text" class="fill-black text-md font-normal" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="137" y="377" fill="#000000" font-size="21" style={{whiteSpace: "pre"}}>{value[6]}</text></g>
                    
                    <g id="Group-A1" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="A1"><circle id="A1-circle" cx="94.7943" cy="377" r="22.5" fill="#3B82F6" class="transition-all duration-1000 ease-in-out"></circle><text id="A1-text" class="fill-black text-md font-medium" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="94.7943" y="377" fill="#000000" font-size="22.5" style={{whiteSpace: "pre"}}>{value[14]}</text>
                    
                    </g><g id="Group-A7" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="A7"><circle id="A7-circle" cx="659.206" cy="377" r="22.5" fill="#374151" class="transition-all duration-1000 ease-in-out"></circle><text id="A7-text" class="fill-white text-md font-medium" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="659.206" y="377" fill="#fff" font-size="22.5" style={{whiteSpace: "pre"}}>{value[15]}</text></g>
                    
                    <g id="Group-B" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="B"><circle id="B-circle" cx="377" cy="37.5889" r="36" fill="#C084FC" class="transition-all duration-1000 ease-in-out"></circle><text id="B-text" class="fill-black text-2xl font-bold" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="377" y="37.5889" fill="#000" font-size="36" style={{whiteSpace: "pre"}}>{value[1]}</text></g>
                    
                    <g id="Group-B2" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="B2"><circle id="B2-circle" cx="377" cy="137" r="21" fill="#7DD3FC" class="transition-all duration-1000 ease-in-out"></circle><text id="B2-text" class="fill-black text-md font-normal" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="377" y="137" fill="#000000" font-size="21" style={{whiteSpace: "pre"}}>{value[7]}</text></g>
                    
                    <g id="Group-B1" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="B1"><circle id="B1-circle" cx="377" cy="94.7944" r="22.5" fill="#3B82F6" class="transition-all duration-1000 ease-in-out"></circle><text id="B1-text" class="fill-black text-md font-medium" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="377" y="94.7944" fill="#000000" font-size="22.5" style={{whiteSpace: "pre"}}>{value[13]}</text></g>
                    
                    <g id="Group-B6" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="B6"><circle id="B6-circle" cx="377" cy="716.411" r="36" fill="#f87171" class="transition-all duration-1000 ease-in-out"></circle><text id="B6-text" class="fill-black text-2xl font-bold" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="377" y="716.411" fill="#000" font-size="36" style={{whiteSpace: "pre"}}>{value[3]}</text></g>
                    
                    <g id="Group-B4" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="B4"><circle id="B4-circle" cx="377" cy="617" r="21" fill="#fb8a3c" class="transition-all duration-1000 ease-in-out"></circle><text id="B4-text" class="fill-black text-md font-normal" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="377" y="617" fill="#000000" font-size="21" style={{whiteSpace: "pre"}}>{value[5]}</text></g>
                    
                    <g id="Group-B3" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="B3"><circle id="B3-circle" cx="377" cy="249.5" r="21" fill="#10B981" class="transition-all duration-1000 ease-in-out"></circle><text id="B3-text" class="fill-black text-md font-normal" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="377" y="249.5" fill="#000000" font-size="21" style={{whiteSpace: "pre"}}>{value[21]}</text></g>
                    
                    <g id="Group-B5" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="B5"><circle id="B5-circle" cx="377" cy="659.206" r="22.5" fill="#374151" class="transition-all duration-1000 ease-in-out"></circle><text id="B5-text" class="fill-white text-md font-medium" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="377" y="659.206" fill="#fff" font-size="22.5" style={{whiteSpace: "pre"}}>{value[12]}</text></g>
                    
                    <g id="Group-C" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="C"><circle id="C-circle" cx="137" cy="617" r="36" fill="#374151" class="transition-all duration-1000 ease-in-out"></circle><text id="C-text" class="fill-white text-2xl font-bold" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="137" y="617" fill="#fff" font-size="36" style={{whiteSpace: "pre"}}>{value[19]}</text></g>

                    <g id="Group-C2" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="C2"><circle id="C2-circle" cx="207.2945" cy="546.7055" r="21" fill="#374151" class="transition-all duration-1000 ease-in-out"></circle><text id="C2-text" class="fill-white text-md font-normal" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="207.2945" y="546.7055" fill="#fff" font-size="21" style={{whiteSpace: "pre"}}>{value[28]}</text></g>
                    
                    <g id="Group-C1" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="C1"><circle id="C1-circle" cx="177.4505" cy="576.5495" r="22.5" fill="#374151" class="transition-all duration-1000 ease-in-out"></circle><text id="C1-text" class="fill-white text-md font-medium" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="177.4505" y="576.5495" fill="#fff" font-size="22.5" style={{whiteSpace: "pre"}}>{value[29]}</text></g>
                    
                    <g id="Group-C5" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="C5"><circle id="C5-circle" cx="617" cy="137" r="36" fill="#374151" class="transition-all duration-1000 ease-in-out"></circle><text id="C5-text" class="fill-white text-2xl font-bold" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="617" y="137" fill="#fff" font-size="36" style={{whiteSpace: "pre"}}>{value[17]}</text></g>
                    
                    
                    
                    <g id="Group-C3" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="C3"><circle id="C3-circle" cx="546.7055" cy="207.2945" r="21" fill="#374151" class="transition-all duration-1000 ease-in-out"></circle><text id="C3-text" class="fill-white text-md font-normal" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="546.7055" y="207.2945" fill="#fff" font-size="21" style={{whiteSpace: "pre"}}>{value[24]}</text></g>
                    
                    <g id="Group-C4" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="C4"><circle id="C4-circle" cx="576.5495" cy="177.4505" r="22.5" fill="#374151" class="transition-all duration-1000 ease-in-out"></circle><text id="C4-text" class="fill-white text-md font-medium" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="576.5495" y="177.4505" fill="#fff" font-size="22.5" style={{whiteSpace: "pre"}}>{value[25]}</text></g>
                    
                    <g id="Group-D6" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="D6"><circle id="D6-circle" cx="617" cy="617" r="36" fill="#374151" class="transition-all duration-1000 ease-in-out"></circle><text id="D6-text" class="fill-white text-2xl font-bold" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="617" y="617" fill="#fff" font-size="36" style={{whiteSpace: "pre"}}>{value[18]}</text></g>
                    
                    
                    
                    <g id="Group-D4" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="D4"><circle id="D4-circle" cx="546.7055" cy="546.706" r="22.5" fill="#374151" class="transition-all duration-1000 ease-in-out"></circle><text id="D4-text" class="fill-white text-md font-medium" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="546.7055" y="546.706" fill="#fff" font-size="22.5" style={{whiteSpace: "pre"}}>{value[26]}</text></g>
                    
                    <g id="Group-D5" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="D5"><circle id="D5-circle" cx="576.5495" cy="576.5495" r="22.5" fill="#374151" class="transition-all duration-1000 ease-in-out"></circle><text id="D5-text" class="fill-white text-md font-medium" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="576.5495" y="576.5495" fill="#fff" font-size="22.5" style={{whiteSpace: "pre"}}>{value[27]}</text></g>
                    
                    <g id="Group-D" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="D"><circle id="D-circle" cx="137" cy="137" r="36" fill="#374151" class="transition-all duration-1000 ease-in-out"></circle><text id="D-text" class="fill-white text-2xl font-bold" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="137" y="137" fill="#fff" font-size="36" style={{whiteSpace: "pre"}}>{value[16]}</text></g>
                    
                    <g id="Group-D2" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="D2"><circle id="D2-circle" cx="207.2945" cy="207.2945" r="21" fill="#374151" class="transition-all duration-1000 ease-in-out"></circle><text id="D2-text" class="fill-white text-md font-normal" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="207.2945" y="207.2945" fill="#fff" font-size="21" style={{whiteSpace: "pre"}}>{value[22]}</text></g>
                    
                    <g id="Group-D1" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="D1"><circle id="D1-circle" cx="177.4505" cy="177.4505" r="22.5" fill="#374151" class="transition-all duration-1000 ease-in-out"></circle><text id="D1-text" class="fill-white text-md font-medium" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="177.4505" y="177.4505" fill="#fff" font-size="22.5" style={{whiteSpace: "pre"}}>{value[23]}</text></g>
                    
                    <g id="Group-D3" data-ph-capture-attribute-chart-group="Chart" data-ph-capture-attribute-chart-chakra="D3"><circle id="D3-circle" cx="497" cy="497" r="22.5" fill="#374151" class="transition-all duration-1000 ease-in-out"></circle><text id="D3-text" class="fill-white text-md font-medium" xml:space="preserve" text-anchor="middle" dominant-baseline="central" x="497" y="497" fill="#fff" font-size="22.5" style={{whiteSpace: "pre"}}>{value[9]}</text></g></g><g id="Icons"><g id="Heart" class=""><path d="M397 524.137C397 529 401.02 531.591 403.962 533.911C405 534.729 406 535.5 407 535.5C408 535.5 409 534.73 410.038 533.91C412.981 531.592 417 529 417 524.138C417 519.275 411.5 515.826 407 520.502C402.5 515.825 397 519.274 397 524.137Z" fill="#FC5555"></path></g><g id="$" class=""><path d="M527 396.5V416.5" stroke="#07CF7F" stroke-width="2" stroke-linejoin="round"></path><path d="M532 399.5H524.5C523.572 399.5 522.682 399.869 522.025 400.525C521.369 401.182 521 402.072 521 403C521 403.928 521.369 404.818 522.025 405.475C522.682 406.131 523.572 406.5 524.5 406.5H529.5C530.428 406.5 531.318 406.869 531.975 407.525C532.631 408.182 533 409.072 533 410C533 410.928 532.631 411.818 531.975 412.475C531.318 413.131 530.428 413.5 529.5 413.5H521" stroke="#07CF7F" stroke-width="2" stroke-linejoin="round"></path></g></g>

                <g id="logo" transform="translate(604, 684)"><path d="M34.292 53.278h6.922c8.211 0 11.807-4.645 11.807-9.433 0-5.088-3.642-9.637-11.806-9.637h-6.923c.148 1.004.2 1.885.2 3.23v12.616c0 1.345-.052 2.22-.2 3.224zm5.501-.636V34.82h1.422c4.35 0 6.183 3.326 6.183 9.025 0 5.4-1.834 8.797-6.184 8.797h-1.42zm21.734 1.105c2.909 0 5.7-1.86 6.749-5.623L67.838 48c-.708 2.175-2.323 3.47-4.156 3.47-2.664 0-4.11-2.813-4.376-5.624h8.776c-.101-3.616-3.157-5.674-6.433-5.674-3.52 0-6.967 2.424-6.967 6.677 0 4.182 3.3 6.897 6.845 6.897zm-2.272-8.827c0-2.69.805-4.156 2.252-4.156 1.319 0 1.88 1.268 1.905 4.446h-4.157v-.29zm16.941 8.827c3.01 0 5.919-1.273 5.919-3.937 0-4.6-8.654-4.793-8.654-7.656 0-.805.657-1.345 1.686-1.345 1.268 0 2.027.958 2.715 1.982.463.662 1.075 1.37 2.098 1.37 1.126 0 1.737-.932 1.717-2.104-1.615-1.171-3.963-1.884-6.138-1.884-3.275 0-5.333 1.395-5.333 3.718 0 4.6 8.267 4.818 8.267 7.778 0 .876-.759 1.441-1.859 1.441-1.248 0-2.277-.784-3.153-2.837-.443-.932-1.248-1.467-2.103-1.467-.709 0-1.32.367-1.763 1.172.76 2.592 3.744 3.769 6.601 3.769zm12.984 0c2.76 0 4.497-2.078 4.94-5.893h-.463c-.296 2.297-1.203 3.616-2.47 3.616-.979 0-1.59-.952-1.59-2.47v-7.702h4.009v-.636H85.71c3.52-.657 4.665-2.954 4.665-5.231H85.88c0 3.84-.316 5.23-2.297 5.23h-.296v.637h1.808v8.069c0 2.714 1.544 4.38 4.086 4.38zm6.87-.469h4.962c-.148-1.023-.194-1.93-.194-3.224v-6.163c0-1.294.046-2.2.194-3.23H96.05c.148 1.03.194 1.936.194 3.23v6.163c0 1.294-.046 2.2-.194 3.224zm-.122-16.426l2.613 2.516 2.567-2.516-2.567-2.521-2.613 2.52zm17.237 16.426h4.889c-.173-1.023-.219-1.93-.219-3.224v-5.577c0-2.735-1.344-4.304-3.596-4.304-1.884 0-3.764 1.125-4.813 2.766.02-.856.097-1.539.193-2.277h-4.889c.148 1.029.193 1.935.193 3.229v6.163c0 1.294-.045 2.2-.193 3.224h4.889c-.147-1.023-.193-1.93-.193-3.224V43.82c.606-1.055 1.538-1.712 2.419-1.712.999 0 1.513.734 1.513 2.348v5.598c0 1.294-.046 2.2-.193 3.224zm8.75 6.041c2.445 0 3.866-1.151 5.037-4.034l4.085-9.83c.561-1.416.856-2.104.978-3.077.072-.417.123-.81.097-1.446a2.384 2.384 0 00-1.711-.708c-.907 0-1.661.54-1.661 1.563 0 1.422 1.391 1.86 1.391 3.301 0 .611-.27 1.467-.637 2.399l-1.467 3.59-1.589-4.716c-.586-1.808-1.1-3.596-.881-5.7h-5.868c.347.785.983 2.278 1.544 4.086l2.76 8.531h3.133l-.708 1.686c-.861 2.13-1.691 2.863-2.766 2.863-1.859 0-1.885-2.226-3.835-2.226-1.055 0-1.788.662-2.007 2.154.952.83 2.322 1.564 4.105 1.564zM20.306 46.88c2.165 0 3.494-1.522 3.494-3.3 0-1.782-1.32-3.29-3.494-3.29-2.17 0-3.49 1.508-3.49 3.29 0 1.778 1.33 3.3 3.49 3.3zm-2.17-3.3c0-1.945.871-3.117 2.17-3.117 1.304 0 2.175 1.172 2.175 3.117 0 1.94-.881 3.123-2.175 3.123-1.289 0-2.17-1.182-2.17-3.123zm6.698 3.163h1.156a7.565 7.565 0 01-.06-1.074v-2.93h1.115v-.182h-1.116l-.183-1.07c-.072-.616.122-1.075.54-1.075.26 0 .504.245.784.52.138.163.306.295.545.295.306 0 .453-.244.52-.565-.612-.29-1.131-.438-1.564-.438-.988 0-1.67.596-1.67 1.803v.53h-.587v.183h.586v2.929c0 .433-.015.733-.066 1.074zM32.112 25.931h.76l7.334-17.307v13.813c0 1.345-.046 2.226-.194 3.225h5.72c-.147-.999-.193-1.88-.193-3.225V9.821c0-1.345.046-2.226.193-3.224h-5.378l-5.282 12.346-5.135-12.346h-5.694c.148.973.194 1.833.194 3.224v7.778c0 2.735-.27 6.158-.734 8.063h2.13c-.464-1.951-.734-5.328-.734-8.043V8.818l7.013 17.113zm20.048.2c1.834 0 3.84-1.101 4.87-3.744 0 1.125.096 2.348.29 3.275h4.767c-.56-1.513-.682-2.297-.682-4.396v-3.647c0-3.199-2.348-5.058-6.066-5.058-2.175 0-4.447.683-6.235 1.758-.02 1.787.566 2.617 1.712 2.617 1.176 0 1.762-.784 2.276-1.64.56-.927 1.223-2.149 2.491-2.149.978 0 1.543.733 1.543 1.885 0 2.22-1.981 2.857-3.988 3.494-2.297.759-4.69 1.467-4.69 4.105 0 2.226 1.756 3.5 3.712 3.5zm.688-4.697c0-1.37.759-2.053 2.297-2.908 1.003-.49 1.518-.708 1.86-1.274v3.23c0 2.225-1.249 3.203-2.349 3.203-.927 0-1.808-.687-1.808-2.251zm16.11 4.696c2.761 0 4.498-2.078 4.941-5.893h-.469c-.29 2.297-1.197 3.616-2.465 3.616-.978 0-1.589-.952-1.589-2.465v-7.706h4.009v-.632h-7.9c3.524-.662 4.67-2.96 4.67-5.236h-4.497c0 3.84-.316 5.236-2.297 5.236h-.296v.632h1.809v8.073c0 2.71 1.543 4.375 4.085 4.375zm6.795-.468h4.89c-.143-1.024-.194-1.93-.194-3.225v-4.35c.856-2.057 2.496-2.057 3.84-2.057 1.294 0 2.079-1.05 2.079-2.124a2.65 2.65 0 00-.346-1.32c-2.787 0-4.28 1.096-5.573 4.524v-.836c0-1.293.051-2.2.194-3.224h-4.89c.148 1.024.199 1.93.199 3.224v6.163c0 1.294-.051 2.2-.199 3.225zm12.469 0h4.966c-.148-1.024-.199-1.93-.199-3.225v-6.163c0-1.293.051-2.2.199-3.224h-4.966c.148 1.024.199 1.93.199 3.224v6.163c0 1.294-.052 2.2-.2 3.225zM88.1 9.235l2.618 2.516 2.567-2.516-2.567-2.516L88.1 9.235zm14.526 16.427h6.061c-.56-.708-1.049-1.416-2.297-3.372l-2.007-3.082c1.299-.876 2.741-2.348 3.301-4.13.199-.56.295-1.152.295-1.763a2.463 2.463 0 00-1.737-.708c-.906 0-1.66.54-1.66 1.569 0 1.146.902 1.66.902 2.638 0 .662-.489 1.248-1.391 1.982l-1.299-1.982c-.978-1.538-1.66-2.714-1.737-3.764h-6.06c.539.683 1.002 1.37 2.296 3.347l2.374 3.621-.688.881c-1.93 2.588-3.3 4.228-3.81 4.763h3.668c-.123-1.095-.347-2.955.707-4.421l.49-.663.901 1.396c.907 1.441 1.615 2.638 1.691 3.688zM2.5 19.34h1.497a7.549 7.549 0 01-.077-1.206v-5.766c.8.025 1.462.137 2.165.438l.24-.617H.181l.239.617c.703-.3 1.365-.413 2.155-.438v5.766c0 .504-.02.835-.077 1.207zm7.7 0h1.294a7.842 7.842 0 01-.071-1.206v-2.099c0-1.003-.494-1.553-1.304-1.553-.703 0-1.4.432-1.803 1.084V13.31c0-.489.015-.825.071-1.212H7.093c.056.387.077.723.077 1.212v4.824c0 .483-.02.825-.077 1.207h1.294a7.85 7.85 0 01-.071-1.207V15.83c.29-.514.749-.835 1.197-.835.489 0 .764.341.764 1.039v2.099c0 .483-.02.825-.077 1.207zm4.432.159c1.054 0 2.007-.734 2.338-2.038l-.138-.025c-.24.891-.902 1.467-1.68 1.467-1.09 0-1.732-1.172-1.732-2.404v-.01h3.422c-.04-1.228-1.039-2.008-2.195-2.008-1.273 0-2.42.963-2.42 2.47 0 1.503 1.131 2.547 2.405 2.547zm-1.202-3.2c.046-1.008.514-1.64 1.192-1.64.621 0 .983.546 1.008 1.64h-2.2z" fill="#323C48" opacity="1"></path>
                </g>
                
                </g>
                <g id="cycles" transform="translate(-8, -5)"><g id="dots-and-energies"><g id="d-and-e-0"><circle cx="48.1769" cy="359.324" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="28.176900000000003" y="361.324" class="fill-chakras-root text-xs">7</text><circle cx="59.9399" cy="330.642" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="39.9399" y="332.642" class="fill-chakras-root text-xs">4</text><circle cx="71.7029" cy="301.96000000000004" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="51.7029" y="303.96000000000004" class="fill-chakras-root text-xs">14</text><circle cx="83.4659" cy="273.278" r="3.25" fill="#D9D9D9" stroke="#000" stroke-width="0.5"></circle><text x="63.465900000000005" y="275.278" class="fill-chakras-root text-sm font-bold">10</text><circle cx="95.22890000000001" cy="244.596" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="75.22890000000001" y="246.596" class="fill-chakras-root text-xs">9</text><circle cx="106.9919" cy="215.91400000000002" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="86.9919" y="217.91400000000002" class="fill-chakras-root text-xs">17</text><circle cx="118.7549" cy="187.23200000000003" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="98.7549" y="189.23200000000003" class="fill-chakras-root text-xs">6</text></g><g id="d-and-e-10"><circle cx="194.384" cy="114.807" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="184.384" y="104.807" class="fill-chakras-root text-xs">7</text><circle cx="222.101" cy="103.327" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="212.101" y="93.327" class="fill-chakras-root text-xs">18</text><circle cx="249.81799999999998" cy="91.84700000000001" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="239.81799999999998" y="81.84700000000001" class="fill-chakras-root text-xs">11</text><circle cx="277.53499999999997" cy="80.367" r="3.25" fill="#D9D9D9" stroke="#000" stroke-width="0.5"></circle><text x="267.53499999999997" y="70.367" class="fill-chakras-root text-sm font-bold">11</text><circle cx="305.25199999999995" cy="68.887" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="295.25199999999995" y="58.887" class="fill-chakras-root text-xs">8</text><circle cx="332.96899999999994" cy="57.407" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="322.96899999999994" y="47.407" class="fill-chakras-root text-xs">15</text><circle cx="360.686" cy="45.92700000000001" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="350.686" y="35.92700000000001" class="fill-chakras-root text-xs">19</text></g><g id="d-and-e-20"><circle cx="453.649" cy="46.1904" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="458.649" y="36.1904" class="fill-chakras-root text-xs">7</text><circle cx="481.365" cy="57.6704" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="486.365" y="47.6704" class="fill-chakras-root text-xs">21</text><circle cx="509.081" cy="69.15039999999999" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="514.081" y="59.15039999999999" class="fill-chakras-root text-xs">11</text><circle cx="536.797" cy="80.6304" r="3.25" fill="#D9D9D9" stroke="#000" stroke-width="0.5"></circle><text x="541.797" y="70.6304" class="fill-chakras-root text-sm font-bold">17</text><circle cx="564.513" cy="92.1104" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="569.513" y="82.1104" class="fill-chakras-root text-xs">20</text><circle cx="592.229" cy="103.5904" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="597.229" y="93.5904" class="fill-chakras-root text-xs">3</text><circle cx="619.9449999999999" cy="115.07039999999999" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="624.9449999999999" y="105.07039999999999" class="fill-chakras-root text-xs">16</text></g><g id="d-and-e-30"><circle cx="693.325" cy="185.381" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="705.325" y="187.381" class="fill-chakras-root text-xs">21</text><circle cx="705.086" cy="214.064" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="717.086" y="216.064" class="fill-chakras-root text-xs">8</text><circle cx="716.8470000000001" cy="242.747" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="728.8470000000001" y="244.747" class="fill-chakras-root text-xs">3</text><circle cx="728.6080000000001" cy="271.43" r="3.25" fill="#D9D9D9" stroke="#000" stroke-width="0.5"></circle><text x="740.6080000000001" y="273.43" class="fill-chakras-root text-sm font-bold">22</text><circle cx="740.369" cy="300.113" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="752.369" y="302.113" class="fill-chakras-root text-xs">8</text><circle cx="752.13" cy="328.796" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="764.13" y="330.796" class="fill-chakras-root text-xs">4</text><circle cx="763.8910000000001" cy="357.47900000000004" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="775.8910000000001" y="359.47900000000004" class="fill-chakras-root text-xs">13</text></g><g id="d-and-e-40"><circle cx="691.187" cy="627.581" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="703.187" y="631.581" class="fill-chakras-root text-xs">21</text><circle cx="702.95" cy="598.899" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="714.95" y="602.899" class="fill-chakras-root text-xs">5</text><circle cx="714.713" cy="570.217" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="726.713" y="574.217" class="fill-chakras-root text-xs">12</text><circle cx="726.476" cy="541.5350000000001" r="3.25" fill="#D9D9D9" stroke="#000" stroke-width="0.5"></circle><text x="738.476" y="545.5350000000001" class="fill-chakras-root text-sm font-bold">7</text><circle cx="738.239" cy="512.8530000000001" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="750.239" y="516.8530000000001" class="fill-chakras-root text-xs">5</text><circle cx="750.002" cy="484.17100000000005" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="762.002" y="488.17100000000005" class="fill-chakras-root text-xs">16</text><circle cx="761.765" cy="455.48900000000003" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="773.765" y="459.48900000000003" class="fill-chakras-root text-xs">7</text></g><g id="d-and-e-50"><circle cx="453.649" cy="760.137" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="453.649" y="780.137" class="fill-chakras-root text-xs">19</text><circle cx="481.366" cy="748.6569999999999" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="481.366" y="768.6569999999999" class="fill-chakras-root text-xs">12</text><circle cx="509.08299999999997" cy="737.1769999999999" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="509.08299999999997" y="757.1769999999999" class="fill-chakras-root text-xs">17</text><circle cx="536.8" cy="725.6969999999999" r="3.25" fill="#D9D9D9" stroke="#000" stroke-width="0.5"></circle><text x="536.8" y="745.6969999999999" class="fill-chakras-root text-sm font-bold">5</text><circle cx="564.517" cy="714.217" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="564.517" y="734.217" class="fill-chakras-root text-xs">8</text><circle cx="592.2339999999999" cy="702.737" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="592.2339999999999" y="722.737" class="fill-chakras-root text-xs">21</text><circle cx="619.951" cy="691.257" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="619.951" y="711.257" class="fill-chakras-root text-xs">10</text></g><g id="d-and-e-60"><circle cx="194.38" cy="692.19" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="189.38" y="712.19" class="fill-chakras-root text-xs">19</text><circle cx="222.09699999999998" cy="703.671" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="217.09699999999998" y="723.671" class="fill-chakras-root text-xs">9</text><circle cx="249.814" cy="715.152" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="244.814" y="735.152" class="fill-chakras-root text-xs">8</text><circle cx="277.531" cy="726.633" r="3.25" fill="#D9D9D9" stroke="#000" stroke-width="0.5"></circle><text x="272.531" y="746.633" class="fill-chakras-root text-sm font-bold">17</text><circle cx="305.248" cy="738.114" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="300.248" y="758.114" class="fill-chakras-root text-xs">5</text><circle cx="332.965" cy="749.595" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="327.965" y="769.595" class="fill-chakras-root text-xs">6</text><circle cx="360.682" cy="761.076" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="355.682" y="781.076" class="fill-chakras-root text-xs">13</text></g><g id="d-and-e-70"><circle cx="51.1869" cy="453.641" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="31.1869" y="457.641" class="fill-chakras-root text-xs">10</text><circle cx="62.9499" cy="482.322" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="42.9499" y="486.322" class="fill-chakras-root text-xs">7</text><circle cx="74.7129" cy="511.00300000000004" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="54.712900000000005" y="515.003" class="fill-chakras-root text-xs">11</text><circle cx="86.4759" cy="539.684" r="3.25" fill="#D9D9D9" stroke="#000" stroke-width="0.5"></circle><text x="66.4759" y="543.684" class="fill-chakras-root text-sm font-bold">4</text><circle cx="98.2389" cy="568.365" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="78.2389" y="572.365" class="fill-chakras-root text-xs">18</text><circle cx="110.0019" cy="597.046" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="90.0019" y="601.046" class="fill-chakras-root text-xs">14</text><circle cx="121.76490000000001" cy="625.7270000000001" r="2.5" fill="#323C48" stroke="none" stroke-width="0"></circle><text x="101.76490000000001" y="629.7270000000001" class="fill-chakras-root text-xs">6</text></g></g><g id="chart-cycles"><g id="ranges"><g id="age-8-9"><text x="127" y="202" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>8-9</text><text x="115" y="223" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>7-8</text><text x="108" y="248" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>6-7</text><text x="84" y="306" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>3-4</text><text x="72" y="335" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>2-3</text><text x="60" y="362" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>1-2</text></g><g id="age-18-19"><text x="344" y="61" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>18-19</text><text x="318" y="75" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>17-18</text><text x="294" y="85" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>16-17</text><text x="256" y="105" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>13-14</text><text x="222" y="120" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>12-13</text><text x="193" y="133" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>11-12</text></g><g id="age-21-22"><text x="446" y="65" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>21-22</text><text x="468" y="77" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>22-23</text><text x="488" y="87" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>23-24</text><text x="542" y="109" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>26-27</text><text x="570" y="120" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>27-28</text><text x="598" y="131" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>28-29</text></g><g id="age-31-32"><text x="688" y="205" class="fill-slate-600 text-[8px]" text-anchor="end" style={{fill: "rgb(71, 85, 105)"}}>31-32</text><text x="701" y="224" class="fill-slate-600 text-[8px]" text-anchor="end" style={{fill: "rgb(71, 85, 105)"}}>32-33</text><text x="706" y="248" class="fill-slate-600 text-[8px]" text-anchor="end" style={{fill: "rgb(71, 85, 105)"}}>33-34</text><text x="732" y="306" class="fill-slate-600 text-[8px]" text-anchor="end" style={{fill: "rgb(71, 85, 105)"}}>36-37</text><text x="745" y="335" class="fill-slate-600 text-[8px]" text-anchor="end" style={{fill: "rgb(71, 85, 105)"}}>37-38</text><text x="758" y="362" class="fill-slate-600 text-[8px]" text-anchor="end" style={{fill: "rgb(71, 85, 105)"}}>38-39</text></g><g id="age-41-42"><text x="750" y="456" class="fill-slate-600 text-[8px]" text-anchor="end" style={{fill: "rgb(71, 85, 105)"}}>41-42</text><text x="738" y="485" class="fill-slate-600 text-[8px]" text-anchor="end" style={{fill: "rgb(71, 85, 105)"}}>42-43</text><text x="726" y="514" class="fill-slate-600 text-[8px]" text-anchor="end" style={{fill: "rgb(71, 85, 105)"}}>43-44</text><text x="702" y="572" class="fill-slate-600 text-[8px]" text-anchor="end" style={{fill: "rgb(71, 85, 105)"}}>46-47</text><text x="695" y="589" class="fill-slate-600 text-[8px]" text-anchor="end" style={{fill: "rgb(71, 85, 105)"}}>47-48</text><text x="688" y="606" class="fill-slate-600 text-[8px]" text-anchor="end" style={{fill: "rgb(71, 85, 105)"}}>48-49</text></g><g id="age-51-52"><text x="626" y="683" class="fill-slate-600 text-[8px]" text-anchor="end" style={{fill: "rgb(71, 85, 105)"}}>51-52</text><text x="602" y="694" class="fill-slate-600 text-[8px]" text-anchor="end" style={{fill: "rgb(71, 85, 105)"}}>52-53</text><text x="574" y="707" class="fill-slate-600 text-[8px]" text-anchor="end" style={{fill: "rgb(71, 85, 105)"}}>53-54</text><text x="515" y="726" class="fill-slate-600 text-[8px]" text-anchor="end" style={{fill: "rgb(71, 85, 105)"}}>56-57</text><text x="491" y="738" class="fill-slate-600 text-[8px]" text-anchor="end" style={{fill: "rgb(71, 85, 105)"}}>57-58</text><text x="470" y="750" class="fill-slate-600 text-[8px]" text-anchor="end" style={{fill: "rgb(71, 85, 105)"}}>58-59</text></g><g id="age-68-69"><text x="190" y="683" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>68-69</text><text x="219" y="694" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>67-68</text><text x="242" y="707" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>66-67</text><text x="301" y="726" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>63-64</text><text x="320" y="738" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>62-63</text><text x="345" y="750" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>61-62</text></g><g id="age-78-79"><text x="65" y="456" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>78-79</text><text x="76" y="484" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>77-78</text><text x="87" y="512" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>76-77</text><text x="109" y="568" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>73-74</text><text x="118" y="591" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>72-73</text><text x="126" y="608" class="fill-slate-600 text-[8px]" text-anchor="start" style={{fill: "rgb(71, 85, 105)"}}>71-72</text></g></g><g id="quintuple-cycles"><g id="age-0"><text x="19" y="398" class="fill-black text-[8px] font-semibold" text-anchor="middle">0</text><text x="19" y="408" class="fill-black text-[8px] font-semibold" text-anchor="middle">years</text><text x="19" y="418" class="fill-black text-[8px] font-semibold" text-anchor="middle">old</text></g><g id="age-5"><g id="quantuple-age-5"><text x="104" y="273" class="fill-black text-[8px] font-semibold" text-anchor="end">5</text><text x="107" y="273" class="fill-black text-[8px] font-semibold" text-anchor="start">years</text><text x="107" y="283" class="fill-black text-[8px] font-semibold" text-anchor="start">old</text></g></g><g id="age-10"><text x="123" y="122" class="fill-black text-[8px] font-semibold" text-anchor="middle">10</text><text x="123" y="132" class="fill-black text-[8px] font-semibold" text-anchor="middle">years old</text></g><g id="age-15"><g id="quantuple-age-15"><text x="290.84" y="96.212" class="fill-black text-[8px] font-semibold" text-anchor="end">15</text><text x="293.84" y="96.212" class="fill-black text-[8px] font-semibold" text-anchor="start">years</text><text x="293.84" y="106.212" class="fill-black text-[8px] font-semibold" text-anchor="start">old</text></g></g><g id="age-20"><text x="405" y="20" class="fill-black text-[8px] font-semibold" text-anchor="middle">20 years old</text></g><g id="age-25"><g id="quantuple-age-25"><text x="517.84" y="96.212" class="fill-black text-[8px] font-semibold" text-anchor="end">25</text><text x="520.84" y="96.212" class="fill-black text-[8px] font-semibold" text-anchor="start">years</text><text x="520.84" y="106.212" class="fill-black text-[8px] font-semibold" text-anchor="start">old</text></g></g><g id="age-30"><text x="694" y="122" class="fill-black text-[8px] font-semibold" text-anchor="middle">30</text><text x="694" y="132" class="fill-black text-[8px] font-semibold" text-anchor="middle">years old</text></g><g id="age-35"><g id="quantuple-age-35"><text x="694" y="273" class="fill-black text-[8px] font-semibold" text-anchor="end">35</text><text x="697" y="273" class="fill-black text-[8px] font-semibold" text-anchor="start">years</text><text x="697" y="283" class="fill-black text-[8px] font-semibold" text-anchor="start">old</text></g></g><g id="age-40"><text x="796" y="398" class="fill-black text-[8px] font-semibold" text-anchor="middle">40</text><text x="796" y="408" class="fill-black text-[8px] font-semibold" text-anchor="middle">years</text><text x="796" y="418" class="fill-black text-[8px] font-semibold" text-anchor="middle">old</text></g><g id="age-45"><g id="quantuple-age-45"><text x="694" y="539.212" class="fill-black text-[8px] font-semibold" text-anchor="end">45</text><text x="697" y="539.212" class="fill-black text-[8px] font-semibold" text-anchor="start">years</text><text x="697" y="549.212" class="fill-black text-[8px] font-semibold" text-anchor="start">old</text></g></g><g id="age-50"><text x="680" y="683" class="fill-black text-[8px] font-semibold" text-anchor="middle">50</text><text x="680" y="693" class="fill-black text-[8px] font-semibold" text-anchor="middle">years old</text></g><g id="age-55"><g id="quantuple-age-55"><text x="517.84" y="705" class="fill-black text-[8px] font-semibold" text-anchor="end">55</text><text x="520.84" y="705" class="fill-black text-[8px] font-semibold" text-anchor="start">years</text><text x="520.84" y="715" class="fill-black text-[8px] font-semibold" text-anchor="start">old</text></g></g><g id="age-60"><text x="405" y="790" class="fill-black text-[8px] font-semibold" text-anchor="middle">60 years old</text></g><g id="age-65"><g id="quantuple-age-65"><text x="290.84" y="705" class="fill-black text-[8px] font-semibold" text-anchor="end">65</text><text x="293.84" y="705" class="fill-black text-[8px] font-semibold" text-anchor="start">years</text><text x="293.84" y="715" class="fill-black text-[8px] font-semibold" text-anchor="start">old</text></g></g><g id="age-70"><text x="127" y="683" class="fill-black text-[8px] font-semibold" text-anchor="middle">70</text><text x="127" y="693" class="fill-black text-[8px] font-semibold" text-anchor="middle">years old</text></g><g id="age-75"><g id="quantuple-age-75"><text x="108.84" y="539.212" class="fill-black text-[8px] font-semibold" text-anchor="end">75</text><text x="111.84" y="539.212" class="fill-black text-[8px] font-semibold" text-anchor="start">years</text><text x="111.84" y="549.212" class="fill-black text-[8px] font-semibold" text-anchor="start">old</text></g></g></g></g></g></g></svg></div></div></div></div></div>
            </div>
            <div class="bg-white bg-opacity-40 rounded-3xl p-8 md:p-12 shadow-lg glow mb-12 relative overflow-hidden">
                <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-100/50 to-transparent z-0"></div>
                <div class="relative z-10">
                    <div class="text-center mb-10">
                        <h2 class="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">Your Destiny Matrix</h2>
                        <p id="user-greeting" class="text-xl text-gray-700">Here's what the universe reveals about your journey, <span id="user-name-display" class="font-semibold text-indigo-700"></span>.</p>
                    </div>
                    
                    {/* <!-- Matrix Cards Grid --> */}
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                        {/* <!-- Soul Path Card --> */}
                        <div class="matrix-card bg-gradient-to-br from-purple-100/80 to-indigo-100/80 rounded-2xl p-6 card-glow relative overflow-hidden">
                            <div class="absolute top-3 right-3 text-indigo-300 text-4xl opacity-20">1</div>
                            <h3 class="text-xl font-bold text-indigo-900 mb-2 flex items-center">
                                <span class="mr-2">✨</span>
                                Soul Path
                            </h3>
                            <p class="text-gray-700 mb-4 line-clamp-2">Your core purpose and the direction your soul is meant to travel in this lifetime.</p>
                            <button class="toggle-card text-indigo-600 font-medium flex items-center hover:text-indigo-800 transition">
                                <span class="show-text">Read More</span>
                                <span class="hide-text hidden">Show Less</span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1 show-icon" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1 hide-icon hidden" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd"></path>
                                </svg>
                            </button>
                            <div class="card-content hidden mt-4 pt-4 border-t border-indigo-100">
                                <p class="text-gray-700 mb-3">Your Soul Path number is <span class="soul-path-number font-bold text-indigo-700">7</span>, the Seeker of Truth.</p>
                                <p class="text-gray-700 mb-3">You are here to discover deeper truths about yourself and the world around you. Your journey involves questioning, analyzing, and uncovering hidden knowledge.</p>
                                <p class="text-gray-700">Your greatest fulfillment comes when you pursue intellectual and spiritual growth, and when you share your insights with others who are ready to learn.</p>
                            </div>
                        </div>
                        
                        {/* <!-- Karmic Energy Card --> */}
                        <div class="matrix-card bg-gradient-to-br from-pink-100/80 to-purple-100/80 rounded-2xl p-6 card-glow relative overflow-hidden">
                            <div class="absolute top-3 right-3 text-pink-300 text-4xl opacity-20">2</div>
                            <h3 class="text-xl font-bold text-indigo-900 mb-2 flex items-center">
                                <span class="mr-2">🔄</span>
                                Karmic Energy
                            </h3>
                            <p class="text-gray-700 mb-4 line-clamp-2">The lessons your soul is working to master based on past experiences and future growth.</p>
                            <button class="toggle-card text-indigo-600 font-medium flex items-center hover:text-indigo-800 transition">
                                <span class="show-text">Read More</span>
                                <span class="hide-text hidden">Show Less</span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1 show-icon" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1 hide-icon hidden" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd"></path>
                                </svg>
                            </button>
                            <div class="card-content hidden mt-4 pt-4 border-t border-pink-100">
                                <p class="text-gray-700 mb-3">Your Karmic Energy number is <span class="karmic-number font-bold text-pink-700">4</span>, the Builder of Foundations.</p>
                                <p class="text-gray-700 mb-3">You're learning to build stable foundations in your life while maintaining flexibility. Your karmic lesson involves finding balance between structure and freedom.</p>
                                <p class="text-gray-700">When you create systems that serve your growth rather than restrict it, you fulfill your karmic purpose and create lasting positive change.</p>
                            </div>
                        </div>
                        
                        {/* <!-- Personal Strengths Card --> */}
                        <div class="matrix-card bg-gradient-to-br from-blue-100/80 to-teal-100/80 rounded-2xl p-6 card-glow relative overflow-hidden">
                            <div class="absolute top-3 right-3 text-blue-300 text-4xl opacity-20">3</div>
                            <h3 class="text-xl font-bold text-indigo-900 mb-2 flex items-center">
                                <span class="mr-2">💪</span>
                                Personal Strengths
                            </h3>
                            <p class="text-gray-700 mb-4 line-clamp-2">Your natural talents and abilities that help you navigate life's challenges with confidence.</p>
                            <button class="toggle-card text-indigo-600 font-medium flex items-center hover:text-indigo-800 transition">
                                <span class="show-text">Read More</span>
                                <span class="hide-text hidden">Show Less</span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1 show-icon" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1 hide-icon hidden" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd"></path>
                                </svg>
                            </button>
                            <div class="card-content hidden mt-4 pt-4 border-t border-blue-100">
                                <p class="text-gray-700 mb-3">Your Strengths number is <span class="strengths-number font-bold text-blue-700">9</span>, the Compassionate Visionary.</p>
                                <p class="text-gray-700 mb-3">Your natural strengths include:</p>
                                <ul class="list-disc pl-5 space-y-1 text-gray-700 mb-3">
                                    <li>Deep empathy and understanding of others</li>
                                    <li>Ability to see the bigger picture</li>
                                    <li>Creative problem-solving</li>
                                    <li>Natural leadership through inspiration</li>
                                </ul>
                                <p class="text-gray-700">When you embrace these strengths fully, you become a powerful force for positive change in your community.</p>
                            </div>
                        </div>
                        
                        {/* <!-- Challenges Card --> */}
                        <div class="matrix-card bg-gradient-to-br from-amber-100/80 to-orange-100/80 rounded-2xl p-6 card-glow relative overflow-hidden">
                            <div class="absolute top-3 right-3 text-amber-300 text-4xl opacity-20">4</div>
                            <h3 class="text-xl font-bold text-indigo-900 mb-2 flex items-center">
                                <span class="mr-2">🧗</span>
                                Challenges to Overcome
                            </h3>
                            <p class="text-gray-700 mb-4 line-clamp-2">The obstacles that help you grow and develop resilience on your journey.</p>
                            <button class="toggle-card text-indigo-600 font-medium flex items-center hover:text-indigo-800 transition">
                                <span class="show-text">Read More</span>
                                <span class="hide-text hidden">Show Less</span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1 show-icon" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1 hide-icon hidden" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd"></path>
                                </svg>
                            </button>
                            <div class="card-content hidden mt-4 pt-4 border-t border-amber-100">
                                <p class="text-gray-700 mb-3">Your Challenge number is <span class="challenge-number font-bold text-amber-700">5</span>, the Seeker of Freedom.</p>
                                <p class="text-gray-700 mb-3">Your primary challenges include:</p>
                                <ul class="list-disc pl-5 space-y-1 text-gray-700 mb-3">
                                    <li>Finding focus when many options are available</li>
                                    <li>Balancing freedom with commitment</li>
                                    <li>Managing restlessness and desire for change</li>
                                    <li>Following through on long-term projects</li>
                                </ul>
                                <p class="text-gray-700">By facing these challenges, you develop the discipline to channel your adaptability into meaningful accomplishments.</p>
                            </div>
                        </div>
                        
                        {/* <!-- Spiritual Gift Card --> */}
                        <div class="matrix-card bg-gradient-to-br from-violet-100/80 to-fuchsia-100/80 rounded-2xl p-6 card-glow relative overflow-hidden">
                            <div class="absolute top-3 right-3 text-violet-300 text-4xl opacity-20">5</div>
                            <h3 class="text-xl font-bold text-indigo-900 mb-2 flex items-center">
                                <span class="mr-2">✨</span>
                                Spiritual Gift
                            </h3>
                            <p class="text-gray-700 mb-4 line-clamp-2">Your unique connection to higher wisdom and the special insight you bring to others.</p>
                            <button class="toggle-card text-indigo-600 font-medium flex items-center hover:text-indigo-800 transition">
                                <span class="show-text">Read More</span>
                                <span class="hide-text hidden">Show Less</span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1 show-icon" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1 hide-icon hidden" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd"></path>
                                </svg>
                            </button>
                            <div class="card-content hidden mt-4 pt-4 border-t border-violet-100">
                                <p class="text-gray-700 mb-3">Your Spiritual Gift number is <span class="spiritual-number font-bold text-violet-700">3</span>, the Creative Communicator.</p>
                                <p class="text-gray-700 mb-3">Your spiritual gift is the ability to express complex ideas in ways that inspire and uplift others. You have a natural connection to creative energy and can channel it into various forms of expression.</p>
                                <p class="text-gray-700">When you share your unique perspective through writing, speaking, art, or other creative outlets, you help others see the world in new and transformative ways.</p>
                            </div>
                        </div>
                        
                        {/* <!-- Life Direction Card --> */}
                        <div class="matrix-card bg-gradient-to-br from-teal-100/80 to-cyan-100/80 rounded-2xl p-6 card-glow relative overflow-hidden">
                            <div class="absolute top-3 right-3 text-teal-300 text-4xl opacity-20">6</div>
                            <h3 class="text-xl font-bold text-indigo-900 mb-2 flex items-center">
                                <span class="mr-2">🧭</span>
                                Life Direction
                            </h3>
                            <p class="text-gray-700 mb-4 line-clamp-2">The path that will bring you the greatest fulfillment and alignment with your true self.</p>
                            <button class="toggle-card text-indigo-600 font-medium flex items-center hover:text-indigo-800 transition">
                                <span class="show-text">Read More</span>
                                <span class="hide-text hidden">Show Less</span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1 show-icon" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1 hide-icon hidden" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd"></path>
                                </svg>
                            </button>
                            <div class="card-content hidden mt-4 pt-4 border-t border-teal-100">
                                <p class="text-gray-700 mb-3">Your Life Direction number is <span class="direction-number font-bold text-teal-700">8</span>, the Empowered Achiever.</p>
                                <p class="text-gray-700 mb-3">Your life path is leading you toward mastery of both material and spiritual resources. You're meant to develop your leadership abilities and create structures that empower others.</p>
                                <p class="text-gray-700">Your greatest fulfillment will come from building something meaningful that combines practical success with higher purpose. Look for opportunities where you can organize resources to create positive impact.</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* <!-- Call to Action --> */}
                    <div class="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-center text-white shadow-lg">
                        <h3 class="text-2xl font-bold mb-4">Curious what this means for your future?</h3>
                        <p class="mb-6 text-lg">Let Lumina guide you step by step through your Destiny Matrix insights.</p>
                        <button id="lumina-btn" class="bg-white text-indigo-700 font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
                            Talk to Lumina
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
        {/* <!-- Lumina Chat Section --> */}
        <div id="lumina-chat-section" class="hidden fade-in">
            <div class="bg-white bg-opacity-70 rounded-3xl p-8 shadow-lg glow mb-8">
                <div class="flex justify-between items-center mb-8">
                    <div class="flex items-center">
                        <div class="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                            </svg>
                        </div>
                        <h2 class="text-2xl font-bold text-indigo-800">Lumina Guide</h2>
                    </div>
                    <button id="back-from-lumina" class="text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
                        </svg>
                        Back to Matrix
                    </button>
                </div>
                
                <div class="bg-gray-50 rounded-2xl p-4 mb-6">
                    <div class="flex items-start mb-4">
                        <div class="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                            <span class="text-white text-sm">L</span>
                        </div>
                        <div class="bg-white rounded-2xl p-4 shadow-sm">
                            <p class="text-gray-700">Hello <span id="lumina-name-display"></span>! I'm Lumina, your personal guide to understanding your Destiny Matrix. I see you have a Soul Path number of 7, which means you're a natural seeker of truth and wisdom. What aspect of your matrix would you like to explore first?</p>
                        </div>
                    </div>
                    
                    <div class="flex items-start mb-4 justify-end">
                        <div class="bg-indigo-100 rounded-2xl p-4 max-w-md">
                            <p class="text-gray-700">How do my Soul Path and Life Direction work together?</p>
                        </div>
                        <div class="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center ml-3 flex-shrink-0">
                            <span class="text-gray-600 text-sm">You</span>
                        </div>
                    </div>
                    
                    <div class="flex items-start">
                        <div class="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                            <span class="text-white text-sm">L</span>
                        </div>
                        <div class="bg-white rounded-2xl p-4 shadow-sm">
                            <p class="text-gray-700">Great question! Your Soul Path (7) and Life Direction (8) create a powerful combination. As a Soul Path 7, you're naturally drawn to seeking deeper truths and understanding. Your Life Direction 8 channels this wisdom into practical leadership and achievement.</p>
                            <p class="text-gray-700 mt-2">This means you're meant to not just discover knowledge, but to organize and apply it in ways that create tangible results. Think of yourself as a "wisdom builder" – someone who can take deep insights and construct something meaningful that benefits others.</p>
                            <p class="text-gray-700 mt-2">Look for opportunities where you can research, analyze, and then implement systems or structures based on what you've learned. Fields like research management, educational leadership, or creating platforms that share specialized knowledge could be especially fulfilling for you.</p>
                        </div>
                    </div>
                </div>
                
                <div class="flex">
                    <input type="text" id="lumina-input" class="flex-grow px-4 py-3 rounded-l-xl border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 transition" placeholder="Ask Lumina about your Destiny Matrix..."/>
                    <button id="send-lumina" class="bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold py-3 px-6 rounded-r-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>

    </div>
    </>
    )
}
export default Matrixdes;
