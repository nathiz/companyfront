import axios from "axios";

const API_URL = "http://localhost:5248/api/Detalhamentos";

export interface Detalhamento {
    id?: number;
    descricao: string;
    sistemaUtilizado: string;
    responsavelId: number;
    documentoId: number;
}

// Obtém todos os detalhamentos
export const getDetalhamentos = async (): Promise<Detalhamento[]> => {
    const response = await axios.get(API_URL);
    return response.data;
};

// Obtém um detalhamento pelo ID
export const getDetalhamentoById = async (id: number): Promise<Detalhamento> => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

// Cria um novo detalhamento
export const createDetalhamento = async (detalhamento: Detalhamento): Promise<Detalhamento> => {
    const response = await axios.post(API_URL, detalhamento);
    return response.data;
};

// Atualiza um detalhamento existente
export const updateDetalhamento = async (id: number, detalhamento: Detalhamento): Promise<void> => {
    await axios.put(`${API_URL}/${id}`, detalhamento);
};

// Deleta um detalhamento pelo ID
export const deleteDetalhamento = async (id: number): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
};