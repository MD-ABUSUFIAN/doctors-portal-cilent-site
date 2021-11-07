
import { Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink,useHistory,useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../images/login.png';
import Alert from '@mui/material/Alert';


const Register = () => {
    const [loginData,setLoginData]=useState({});
    const {user,registerUser,isLoading,authError}=useAuth();
    const history=useHistory();
    const location=useLocation();

    const handleOnBlur=e=>{
        const field=e.target.name;
        const value=e.target.value;
        const newLoginData={...loginData};
        newLoginData[field]=value;
        console.log(field,value);
        setLoginData(newLoginData);

    }


    const handleLoginSubmit=e=>{
        if(loginData.password !==loginData.password2){
            alert('Your Password is did not Match')
            return
        }
        registerUser(loginData.email, loginData.password,history,loginData.name) 
        e.preventDefault();
    }
    return (
        <div>
            <Container>
            <Grid container spacing={2}>
  <Grid sx={{mt:8}} item xs={12} md={6}>
      <Typography variant="body1">Register
      </Typography>
      {!isLoading && <form onSubmit={handleLoginSubmit}>
      <TextField
       id="standard-basic" 
       sx={{width:'75%',m:1}}
       label="Your Name" 
       name='name'
       onBlur={handleOnBlur}
       variant="standard" />
      <TextField
       id="standard-basic" 
       sx={{width:'75%',m:1}}
       label="Your Email" 
       name='email'
       type="email"
       onBlur={handleOnBlur}
       variant="standard" />
      <TextField
       id="standard-basic" 
       sx={{width:'75%',m:1}}
       label="Your Password" 
       type="password"
       name='password'
       onBlur={handleOnBlur}
       variant="standard" />
      <TextField
       id="standard-basic" 
       sx={{width:'75%',m:1}}
       label="Confirm Your Password" 
       type="password"
       name='password2'
       onBlur={handleOnBlur}
       variant="standard" />

       <NavLink to="/login"><Button variant="text">Already Register? Please Login</Button> </NavLink>
       <Button type="submit" sx={{width:'75%',m:1}} variant="contained">Register</Button>
          

      </form>}
      {
          isLoading && <CircularProgress />
      }
      {
          user?.email &&<Alert severity="success">Register success Please Login</Alert>
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
        </div>
    );
};

export default Register;