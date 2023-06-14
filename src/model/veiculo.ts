import { AbstractEntity } from "./abstract-entity";
import { Cor } from "./cor";
import { Tipo } from "./tipo";
import { Modelo } from "./modelo";

export class Veiculo extends AbstractEntity {
    placa !: string;

    cor !: Cor;

    modelo !: Modelo;

    tipo !: Tipo;

    ano !: number;

    constructor() {
        super()
        this.ativo = true
    }
}