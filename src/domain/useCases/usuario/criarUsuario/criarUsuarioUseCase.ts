import { Usuario } from "../../../../data/entities/usuario";
import { IUsuarioRepository } from "../../../repositories/usuarioRepository";
import { ICriarUsuarioRequestDTO } from "../../../model/usuarioDTO";
import { ValidacaoBase } from "../../../validations/ValidacaoBase";

export class CriarUsuarioUseCase {

    constructor(
        private usuarioRepository: IUsuarioRepository,
        private validaParamObrigatorio: ValidacaoBase,
        private validaUsuarioExiste: ValidacaoBase,
        private ValidaUsuarioCodigoExiste: ValidacaoBase
        
    ){}

    async execute(data: ICriarUsuarioRequestDTO){
        const dadosValidacao = new Map<Object, string>([
            [data.senha, "senha"],
            [data.codigo, "codigo"],
            [data.nome, "nome"],
            [data.tipo, "tipo"],
            [data.email, "email"]
        ]);
        await this.validaParamObrigatorio.valida(dadosValidacao);
        await this.validaUsuarioExiste.valida(data);
        await this.ValidaUsuarioCodigoExiste.valida(data);
        const usuario = new Usuario(data);
        await this.usuarioRepository.salvar(usuario);
    }

}