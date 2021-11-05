import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Button, Container, Typography } from '@mui/material';
import treatment from '../../../images/treatment.png';



const Exceptional = () => {
    return (
       <Container>
          <Box sx={{ width: '100%',my:3 }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
           <img style={{width: '400px', height: '400px'}} src={treatment} alt=""/>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} sx={{p:1}} style={{textAlign:"left"}} sx={{px:3}}>
              <Typography variant="h3" sx={{my:2}}>
                  Exceptional Dental Care, On Your Terms
              </Typography>
            <Typography variant="h6" sx={{my:4,color:'gray'}} style={{fontSize:"15px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium veniam dolore delectus qui, autem sit eos, reiciendis pariatur aliquid voluptates sunt, minima explicabo praesentium magni ipsum voluptate dolorum odit provident?</Typography>
            <Button variant="contained">Learn More</Button>
          </Grid>
         
        </Grid>
      </Box>
        
       </Container>
    );
};

export default Exceptional;