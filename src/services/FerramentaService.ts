import axios from "axios";
import { Ferramenta } from "../models/Ferramenta";

const API_URL = "http://localhost:5248/api/Ferramenta";

export const getAllFerramentas = async (): Promise<Ferramenta[]> => {
    const response = await axios.get(API_URL);
    return response.data;
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