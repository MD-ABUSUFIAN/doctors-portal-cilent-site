import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const MakeAdmin = () => {
    const [email,setEmail]=useState('');
    const [success,setSuccess] = useState(false);
    const {token}=useAuth();

    const handleOnBlur=e=>{
       
        setEmail(e.target.value);

    }

    const handleAdminSubmit=e=>{
        const user={email};
       
        fetch('http://localhost:5000/users/admin',{
            method:'PUT',
            headers: {
                'authorization':`Bearer${token}`,
                'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        })
        .then(res=>res.json()).then(data=>
            {

                if (data.modifiedCount){
                    console.log(data)
                    setSuccess(true)
                }
            }       
            )
        e.preventDefault();
    }
    return (
        <div>
            <h1>Make a Admin</h1>
            <form onSubmit={handleAdminSubmit}>

            <TextField 
            sx={{width:'50%'}}
            label="Email" 
            type="email" 
            onBlur={handleOnBlur}
            variant="standard" />
            <Button type="submit" variant="contained">MakeAdmin</Button>
                
            </form>
            {
          success &&<Alert severity="success">Make Admin Successful</Alert>
      }
        </div>
    );
};

export default MakeAdmin;