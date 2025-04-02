import React from 'react';
import { Process } from '../models/Process';

interface ProcessoProps {
    processo: Process;
}

const ProcessoComponent: React.FC<ProcessoProps> = ({ processo }) => {
    return (
        <div style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px', borderRadius: '5px' }}>
            <h3>{processo.nome}</h3>
            <p><strong>Descrição:</strong> {processo.descricao}</p>
            
            {processo.subprocessos && processo.subprocessos.length > 0 ? (
                <div>
                    <h4>Subprocessos:</h4>
                    <ul>
                        {processo.subprocessos.map((sub) => (
                            <li key={sub.id}>{sub.nome}</li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p><em>Sem subprocessos cadastrados.</em></p>
            )}
        </div>
    );
};

export default ProcessoComponent;