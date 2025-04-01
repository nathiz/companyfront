import axios from "axios";
import { Documento } from "../models/Documento";

const API_URL = "http://localhost:5248/api/Documentos";

export const getAllDocumentos = async (): Promise<Documento[]> => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const getDocumentoById = async (id: number): Promise<Documento> => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

export const createDocumento = async (documento: Documento): Promise<Documento> => {
    const response = await axios.post(API_URL, documento);
    return response.data;
};

export const updateDocumento = async (id: number, documento: Documento): Promise<Documento> => {
    const response = await axios.put(`${API_URL}/${id}`, documento);
    return response.data;
};

export const deleteDocumento = async (id: number): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
};