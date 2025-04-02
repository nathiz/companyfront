import axios from "axios";
import { Ferramenta } from "../models/Ferramenta";

const API_URL = "http://localhost:5248/api/Ferramentas";

export const getAllFerramentas = async (): Promise<Ferramenta[]> => {
    try {
        const response = await axios.get(API_URL);
        console.log(response.data);  // Verifique o que está sendo retornado pela API
        return response.data;
    } catch (error) {
        console.error("Erro ao carregar as ferramentas:", error);  // Exibe detalhes do erro no console
        throw error;  // Re-lança o erro para que o componente trate
    }
};

export const getFerramentaById = async (id: number): Promise<Ferramenta> => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

export const createFerramenta = async (ferramenta: Ferramenta): Promise<Ferramenta> => {
    const response = await axios.post(API_URL, ferramenta);
    return response.data;
};

export const updateFerramenta = async (id: number, ferramenta: Ferramenta): Promise<Ferramenta> => {
    const response = await axios.put(`${API_URL}/${id}`, ferramenta);
    return response.data;
};

export const deleteFerramenta = async (id: number): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
};