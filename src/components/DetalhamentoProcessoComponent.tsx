import React from 'react'; // Importa a biblioteca React
import { DetalhamentoProcesso } from '../models/DetalhamentoProcesso'; // Importa o modelo de dados DetalhamentoProcesso

// Define as propriedades do componente DetalhamentoProcessoComponent
interface DetalhamentoProcessoProps {
  detalhamento: DetalhamentoProcesso; // Recebe um objeto do tipo DetalhamentoProcesso
}

// Componente funcional para exibir os detalhes de um processo
const DetalhamentoProcessoComponent: React.FC<DetalhamentoProcessoProps> = ({ detalhamento }) => {
    return (
    <div>
        <h4>Detalhamento do Processo</h4>
        {/* Exibe o detalhamento do processo */}
        <p><strong>Ferramentas Utilizadas:</strong> {detalhamento.ferramentasUtilizadas}</p>
        <p><strong>Responsáveis:</strong> {detalhamento.responsaveis}</p>
        <p><strong>Documentação Associada:</strong> {detalhamento.documentacaoAssociada}</p>
    </div>
    );
};

export default DetalhamentoProcessoComponent; // Exporta o componente para ser utilizado em outras partes do projeto