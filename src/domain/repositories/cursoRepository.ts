import { Curso } from "../../data/entities/curso";
import { IPesquisarCursoRequestDTO } from "../model/cursoDTO";

export interface ICursoRepository {
    buscarPorCodigo(email: string): Promise<Curso>;
    pesquisar(campo: string);
    salvar(Curso: Curso);
    atualizar(codigo: Curso);
    deletar(codigo:string)
}