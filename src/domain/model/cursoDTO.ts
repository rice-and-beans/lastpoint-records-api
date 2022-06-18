export interface ICriarCursoRequestDTO {
    codigo: string;
    nome: string;
    descricao: string;
}

export interface IAtualizarCursoRequestDTO {
    codigo: string;
    nome: string;
    descricao: string;
}

export interface IDeletarCursoRequestDTO {
    codigo: string;
}

export interface IPesquisarCursoRequestDTO {
    campo: string;
}

export interface IPesquisarCursoPorCodigoRequestDTO {
    codigo: string;
}