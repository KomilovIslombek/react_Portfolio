import React, { useState } from 'react'
import './Navbar.css'

export default function Navbar() {

    const [menu, setMenu] = useState(false);

    return (
        <div className="Navbar">
            <div className=' container'>
                <div className="nav_row">
                    <div id='toggle_menu' className={ menu === true ? 'toggledMenu' : ''}>
                        <div className="toggle_list">
                            <li><a href="#Hero"> Bosh sahifa</a></li>
                            <li><a href="#Services"> Xizmatlar</a></li>
                            <li><a href="#"> Portfolio</a></li>
                            <li><a href="#Work"> Jamoa</a></li>
                            <li><a href="#Dastavqa"> Blog</a></li>
                            <li><a href="#Footer"> Kontaktlar</a></li>
                            <button className='btn' type='button'><a href="tel: +998 90 921 37 11"> +998 90 921 37 11 </a></button>  
                        </div>
                    </div>
                    <div className="nav_logo">
                        <h3>P<span className='span'>i</span>xer</h3>
                    </div>
                    <div className="nav_list">
                        <li><a href="#Hero"> Bosh sahifa</a></li>
                        <li><a href="#Services"> Xizmatlar</a></li>
                        <li><a href="#"> Portfolio</a></li>
                        <li><a href="#Work"> Jamoa</a></li>
                        <li><a href="#Dastavqa"> Blog</a></li>
                        <li><a href="#Footer"> Kontaktlar</a></li>
                        <button className='btn' type='button'><a href="tel: +998 90 921 37 11"> +998 90 921 37 11 </a></button>  
                    </div>
                    <div onClick={ () => setMenu(!menu) } id='menu' className={ menu === true ? 'active' : 'menu'}>
                            <span></span>
                            <span className='line'></span>
                            <span></span>
                    </div>

                </div>
            </div>
        </div>
    )
}
