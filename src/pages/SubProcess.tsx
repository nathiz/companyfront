import { SubProcess } from "../models/SubProcess";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Process } from "../models/Process";
import { getAllProcesses } from "../services/ProcessService"; // Função para buscar processos
import { getAllSubProcesses } from "../services/SubProcessService"; // Função para buscar subprocessos

const SubProcessos: React.FC = () => {
    const navigate = useNavigate();
    const [subprocessos, setSubprocessos] = useState<SubProcess[]>([]);
    const [processos, setProcessos] = useState<Process[]>([]);
    const [selectedProcess, setSelectedProcess] = useState<number | "all">("all");
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [subProcessData, processData] = await Promise.all([
                    getAllSubProcesses(),
                    getAllProcesses(),
                ]);
                setSubprocessos(subProcessData);
                setProcessos(processData);
            } catch (err) {
                setError("Erro ao carregar os dados");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Filtrar os subprocessos com base no processo selecionado
    const subprocessosFiltrados =
        selectedProcess === "all"
            ? subprocessos
            : subprocessos.filter((subprocesso) => subprocesso.processId === selectedProcess);

    return (
        <div>
            <h2>Subprocessos</h2>

            {/* Botão para cadastrar subprocesso */}
            <button onClick={() => navigate("/cadastro-subprocesso")}>
                Cadastrar Subprocesso
            </button>

            {/* Dropdown de seleção de processo */}
            <label htmlFor="processSelect">Filtrar por Processo: </label>
            <select
                id="processSelect"
                value={selectedProcess}
                onChange={(e) =>
                    setSelectedProcess(e.target.value === "all" ? "all" : Number(e.target.value))
                }
            >
                <option value="all">Todos os Processos</option>
                {processos.map((processo) => (
                    <option key={processo.id} value={processo.id}>
                        {processo.nome}
                    </option>
                ))}
            </select>

            {loading ? (
                <p>Carregando...</p>
            ) : error ? (
                <p>{error}</p>
            ) : subprocessosFiltrados.length > 0 ? (
                <ul>
                    {subprocessosFiltrados.map((subprocesso) => (
                        <li key={subprocesso.id}>
                            <h4>{subprocesso.nome}</h4>
                            {subprocesso.subprocessosFilhos?.length ? (
                                <div>
                                    <h4>Subprocessos Filhos</h4>
                                    <ul>
                                        {subprocesso.subprocessosFilhos.map((filho) => (
                                            <li key={filho.id}>{filho.nome}</li>
                                        ))}
                                    </ul>
                                </div>
                            ) : null}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Nenhum subprocesso encontrado para este processo.</p>
            )}
        </div>
    );
};

export default SubProcessos;