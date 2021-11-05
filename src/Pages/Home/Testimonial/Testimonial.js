import { Button, CardActions, CardContent, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import people1 from '../../../images/people-1.png';
import people2 from '../../../images/people-2.png';
import people3 from '../../../images/people-3.png';
import PatientReview from '../Patient/PatientReview';




const patients = [
    {
        id:1,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, ipsa reiciendis illum, nam aperiam amet similique provident nesciunt hic soluta repellendus? Voluptatem, accusamus. Sint in voluptate cum nemo maxime reiciendis!",
        image:people1,
        name:"Winson herry",
        address:"Califonia"
    },
    {
        id:2,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, ipsa reiciendis illum, nam aperiam amet similique provident nesciunt hic soluta repellendus? Voluptatem, accusamus. Sint in voluptate cum nemo maxime reiciendis!",
        image:people2,
        name:"Winson herry",
        address:"Califonia"
    },
    {
        id:3,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, ipsa reiciendis illum, nam aperiam amet similique provident nesciunt hic soluta repellendus? Voluptatem, accusamus. Sint in voluptate cum nemo maxime reiciendis!",
        image:people3,
        name:"Winson herry",
        address:"Califonia"
    },
]
const Testimonial = () => {
    
    return (
      
            <Container sx={{mt:"50px"}}>

                <Typography variant="h5" sx={{ color:'rgba(7, 227, 242)',textAlign:'left' ,paddingLeft:'50px' }}>
                    TESTIMONIAL
                </Typography>

                <Typography variant="h2" style={{textAlign: 'left',fontWeight: '400'}} sx={{my:1,paddingLeft:'50px'}}>
                    What's Our Patients 
                </Typography>

                <Typography variant="h2" style={{textAlign: 'left', fontWeight: '400',paddingLeft:'50px'}}>
                    Says
                </Typography>


        <Grid  sx={{my:5,}} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
        
        {
                    patients.map(patient=><PatientReview key={patient.id} patient={patient}></PatientReview>)
                }

         
      
        
      </Grid>

               
            </Container>
        
    );
};

export default Testimonial;