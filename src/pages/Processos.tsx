import React, { useEffect, useState } from "react";
import { Process } from "../models/Process"; // Importa o modelo de dados Process
import { getAllProcesses } from "services/ProcessService";

const Processos: React.FC = () => {
    const [processos, setProcessos] = useState<Process[]>([]);

    useEffect(() => {
        // Chama a função que pega todos os processos ao carregar a página
        const fetchData = async () => {
            const data = await getAllProcesses();
            setProcessos(data);
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Processos</h2>
            {processos.length > 0 ? (
                <ul>
                    {processos.map((processo) => (
                        <li key={processo.id}>
                            <h4>{processo.nome}</h4>
                            <p>{processo.descricao}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Nenhum processo encontrado.</p>
            )}
        </div>
    );
};

export default Processos;