import React from 'react'; // Importa a biblioteca React
import { Responsavel } from '../models/Responsavel'; // Importa o modelo de dados Responsavel

// Define as propriedades do componente ResponsavelComponent
interface ResponsavelProps {
    responsavel: Responsavel; // O componente recebe um objeto do tipo Responsavel
}

// Componente funcional para exibir as informações de um responsável
const ResponsavelComponent: React.FC<ResponsavelProps> = ({ responsavel }) => {
    return (
        <div>
            <h4>Responsável</h4>
            {/* Exibe o nome do responsável */}
            <p><strong>Nome:</strong> {responsavel.nome}</p>
            {/* Condicionalmente exibe o nome do processo se o responsável estiver associado a um processo */}
            {responsavel.processo && <p><strong>Processo:</strong> {responsavel.processo.nome}</p>}
            {/* Condicionalmente exibe o nome do subprocesso se o responsável estiver associado a um subprocesso */}
            {responsavel.subProcesso && <p><strong>Subprocesso:</strong> {responsavel.subProcesso.nome}</p>}
        </div>
    );
};

export default ResponsavelComponent; // Exporta o componente para ser utilizado em outras partes do projeto