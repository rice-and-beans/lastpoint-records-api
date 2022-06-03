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
        const aulaSalvo = await prismaClient.aula.create({
            data:{
              codigo: aula.codigo,
              descricao: aula.descricao,
              nome: aula.nome,
              datahorainicio: datahorainicio,
              datahorafim: datahorafim,
              usuarioId: aula.usuarioId
            }
          })
        return aulaSalvo
    }

    async pesquisar(){
        const aulas = await prismaClient.aula.findMany({
            select: {
                codigo: true,
                nome: true
            }
        })
        return aulas
    }

    async pesquisarDatas(datainicio: Date, datafim: Date){
        const aulas = await prismaClient.aula.findMany({
            where: {
                OR: [
                    {
                      datahorainicio: {
                        gt: datainicio,
                      },
                    },
                    {
                      AND: {
                        datahorafim: {
                          lt: datafim,
                        }
                      },
                    },
                  ],
            }            
        })
        return aulas
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
                descricao: aula.descricao
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