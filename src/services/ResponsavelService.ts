import axios from "axios";

const API_URL = "http://localhost:5248/api/Responsavel";

export interface Responsavel {
    id?: number;
    nome: string;
    cargo: string;
    email: string;
}

// Obtém todos os responsáveis
export const getResponsaveis = async (): Promise<Responsavel[]> => {
    const response = await axios.get(API_URL);
    return response.data;
};

// Obtém um responsável pelo ID
export const getResponsavelById = async (id: number): Promise<Responsavel> => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

// Cria um novo responsável
export const createResponsavel = async (responsavel: Responsavel): Promise<Responsavel> => {
    const response = await axios.post(API_URL, responsavel);
    return response.data;
};

// Atualiza um responsável existente
export const updateResponsavel = async (id: number, responsavel: Responsavel): Promise<void> => {
    await axios.put(`${API_URL}/${id}`, responsavel);
};

// Deleta um responsável pelo ID
export const deleteResponsavel = async (id: number): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
};