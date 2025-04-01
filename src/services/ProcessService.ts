import axios from "axios";
import { Process } from "../models/Process";

const API_URL = "http://localhost:5248/api/Processo";

export const getAllProcesses = async (): Promise<Process[]> => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const getProcessById = async (id: number): Promise<Process> => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

export const createProcess = async (process: Process): Promise<Process> => {
    const response = await axios.post(API_URL, process);
    return response.data;
};

export const updateProcess = async (id: number, process: Process): Promise<Process> => {
    const response = await axios.put(`${API_URL}/${id}`, process);
    return response.data;
};

export const deleteProcess = async (id: number): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
};