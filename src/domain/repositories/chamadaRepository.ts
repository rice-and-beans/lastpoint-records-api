import { Chamada } from "../../data/entities/chamada";

export interface IChamadaRepository {
    buscarPorCodigo(codigo: string): Promise<Chamada>;
    pesquisar();
    salvar(Chamada: Chamada);
    atualizar(codigo: Chamada);
    deletar(codigo:string)
}