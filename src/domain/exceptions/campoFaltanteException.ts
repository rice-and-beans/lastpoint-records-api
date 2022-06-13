export class CampoFaltanteException extends Error {
    
    constructor(msg: string) {
        super(msg);
        Object.setPrototypeOf(this, CampoFaltanteException.prototype);
    }

    getMenssage() {
        return this.message;
    }

}