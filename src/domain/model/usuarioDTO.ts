export interface ICriarUsuarioRequestDTO {
    codigo: string;
    nome: string;
    email: string;
    senha: string;
    tipo: number;
}

export interface IAtualizarUsuarioRequestDTO {
    codigo: string;
    nome: string;
    email: string;
    senha: string;
    tipo: number;
}

export interface IDeletarUsuarioRequestDTO {
    codigo: string;
}

export interface IPesquisarUsuarioRequestDTO {
    campo: string;
}
