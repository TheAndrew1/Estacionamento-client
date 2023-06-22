import { AbstractEntity } from "./abstract-entity";

export class Marca extends AbstractEntity {
    marca !: string;

    constructor() {
        super()
        this.ativo = true
    }
}