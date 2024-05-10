import React, { useState } from 'react';
import { Box, TextField, Button, Card, Stack, Typography, Container, Grid, InputAdornment } from '@mui/material';
import { searchFood } from '../services/api';

function Dieta() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [diet, setDiet] = useState([]);

    const handleSearch = async () => {
        if (!searchQuery.trim()) return;
        try {
            const response = await searchFood(searchQuery);
            if (response && response.hints) {
                setSearchResults(response.hints);
                console.log(response.hints)
            } else {
                console.error('No hints found in the response:', response);
            }
        } catch (error) {
            console.error('Error searching for food:', error);
        }
    };

    const addToDiet = (food) => {
        console.log(food.knownAs)
        setDiet([...diet, food]);
        setSearchResults(searchResults.filter(result => result.id !== food.id));
    };

    const removeFromDiet = (foodToRemove) => {
        setDiet(diet.filter(food => food !== foodToRemove));
    };

    const FoodItem = ({ food, onAddToDiet }) => {
        return (
            <Card sx={{ marginBottom: '1rem', padding: '.5rem', display: 'flex', height: '4rem', width: '100%', marginLeft: '.5rem' }}>
                <img src={food.image} alt={food.knownAs} loading="lazy" className='food-img' style={{  marginRight: '1rem' }} />
                <Stack>
                    <Typography fontSize={'1.15rem'} fontWeight={600}>{food.label}</Typography>
                    <Typography marginBottom={"1rem"}>{food.nutrients.ENERC_KCAL.toFixed(0)} Calorias</Typography>
                </Stack>
                <Button className="search-btn" size='small' variant="contained" onClick={() => onAddToDiet(food)} sx={{ color:"white", marginLeft: 'auto', boxShadow: 'none', width: '5rem', fontSize: '.75rem' }}>Adicionar à Dieta</Button>
            </Card>
        );
    };

    return (
        <Container>
            <Typography fontWeight={700} color='black' sx={{ fontSize: { lg: '30px', xs: '30px' } }} mb="2rem" textAlign="center">Sua Dieta</Typography>
            {diet.length === 0 && <Typography fontWeight={400} color={'lightgray'} sx={{ fontSize: { lg: '20px', xs: '20px' } }} mb="49px" textAlign="center">Ainda não selecionou <br />nenhum alimento.</Typography>}
            <Box sx={{ marginBottom:'2rem' }}>
                {diet.map((food, index) => (
                    <Card key={index} sx={{ marginBottom: '1rem', padding: '.5rem', display: 'flex', height: '4rem' }}>
                        <img src={food.image} alt={food.knownAs} loading="lazy" className='food-img' style={{  marginRight: '1rem' }} />
                        <Stack>
                            <Typography fontSize={'1.15rem'} fontWeight={600}>{food.label}</Typography>
                            <Typography marginBottom={"1rem"}>{food.nutrients.ENERC_KCAL.toFixed(0)} Calorias</Typography>
                        </Stack>
                        <Button onClick={() => removeFromDiet(food)} size='small' variant="contained" color="secondary" sx={{ marginLeft: 'auto' }}>Remover</Button>
                    </Card>
                ))}
            </Box>
            <TextField
                label="Pesquisar Alimentos"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                variant="outlined"
                fullWidth
                size='small'
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
                {searchResults.map((food, index) => (
                    <FoodItem key={index} food={food.food} onAddToDiet={addToDiet} />
                ))}
            </Grid>
        </Container>
    );
}

export default Dieta;