import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../images/login.png';

const Login = () => {
    const [loginData,setLoginData]=useState({})
    const {user,authError,isLoading,loginUser}=useAuth();;

    const handleOnChange=e=>{
        const field=e.target.name;
        const value=e.target.value;
        const newLoginData={...loginData};
        newLoginData[field]=value;
        console.log(field,value);
        setLoginData(newLoginData);

    }


    const handleLoginSubmit=e=>{
        loginUser(loginData.email,loginData.password);
        
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
  <Grid sx={{mt:8}} item xs={12} md={6}>
      <Typography variant="body1">Login
      </Typography>
      <form onSubmit={handleLoginSubmit}>
      <TextField
       id="standard-basic" 
       sx={{width:'75%',m:1}}
       label="Your Email" 
       name='email'
       onChange={handleOnChange}
       variant="standard" />
      <TextField
       id="standard-basic" 
       sx={{width:'75%',m:1}}
       label="Your Password" 
       type="password"
       name='password'
       onChange={handleOnChange}
       variant="standard" />

       <NavLink to="/register"><Button variant="text">New User? Please Register</Button> </NavLink>
       <Button type="submit" sx={{width:'75%',m:1}} variant="contained">Login</Button>
          

      </form>
      {
          isLoading && <CircularProgress />
      }
      {
          user?.email &&<Alert severity="success">successfully Login</Alert>
      }
      {
          authError && <Alert severity="error">{authError}</Alert>
      }
  </Grid>
  <Grid item xs={12} md={6}>
  <img style={{width:'100%'}} src={login} alt=""/>
  </Grid>
  
</Grid>

        </Container>
    );
};

export default Login;