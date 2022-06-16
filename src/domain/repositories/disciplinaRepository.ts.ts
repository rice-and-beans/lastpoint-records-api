import { Disciplina } from "../../data/entities/disciplina";

export interface IDisciplinaRepository {
    buscarPorCodigo(email: string): Promise<Disciplina>;
    pesquisar(campo: string);
    salvar(Disciplina: Disciplina);
    atualizar(codigo: Disciplina);
    deletar(codigo:string)
}