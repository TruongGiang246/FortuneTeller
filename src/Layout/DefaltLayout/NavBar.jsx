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
            // const img = JSON.parse(userData).photo
            setMenuData(true)
        }
    },[])

    function handleNav(){
        const sidebar = document.getElementsByClassName('nav-drawer');
        sidebar[0].classList.toggle('translateY_0')
        
    }

    console.log("nav",menuData)


    return(
        <React.Fragment>
          
                <header class="fixed top-0 left-0 right-0 z-30 bg-white/80 backdrop-blur-md px-4 py-3 flex justify-between items-center shadow-sm">
                    <div  class="flex items-center gap-2">
                        <div class="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                            </svg>
                        </div>
                        <h1 class="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">Lifemap</h1>
                    </div>
                    <button onClick={handleNav} class="menu-icon h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 hover:bg-indigo-200 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </header>

        <div className='py-3 box_height_nav'></div>


        <div id="navDrawer" class="nav-drawer fixed top-16 left-0 right-0 z-20 p-4 rounded-b-3xl">
            <div class="flex justify-end mb-2">
                <button id="closeMenu" onClick={handleNav} class="menu-icon h-10 w-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 px-2 pb-4">
                <Link onClick={handleNav} to="/"><div class="menu-item flex flex-col items-center p-[0.6rem] sm:p-4 rounded-xl bg-white/10 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                    </svg>
                    
                    <span class="font-medium">Home</span>
                </div></Link>
                
                <Link onClick={handleNav} to="/Numerology"><div class="menu-item flex flex-col items-center p-[0.6rem] sm:p-4 rounded-xl bg-white/10 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                    </svg>
                    <span class="font-medium">Numerology</span>
                </div></Link>
                
                <Link onClick={handleNav} to="/Astrology"><div class="menu-item flex flex-col items-center p-[0.6rem] sm:p-4 rounded-xl bg-white/10 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                    </svg>
                    <span class="font-medium">Astrology</span>
                </div></Link>
                
                <Link onClick={handleNav} to="/MatrixDestiny"><div class="menu-item flex flex-col items-center p-[0.6rem] sm:p-4 rounded-xl bg-white/10 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <circle cx="12" cy="7" r="3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></circle>
                        <circle cx="6" cy="12" r="3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></circle>
                        <circle cx="18" cy="12" r="3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></circle>
                        <circle cx="12" cy="17" r="3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></circle>
                        <line x1="12" y1="10" x2="12" y2="14" stroke-width="2" stroke-linecap="round"></line>
                        <line x1="9" y1="12" x2="15" y2="12" stroke-width="2" stroke-linecap="round"></line>
                    </svg>
                    <span class="font-medium">Matrix Destiny</span>
                </div></Link>
                
                <Link onClick={handleNav} to="/DISC"><div class="menu-item flex flex-col items-center p-[0.6rem] sm:p-4 rounded-xl bg-white/10 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                    </svg>
                    <span class="font-medium">DISC</span>
                </div></Link>
                
                <Link onClick={handleNav} to="/Tarot"><div class="menu-item flex flex-col items-center p-[0.6rem] sm:p-4 rounded-xl bg-white/10 text-white">

                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <rect x="6" y="3" width="12" height="18" rx="1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></rect>
                        <path d="M12 7L12 7.01M9 12L12 15L15 12M9 17L15 17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>

                    <span class="font-medium">Tarot</span>
                </div></Link>

                <Link onClick={handleNav} to="/Guide"><div class="menu-item flex flex-col items-center p-[0.6rem] sm:p-4 rounded-xl bg-white/10 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mb-2"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <circle cx="12" cy="12" r="9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></circle>
                        <path d="M12 3L12 5M12 19L12 21M3 12L5 12M19 12L21 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M12 12L8 8M12 12L16 16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <span class="font-medium">Guide</span>
                </div></Link>


                <Link onClick={handleNav} to="/Resource"><div class="menu-item flex flex-col items-center p-[0.6rem] sm:p-4 rounded-xl bg-white/10 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <rect x="3" y="5" width="18" height="14" rx="2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></rect>
                        <path d="M10 9l5 3-5 3V9z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M3 19h18" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <span class="font-medium">Resource</span>
                </div></Link>

                <Link onClick={handleNav} to="/Login">
                <div class="menu-item flex flex-col items-center p-[0.6rem] sm:p-4 rounded-xl bg-white/10 text-white">
                    {menuData ? (
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                    </svg>
                    ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M15 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H15" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M10 17L15 12L10 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M15 12H3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>

                    )}
                    <span class="font-medium">{menuData ? ("Dashboard") : ("Login")}</span>
                </div>
                </Link>


            </div>
        </div>
    

                


            {cloneElement(children, { setMenuData })}
          <Footer/>
        </React.Fragment>
    )
}
export default NavBar