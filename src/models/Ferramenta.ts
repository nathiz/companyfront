import { Process } from "./Process";
import { SubProcess } from "./SubProcess";

export interface Ferramenta {
    id: number;
    nome: string;
    descricao: string;
    processoId?: number;
    processo?: Process;
    subProcessId?: number;
    subProcesso?: SubProcess;
}