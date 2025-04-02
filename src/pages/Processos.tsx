import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Process } from "../models/Process"; // Importa o modelo de Process
import { Area } from "../models/Area"; // Importa o modelo de Area
import { getAllProcesses } from "../services/ProcessService"; // Função para buscar processos
import { getAllAreas } from "../services/AreaService"; // Função para buscar áreas

const Processos: React.FC = () => {
    const [processos, setProcessos] = useState<Process[]>([]); // Estado para armazenar processos
    const [areas, setAreas] = useState<Area[]>([]); // Estado para armazenar áreas
    const [selectedArea, setSelectedArea] = useState<number | "all">("all"); // Estado da área selecionada
    const [loading, setLoading] = useState<boolean>(true); // Estado de carregamento
    const [error, setError] = useState<string | null>(null); // Estado de erro
    const navigate = useNavigate(); // Hook para navegação

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [processData, areaData] = await Promise.all([
                    getAllProcesses(),
                    getAllAreas()
                ]);
                setProcessos(processData);
                setAreas(areaData);
            } catch (err) {
                setError("Erro ao carregar os dados");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Filtrar os processos com base na área selecionada
    const processosFiltrados = selectedArea === "all"
        ? processos
        : processos.filter(processo => processo.areaId === selectedArea);

    return (
        <div>
            <h2>Processos</h2>
            
            {/* Botão para cadastrar novo processo */}
            <button onClick={() => navigate("/processos/cadastrar")}>
                Cadastrar Processo
            </button>

            {/* Dropdown de seleção de área */}
            <label htmlFor="areaSelect">Filtrar por Área: </label>
            <select
                id="areaSelect"
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value === "all" ? "all" : Number(e.target.value))}
            >
                <option value="all">Todas as Áreas</option>
                {areas.map((area) => (
                    <option key={area.id} value={area.id}>
                        {area.nome}
                    </option>
                ))}
            </select>

            {loading ? (
                <p>Carregando...</p>
            ) : error ? (
                <p>{error}</p>
            ) : processosFiltrados.length > 0 ? (
                <ul>
                    {processosFiltrados.map((processo) => (
                        <li key={processo.id}>
                            <h4>{processo.nome}</h4>
                            <p>{processo.descricao}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Nenhum processo encontrado para esta área.</p>
            )}
        </div>
    );
};

export default Processos;