import React, {useEffect,useState} from 'react';
import axios from 'axios';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Button } from '@material-ui/core';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);            
  
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

  const handleBack = () => {
    window.location.pathname="/"
  }

function UserData(props) {
    const classes = useStyles();

    const [users, setUsers] = useState([]);
    const [load, setLoad] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get('https://reqres.in/api/users')
            .then(res => {
                setUsers(res.data.data);
                setLoad(true);
            })
            .catch(err => {
                setError(err.message);
                setLoad(true)
            })
    }, []);


    if (load) {
        return(
            <div>
                {error ?
                    <span>{error.message}</span>
                    :
                    <TableContainer style={{height: 'auto'}}>
                        <Table className={classes.table} stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="center">ID</StyledTableCell>
                                    <StyledTableCell align="center">Email</StyledTableCell>
                                    <StyledTableCell align="center">First-Name</StyledTableCell>
                                    <StyledTableCell align="center">Last-Name</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {users.map((userData, index) => (
                                    <StyledTableRow key={index} style={{cursor: 'pointer'}} 
                                        onClick={()=>props.handleClick(userData.id)}>
                                        <StyledTableCell align="center">
                                            {userData.id}
                                        </StyledTableCell>
                                        <StyledTableCell align="center">{userData.email}</StyledTableCell>
                                        <StyledTableCell align="center">{userData.first_name}</StyledTableCell>
                                        <StyledTableCell align="center">{userData.last_name}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                }
                <Button style={{float:'right', textTransform: 'capitalise'}} onClick={handleBack}>Back</Button>
            </div>
        )
    } else {
        return (
            <div>
                Loading...
            </div>
        );
    }
    
}

export default UserData;