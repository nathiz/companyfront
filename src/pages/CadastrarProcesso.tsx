import React, { useState, FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createProcess } from "../services/ProcessService";
import { Area } from "../models/Area";
import { getAllAreas } from "../services/AreaService";

const CadastroProcesso: React.FC = () => {
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [areaId, setAreaId] = useState<number | null>(null);
    const [areas, setAreas] = useState<Area[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAreas = async () => {
            try {
                const data = await getAllAreas();
                setAreas(data);
            } catch (err) {
                setError("Erro ao carregar áreas.");
            }
        };
        fetchAreas();
    }, []);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        
        if (!nome || !descricao || !areaId) {
            setError("Preencha todos os campos.");
            return;
        }
    
        const processData = {
            nome,
            descricao,
            areaId: areaId ?? undefined,  // Garante que `undefined` não quebre a API
        };
    
        console.log("Processo sendo enviado:", processData);
    
        try {
            await createProcess(processData);
            navigate("/processos");
        } catch (err: any) {
            console.error("Erro ao cadastrar processo:", err.response?.data);
            setError(err.response?.data || "Erro ao cadastrar processo.");
        }
    };    

    return (
        <div>
            <h2>Cadastrar Processo</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome:</label>
                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                </div>
                <div>
                    <label>Descrição:</label>
                    <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                </div>
                <div>
                    <label>Área:</label>
                    <select value={areaId ?? ""} onChange={(e) => {
                        const value = e.target.value ? Number(e.target.value) : null;
                        setAreaId(value);
                    }}>
                        <option value="">Selecione uma área</option>
                        {areas.map((area) => (
                            <option key={area.id} value={area.id}>
                                {area.nome}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? "Cadastrando..." : "Cadastrar"}
                </button>
            </form>
        </div>
    );
};

export default CadastroProcesso;