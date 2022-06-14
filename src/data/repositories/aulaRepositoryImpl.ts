import { prismaClient } from "../database/prismaClient";
import { IAulaRepository } from "../../domain/repositories/aulaRepository";
import { Aula } from "../entities/aula";
import { usuario } from "../../routes/usuarioRoutes";

export class AulaRepositoryImpl implements IAulaRepository {
    async buscarPorCodigo(codigo: string): Promise<Aula>{
        const aula = await prismaClient.aula.findUnique({
            where:{
                codigo
            }
        })
        return aula != null ? new Aula(aula) : aula;
    }
    async salvar(aula: Aula){
        const datahorainicio = new Date(aula.datahorainicio);
        const datahorafim = new Date(aula.datahorafim);
        console.log(datahorainicio)
        console.log(datahorafim)
        const aulaSalvo = await prismaClient.aula.create({
            data:{
              codigo: aula.codigo,
              descricao: aula.descricao,
              nome: aula.nome,
              datahorainicio: datahorainicio,
              datahorafim: datahorafim,
              usuarioCodigo: aula.usuarioCodigo,
              turmaCodigo: aula.turmaCodigo,
              cursoCodigo: aula.cursoCodigo,
              disciplinaCodigo: aula.disciplinaCodigo
            }
          })
        return aulaSalvo
    }

    async pesquisar(data?){
        const datainicio = new Date(data.datahorainicio);
        const datafim = new Date(data.datahorafim);
        console.log(datainicio)
        console.log(datafim)
        if(datainicio && datafim){
            const aulasLista = await prismaClient.aula.findMany({
                where: {
                    OR:[
                        {
                            datahorainicio:{
                                gte: datainicio
                            },
                            datahorafim: {
                                lte: datafim
                            },
                            nome:{
                                contains: data.nome
                            }
                        },
                        {
                            datahorainicio:{
                                gte: datainicio
                            },
                            datahorafim: {
                                lte: datafim
                            },
                            codigo:{
                                contains: data.nome
                            }
                        }
                    ]
                },
                select: {
                    codigo: true,
                    nome: true
                }
            })
            return aulasLista
        } else if(datainicio && !datafim){
            const aulasLista = await prismaClient.aula.findMany({
                where: {
                    datahorainicio:{
                        gte: datainicio
                    },
                    nome:{
                        startsWith: data.nome
                    }
                },
                select: {
                    codigo: true,
                    nome: true
                }
            })
            return aulasLista
        } else if(!datainicio && datafim){
            const aulasLista = await prismaClient.aula.findMany({
                where: {
                    datahorafim:{
                        gte: datafim
                    },
                    nome:{
                        startsWith: data.nome
                    }
                },
                select: {
                    codigo: true,
                    nome: true
                }
            })
            return aulasLista
        } else if(!datainicio && !datafim){
            const aulasLista = await prismaClient.aula.findMany({
                where: {
                    nome:{
                        startsWith: data.nome
                    }
                },
                select: {
                    codigo: true,
                    nome: true
                }
            })
            return aulasLista
        }
    }

    async atualizar(aula:Aula){  
        const datahorainicio = new Date(aula.datahorainicio);
        const datahorafim = new Date(aula.datahorafim);
       const aulaAtualizado = await prismaClient.aula.update({
           where:{
               codigo: aula.codigo,
           },
           data:{
                codigo: aula.codigo,
                datahorainicio: datahorainicio,
                datahorafim: datahorafim,
                nome: aula.nome,
                descricao: aula.descricao,
                token: aula.token
            }
       })
       return aulaAtualizado
   }

   async adicionarToken(aula:Aula){ 
   const aulaAtualizado = await prismaClient.aula.update({
       where:{
           codigo: aula.codigo,
       },
       data:{
            token: aula.token
        }
   })
   return aulaAtualizado
}

   async deletar(codigo:string){
       const aulaDeletado = await prismaClient.aula.delete({
           where:{
               codigo: codigo,
           }
       })
       return aulaDeletado
   }
       
}