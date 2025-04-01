import React from 'react'; // Importa a biblioteca React
import { Process } from '../models/Process'; // Importa o modelo de dados Process

// Define as propriedades do componente ProcessoComponent
interface ProcessoProps {
    processo: Process; // O componente recebe um objeto do tipo Process
}

// Componente funcional para exibir as informações de um processo e seus subprocessos
const ProcessoComponent: React.FC<ProcessoProps> = ({ processo }) => {
    return (
        <div>
            {/* Exibe o nome do processo */}
            <h3>{processo.nome}</h3>
            {/* Exibe a descrição do processo */}
            <p>{processo.descricao}</p>
            {/* Exibe a lista de subprocessos associados ao processo */}
            <h4>Subprocessos</h4>
            {/* Mapeia e exibe os subprocessos, caso existam */}
            <h4>Subprocessos</h4>
            {processo.subprocessos && processo.subprocessos.length > 0 ? (
                processo.subprocessos.map((sub) => (
                    <div key={sub.id} className="border p-2 my-2 rounded">
                        {/* Exibe o nome de cada subprocesso */}
                        <p>{sub.nome}</p>
                    </div>
                ))
            ) : (
                <p className="text-muted">Nenhum subprocesso cadastrado.</p>
            )}
        </div>
    );
};

export default ProcessoComponent; // Exporta o componente para ser utilizado em outras partes do projeto