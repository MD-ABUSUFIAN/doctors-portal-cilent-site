import { Grid } from '@mui/material';
import React, { useState } from 'react';
import Calendar from '../../Shared/Calendar/Calendar';
import Appointments from '../Appointments/Appointments';

const DashBoardHome = () => {
    const [date,setDate]=useState(new Date())
    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={5}>
          <Calendar date={date} setDate={setDate}>

          </Calendar>
        </Grid>
        <Grid item xs={12} sm={7} >

          <Appointments date={date}></Appointments>
          
        </Grid>
        
      </Grid>
    );
};

export default DashBoardHome;