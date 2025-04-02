import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate para navegação
import { Ferramenta } from "../models/Ferramenta";  
import { getAllFerramentas } from "../services/FerramentaService"; 

const Ferramentas: React.FC = () => {
    const [ferramentas, setFerramentas] = useState<Ferramenta[]>([]);  
    const [loading, setLoading] = useState<boolean>(true);  
    const [error, setError] = useState<string | null>(null);  
    const navigate = useNavigate(); // Inicializa a navegação

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAllFerramentas();
                setFerramentas(data);
            } catch (err) {
                setError("Erro ao carregar as ferramentas");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Ferramentas</h2>

            {/* Botão para cadastrar nova ferramenta */}
            <button onClick={() => navigate("/ferramentas/cadastrar")}>
                Cadastrar Ferramenta
            </button>

            {loading ? (
                <p>Carregando...</p>
            ) : error ? (
                <p>{error}</p>
            ) : ferramentas.length > 0 ? (
                <ul>
                    {ferramentas.map((ferramenta) => (
                        <li key={ferramenta.id}>
                            <h4>{ferramenta.nome}</h4>
                            <p>{ferramenta.descricao}</p>
                            {ferramenta.processo && (
                                <p><strong>Processo:</strong> {ferramenta.processo?.nome}</p>
                            )}
                            {ferramenta.subProcesso && (
                                <p><strong>Subprocesso:</strong> {ferramenta.subProcesso?.nome}</p>
                            )}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Nenhuma ferramenta encontrada.</p>
            )}
        </div>
    );
};

export default Ferramentas;