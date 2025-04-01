import React from 'react'; // Importa a biblioteca React
import { Area } from '../models/Area'; // Importa o modelo de dados "Area"
import ProcessoComponent from './ProcessoComponent'; // Importa o componente que exibe os processos

// Define a interface para as propriedades esperadas pelo componente
interface AreaProps {
    area: Area; // O componente recebe um objeto do tipo "Area"
}

// Componente funcional que representa uma área dentro do sistema
const AreaComponent: React.FC<AreaProps> = ({ area }) => {
    return (
        <div>
            {/* Exibe o nome da área */}
            <h2>{area.nome}</h2>

            {/* Exibe as informações do departamento e setor da área */}
            <p><strong>Departamento:</strong> {area.departamento}</p>
            <p><strong>Setor:</strong> {area.setor}</p>
            
            {/* Seção que lista os processos dentro da área */}
            <h3>Processos</h3>
            {area.processos.map((processo) => (
                <div key={processo.id}>
                    {/* Adiciona o componente ProcessoComponent para cada processo da área */}
                    <ProcessoComponent processo={processo} />
                </div>
            ))}
        </div>
    );
};

export default AreaComponent; // Exporta o componente para ser utilizado em outras partes do projeto