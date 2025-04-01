import { Process } from "./Process";
import { SubProcess } from "./SubProcess";

export interface Documento {
    id: number;
    nome: string;
    tipo: string;
    processoId?: number;
    processo?: Process;
    subProcessId?: number;
    subProcesso?: SubProcess;
}