import React, { useState, useEffect } from "react";
import api from "services/api";
import { useNavigate } from "react-router-dom";

interface Area {
    id: number;
    nome: string;
    departamento: string;
    setor: string;
    processos: { id: number; nome: string; descricao: string }[];
}

const Areas: React.FC = () => {
    const [areas, setAreas] = useState<Area[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAreas = async () => {
            try {
                const response = await api.get<Area[]>("/Area");
                setAreas(response.data);
            } catch (error) {
                console.error("Erro ao buscar as áreas:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAreas();
    }, []);

    return (
        <div>
            <h1>Gestão de Áreas</h1>
            <button onClick={() => navigate("/cadastrar-area")}>Cadastrar Nova Área</button>

            {loading ? (
                <p>Carregando...</p>
            ) : areas.length > 0 ? (
                areas.map((area) => (
                    <div key={area.id}>
                        <h3>{area.nome}</h3>
                        <p>{area.departamento} - {area.setor}</p>
                        <ul>
                            {area.processos.map((processo) => (
                                <li key={processo.id}>{processo.nome}: {processo.descricao}</li>
                            ))}
                        </ul>
                    </div>
                ))
            ) : (
                <p>Nenhuma área encontrada.</p>
            )}
        </div>
    );
};

export default Areas;