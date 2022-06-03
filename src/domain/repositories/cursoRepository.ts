import { Curso } from "../../data/entities/curso";

export interface ICursoRepository {
    buscarPorCodigo(email: string): Promise<Curso>;
    pesquisar();
    salvar(Curso: Curso);
    atualizar(codigo: Curso);
    deletar(codigo:string)
}