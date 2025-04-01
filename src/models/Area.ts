import { Process } from "./Process";

export interface Area {
    id: number;
    nome: string;
    departamento: string;
    setor: string;
    processos: Process[];
}