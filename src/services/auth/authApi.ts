import { ServicoIndisponivelException } from "../../domain/exceptions/servicoIndisponivelException";

const axios = require('axios');
export class AuthApi {

    async criptografar(conteudo: string): Promise<string> {
        return await axios.post('http://localhost:3002/auth/cript', {
            conteudo: conteudo
        }).catch(() => {
            throw new ServicoIndisponivelException("Serviço indisponível: AuthApi");
        })
    }

    async validaToken(token: string): Promise<string> {
        return await axios.get('http://localhost:3002/auth/', {
            headers: {
                "x-access-token": token
            }
        }).then(function (response) {
            if(response){
                console.log(response)
                return response.status ? response.status as string : null
            }else{
                return null;
            }
        }).catch((err) => {
            console.log(err)
            throw new ServicoIndisponivelException("Serviço indisponível: AuthApi");
        });
    }

    async salvarTokenInvalido(token: string): Promise<string> {
        return await axios.post('http://localhost:3002/auth/invalid', {
            token: token
        }).catch(() => {
            throw new ServicoIndisponivelException("Serviço indisponível: AuthApi");
        });
    }

}