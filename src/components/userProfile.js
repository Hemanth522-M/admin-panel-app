import React, { useEffect, useState } from 'react'
import axios from 'axios';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

import './styles.css';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles({
    input: {
        "&:invalid": {
          border: "red solid 2px"
        }
    }
});

function UserProfile(props) {
    const classes = useStyles();

    const handleInputChange = (e) => 
        setUser({ 
            ...user,
            "first_name": e.currentTarget.value
        })
    

    const handleInputChange1 = (e) => setUser({ 
        ...user,
        "last_name": e.currentTarget.value
    })

    const handleInputChange2 = (e) => setUser({ 
        ...user,
        "email": e.currentTarget.value
    })

    const [user, setUser] = useState([]);
    const [error, setError] = useState('');
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        window.location.reload();
        setOpen(false);
    };

    
    useEffect(() => {
        if(props.userId !== undefined) {
            axios.get(`https://reqres.in/api/users/${props.userId}`)
                .then(res => {
                    setUser(res.data.data);
                })
                .catch(err => {
                    setError(err.message);
                })
        }
    },[props.userId]);
        
    

    const handleSubmit = () => {
        const data = user;
        if(props.userId) {
            fetch(`https://reqres.in/api/users/${props.userId}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
            }).then(res => {
                if(res.status === 200) {
                    setOpen(true);
                }
            }).catch(err => setError(err.message));
        }
        else if(data.length !== 0){
            fetch(`https://reqres.in/api/users`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
            }).then(res => {
                if(res.status === 201) {
                    setOpen(true);
                }
            }).catch(err => setError(err.message));
        }
        else {
            setError("Before Submit Please Enter The All Details")
        }
    }


    return (
        <form className="user-profile">
            {error &&
                <div>
                    <p className="error">{error}</p>
                </div>
            }
            <div>
                <TextField
                    id="standard-number"
                    label="First Name"
                    type="text"
                    name="firstName"
                    value={user.first_name || ""}
                    placeholder="Enter first name"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    inputProps={{ className: classes.input, pattern: "[A-Za-z]{1,15}" }}
                    onChange={handleInputChange}
                />
                &nbsp;&nbsp;
                <TextField
                    id="standard-number"
                    label="Last Name"
                    type="text"
                    name="lastName"
                    value={user.last_name || ""}
                    placeholder="Enter last name"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    inputProps={{ className: classes.input, pattern: "[A-Za-z]{1,15}" }}
                    onChange={handleInputChange1}
                />
                &nbsp;&nbsp;
                <TextField
                    id="standard-number"
                    label="Email"
                    type="text"
                    name="email"
                    value={user.email || ""}
                    placeholder="Enter email id..."
                    InputLabelProps={{
                        shrink: true,
                    }}
                    inputProps={{ className: classes.input, 
                        pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$" }}
                    onChange={handleInputChange2}
                />
            </div>
            <br />
            <Button variant="outlined" id="button" onClick={handleSubmit}>
                Submit
            </Button>   
            <Snackbar open={open}  onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    <p>{user.first_name}</p>
                    <p>{user.last_name}</p>
                    <p>{user.email}</p>
                    Your profile has been successfully updated!
                </Alert>
            </Snackbar>     
        </form>
    )
}

export default UserProfile;