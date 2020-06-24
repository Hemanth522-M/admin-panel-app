import React from 'react';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import './styles.css';

import UserList from './userList';
import UserProfile from './userProfile';



function Body() {
    const [value, setValue] = React.useState(0);
    const [id, setId] = React.useState();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleClick = (id) => {
        if(id) {
            setId(id);
            setValue(1);
        }
    }
    

    return(
        <Paper elevation={0} id="paper">
            <h2>Page title</h2>
            <div>
                <Tabs
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                    aria-label="disabled tabs example"
                >
                    <Tab label="User's list" id="tabs" />
                    <Tab label="User Profile" id="tabs" />
                </Tabs>
            </div>
            {value === 0 &&
                <UserList  handleClick={handleClick}/>
            }
            {value === 1 &&
                <UserProfile userId={id} />
            }
        </Paper>
    )
}

export default Body;
