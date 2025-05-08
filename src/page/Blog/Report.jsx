import "./BlogStyle.css"
function Report(){
    return(
        <div class="dashboard-container">
        {/* <!-- Header Section --> */}
        <header class="mb-10">
            <div class="flex flex-col md:flex-row items-center justify-center md:justify-between">
                <div class="flex flex-col md:flex-row items-center mb-6 md:mb-0">
                    <div class="avatar-container mb-4 md:mb-0 md:mr-6">
                        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Ccircle cx='60' cy='60' r='60' fill='%23f0f0f0'/%3E%3Ccircle cx='60' cy='45' r='18' fill='%23d4d4d4'/%3E%3Cpath d='M30 100 Q60 85 90 100 L90 120 L30 120 Z' fill='%23d4d4d4'/%3E%3C/svg%3E" alt="User Avatar" class="avatar" id="userAvatar"/>
                    </div>
                    <div class="text-center md:text-left">
                        <h1 class="text-3xl md:text-4xl font-bold mb-1">Stella Moonlight</h1>
                        <p class="text-lg text-gray-600">Personal Report — ZanFortune</p>
                    </div>
                </div>
                <div class="flex space-x-3">
                    <button class="btn btn-secondary" id="uploadAvatarBtn">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path>
                        </svg>
                        Upload Avatar
                    </button>
                    <button class="btn btn-primary" id="downloadBtn">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                        </svg>
                        Download as Image
                    </button>
                </div>
            </div>
        </header>

        {/* <!-- Toggle Section --> */}
        <section class="mb-10">
            <div class="toggle-container personality" id="reportToggle">
                <div class="toggle-slider"></div>
                <div class="toggle-option" data-toggle="personality">Personality</div>
                <div class="toggle-option" data-toggle="development">Development</div>
            </div>
            
            <div class="mt-8 card p-6" id="reportContent">
                <div id="personalityContent" class="fade-enter-active">
                    <h2 class="text-2xl font-bold mb-4 text-center md:text-left">Your Personality Profile</h2>
                    <p class="mb-4">Your numerological profile reveals a creative and intuitive individual with strong analytical abilities. You possess a natural talent for understanding complex patterns and finding innovative solutions to problems.</p>
                    <p>The alignment of your core numbers suggests you're a natural leader with a compassionate approach. You value harmony in your surroundings and tend to be the mediator in conflicts. Your empathetic nature makes you an excellent listener and trusted confidant.</p>
                </div>
                <div id="developmentContent" class="hidden">
                    <h2 class="text-2xl font-bold mb-4 text-center md:text-left">Your Development Path</h2>
                    <p class="mb-4">Your current life path indicates a period of significant personal growth and transformation. The coming months will present opportunities for you to expand your horizons and develop new skills that align with your true purpose.</p>
                    <p>Focus on nurturing your creative talents and trust your intuition when making important decisions. Your destiny matrix shows potential for success in collaborative projects that allow you to express your unique perspective while working with others.</p>
                </div>
            </div>
        </section>

        {/* <!-- Number Cards Section --> */}
        <section class="mb-10">
            <h2 class="text-2xl font-bold mb-6 text-center md:text-left">Your Core Numbers</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="card p-6 glow">
                    <div class="flex flex-col items-center">
                        <div class="number-circle core-number mb-4">7</div>
                        <h3 class="text-xl font-bold mb-2">Core Number</h3>
                        <p class="text-center text-gray-600">Represents your inner essence and fundamental character traits</p>
                    </div>
                </div>
                <div class="card p-6 glow">
                    <div class="flex flex-col items-center">
                        <div class="number-circle destiny-number mb-4">4</div>
                        <h3 class="text-xl font-bold mb-2">Destiny Number</h3>
                        <p class="text-center text-gray-600">Reveals your life purpose and the path you're meant to follow</p>
                    </div>
                </div>
                <div class="card p-6 glow">
                    <div class="flex flex-col items-center">
                        <div class="number-circle inner-number mb-4">9</div>
                        <h3 class="text-xl font-bold mb-2">Inner Number</h3>
                        <p class="text-center text-gray-600">Reflects your desires, dreams, and what truly motivates you</p>
                    </div>
                </div>
            </div>
        </section>

        {/* <!-- Horoscope Section --> */}
        <section class="mb-10">
            <h2 class="text-2xl font-bold mb-6 text-center md:text-left">Astrological Influences</h2>
            <div class="card p-6">
                <div class="star-map mb-6" id="starMap">
                    {/* <!-- Stars will be generated by JavaScript --> */}
                <div class="star" style={{width: "2.46542px" ,height: "2.46542px" ,left: "89.5241%" ,top: "78.2409%" ,animationDelay: "0.259786s"}}></div><div class="star" style={{width: "1.12486px" ,height: "1.12486px" ,left: "73.4224%" ,top: "72.9995%" ,animationDelay: "0.517972s"}}></div><div class="star" style={{width: "1.80859px" ,height: "1.80859px" ,left: "60.6876%" ,top: "18.8628%" ,animationDelay: "3.19918s"}}></div><div class="star" style={{width: "1.79544px" ,height: "1.79544px" ,left: "11.167%" ,top: "73.5456%" ,animationDelay: "1.47528s"}}></div><div class="star" style={{width: "2.0671px" ,height: "2.0671px" ,left: "97.3985%" ,top: "31.215%" ,animationDelay: "2.45946s"}}></div><div class="star" style={{width: "2.55898px" ,height: "2.55898px" ,left: "46.7839%" ,top: "93.0462%" ,animationDelay: "0.588179s"}}></div><div class="star" style={{width: "2.33847px" ,height: "2.33847px" ,left: "27.1057%" ,top: "42.2%" ,animationDelay: "2.04952s"}}></div><div class="star" style={{width: "1.05292px" ,height: "1.05292px" ,left: "37.6952%" ,top: "95.1715%" ,animationDelay: "0.536363s"}}></div><div class="star" style={{width: "2.22268px" ,height: "2.22268px" ,left: "72.8823%" ,top: "64.3075%" ,animationDelay: "0.565945s"}}></div><div class="star" style={{width: "2.54189px" ,height: "2.54189px" ,left: "22.441%" ,top: "46.0035%" ,animationDelay: "2.52038s"}}></div><div class="star" style={{width: "1.78399px" ,height: "1.78399px" ,left: "82.2974%" ,top: "76.136%" ,animationDelay: "3.9382s"}}></div><div class="star" style={{width: "2.58667px" ,height: "2.58667px" ,left: "74.1856%" ,top: "50.123%" ,animationDelay: "2.83411s"}}></div><div class="star" style={{width: "2.66387px" ,height: "2.66387px" ,left: "22.7865%" ,top: "64.5007%" ,animationDelay: "0.121827s"}}></div><div class="star" style={{width: "1.60152px" ,height: "1.60152px" ,left: "61.4159%" ,top: "1.83748%" ,animationDelay: "2.73872s"}}></div><div class="star" style={{width: "2.44943px" ,height: "2.44943px" ,left: "67.9782%" ,top: "17.7711%" ,animationDelay: "2.61511s"}}></div><div class="star" style={{width: "2.54025px" ,height: "2.54025px" ,left: "89.5982%" ,top: "75.3047%" ,animationDelay: "3.66039s"}}></div><div class="star" style={{width: "1.93328px" ,height: "1.93328px" ,left: "91.6218%" ,top: "34.528%" ,animationDelay: "0.937337s"}}></div><div class="star" style={{width: "2.92308px" ,height: "2.92308px" ,left: "2.87089%" ,top: "11.4397%" ,animationDelay: "3.84725s"}}></div><div class="star" style={{width: "1.76923px" ,height: "1.76923px" ,left: "69.2516%" ,top: "7.02907%" ,animationDelay: "2.02548s"}}></div><div class="star" style={{width: "2.85049px" ,height: "2.85049px" ,left: "93.7602%" ,top: "88.3154%" ,animationDelay: "2.79996s"}}></div><div class="star" style={{width: "2.3034px" ,height: "2.3034px" ,left: "66.3406%" ,top: "22.3785%" ,animationDelay: "0.306889s"}}></div><div class="star" style={{width: "2.07472px" ,height: "2.07472px" ,left: "3.50401%" ,top: "95.7082%" ,animationDelay: "3.26536s"}}></div><div class="star" style={{width: "1.71534px" ,height: "1.71534px" ,left: "71.5433%" ,top: "7.49897%" ,animationDelay: "0.679801s"}}></div><div class="star" style={{width: "1.88663px" ,height: "1.88663px" ,left: "93.3228%" ,top: "41.1317%" ,animationDelay: "1.79306s"}}></div><div class="star" style={{width: "1.03466px" ,height: "1.03466px" ,left: "85.8471%" ,top: "84.7249%" ,animationDelay: "1.56907s"}}></div><div class="star" style={{width: "1.09379px" ,height: "1.09379px" ,left: "56.0853%" ,top: "72.145%" ,animationDelay: "2.44833s"}}></div><div class="star" style={{width: "2.1364px" ,height: "2.1364px" ,left: "90.1567%" ,top: "1.60326%" ,animationDelay: "2.49461s"}}></div><div class="star" style={{width: "1.40406px" ,height: "1.40406px" ,left: "23.792%" ,top: "45.6687%" ,animationDelay: "0.796446s"}}></div><div class="star" style={{width: "2.19491px" ,height: "2.19491px" ,left: "50.7355%" ,top: "25.3688%" ,animationDelay: "1.32134s"}}></div><div class="star" style={{width: "1.167px" ,height: "1.167px" ,left: "59.7035%" ,top: "24.6647%" ,animationDelay: "0.737745s"}}></div><div class="star" style={{width: "2.56478px" ,height: "2.56478px" ,left: "1.33943%" ,top: "17.4867%" ,animationDelay: "3.89875s"}}></div><div class="star" style={{width: "2.88985px" ,height: "2.88985px" ,left: "29.7673%" ,top: "8.64371%" ,animationDelay: "3.83278s"}}></div><div class="star" style={{width: "2.36131px" ,height: "2.36131px" ,left: "32.5319%" ,top: "70.1349%" ,animationDelay: "0.0671844s"}}></div><div class="star" style={{width: "1.0132px" ,height: "1.0132px" ,left: "53.391%" ,top: "44.8174%" ,animationDelay: "0.440709s"}}></div><div class="star" style={{width: "1.38096px" ,height: "1.38096px" ,left: "47.7176%" ,top: "55.0257%" ,animationDelay: "0.970643s"}}></div><div class="star" style={{width: "2.66898px" ,height: "2.66898px" ,left: "11.6519%" ,top: "6.70403%" ,animationDelay: "2.52066s"}}></div><div class="star" style={{width: "2.38702px" ,height: "2.38702px" ,left: "82.9591%" ,top: "15.0387%" ,animationDelay: "0.80734s"}}></div><div class="star" style={{width: "2.25852px" ,height: "2.25852px" ,left: "99.2203%" ,top: "21.8756%" ,animationDelay: "2.924s"}}></div><div class="star" style={{width: "1.7513px" ,height: "1.7513px" ,left: "38.2642%" ,top: "12.5045%" ,animationDelay: "2.59632s"}}></div><div class="star" style={{width: "1.73802px" ,height: "1.73802px" ,left: "3.60509%" ,top: "21.5557%" ,animationDelay: "3.34745s"}}></div><div class="star" style={{width: "2.81975px" ,height: "2.81975px" ,left: "44.2351%" ,top: "47.4479%" ,animationDelay: "3.69155s"}}></div><div class="star" style={{width: "1.842px" ,height: "1.842px" ,left: "35.2473%" ,top: "18.202%" ,animationDelay: "2.20124s"}}></div><div class="star" style={{width: "1.73139px" ,height: "1.73139px" ,left: "30.7167%" ,top: "18.7446%" ,animationDelay: "2.33307s"}}></div><div class="star" style={{width: "2.986px" ,height: "2.986px" ,left: "18.4524%" ,top: "66.9031%" ,animationDelay: "2.99348s"}}></div><div class="star" style={{width: "2.74421px" ,height: "2.74421px" ,left: "21.393%" ,top: "41.9837%" ,animationDelay: "1.72554s"}}></div><div class="star" style={{width: "2.55522px" ,height: "2.55522px" ,left: "75.9832%" ,top: "81.5808%" ,animationDelay: "3.0737s"}}></div><div class="star" style={{width: "2.28288px" ,height: "2.28288px" ,left: "19.6478%" ,top: "59.1565%" ,animationDelay: "2.32876s"}}></div><div class="star" style={{width: "2.89005px" ,height: "2.89005px" ,left: "23.7426%" ,top: "43.8207%" ,animationDelay: "2.96086s"}}></div><div class="star" style={{width: "1.30902px" ,height: "1.30902px" ,left: "97.4317%" ,top: "9.03357%" ,animationDelay: "3.19916s"}}></div><div class="star" style={{width: "2.07428px" ,height: "2.07428px" ,left: "35.6631%" ,top: "21.667%" ,animationDelay: "3.2612s"}}></div></div>
                
                <h3 class="text-xl font-bold mb-4">Planetary Positions</h3>
                <div class="space-y-4">
                    <div>
                        <div class="flex justify-between mb-2">
                            <span class="font-medium">Sun</span>
                            <span>78%</span>
                        </div>
                        <div class="bg-gray-200 rounded-full h-6">
                            <div class="planet-bar h-6 rounded-full" style={{width: "78%" ,background: "linear-gradient(90deg, rgb(255, 214, 165), rgb(255, 190, 123))"}}></div>
                        </div>
                    </div>
                    <div>
                        <div class="flex justify-between mb-2">
                            <span class="font-medium">Moon</span>
                            <span>65%</span>
                        </div>
                        <div class="bg-gray-200 rounded-full h-6">
                            <div class="planet-bar h-6 rounded-full" style={{width: "65%" ,background: "linear-gradient(90deg, rgb(166, 227, 233), rgb(113, 201, 206))"}}></div>
                        </div>
                    </div>
                    <div>
                        <div class="flex justify-between mb-2">
                            <span class="font-medium">Mercury</span>
                            <span>42%</span>
                        </div>
                        <div class="bg-gray-200 rounded-full h-6">
                            <div class="planet-bar h-6 rounded-full" style={{width: "42%" ,background: "linear-gradient(90deg, rgb(226, 182, 207), rgb(201, 167, 235))"}}></div>
                        </div>
                    </div>
                    <div>
                        <div class="flex justify-between mb-2">
                            <span class="font-medium">Venus</span>
                            <span>89%</span>
                        </div>
                        <div class="bg-gray-200 rounded-full h-6">
                            <div class="planet-bar h-6 rounded-full" style={{width: "89%" ,background: "linear-gradient(90deg, rgb(255, 214, 224), rgb(255, 172, 199))"}}></div>
                        </div>
                    </div>
                    <div>
                        <div class="flex justify-between mb-2">
                            <span class="font-medium">Mars</span>
                            <span>51%</span>
                        </div>
                        <div class="bg-gray-200 rounded-full h-6">
                            <div class="planet-bar h-6 rounded-full" style={{width: "51%" ,background: "linear-gradient(90deg, rgb(255, 155, 155), rgb(255, 107, 107))"}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* <!-- DISC Section --> */}
        <section class="mb-10">
            <h2 class="text-2xl font-bold mb-6 text-center md:text-left">DISC Personality Dimensions</h2>
            <div class="card p-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <div class="mb-6">
                            <div class="flex justify-between mb-2">
                                <span class="font-medium">Dominance</span>
                                <span>65%</span>
                            </div>
                            <div class="bg-gray-200 rounded-full">
                                <div class="disc-bar" style={{width: "65%" ,background: "linear-gradient(90deg, rgb(255, 182, 185), rgb(255, 136, 150))"}}></div>
                            </div>
                        </div>
                        <div class="mb-6">
                            <div class="flex justify-between mb-2">
                                <span class="font-medium">Influence</span>
                                <span>82%</span>
                            </div>
                            <div class="bg-gray-200 rounded-full">
                                <div class="disc-bar" style={{width: "82%" ,background: "linear-gradient(90deg, rgb(255, 218, 193), rgb(255, 187, 148))"}}></div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="mb-6">
                            <div class="flex justify-between mb-2">
                                <span class="font-medium">Steadiness</span>
                                <span>45%</span>
                            </div>
                            <div class="bg-gray-200 rounded-full">
                                <div class="disc-bar" style={{width: "45%" ,background: "linear-gradient(90deg, rgb(181, 234, 215), rgb(142, 209, 181))"}}></div>
                            </div>
                        </div>
                        <div class="mb-6">
                            <div class="flex justify-between mb-2">
                                <span class="font-medium">Conscientiousness</span>
                                <span>73%</span>
                            </div>
                            <div class="bg-gray-200 rounded-full">
                                <div class="disc-bar" style={{width: "73%" ,background: "linear-gradient(90deg, rgb(199, 206, 234), rgb(167, 181, 235))"}}></div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="mt-6 p-4 bg-gray-50 rounded-lg">
                    <h4 class="font-bold mb-2">Your DISC Profile Summary</h4>
                    <p>Your profile shows a strong emphasis on Influence, indicating you're naturally persuasive and enjoy social interactions. Combined with your high Conscientiousness, you're likely detail-oriented while maintaining a friendly approach. This makes you excellent at collaborative projects that require both creativity and precision.</p>
                </div>
            </div>
        </section>

        {/* <!-- Destiny Matrix Section --> */}
        <section class="mb-10">
            <h2 class="text-2xl font-bold mb-6 text-center md:text-left">Your Destiny Matrix</h2>
            <div class="card p-6">
                <div class="destiny-grid">
                    {/* <!-- Row 1 --> */}
                    <div class="destiny-cell">7</div>
                    <div class="destiny-cell">2</div>
                    <div class="destiny-cell">9</div>
                    <div class="destiny-cell">4</div>
                    <div class="destiny-cell">1</div>
                    <div class="destiny-cell">6</div>
                    {/* <!-- Row 2 --> */}
                    <div class="destiny-cell">3</div>
                    <div class="destiny-cell">8</div>
                    <div class="destiny-cell">5</div>
                    <div class="destiny-cell">7</div>
                    <div class="destiny-cell">2</div>
                    <div class="destiny-cell">9</div>
                    {/* <!-- Row 3 --> */}
                    <div class="destiny-cell">4</div>
                    <div class="destiny-cell">1</div>
                    <div class="destiny-cell">6</div>
                    <div class="destiny-cell">3</div>
                    <div class="destiny-cell">8</div>
                    <div class="destiny-cell">5</div>
                    {/* <!-- Row 4 --> */}
                    <div class="destiny-cell">7</div>
                    <div class="destiny-cell">2</div>
                    <div class="destiny-cell">9</div>
                    <div class="destiny-cell">4</div>
                    <div class="destiny-cell">1</div>
                    <div class="destiny-cell">6</div>
                    {/* <!-- Row 5 --> */}
                    <div class="destiny-cell">3</div>
                    <div class="destiny-cell">8</div>
                    <div class="destiny-cell">5</div>
                    <div class="destiny-cell">7</div>
                    <div class="destiny-cell">2</div>
                    <div class="destiny-cell">9</div>
                </div>
                
                <div class="mt-6 p-4 bg-gray-50 rounded-lg">
                    <h4 class="font-bold mb-2">Matrix Interpretation</h4>
                    <p>Your destiny matrix reveals a strong connection between your life path number (7) and your expression number (9). This indicates a period of spiritual growth and intellectual discovery. The recurring pattern of 4-1-6 suggests stability in your foundation while pursuing higher knowledge.</p>
                </div>
            </div>
        </section>

        {/* <!-- Footer/Legend Section --> */}
        <section class="mb-10">
            <h2 class="text-2xl font-bold mb-6 text-center md:text-left">Celestial Guide</h2>
            <div class="card p-6">
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    <div class="flex items-center">
                        <span class="planet-dot" style={{background: "linear-gradient(90deg, #FFD6A5, #FFBE7B)"}}></span>
                        <span>Sun</span>
                    </div>
                    <div class="flex items-center">
                        <span class="planet-dot" style={{background: "linear-gradient(90deg, #A6E3E9, #71C9CE)"}}></span>
                        <span>Moon</span>
                    </div>
                    <div class="flex items-center">
                        <span class="planet-dot" style={{background: "linear-gradient(90deg, #E2B6CF, #C9A7EB)"}}></span>
                        <span>Mercury</span>
                    </div>
                    <div class="flex items-center">
                        <span class="planet-dot" style={{background: "linear-gradient(90deg, #FFD6E0, #FFACC7)"}}></span>
                        <span>Venus</span>
                    </div>
                    <div class="flex items-center">
                        <span class="planet-dot" style={{background: "linear-gradient(90deg, #FF9B9B, #FF6B6B)"}}></span>
                        <span>Mars</span>
                    </div>
                    <div class="flex items-center">
                        <span class="planet-dot" style={{background: "linear-gradient(90deg, #FFDAC1, #FFBB94)"}}></span>
                        <span>Jupiter</span>
                    </div>
                    <div class="flex items-center">
                        <span class="planet-dot" style={{background: "linear-gradient(90deg, #B5EAD7, #8ED1B5)"}}></span>
                        <span>Saturn</span>
                    </div>
                    <div class="flex items-center">
                        <span class="planet-dot" style={{background: "linear-gradient(90deg, #C7CEEA, #A7B5EB)"}}></span>
                        <span>Uranus</span>
                    </div>
                    <div class="flex items-center">
                        <span class="planet-dot" style={{background: "linear-gradient(90deg, #E2B6CF, #C9A7EB)"}}></span>
                        <span>Neptune</span>
                    </div>
                    <div class="flex items-center">
                        <span class="planet-dot" style={{background: "linear-gradient(90deg, #FFB6B9, #FF8896)"}}></span>
                        <span>Pluto</span>
                    </div>
                </div>
                
                <div class="mt-6 p-4 bg-gray-50 rounded-lg">
                    <h4 class="font-bold mb-2">Planetary Influences</h4>
                    <p>The positions of celestial bodies at your time of birth create a unique energetic blueprint that influences your personality and life path. Your chart shows a strong Venus influence, suggesting natural charm and artistic abilities, while the Mercury-Jupiter aspect indicates an expansive, curious mind.</p>
                </div>
            </div>
        </section>
    </div>
    )
}
export default Report