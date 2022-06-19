export interface ICriarAulaRequestDTO {
    codigo: string;
    dataHoraInicio: Date;
    dataHoraFim: Date;
    nome: string;
    descricao?: string;
    usuarioCodigo: string;
    turmaCodigo: string;
    cursoCodigo: string;
    disciplinaCodigo: string;
}

export interface IAtualizarAulaRequestDTO {
    codigo: string;
    dataHoraInicio: Date;
    dataHoraFim: Date;
    nome: string;
    descricao?: string;
    usuarioCodigo: string;
    turmaCodigo: string;
    cursoCodigo: string;
    disciplinaCodigo: string;
    token?: string;
}

export interface IDeletarAulaRequestDTO {
    codigo: string;
}

export interface IPesquisarAulaRequestDTO {
    dataHoraInicio: Date;
    dataHoraFim: Date;
    campo: string;
}

export interface IAtualizarAulaTokenRequestDTO {
    codigo: string;
    token?: string;
}

export interface IPesquisarAulaPorCodigoRequestDTO {
    codigo: string;
}

export interface IRecuperaAulaAtualRequestDTO {
    codUsuario: string;
    codAula: string;
}