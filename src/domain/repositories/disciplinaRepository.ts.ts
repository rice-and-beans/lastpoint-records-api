import { Disciplina } from "../../data/entities/disciplina";

export interface IDisciplinaRepository {
    buscarPorCodigo(email: string): Promise<Disciplina>;
    pesquisar();
    salvar(Curso: Disciplina);
    atualizar(codigo: Disciplina);
    deletar(codigo:string)
}