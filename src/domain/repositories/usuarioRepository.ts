import { Usuario } from "../../data/entities/usuario";

export interface IUsuarioRepository {
    buscarPorEmail(email: string): Promise<Usuario>;
    pesquisar();
    salvar(Usuario: Usuario);
    atualizar(codigo: Usuario);
    deletar(codigo:string)
}