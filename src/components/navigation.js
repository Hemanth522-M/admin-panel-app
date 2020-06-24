import React from 'react';

import HomeIcon from '@material-ui/icons/Home';
import PersonSharpIcon from '@material-ui/icons/PersonSharp';
import Tooltip from '@material-ui/core/Tooltip';


import './styles.css';

const handleHomeIcon = () => {
    window.location.pathname = "/"
}

const handleUserData = () => {
    window.location.pathname="/user-data"
}

function Navigation() {
    return(
        <div className="icons">
            <Tooltip title="Home" placement="left" arrow>
                <HomeIcon id="image" onClick={handleHomeIcon}/>
            </Tooltip>
            <Tooltip title="User-Data" placement="left" arrow>
                <PersonSharpIcon id="image" onClick={handleUserData}/>
            </Tooltip>
        </div>
    )
}

export default Navigation;
