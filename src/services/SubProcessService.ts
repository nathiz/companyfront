import axios from "axios";
import { SubProcess } from "../models/SubProcess";

const API_URL = "http://localhost:5248/api/SubProcess";

export const getAllSubProcesses = async (): Promise<SubProcess[]> => {
    try {
        const response = await axios.get(API_URL);
        return Array.isArray(response.data) ? response.data : [response.data]; // Garante um array
    } catch (error) {
        console.error("Erro ao buscar subprocessos:", error);
        throw error;
    }
};

export const getSubProcessById = async (id: number): Promise<SubProcess> => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Erro ao buscar subprocesso com ID ${id}:`, error);
        throw error;
    }
};

export const createSubProcess = async (subProcess: SubProcess): Promise<SubProcess> => {
    try {
        const response = await axios.post(API_URL, subProcess);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("Erro ao criar subprocesso:", error.response?.data);
            
            // Exibir detalhes dos erros de validação
            if (error.response?.data?.errors) {
                console.error("Detalhes dos erros:", error.response.data.errors);
            }

            throw new Error(error.response?.data?.title || "Erro ao criar subprocesso");
        } else {
            console.error("Erro desconhecido:", error);
            throw new Error("Erro desconhecido ao criar subprocesso");
        }
    }
};


export const updateSubProcess = async (id: number, subProcess: SubProcess): Promise<SubProcess> => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, subProcess);
        return response.data;
    } catch (error) {
        console.error(`Erro ao atualizar subprocesso com ID ${id}:`, error);
        throw error;
    }
};

export const deleteSubProcess = async (id: number): Promise<void> => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        console.error(`Erro ao excluir subprocesso com ID ${id}:`, error);
        throw error;
    }
};