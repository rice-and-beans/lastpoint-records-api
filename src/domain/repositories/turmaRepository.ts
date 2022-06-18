import { Turma } from "../../data/entities/turma";

export interface ITurmaRepository {
    buscarPorCodigo(codigo: string): Promise<Turma>;
    pesquisar(campo: string);
    salvar(turma: Turma);
    atualizar(codigo: Turma);
    deletar(codigo:string)
}