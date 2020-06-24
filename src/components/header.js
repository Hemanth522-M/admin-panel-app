import React from 'react';

import Navigation from './navigation';
import Body from './body';

import Logo from '../media/logo.png';
import './styles.css';

function Header() {
    return(
        <div className="main-div">
            <div className="navigate">
                <Navigation />
            </div>
            <div className="header">
                <img src={Logo} alt="" id="logo" />
                <h4 className="user-name">UserName</h4>
                <span>
                    <Body />
                </span>
            </div>
            
        </div>
    )
}

export default Header;
