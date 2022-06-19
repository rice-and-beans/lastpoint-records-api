import { Chamada } from "../../data/entities/chamada";
import { IPesquisarChamadaRequestDTO } from "../../domain/model/chamadaDTO";
import { IRecuperaChamadaJaFeitaRequestDTO } from "../../domain/model/chamadaDTO";

export interface IChamadaRepository {
    buscarPorCodigo(codigo: string): Promise<Chamada>;
    pesquisar(data: IPesquisarChamadaRequestDTO);
    salvar(chamada: Chamada);
    recuperaChamadaJafeita(data: IRecuperaChamadaJaFeitaRequestDTO)
    atualizar(codigo: Chamada);
    deletar(codigo:string)
}