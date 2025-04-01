import React from 'react'; // Importa a biblioteca React
import { Documento } from '../models/Documento'; // Importa o modelo de dados Documento

// Define as propriedades do componente DocumentoComponent
interface DocumentoProps {
    documento: Documento; // O componente recebe um objeto do tipo Documento
}

// Componente funcional para exibir as informações de um documento
const DocumentoComponent: React.FC<DocumentoProps> = ({ documento }) => {
    return (
        <div>
            <h4>Documento</h4>
            {/* Exibe o nome do documento */}
            <p><strong>Nome:</strong> {documento.nome}</p>
            {/* Exibe o tipo do documento */}
            <p><strong>Tipo:</strong> {documento.tipo}</p>
            {/* Condicionalmente exibe o nome do processo se o documento estiver relacionado a um processo */}
            {documento.processo && <p><strong>Processo:</strong> {documento.processo.nome}</p>}
            {/* Condicionalmente exibe o nome do subprocesso se o documento estiver relacionado a um subprocesso */}
            {documento.subProcesso && <p><strong>Subprocesso:</strong> {documento.subProcesso.nome}</p>}
        </div>
    );
};

export default DocumentoComponent; // Exporta o componente para ser utilizado em outras partes do projeto