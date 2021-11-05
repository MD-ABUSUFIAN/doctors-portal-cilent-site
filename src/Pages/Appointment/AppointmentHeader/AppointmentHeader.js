import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import Calendar from '../../Shared/Calendar/Calendar';


const AppointmentHeader = ({date,setDate}) => {
  
    return (
        <div>
            <h1>this is header appoinment pages</h1>
            <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
            <Calendar date={date} setDate={setDate}></Calendar>
         
        </Grid>



        <Grid item xs={6} md={4}>
          

            <img style={{width:'100%'}} src={chair} alt=""/>
        </Grid>
        
          
      </Grid>
        </div>
    );
};

export default AppointmentHeader;