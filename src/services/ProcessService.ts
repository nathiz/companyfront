import axios from "axios";
import { Process } from "../models/Process";

const API_URL = "http://localhost:5248/api/Processo";

export const getAllProcesses = async (): Promise<Process[]> => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar processos:", error);
        throw error;
    }
};

export const getProcessById = async (id: number): Promise<Process> => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Erro ao buscar processo com ID ${id}:`, error);
        throw error;
    }
};

export const createProcess = async (process: Process): Promise<Process> => {
    console.log("Enviando:", process); // Adiciona um log para depuração
    const response = await axios.post(API_URL, process);
    return response.data;
};

export const updateProcess = async (id: number, process: Process): Promise<Process> => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, process);
        return response.data;
    } catch (error) {
        console.error(`Erro ao atualizar processo com ID ${id}:`, error);
        throw error;
    }
};

export const deleteProcess = async (id: number): Promise<void> => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        console.error(`Erro ao deletar processo com ID ${id}:`, error);
        throw error;
    }
};