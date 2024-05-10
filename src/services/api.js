import axios from 'axios';

const API_KEY_EDAMAM = '99032faa5ee0f276c35864001dec2c2a';
const API_KEY_WGER = 'a0fce4e93c0f20412992f6a450fbe5d15f7ab44c';

const BASE_URL_EDAMAM = 'https://api.edamam.com/api/food-database/v2/parser';
const BASE_URL_WGER = 'https://wger.de/api/v2';

const APP_ID_EDAMAM = 'c534e56a';

export const searchFood = async (query) => {
    try {
        const response = await axios.get(`${BASE_URL_EDAMAM}?ingr=${query}&app_id=${APP_ID_EDAMAM}&app_key=${API_KEY_EDAMAM}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};


// Função para obter os tokens de acesso
const getTokens = async (username, password) => {
    try {
        const response = await axios.post('https://wger.de/api/v2/token', {
            username: username,
            password: password
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Função para fazer solicitações autenticadas
const authenticatedRequest = async (url) => {
    try {
        const response = await axios.get(url, {
            headers: {
                Authorization: `Token ${API_KEY_WGER}`
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const searchExercise = async (query) => {
    try {
        const apiUrl = `${BASE_URL_WGER}/exercise/?format=json&search=${query}`;
        const response = await authenticatedRequest(apiUrl);
        return response.results;
    } catch (error) {
        throw error;
    }
};

export const getAccessToken = async (username, password) => {
    try {
        // Obtendo os tokens de acesso
        const tokens = await getTokens(username, password);
        
        // Retornando apenas o token de acesso
        return tokens.access;
    } catch (error) {
        throw error;
    }
};