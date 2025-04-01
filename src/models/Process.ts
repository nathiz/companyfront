
import { Area } from './Area';
import { Documento } from './Documento';
import { Ferramenta } from './Ferramenta';
import { Responsavel } from './Responsavel';
import { SubProcess } from './SubProcess';

export interface Process {
    id: number;
    nome: string;
    descricao: string;
    areaId: number;
    area?: Area;
    subprocessos?: SubProcess[];
    ferramentas?: Ferramenta[];
    responsaveis?: Responsavel[];
    documentos?: Documento[];
}