import { Disciplina } from "../../data/entities/disciplina";

export interface IDisciplinaRepository {
    buscarPorCodigo(email: string): Promise<Disciplina>;
    pesquisar(nome?: string);
    salvar(Disciplina: Disciplina);
    atualizar(codigo: Disciplina);
    deletar(codigo:string)
}