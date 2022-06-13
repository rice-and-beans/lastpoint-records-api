import { RegistroExistenteException } from "../../exceptions/registroExistenteException";
import { IUsuarioRepository } from "../../repositories/usuarioRepository";
import { ICriarUsuarioRequestDTO } from "../../model/usuario/criarUsuarioDTO";
import { ValidacaoBase } from "../ValidacaoBase";

export class ValidaCamposPreenchidos extends ValidacaoBase {

    constructor(
        private usuarioRepository: IUsuarioRepository,
        protected proximo?: ValidacaoBase,
    ){
        super(proximo)
    }

    public async verifica(dadosValidacao: Object){
        const campoFaltante = []
        const dadosValidUsuario = dadosValidacao as ICriarUsuarioRequestDTO;
        for(var dados in dadosValidUsuario){
            if(dados == null){
                 campoFaltante.push(dados)
            }
        }
        console.log(" 3 "+campoFaltante)
        if(campoFaltante.length > 0){
            throw new RegistroExistenteException('Os campos a seguir não foram preenchidos: '+campoFaltante);
        }
    }
    
}