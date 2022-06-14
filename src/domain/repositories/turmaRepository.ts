import { Turma } from "../../data/entities/turma";

export interface ITurmaRepository {
    buscarPorCodigo(email: string): Promise<Turma>;
    pesquisar(nome?: string);
    salvar(Turma: Turma);
    atualizar(codigo: Turma);
    deletar(codigo:string)
}