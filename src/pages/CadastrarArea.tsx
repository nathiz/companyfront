import React, { useState } from "react";
import api from "services/api";
import { useNavigate } from "react-router-dom";

const CadastrarArea: React.FC = () => {
    const [nome, setNome] = useState("");
    const [departamento, setDepartamento] = useState("");
    const [setor, setSetor] = useState("");
    const [erro, setErro] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErro(null);

        try {
            await api.post("/Area", { nome, departamento, setor });
            navigate("/areas"); // Redireciona para a página de listagem de áreas
        } catch (error) {
            setErro("Erro ao cadastrar a área. Tente novamente.");
        }
    };

    return (
        <div>
            <h2>Cadastrar Nova Área</h2>
            {erro && <p style={{ color: "red" }}>{erro}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
                </label>
                <label>
                    Departamento:
                    <input type="text" value={departamento} onChange={(e) => setDepartamento(e.target.value)} required />
                </label>
                <label>
                    Setor:
                    <input type="text" value={setor} onChange={(e) => setSetor(e.target.value)} required />
                </label>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default CadastrarArea;