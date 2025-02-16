import './Footer.css'
function Footer(){
    return(
        <div className='footer_wrapper'>
            <div className='footer_container'>
                <div className='web_name'>
                    <div className='web_name_img'>
                        <img src='/FortuneTeller/nav/nav_icon.png'/>
                    </div>
                    <div className='web_name_container'>
                       <p>Fortune</p>
                        <p className='web_name_last'>Zan</p>   
                    </div>

                </div>
                <div className='quote'>
                    <p>"Những gì bạn tìm kiếm bên ngoài có thể đã nằm sẵn bên trong bạn."</p>
                </div>
                <div className='logo_social'>
                    <a href='https://www.facebook.com/truonggiang.tran.583671'>
                    <div className='social_logo'>
                        <img src='/FortuneTeller/footer/facebook.png'/>
                    </div>
                    </a>
                    <a>
                    <div className='social_logo'>
                        <img src='/FortuneTeller/footer/gmail.png'/>
                    </div>
                    </a>
                    <a href='https://github.com/TruongGiang246'>
                    <div className='social_logo'>
                        <img src='/FortuneTeller/footer/github.png'/>
                    </div>
                    </a>
                </div>
                <div className='credit'>
                     <p>TGiang-2025</p>
                </div>
            </div>
        </div>
    )
}
export default Footer