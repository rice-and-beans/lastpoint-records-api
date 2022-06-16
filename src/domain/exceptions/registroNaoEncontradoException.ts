export class RegistroNaoEncontradoException extends Error {
    
    constructor(msg: string) {
        super(msg);
        Object.setPrototypeOf(this, RegistroNaoEncontradoException.prototype);
    }

    getMenssage() {
        return this.message;
    }

}