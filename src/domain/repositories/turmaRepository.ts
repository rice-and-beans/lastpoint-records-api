import { Turma } from "../../data/entities/turma";

export interface ITurmaRepository {
    buscarPorCodigo(email: string): Promise<Turma>;
    pesquisar();
    salvar(Curso: Turma);
    atualizar(codigo: Turma);
    deletar(codigo:string)
}