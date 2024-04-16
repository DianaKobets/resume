import React from 'react';
import './navbar.css';
import git from './git-icon.png'
function Navbar(){
    return(
        <div className='navbar'>
            <h1>skidiko</h1>
            <div className='navbar-components'>
                <h2>about me</h2>
                <h2>resume</h2>
                <h2>contacts</h2>
                <img src={git}></img>
                <h2>ru/us</h2>
            </div>
        </div>
    );
}
export default Navbar
