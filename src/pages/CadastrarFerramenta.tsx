import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Ferramenta } from "../models/Ferramenta";
import { Process } from "../models/Process";
import { SubProcess } from "../models/SubProcess";
import { getAllProcesses } from "../services/ProcessService";
import { getAllSubProcesses } from "../services/SubProcessService";
import { createFerramenta } from "../services/FerramentaService";

const CadastrarFerramenta: React.FC = () => {
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [processos, setProcessos] = useState<Process[]>([]);
    const [subprocessos, setSubprocessos] = useState<SubProcess[]>([]);
    const [selectedProcesso, setSelectedProcesso] = useState<number | null>(null);
    const [filteredSubprocessos, setFilteredSubprocessos] = useState<SubProcess[]>([]);
    const [selectedSubProcesso, setSelectedSubProcesso] = useState<number | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const processosData = await getAllProcesses();
                const subprocessosData = await getAllSubProcesses();
                setProcessos(processosData);
                setSubprocessos(subprocessosData);
            } catch (error) {
                console.error("Erro ao carregar processos e subprocessos:", error);
            }
        };

        fetchData();
    }, []);

    // Filtra os subprocessos de acordo com o processo selecionado
    useEffect(() => {
        if (selectedProcesso) {
            setFilteredSubprocessos(subprocessos.filter(sub => sub.processoId === selectedProcesso));
        } else {
            setFilteredSubprocessos([]);
        }
    }, [selectedProcesso, subprocessos]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const novaFerramenta: Omit<Ferramenta, "id"> = {
                nome,
                descricao,
                processoId: selectedProcesso || undefined,
                subProcessId: selectedSubProcesso || undefined,
            };

            await createFerramenta(novaFerramenta);
            navigate("/ferramentas");
        } catch (error) {
            console.error("Erro ao cadastrar ferramenta:", error);
        }
    };

    return (
        <div>
            <h2>Cadastrar Ferramenta</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome:</label>
                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
                </div>
                <div>
                    <label>Descrição:</label>
                    <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} required />
                </div>
                <div>
                    <label>Processo:</label>
                    <select value={selectedProcesso ?? ""} onChange={(e) => setSelectedProcesso(Number(e.target.value))}>
                        <option value="">Selecione um processo</option>
                        {processos.map((proc) => (
                            <option key={proc.id} value={proc.id}>
                                {proc.nome}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Subprocesso:</label>
                    <select
                        value={selectedSubProcesso ?? ""}
                        onChange={(e) => setSelectedSubProcesso(Number(e.target.value))}
                        disabled={filteredSubprocessos.length === 0}
                    >
                        <option value="">Selecione um subprocesso</option>
                        {filteredSubprocessos.map((sub) => (
                            <option key={sub.id} value={sub.id}>
                                {sub.nome}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default CadastrarFerramenta;