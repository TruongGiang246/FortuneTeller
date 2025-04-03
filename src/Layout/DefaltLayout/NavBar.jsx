import './NavBar.css'
import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../FooterLayout/Footer'
function NavBar({children}){
    function handleNav(){
        const menu_list = document.body.getElementsByClassName('nav_slide')
        const menu_list_wrapper = document.body.getElementsByClassName('nav_slide_wrapper')
        menu_list[0].classList.toggle('nope');
        menu_list_wrapper[0].classList.toggle('nope');


        menu_list_wrapper[0].onclick = () =>{
            menu_list[0].classList.toggle('nope');
            menu_list_wrapper[0].classList.toggle('nope');
        }
        
    }
    return(
        <React.Fragment>
            <div className='NavBar'>
                <div onClick={handleNav} className='tool_open'>
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

                
                <div className='nav_slide nope'>
                    <ul>
                        <li><Link to='/Tarot'><p>Tarot</p></Link></li>
                        <li><Link to='/Numerology'><p>Thần số học</p></Link></li>
                        <li><Link to='/MatrixDestiny'><p>Ma trận định mệnh</p></Link>   </li>
                    </ul>
                </div>
                <div className='nav_slide_wrapper nope'>
                </div>

            </div>
            {children}  
          <Footer/>
        </React.Fragment>
    )
}
export default NavBar