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
    dataHoraInicio: Date;
    dataHoraFim: Date;
    campo: string;
}

export interface IPesquisarChamadaPorCodigoRequestDTO {
    codigo: string;
}

export interface IJaFeitaChamadaRequestDTO {
    codigoaula: string;
    codigousuario: string;
}