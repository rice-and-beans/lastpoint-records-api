import { prismaClient } from "../database/prismaClient";
import { IChamadaRepository } from "../../domain/repositories/chamadaRepository";
import { Chamada } from "../entities/chamada";

export class ChamadaRepositoryImpl implements IChamadaRepository {
    async buscarPorCodigo(codigo: string): Promise<Chamada>{
        const chamada = await prismaClient.chamada.findUnique({
            where:{
                codigo: codigo
            }
        })
        return chamada != null ? new Chamada(chamada) : chamada;
    }

    async salvar(chamada: Chamada){
        const chamadaSalvo = await prismaClient.chamada.create({
            data: {
              codigo: chamada.codigo,
              usuarioCodigo: chamada.usuarioCodigo,
              aulaCodigo: chamada.aulaCodigo
            },
          })
        return chamadaSalvo
    }

    async pesquisar(){
        const chamadas = await prismaClient.chamada.findMany({
            select: {
                usuario:{
                    select:{
                        codigo: true,
                        nome: true
                    }
                },
                aula:{
                    select:{
                        datahorainicio: true,
                        datahorafim: true

                    }
                },
            }
        })
        return chamadas
    }

   async atualizar(chamada:Chamada){  
       const chamadaAtualizado = await prismaClient.chamada.update({
           where:{
               codigo: chamada.codigo,
           },
           data:{
                codigo: chamada.codigo,
                usuarioCodigo: chamada.usuarioCodigo,
                aulaCodigo: chamada.aulaCodigo
            }
       })
       return chamadaAtualizado
   }

   async deletar(codigo:string){
       const chamadaDeletada = await prismaClient.chamada.delete({
           where:{
               codigo: codigo,
           }
       })
       return chamadaDeletada
   }
       
}