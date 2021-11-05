import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Service from '../Service/Service';
import fluoride from '../.././../images/fluoride.png';
import cavity from '../.././../images/cavity.png';
import whitening from '../.././../images/whitening.png';


const services=[
    {
        name: 'Fluoride Treatment',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni quod excepturi, quibusdam hic dolore veniam recusandae itaque omnis amet animi.",
        img:fluoride,
    },
    {
        name: 'Cavity Filling',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni quod excepturi, quibusdam hic dolore veniam recusandae itaque omnis amet animi.",
        img:cavity,
    },
    {
        name: 'Teeth Whitening',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni quod excepturi, quibusdam hic dolore veniam recusandae itaque omnis amet animi.",
        img:whitening,
    }
]


const Services = () => {
    return (
    <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 'bold',color: 'success.main',m:2 }} variant="h5" component="div">
                                OUR SERVICES
                </Typography>

                <Typography sx={{ fontWeight: 'bold',m:5}} variant="h3" component="div">
                             Services We Provide
                </Typography>
                <Grid  container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    services.map(service=><Service key={service.name} service={service}></Service>)
                }
                </Grid>
            </Container>
    </Box>
    );
};

export default Services;