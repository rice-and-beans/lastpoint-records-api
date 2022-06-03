export interface IAtualizarAulaRequestDTO {
    codigo: string;
    datahorainicio: Date;
    datahorafim: Date;
    nome: string;
    descricao: string;
    usuarioId: string;
}