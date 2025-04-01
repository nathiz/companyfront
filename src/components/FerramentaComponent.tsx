import React from 'react'; // Importa a biblioteca React
import { Ferramenta } from '../models/Ferramenta'; // Importa o modelo de dados Ferramenta

// Define as propriedades do componente FerramentaComponent
interface FerramentaProps {
    ferramenta: Ferramenta; // O componente recebe um objeto do tipo Ferramenta
}

// Componente funcional para exibir as informações de uma ferramenta
const FerramentaComponent: React.FC<FerramentaProps> = ({ ferramenta }) => {
    return (
        <div>
            <h4>Ferramenta</h4>
            {/* Exibe o nome da ferramenta */}
            <p><strong>Nome:</strong> {ferramenta?.nome}</p> 
            {/* Exibe a descrição da ferramenta */}
            <p><strong>Descrição:</strong> {ferramenta?.descricao}</p> 
            {/* Condicionalmente exibe o nome do processo se a ferramenta estiver relacionada a um processo */}
            {ferramenta?.processo ? (
                <p><strong>Processo:</strong> {ferramenta.processo?.nome}</p>
            ) : null}
            {/* Condicionalmente exibe o nome do subprocesso se a ferramenta estiver relacionada a um subprocesso */}
            {ferramenta?.subProcesso ? (
                <p><strong>Subprocesso:</strong> {ferramenta.subProcesso?.nome}</p>
            ) : null}
        </div>
    );
};

export default FerramentaComponent; // Exporta o componente para ser utilizado em outras partes do projeto