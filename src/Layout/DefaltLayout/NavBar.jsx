import './NavBar.css'
import React from 'react'
function NavBar({children}){
    console.log(children)
    return(
        <React.Fragment>
            <div className='NavBar'>
                <h1>Hele</h1>
            </div>
            {children}  
        </React.Fragment>
    )
}
export default NavBar