import { Aula } from "../../data/entities/aula";
import { IPesquisarAulaRequestDTO } from "../model/aulaDTO";
import { IRecuperaAulaAtualRequestDTO } from "../model/aulaDTO";

export interface IAulaRepository {
    buscarPorCodigo(codigo: string): Promise<Aula>;
    pesquisar(data: IPesquisarAulaRequestDTO);
    historicoAulasFuturasProfessor(codigo: string);
    historicoAulasFuturasAluno(codigo: string);
    historicoAulasPassadasProfessor(codigo: string);
    historicoAulasPassadasAluno(codigo: string);
    recuperaAulaAtualProfessor(data: IRecuperaAulaAtualRequestDTO);
    recuperaAulaAtualAluno(codigo: IRecuperaAulaAtualRequestDTO);
    salvar(aula: Aula);
    atualizar(codigo: Aula);
    adicionarToken(aula: Object);
    deletar(codigo:string)
}