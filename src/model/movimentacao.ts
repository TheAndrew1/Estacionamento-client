import { AbstractEntity } from "./abstract-entity";
import { Veiculo } from "./veiculo";
import { Condutor } from "./condutor";

export class Movimentacao extends AbstractEntity {
    entrada !: Date;

    saida !: Date;

    tempo !: number;

    tempoMulta !: number;

    tempoDesconto !: number;

    veiculo !: Veiculo;

    condutor !: Condutor;

    valor !: number;

    valorMulta !: number;

    valorDesconto !: number;

    valorTotal !: number;

    constructor() {
        super();
        this.veiculo = new Veiculo();
        this.condutor = new Condutor();
        this.ativo = true;
    }
}