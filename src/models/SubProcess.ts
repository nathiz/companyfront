import { Documento } from "./Documento";
import { Ferramenta } from "./Ferramenta";
import { Process } from "./Process";
import { Responsavel } from "./Responsavel";

export interface SubProcess {
    id: number;
    nome: string;
    processId: number;
    processo?: Process;
    subprocessosFilhos?: SubProcess[];
    ferramentas?: Ferramenta[];
    responsaveis?: Responsavel[];
    documentos?: Documento[];
}