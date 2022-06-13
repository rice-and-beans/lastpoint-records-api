import { Aula } from "../../data/entities/aula";

export interface IAulaRepository {
    buscarPorCodigo(codigo: string): Promise<Aula>;
    pesquisar(data?);
    salvar(Curso: Aula);
    atualizar(codigo: Aula);
    deletar(codigo:string)
}