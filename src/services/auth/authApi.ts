import { ServicoIndisponivelException } from "../../domain/exceptions/servicoIndisponivelException";

const axios = require('axios');
export class AuthApi {

    async criptografar(conteudo: string, token: string): Promise<string> {
        return await axios.post('http://localhost:3002/auth/cript', {}, {
            headers:{
                "x-access-token": token
            },
            params:{
                conteudo: conteudo
            }
        }).then(function (response) {
            return response.data ? response.data : ''
        }).catch(() => {
            throw new ServicoIndisponivelException("Serviço indisponível: AuthApi");
        })
    }

    async validaToken(token: string): Promise<string> {
        return await axios.get('http://localhost:3002/auth/', {
            headers: {
                "x-access-token": token ? token : ""
            }
        }).then(function (response) {
            if(response){
                return response.status ? response.status as string : null
            }else{
                return null;
            }
        }).catch(() => {
            throw new ServicoIndisponivelException("Serviço indisponível: AuthApi");
        });
    }

}