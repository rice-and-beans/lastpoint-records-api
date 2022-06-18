import { Disciplina } from "../../data/entities/disciplina";
import { IPesquisarDisciplinaRequestDTO } from "../model/disciplinaDTO";

export interface IDisciplinaRepository {
    buscarPorCodigo(codigo: string): Promise<Disciplina>;
    pesquisar(campo: string);
    salvar(disciplina: Disciplina);
    atualizar(codigo: Disciplina);
    deletar(codigo:string)
}