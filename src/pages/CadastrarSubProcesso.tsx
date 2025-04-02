import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllProcesses } from "../services/ProcessService";
import { createSubProcess } from "../services/SubProcessService";
import { Process } from "../models/Process";

const CadastrarSubProcesso: React.FC = () => {
    const navigate = useNavigate();
    const [nome, setNome] = useState("");
    const [processoId, setProcessoId] = useState<number | null>(null);
    const [processos, setProcessos] = useState<Process[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchProcesses = async () => {
            try {
                const processList = await getAllProcesses();
                setProcessos(processList);
            } catch (err) {
                setError("Erro ao carregar os processos");
            }
        };
        fetchProcesses();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
    
        if (!nome || processoId === null) { // Removida a comparação com "" ✅
            setError("Preencha todos os campos corretamente.");
            return;
        }
    
        const subProcessData = {
            nome,
            processoId, // Já garantimos que processId é um número
        };
    
        console.log("Enviando dados:", subProcessData); // 🔍 Debug
    
        setLoading(true);
        try {
            await createSubProcess(subProcessData);
            navigate("/subprocessos");
        } catch (err) {
            setError("Erro ao cadastrar subprocesso");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Cadastrar Subprocesso</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome:</label>
                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                </div>
                <div>
                    <label>Processo:</label>
                    <select
                        value={processoId ?? ""}
                        onChange={(e) => setProcessoId(e.target.value === "" ? null : Number(e.target.value))}
                    >
                        <option value="">Selecione um processo</option>
                        {processos.map((processo) => (
                            <option key={processo.id} value={processo.id}>{processo.nome}</option>
                        ))}
                    </select>
                </div>
                <button type="submit" disabled={loading}>{loading ? "Salvando..." : "Cadastrar"}</button>
            </form>
        </div>
    );
};

export default CadastrarSubProcesso;