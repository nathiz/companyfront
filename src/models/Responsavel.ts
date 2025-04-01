import { Process } from "./Process";
import { SubProcess } from "./SubProcess";

export interface Responsavel {
    id: number;
    nome: string;
    processoId?: number;
    processo?: Process;
    subProcessId?: number;
    subProcesso?: SubProcess;
}