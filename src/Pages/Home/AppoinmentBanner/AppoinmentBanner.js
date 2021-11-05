import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';


const appointmentBanner={
    background: `url(${bg})`,
    backgroundColor:'rgba(45, 58, 74,0.7)',
    backgroundBlendMode:'darken,luminosity',
    marginTop:140,
    
}

const AppoinmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
            <img style={{width:400,marginTop:'-110px'}} src={doctor} alt=""/>
          
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: 'flex',justifyContent: 'flex-start',textAlign:'left',alignItems: 'center'}}>
            <Box >
            <Typography sx={{mb:5}} variant="h6" style={{color: '#2ef2e5'}}>
                Appointment
            </Typography>
            <Typography  variant="h4" style={{color: 'white', fontWeight:700}}>
            Make an Appointment Today
            </Typography>
            <Typography sx={{my:5}} variant="h6" style={{color: 'white',fontSize:14,fontWeight:300}}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio dolorum corrupti hic provident, dolor quibusdam perspiciatis eos quidem deserunt error quos, facere reprehenderit officiis. Possimus facilis ex repellat placeat ad.            
                </Typography>
        <Button variant="contained" style={{backgroundColor: '#2ef2e5'}}>Learn More</Button>
            </Box>
         
        </Grid>
        
      </Grid>
    </Box>
    );
};

export default AppoinmentBanner;