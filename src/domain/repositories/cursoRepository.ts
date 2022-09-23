import { Curso } from "../../data/entities/curso";

export interface ICursoRepository {
    buscarPorCodigo(codigo: string): Promise<Curso>;
    pesquisar(campo: string);
    salvar(curso: Curso);
    atualizar(codigo: Curso);
    deletar(codigo:string)
}