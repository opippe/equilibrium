import React, { useState } from 'react';
import { Box, TextField, Button, Card, Stack, Typography, Container, Grid, InputAdornment } from '@mui/material';
import { searchExercise, getAccessToken } from '../services/api';

function Treino() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [training, setTraining] = useState([]);
    const [accessToken, setAccessToken] = useState(null);

    const handleSearch = async () => {
        if (!searchQuery.trim()) return;
        try {
            if (!accessToken) {
                const token = await getAccessToken('felipeguimaraes47@gmail.com', '123deoliveira4'); // Substitua com suas credenciais
                setAccessToken(token);
            }
            const results = await searchExercise(searchQuery, accessToken);
            setSearchResults(results);
            console.log(results)
        } catch (error) {
            console.error('Error searching for exercises:', error);
        }
    };

    const addToTraining = (exercise) => {
        setTraining([...training, exercise]);
        setSearchResults(searchResults.filter(result => result.id !== exercise.id));
    };

    const removeFromTraining = (exercise) => {
        setTraining(training.filter(item => item.id !== exercise.id));
    };

    const ExerciseItem = ({ exercise }) => {
        return (
            <Card sx={{ marginBottom: '1rem', padding: '.5rem', display: 'flex', alignItems: 'center', height: '4rem' }}>
                <Stack maxWidth='70%'>
                    <Typography variant="h5" fontWeight={600}>{exercise.name}</Typography>
                    <Box fontSize='.5rem'>{exercise.description}</Box>
                </Stack>
                <Button size="small" variant="contained" onClick={() => removeFromTraining(exercise)} color="secondary" sx={{ marginLeft: 'auto', height: '100%' }}>Remover</Button>
            </Card>
        );
    };

    return (
        <Container>
            <Typography fontWeight={700} color='black' sx={{ fontSize: { lg: '30px', xs: '30px' } }} mb="2rem" textAlign="center">Seu Treino</Typography>
            <Box sx={{ marginBottom: '2rem' }}>
                {training.length === 0 && <Typography fontWeight={400} color={'lightgray'} sx={{ fontSize: { lg: '20px', xs: '20px' } }} mb="49px" textAlign="center">Ainda não selecionou <br />nenhum exercício.</Typography>}
                {training.map((exercise, index) => (
                    <ExerciseItem key={index} exercise={exercise} />
                ))}
            </Box>
            <TextField
                label="Pesquisar Exercícios"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                variant="outlined"
                fullWidth
                size="small"
                sx={{ marginBottom: '2rem' }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <Button onClick={handleSearch} size='small' variant="contained" sx={{ height: '2.5rem', boxShadow: 'none', boxSizing: 'border-box' }}>Pesquisar</Button>
                        </InputAdornment>
                    ),
                }}
            />
            <Grid container spacing={1}>
                {searchResults.map((exercise) => (
                    <Grid item xs={12} sm={1} md={true} key={exercise.id}>
                        <Card sx={{ marginBottom: '1rem', padding: '.5rem', display: 'flex', alignItems: 'center' }}>
                            <Stack maxWidth='70%'>
                                <Typography variant="h5" fontWeight={600}>{exercise.name}</Typography>
                                <Box fontSize='.35rem'>{exercise.description}</Box>
                            </Stack>
                            <Button size="small" variant="contained" onClick={() => addToTraining(exercise)} color="primary" sx={{ color:"white", marginLeft: 'auto', boxShadow: 'none', width: '5rem', fontSize: '.75rem', height: '100%' }}>Adicionar</Button>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Treino;
