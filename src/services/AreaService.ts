import axios from "axios";
import { Area } from "../models/Area";

const API_URL = "http://localhost:5248/api/Area";

export const getAllAreas = async (): Promise<Area[]> => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const getAreaById = async (id: number): Promise<Area> => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

export const createArea = async (area: Area): Promise<Area> => {
    const response = await axios.post(API_URL, area);
    return response.data;
};

export const updateArea = async (id: number, area: Area): Promise<Area> => {
    const response = await axios.put(`${API_URL}/${id}`, area);
    return response.data;
};

export const deleteArea = async (id: number): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
};