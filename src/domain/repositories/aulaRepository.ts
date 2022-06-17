import { Aula } from "../../data/entities/aula";
import { IPesquisarAulaRequestDTO } from "../model/aulaDTO";

export interface IAulaRepository {
    buscarPorCodigo(codigo: string): Promise<Aula>;
    pesquisar(data: IPesquisarAulaRequestDTO);
    historicoAulasFuturas();
    historicoAulasPassadasProfessor();
    historicoAulasPassadasAluno();
    salvar(Curso: Aula);
    atualizar(codigo: Aula);
    adicionarToken(aula: Object);
    deletar(codigo:string)
}