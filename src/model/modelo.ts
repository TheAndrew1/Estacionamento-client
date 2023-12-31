import { AbstractEntity } from "./abstract-entity";
import { Marca } from "./marca";

export class Modelo extends AbstractEntity {
    nome !: string;

    marca !: Marca;

    constructor() {
        super();
        this.marca = new Marca();
        this.ativo = true;
    }
}