import React, { useEffect, useState } from "react";
import { Responsavel } from "../models/Responsavel"; // Importa o modelo de dados
import { getResponsaveis } from "../services/ResponsavelService"; // Importa a função de serviço

const Responsaveis: React.FC = () => {
    const [responsaveis, setResponsaveis] = useState<Responsavel[]>([]); // Estado para armazenar os responsáveis
    const [loading, setLoading] = useState<boolean>(true); // Estado de carregamento
    const [error, setError] = useState<string | null>(null); // Estado de erro

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getResponsaveis();
                setResponsaveis(data as Responsavel[]); // Força a tipagem correta
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };
    
        fetchData();
    }, []); // A dependência vazia garante que a chamada só será feita uma vez

    return (
        <div>
            <h2>Responsáveis</h2>
            {loading ? (
                <p>Carregando...</p> // Exibe enquanto os dados estão sendo carregados
            ) : error ? (
                <p>{error}</p> // Exibe mensagem de erro caso algo tenha dado errado
            ) : responsaveis.length > 0 ? (
                <ul>
                    {responsaveis.map((responsavel) => (
                        <li key={responsavel.id}>
                            <h4>{responsavel.nome}</h4>
                            {responsavel.processo ? (
                                <p><strong>Processo:</strong> {responsavel.processo.nome}</p>
                            ) : null}
                            {responsavel.subProcesso ? (
                                <p><strong>Subprocesso:</strong> {responsavel.subProcesso.nome}</p>
                            ) : null}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Nenhum responsável encontrado.</p> // Exibe caso não haja responsáveis
            )}
        </div>
    );
};

export default Responsaveis;