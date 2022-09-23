export interface ICriarTurmaRequestDTO {
    codigo: string;
    nome: string;
    descricao: string;
}

export interface IAtualizarTurmaRequestDTO {
    codigo: string;
    nome: string;
    descricao: string;
}

export interface IDeletarTurmaRequestDTO {
    codigo: string;
}

export interface IPesquisarTurmaRequestDTO {
    campo: string;
}

export interface IPesquisarTurmaPorCodigoRequestDTO {
    codigo: string;
}