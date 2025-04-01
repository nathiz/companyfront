import React from 'react'; // Importa a biblioteca React
import { SubProcess } from '../models/SubProcess'; // Importa o modelo de dados SubProcesso
import FerramentaComponent from './FerramentaComponent'; // Importa o componente FerramentaComponent
import DocumentoComponent from './DocumentoComponent'; // Importa o componente DocumentoComponent
import ResponsavelComponent from './ResponsavelComponent'; // Importa o componente ResponsavelComponent

// Define as propriedades do componente SubProcessoComponent
interface SubProcessoProps {
    subprocesso: SubProcess; // O componente recebe um objeto do tipo SubProcess
}

// Componente funcional para exibir as informações de um subprocesso e seus dados associados
const SubProcessoComponent: React.FC<SubProcessoProps> = ({ subprocesso }) => {
    return (
        <div>
            {/* Exibe o nome do subprocesso */}
            <h3>{subprocesso.nome}</h3>
            {/* Exibe o nome do processo associado ao subprocesso, verificando se o processo existe */}
            <p><strong>Processo:</strong> {subprocesso.processo?.nome}</p>
            {/* Exibe os subprocessos filhos, se houver */}
            {subprocesso.subprocessosFilhos?.length ? (
                <>
                    <h4>Subprocessos Filhos</h4>
                    {/* Mapeia e exibe os subprocessos filhos */}
                    {subprocesso.subprocessosFilhos.map((sub) => (
                        <div key={sub.id}>
                            <p>{sub.nome}</p> {/* Exibe o nome de cada subprocesso filho */}
                        </div>
                    ))}
                </>
            ) : null }

            {/* Exibe as ferramentas associadas ao subprocesso, se houver */}
            {subprocesso.ferramentas?.length ? (
                <>
                    <h4>Ferramentas</h4>
                    {/* Mapeia e exibe os componentes FerramentaComponent para cada ferramenta */}
                    {subprocesso.ferramentas.map((ferramenta) => (
                        <FerramentaComponent key={ferramenta.id} ferramenta={ferramenta} />
                    ))}
                </>
            ) : null }

            {/* Exibe os responsáveis associados ao subprocesso, se houver */}
            {subprocesso.responsaveis?.length ? (
                <>
                    <h4>Responsáveis</h4>
                    {/* Mapeia e exibe os componentes ResponsavelComponent para cada responsável */}
                    {subprocesso.responsaveis.map((responsavel) => (
                        <ResponsavelComponent key={responsavel.id} responsavel={responsavel} />
                    ))}
                </>
            ) : null }

            {/* Exibe os documentos associados ao subprocesso, se houver */}
            {subprocesso.documentos?.length ? (
                <>
                    <h4>Documentos</h4>
                    {/* Mapeia e exibe os componentes DocumentoComponent para cada documento */}
                    {subprocesso.documentos.map((documento) => (
                        <DocumentoComponent key={documento.id} documento={documento} />
                    ))}
                </>
            ) : null }
        </div>
    );
};

export default SubProcessoComponent; // Exporta o componente para ser utilizado em outras partes do projeto