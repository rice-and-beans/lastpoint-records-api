export interface ICriarChamadaRequestDTO {
    codigo: string;
    justificativa?: string;
    usuarioCodigo: string;
    aulaCodigo: string;
}

export interface IAtualizarChamadaRequestDTO {
    codigo: string;
    justificativa: string;
    usuarioCodigo: string;
    aulaCodigo: string;
}

export interface IDeletarChamadaRequestDTO {
    codigo: string;
}

export interface IPesquisarChamadaRequestDTO {
    datahorainicio: Date;
    datahorafim: Date;
    campo: string;
}