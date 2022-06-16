export class RegistroNaoEncontradoException extends Error {
    
    constructor(msg: string) {
        super(msg);
        Object.setPrototypeOf(this, RegistroNaoEncontradoException.prototype);
    }

    getMessage() {
        return this.message;
    }

}