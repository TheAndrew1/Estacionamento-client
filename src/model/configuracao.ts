import { AbstractEntity } from "./abstract-entity";

export class Configuracao extends AbstractEntity {
    vagasVan !: number;

    vagasCarro !: number;

    vagasMoto !: number;
    
    horarioFecha !: Date;

    valorMinuto !: number;

    valorMultaMinuto !: number;

    tempoParaDesconto !: number;

    tempoDesconto !: number;

    gerarDesconto !: boolean;

    constructor() {
        super()
        this.ativo = true
    }
}