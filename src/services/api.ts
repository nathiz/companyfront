import axios from 'axios';

const API_URL = 'http://localhost:5248/api'; // Ajuste para o endereço do seu backend

const api = axios.create({
    baseURL: API_URL,
    headers: { 'Content-Type': 'application/json' }
});

export default api;  // Exportação padrão