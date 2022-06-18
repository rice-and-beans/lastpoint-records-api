export interface ICriarAulaRequestDTO {
    codigo: string;
    datahorainicio: Date;
    datahorafim: Date;
    nome: string;
    descricao?: string;
    usuarioCodigo: string;
    turmaCodigo: string;
    cursoCodigo: string;
    disciplinaCodigo: string;
}

export interface IAtualizarAulaRequestDTO {
    codigo: string;
    datahorainicio: Date;
    datahorafim: Date;
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
    datahorainicio: Date;
    datahorafim: Date;
    campo: string;
}

export interface IAtualizarAulaTokenRequestDTO {
    codigo: string;
    token?: string;
}

export interface IPesquisarAulaPorCodigoRequestDTO {
    codigo: string;
}