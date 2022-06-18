export class Aula {
    public readonly id?: string;
    public codigo: string;
    public dataHoraInicio: Date;
    public dataHoraFim: Date;
    public nome: string;
    public descricao?: string;
    public usuarioCodigo: string;
    public turmaCodigo: string;
    public cursoCodigo: string;
    public disciplinaCodigo: string;
    public token?: string;

    constructor(props: Omit<Aula, 'id'>, id?: string){
        Object.assign(this, props);
    }
}