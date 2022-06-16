const axios = require('axios');

export class AuthApi {

    async criptografar(conteudo: string): Promise<string> {
        return await axios.post('http://localhost:3002/auth/cript', {
            conteudo: conteudo
        }).catch(() => {
            console.log("Serviço indisponível: AuthApi");
        })
    }

    async validaToken(token: string): Promise<string> {
        return await axios.get('http://localhost:3002/auth/', {}, {
            headers: {
                "x-access-token": token
            }
        }).catch(() => {
            console.log("Serviço indisponível: AuthApi");
            return null;
        });
    }

}