import React, { useEffect, useState } from "react";
import { Documento } from "../models/Documento"; // Importa o modelo de dados Documento
import { getAllDocumentos } from "../services/DocumentoService"; // Função para buscar os documentos

const Documentos: React.FC = () => {
    const [documentos, setDocumentos] = useState<Documento[]>([]); // Estado para armazenar os documentos
    const [loading, setLoading] = useState<boolean>(true); // Estado de carregamento
    const [error, setError] = useState<string | null>(null); // Estado de erro

    useEffect(() => {
        // Função para buscar os documentos ao carregar a página
        const fetchData = async () => {
            try {
                const data = await getAllDocumentos(); // Chama a função que pega os dados
                setDocumentos(data); // Atualiza o estado com os documentos
            } catch (err) {
                setError('Erro ao carregar os documentos'); // Atualiza o estado de erro
            } finally {
                setLoading(false); // Define que o carregamento foi concluído
            }
        };

        fetchData();
    }, []); // A dependência vazia garante que a chamada só será feita uma vez

    return (
        <div>
            <h2>Documentos</h2>
            {loading ? (
                <p>Carregando...</p> // Exibe enquanto os dados estão sendo carregados
            ) : error ? (
                <p>{error}</p> // Exibe mensagem de erro caso algo tenha dado errado
            ) : documentos.length > 0 ? (
                <ul>
                    {documentos.map((documento) => (
                        <li key={documento.id}>
                            <h4>{documento.nome}</h4>
                            <p><strong>Tipo:</strong> {documento.tipo}</p>
                            {documento.processo ? (
                                <p><strong>Processo:</strong> {documento.processo.nome}</p>
                            ) : null}
                            {documento.subProcesso ? (
                                <p><strong>Subprocesso:</strong> {documento.subProcesso.nome}</p>
                            ) : null}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Nenhum documento encontrado.</p> // Exibe caso não haja documentos
            )}
        </div>
    );
};

export default Documentos;