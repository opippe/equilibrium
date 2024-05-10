import React from 'react';
import { Box, Card, Stack, Typography } from '@mui/material';

import WeeklyCalendar from '../components/WeeklyCalendar';
import CircularProgressBar from '../components/CircularProgressBar';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LocalDiningIcon from '@mui/icons-material/LocalDining';

const Home = () => (
    <Box sx={{ mt: { lg: '1rem', xs: '1rem' }, position: "relative" }} p="20px">
        <Typography id='logotext' fontWeight={700} mb={"1rem"} color={"#1976d2"} sx={{ fontSize: { lg: '44px', xs: '40px' } }} >
            EquilibriUM
        </Typography>
        <WeeklyCalendar />
        <Stack direction={"row"} mt={"1rem"}>
            <CircularProgressBar progress={60} />
            <Stack>
                <Typography fontWeight={600} mt={"1.75rem"} sx={{ fontSize: "1.25rem" }}>Seu Progresso Diário</Typography>
                <Typography>Você está próximo do seu objetivo.</Typography>
            </Stack>
        </Stack>
        <Stack>
            <Card sx={{ marginBottom: '1rem', padding: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                <Stack alignItems='center'>
                    <FitnessCenterIcon style={{ fontSize: '2rem', color: '#F76E37' }}/>
                    <Typography fontWeight={600}>Treino</Typography>
                </Stack>
                <Stack alignItems='center'>
                    <Stack sx={{ flexDirection: 'row', alignItems: 'baseline' }} >
                        <Typography fontSize='1.2rem' fontWeight='bold'>45</Typography>
                        <Typography fontSize={'.75rem'} fontWeight={200} marginLeft={'.25rem'} color={'gray'}>Minutos</Typography>
                    </Stack>
                    <Box sx={{ backgroundColor: '#FDEDEE', color: '#F76E37', fontSize: '.75rem' , fontWeight: '600', margin: 'auto', padding: '5px 1rem', borderRadius: '20px' }}>Hoje às 20:00</Box>
                </Stack>
            </Card>
            <Card sx={{ marginBottom: '1rem', padding: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                <Stack alignItems='center'>
                    <LocalDiningIcon style={{ fontSize: '2rem', color: '#54CABE' }}/>
                    <Typography fontWeight={600}>Treino</Typography>
                </Stack>
                <Stack alignItems='center'>
                    <Stack sx={{ flexDirection: 'row', alignItems: 'baseline' }} >
                        <Typography fontSize='1.2rem' fontWeight='bold'>2158</Typography>
                        <Typography fontSize={'.75rem'} fontWeight={200} marginLeft={'.25rem'} color={'gray'}>Calorias</Typography>
                    </Stack>
                    <Box sx={{ backgroundColor: '#E4F8FA', color: '#54CABE', fontSize: '.75rem' , fontWeight: '600', margin: 'auto', padding: '5px 1rem', borderRadius: '20px' }}>Hoje às 20:00</Box>
                </Stack>
            </Card>
        </Stack>
    </Box>
);

export default Home;