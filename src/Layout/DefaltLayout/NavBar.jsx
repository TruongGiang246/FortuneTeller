import './NavBar.css'
import React from 'react'
import { Link } from 'react-router-dom'
function NavBar({children}){
    console.log(children)
    return(
        <React.Fragment>
            <div className='NavBar'>
                <div className='web_name'>
                    <Link to='/'><p>Fortune</p></Link>      
                </div>
                <div className='page'>
                    <Link to='/Tarot'><p>Tarot</p></Link>
                    <Link to='/Number'><p>Numerology</p></Link>
                    <Link to='/MatrixDestiny'><p>Matrix</p></Link>        
                </div>
            </div>
            {children}  
        </React.Fragment>
    )
}
export default NavBar