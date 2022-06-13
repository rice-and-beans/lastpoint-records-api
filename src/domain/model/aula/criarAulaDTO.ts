export interface ICriarAulaRequestDTO {
    codigo: string;
    datahorainicio: Date;
    datahorafim: Date;
    nome: string;
    descricao: string;
    usuarioCodigo: string;
    turmaCodigo: string;
    cursoCodigo: string;
    disciplinaCodigo: string;
}