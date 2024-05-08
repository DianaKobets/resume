import React from 'react';
import './navbar.css';
import git from './git-icon.png'
function Navbar({ onLanguageChange,  onContactClick }){
    return(
        <div className='navbar'>
            <h1>skidiko</h1>
            <div className='navbar-components'>
                <h2>about me</h2>
                <h2 onClick={()=> window.open('https://hh.ru/applicant/resumes/view?resume=f8aa82adff0cad767d0039ed1f4b6f71574e38', '_blank')}>resume</h2>
                <h2 onClick={onContactClick}>contacts</h2>
                <img src={git} alt='GitHub' onClick={() => window.open('https://github.com/DianaKobets', '_blank')} />
                <div className='lang-btn'>
                    <h2 onClick={() => onLanguageChange('ru')}>ru</h2>
                    <h2 onClick={() => onLanguageChange('us')}>us</h2>
                </div>
            </div>
        </div>
    );
}
export default Navbar
