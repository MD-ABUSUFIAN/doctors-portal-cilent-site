import { Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';

const PatientReview = ({patient}) => {
    const {name,address,description,image}=patient;
    return (
      
            
            <Grid  item xs={12} md={4} lg={4}>
                <Card variant="outlined" sx={{ minWidth: 275,border:0, boxShadow: 0,border:'1',py:2 }}>
            <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {description}
            </Typography>
            </CardContent>
           
            <img src={image} alt=""/>
            <Typography sx={{color:'rgba(7, 227, 242)'}} variant="h5">
                {name}
            </Typography>
            
            <Typography sx={{color:'gray'}} variant="h6">
                {address}
            </Typography>
    
    </Card>
    </Grid>
        
    );
};

export default PatientReview;