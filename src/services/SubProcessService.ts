import axios from "axios";
import { SubProcess } from "../models/SubProcess";

const API_URL = "http://localhost:5248/api/SubProcess";

export const getAllSubProcesses = async (): Promise<SubProcess[]> => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const getSubProcessById = async (id: number): Promise<SubProcess> => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

export const createSubProcess = async (subProcess: SubProcess): Promise<SubProcess> => {
    const response = await axios.post(API_URL, subProcess);
    return response.data;
};

export const updateSubProcess = async (id: number, subProcess: SubProcess): Promise<SubProcess> => {
    const response = await axios.put(`${API_URL}/${id}`, subProcess);
    return response.data;
};

export const deleteSubProcess = async (id: number): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
};