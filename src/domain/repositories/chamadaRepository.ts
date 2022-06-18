import { Chamada } from "../../data/entities/chamada";
import { IPesquisarChamadaRequestDTO } from "../../domain/model/chamadaDTO";

export interface IChamadaRepository {
    buscarPorCodigo(codigo: string): Promise<Chamada>;
    pesquisar(data: IPesquisarChamadaRequestDTO);
    jaFeitaChamada(data)
    salvar(Chamada: Chamada);
    atualizar(codigo: Chamada);
    deletar(codigo:string)
}