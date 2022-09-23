export interface ICriarDisciplinaRequestDTO {
    codigo: string;
    nome: string;
    descricao: string;
}

export interface IAtualizarDisciplinaRequestDTO {
    codigo: string;
    nome: string;
    descricao: string;
}

export interface IDeletarDisciplinaRequestDTO {
    codigo: string;
}

export interface IPesquisarDisciplinaRequestDTO {
    campo: string;
}

export interface IPesquisarDisciplinaPorCodigoRequestDTO {
    codigo: string;
}