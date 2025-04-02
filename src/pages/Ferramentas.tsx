import React, { useEffect, useState } from "react";
import { Ferramenta } from "../models/Ferramenta";  // Importa o modelo de dados Ferramenta
import { getAllFerramentas } from "services/FerramentaService"; // Função para buscar as ferramentas

const Ferramentas: React.FC = () => {
    const [ferramentas, setFerramentas] = useState<Ferramenta[]>([]);  // Inicializa com um array vazio
    const [loading, setLoading] = useState<boolean>(true);  // Estado de carregamento
    const [error, setError] = useState<string | null>(null);  // Estado de erro

    useEffect(() => {
        // Função para buscar as ferramentas ao carregar a página
        const fetchData = async () => {
            try {
                const data = await getAllFerramentas(); // Chama a função que pega os dados
                setFerramentas(data); // Atualiza o estado com as ferramentas
            } catch (err) {
                setError('Erro ao carregar as ferramentas'); // Atualiza o estado de erro
            } finally {
                setLoading(false); // Define que o carregamento foi concluído
            }
        };

        fetchData();
    }, []); // A dependência vazia garante que a chamada só será feita uma vez

    return (
        <div>
            <h2>Ferramentas</h2>
            {loading ? (
                <p>Carregando...</p> // Exibe enquanto os dados estão sendo carregados
            ) : error ? (
                <p>{error}</p> // Exibe mensagem de erro caso algo tenha dado errado
            ) : ferramentas.length > 0 ? (
                <ul>
                    {ferramentas.map((ferramenta) => (
                        <li key={ferramenta.id}>
                            <h4>{ferramenta.nome}</h4>
                            <p>{ferramenta.descricao}</p>
                            {ferramenta.processo ? (
                                <p><strong>Processo:</strong> {ferramenta.processo?.nome}</p>
                            ) : null}
                            {ferramenta.subProcesso ? (
                                <p><strong>Subprocesso:</strong> {ferramenta.subProcesso?.nome}</p>
                            ) : null}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Nenhuma ferramenta encontrada.</p> // Exibe caso não haja ferramentas
            )}
        </div>
    );
};

export default Ferramentas;