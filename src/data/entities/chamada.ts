export class Chamada {
    public readonly id?: string;
    public codigo: string;
    public usuarioCodigo: string;
    public aulaCodigo: string;
    public justificativa? : string;
    public presenca: string;
    
    constructor(props: Omit<Chamada, 'id'>, id?: string){
        Object.assign(this, props);
    }
}