import './NavBar.css'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../FooterLayout/Footer'
import { useState, cloneElement } from 'react'
function NavBar({children}){
    const [menuData, setMenuData] = useState(null);

    useEffect(()=>{
        const userData = localStorage.getItem('user_gmail')
        if(userData){
            const img = JSON.parse(userData).photo
            setMenuData(img)
        }
    },[])

    function handleNav(){
        const sidebar = document.getElementsByClassName('sidebar');
        sidebar[0].classList.toggle('translateX_0')
        
    }


    return(
        <React.Fragment>
            <div className='NavBar'>
                {/* <div onClick={handleNav} className='tool_open'>
                    <img src='/FortuneTeller/nav/menu_icon.png'/>
                </div>
                <div className='web_name'>
                    <div className='web_name_img'>
                        <img src='/FortuneTeller/nav/nav_icon.png'/>
                    </div>
                    <div className='web_name_container'>
                        <Link to='/'><p>Fortune</p></Link>   
                        <p className='web_name_last'>Zan</p>   
                    </div>

                </div>
                <div className='page'>
                    <Link to='/Tarot'><p>Tarot</p></Link>
                    <Link to='/Numerology'><p>Thần số học</p></Link>
                    <Link to='/MatrixDestiny'><p>Ma trận định mệnh</p></Link>  
                    <Link to='/Horoscope'><p>Bản đồ sao</p></Link>     
                    <Link to='/DISC'><p>DISC</p></Link>     
                </div>
                <div className='blog'>
                    <div className='blog_img'>
                        <img src='/FortuneTeller/nav/blog_icon.png'/>    
                    </div>     
                    <Link to='/Personal_Report'><p>Báo cáo cá nhân</p></Link>
                </div>

                <div className='account'>
                <Link to='/Login'><img src={menuData ? menuData : "/FortuneTeller/account.png"}/></Link>
                </div> */}
    
        <nav class="absolute top-6 right-6 z-30">
            <ul class="flex space-x-6">
                <li><a href="#" class="golden-text hover:golden-glow text-sm md:text-base">About</a></li>
                <li onClick={handleNav}><a href="#" class="golden-text hover:golden-glow text-sm md:text-base">Services</a></li>
                <li><Link to='/Login' class="golden-text hover:golden-glow text-sm md:text-base">Login</Link></li>
            </ul>
        </nav>

                
{/*            
                <input type="checkbox" class="menu-control" id="menu-control" />
                      <aside class="sidebar">
                            
                            <nav class="sidebar__menu">
                 
                            <Link to='/Tarot'><p className='ele tp1'>Tarot</p></Link>
                            <Link to='/Numerology'><p className='ele tp2'>Thần số học</p></Link>
                            <Link to='/MatrixDestiny'><p className='ele tp3'>Ma trận định mệnh</p></Link>
                            <Link to='/Horoscope'><p className='ele tp4'>Bản đồ sao</p></Link>
                            <Link to='/DISC'><p className='ele tp5'>DISC</p></Link>
                            <Link to='/Personal_Report'><p className='ele tp6'>Báo cáo cá nhân</p></Link>
                            </nav>
                            
                            <label for="menu-control" class="sidebar__close"></label>
                            
                            <ul class="sidebar__social">
                            <li>
                                <a href="">
                                <svg viewBox="0 0 14 14" fill="none">
                        <path d="M13.16 3.88c-.031-.702-.145-1.184-.307-1.601a3.219 3.219 0 00-.763-1.17 3.247 3.247 0 00-1.168-.761c-.42-.162-.9-.276-1.6-.307C8.614.008 8.39 0 6.598 0 4.808 0 4.583.008 3.88.039c-.7.03-1.183.144-1.6.306a3.22 3.22 0 00-1.17.763c-.336.33-.596.73-.761 1.168-.162.42-.276.9-.307 1.601C.008 4.583 0 4.807 0 6.599c0 1.792.008 2.016.039 2.72.03.7.144 1.183.306 1.6.168.444.428.841.763 1.17.33.336.73.596 1.168.761.42.163.9.276 1.601.307.704.031.928.039 2.72.039 1.791 0 2.016-.008 2.72-.039.7-.03 1.182-.144 1.6-.307a3.375 3.375 0 001.93-1.93c.163-.42.277-.9.308-1.601.03-.704.038-.928.038-2.72 0-1.791-.002-2.016-.033-2.72zM11.97 9.267c-.028.645-.136.993-.226 1.225a2.19 2.19 0 01-1.253 1.253c-.232.09-.583.198-1.225.226-.696.031-.905.039-2.665.039s-1.972-.008-2.666-.039c-.644-.028-.992-.136-1.224-.226a2.032 2.032 0 01-.758-.493 2.052 2.052 0 01-.492-.758c-.09-.232-.199-.582-.227-1.224-.031-.696-.039-.905-.039-2.666 0-1.76.008-1.972.039-2.665.028-.645.136-.993.227-1.225.105-.286.273-.546.495-.757.214-.22.471-.387.757-.493.232-.09.583-.198 1.225-.227.696-.03.905-.038 2.665-.038 1.764 0 1.972.007 2.666.038.644.029.992.137 1.224.227.286.106.547.273.758.493.22.214.387.471.493.757.09.232.198.583.226 1.225.031.696.04.905.04 2.665 0 1.761-.009 1.967-.04 2.663z" fill="#898989"/>
                        <path d="M6.6 3.21a3.39 3.39 0 100 6.78 3.39 3.39 0 000-6.78zm0 5.588a2.2 2.2 0 110-4.398 2.2 2.2 0 010 4.398zM10.915 3.075a.791.791 0 11-1.583 0 .791.791 0 011.582 0z" fill="#898989"/>
                        </svg>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                <svg viewBox="0 0 14 14" fill="none">
                        <path d="M11.6472 0H1.54609C.693574 0 0 .693574 0 1.54609V11.6472c0 .8525.693574 1.5461 1.54609 1.5461H11.6472c.8525 0 1.5461-.6936 1.5461-1.5461V1.54609C13.1933.693574 12.4997 0 11.6472 0zm.5153 11.6472c0 .2842-.2311.5153-.5153.5153H8.70962V7.96235h1.59218l.2631-1.59763H8.70962V5.25669c0-.43741.33563-.77304.77304-.77304h1.05654V2.88603H9.48266c-1.31219 0-2.3701 1.06293-2.3701 2.37515v1.10354H5.56591v1.59763h1.54665v4.20015H1.54609c-.28417 0-.51537-.2311-.51537-.5153V1.54609c0-.28417.2312-.51537.51537-.51537H11.6472c.2842 0 .5153.2312.5153.51537V11.6472z" fill="#888"/>
                        </svg>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                <svg viewBox="0 0 14 14" fill="none">
                        <path d="M6.59664 0C2.97108 0 0 2.99685 0 6.6224c0 3.6045 2.94401 6.5709 6.59664 6.5709 3.64806 0 6.59666-2.962 6.59666-6.5709C13.1933 2.99685 10.2222 0 6.59664 0zM7.7562 12.3043c-.37102.0773-.76529.1159-1.15956.1159-.39428 0-.78855-.0386-1.15957-.1159v-1.8089c0-.433.11596-.58756.27057-.79632.07871-.08999.12622-.17072.47922-.70339l-.59518-.09281C4.06099 8.67872 3.45806 7.88242 3.2184 7.26399c-.30922-.8271-.14686-1.86305.40977-2.52004.08505-.10056.15461-.27067.09281-.44843-.11606-.35562-.10056-.9199-.02326-1.13641.40988.05858.83133.3522 1.18282.56438.16196.09452.24691.06956.32462.07731.28244-.05879.72301-.20102 1.39923-.20102.41742 0 .85809.06181 1.29102.18551.0774-.00181.20182.06402.41742-.0618.3674-.22386.77456-.50741 1.18272-.56438.0773.21651.0928.78079-.02315 1.13641-.06191.17776.00765.34787.0928.44843.5565.65709.7189 1.69294.40968 2.52004-.23967.61843-.8426 1.41473-2.37329 1.63889l-.59518.09281c.36488.55059.40333.61662.47933.70339.1545.20876.27046.36332.27046.79632v1.8089zm.77304-.2242v-1.5847c0-.4407-.0928-.73442-.21651-.95093C9.4878 9.2276 10.3227 8.53176 10.6938 7.53455c.3942-1.05125.2165-2.30362-.4407-3.16947.116-.51788.116-1.34508-.1623-1.7316-.12368-.17001-.29379-.26281-.5102-.26281h-.00775c-.59941.03241-1.07119.33428-1.57699.64158-.46382-.12371-.9354-.18551-1.40697-.18551-.47923 0-.95856.06956-1.38363.18551-.53248-.32109-.99972-.60998-1.61574-.64158-.19326 0-.36337.0928-.48708.26281-.27822.38652-.27822 1.21372-.16226 1.7316-.65719.86585-.83495 2.12587-.44067 3.16947.37102.99721 1.20596 1.69305 2.38103 2.00992-.09593.16779-.17182.3843-.20172.67733-.23734.0818-.44319.1085-.63464.0522-.20191-.0597-.35924-.1944-.49593-.42434-.307-.51577-.82992-.93681-1.4253-.88206l.06794.77003c.2757-.02527.55009.26647.69262.50687.23514.396.5519.6557.94175.7709.28938.0852.55391.0832.83877.0224v1.0423C2.41445 11.2916.773043 9.14255.773043 6.6224c0-3.20038 2.623217-5.849357 5.823597-5.849357 3.20037 0 5.82356 2.648977 5.82356 5.849357 0 2.52015-1.6414 4.6692-3.89096 5.4577z" fill="#888"/>
                        </svg>
                                </a>
                            </li>
                            </ul>
                        </aside> */}

            <div class="sidebar w-64 h-full flex flex-col">
                <button onClick={handleNav} className='sidebar_close'>X</button> 
                <div class="p-6 flex items-center justify-center">
                    <svg class="w-10 h-10 mr-3" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="45" stroke="#d4af37" stroke-width="2" fill="none" opacity="0.3"></circle>
                        <circle cx="50" cy="50" r="35" stroke="#d4af37" stroke-width="1" fill="none"></circle>
                        <path d="M50 5L60 30L85 35L65 55L70 80L50 70L30 80L35 55L15 35L40 30L50 5Z" stroke="#d4af37" stroke-width="2" fill="none"></path>
                        <circle cx="50" cy="50" r="15" stroke="#d4af37" stroke-width="1.5" fill="none"></circle>
                        <circle cx="50" cy="50" r="5" fill="#d4af37" opacity="0.7"></circle>
                    </svg>
                    <h1 class="title text-xl text-white font-bold tracking-wider">MYSTIC VISIONS</h1>
                </div>
                

                    <div class="flex-1 mt-8">

                    <Link to='/'><div class="nav-item active px-6 py-4 flex items-center text-yellow-100">
                        <svg class="w-5 h-5 mr-3 glow-icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                        </svg>
                        <span>Home</span>
                    </div></Link>
                    
                    <Link to='/Numerology'><div class="nav-item px-6 py-4 flex items-center text-gray-400 hover:text-yellow-100">
                        <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                        </svg>
                        <span>Numerology</span>
                    </div></Link>
                    
                    <Link to='/Horoscope'><div class="nav-item px-6 py-4 flex items-center text-gray-400 hover:text-yellow-100">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <g id="sun">
                            <path d="M12.5,5a7.55,7.55,0,1,0,7.55,7.55A7.56,7.56,0,0,0,12.5,5Zm0,13.1a5.55,5.55,0,1,1,5.55-5.55A5.56,5.56,0,0,1,12.5,18.05Z"/>
                            <path d="M12.5,10.52a2,2,0,1,0,2,2A2,2,0,0,0,12.5,10.52Z"/>
                            <path d="M21,1H4A3,3,0,0,0,1,4V21a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V4A3,3,0,0,0,21,1Zm1,20a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V4A1,1,0,0,1,4,3H21a1,1,0,0,1,1,1Z"/>
                            </g>
                        </svg>
                        <span>Horoscope</span>
                    </div></Link>
                    
                    <Link to='/MatrixDestiny'><div class="nav-item px-6 py-4 flex items-center text-gray-400 hover:text-yellow-100">
                        <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clip-rule="evenodd"></path>
                        </svg>
                        <span>Matrix Destiny</span>
                    </div></Link>
                    

                    <Link to='/DISC'><div class="nav-item px-6 py-4 flex items-center text-gray-400 hover:text-yellow-100">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10,17H31a1,1,0,1,0,0-2H10a1,1,0,0,0,0,2Z"/>
                            <path d="M10,10H31a1,1,0,1,0,0-2H10a1,1,0,0,0,0,2Z"/>
                            <path d="M32,23a1,1,0,0,0-1-1H10a1,1,0,1,0,0,2H31A1,1,0,0,0,32,23Z"/>
                            <path d="M1,9v2a1,1,0,0,0,2,0V7.33a1,1,0,0,0-.53-.88,1,1,0,0,0-1,0l-1,.67A1,1,0,0,0,1,9Z"/>
                            <path d="M1,16a.93.93,0,0,0,.52-.15A11.24,11.24,0,0,1,.29,17.29a1,1,0,0,0-.21,1.09A1,1,0,0,0,1,19H3a1,1,0,0,0,.16-2A3.92,3.92,0,0,0,4,15a1.84,1.84,0,0,0-2-1.75A1.84,1.84,0,0,0,0,15,1,1,0,0,0,1,16Z"/>
                            <path d="M0,24a1.84,1.84,0,0,0,2,1.75A1.84,1.84,0,0,0,4,24a2,2,0,0,0-.25-1A2,2,0,0,0,4,22a1.84,1.84,0,0,0-2-1.75A1.84,1.84,0,0,0,0,22a1,1,0,0,0,1,1A1,1,0,0,0,0,24Z"/>
                        </svg>
                        <span>DISC</span>
                    </div></Link>


                    <Link to='/Personal_Report'><div class="nav-item px-6 py-4 flex items-center text-gray-400 hover:text-yellow-100">
                        <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path>
                        </svg>
                        <span>Support</span>
                    </div></Link>
                </div>
                

                <div class="p-6 border-t border-gray-800">
                    <div class="flex items-center mb-4">
                        <div class="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-500 flex items-center justify-center text-gray-900 font-bold">
                            JS
                        </div>
                        <div class="ml-3">
                            <p class="text-white text-sm font-semibold">Jane Seeker</p>
                            <p class="text-gray-400 text-xs">Premium Member</p>
                        </div>
                    </div>
                    <button class="signout-btn flex items-center text-gray-400 hover:text-yellow-200 text-sm">
                        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                        </svg>
                        Sign Out
                    </button>
                </div>
            </div>
      
            </div>
            {cloneElement(children, { setMenuData })}
          <Footer/>
        </React.Fragment>
    )
}
export default NavBar