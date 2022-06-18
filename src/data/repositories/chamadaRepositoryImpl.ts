import { prismaClient } from "../database/prismaClient";
import { IChamadaRepository } from "../../domain/repositories/chamadaRepository";
import { Chamada } from "../entities/chamada";
import { IPesquisarChamadaRequestDTO } from "../../domain/model/chamadaDTO";

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
              justificativa: chamada.justificativa,
              usuarioCodigo: chamada.usuarioCodigo,
              aulaCodigo: chamada.aulaCodigo
            },
          })
        return chamadaSalvo
    }

    async pesquisar(data: IPesquisarChamadaRequestDTO){
        var datainicio = null
        var datafim = null
        if(data.datahorainicio){
            datainicio = new Date(data.datahorainicio);
        }
        if(data.datahorafim){
            datafim = new Date(data.datahorafim);
        }
        const chamadaLista = await prismaClient.chamada.findMany({
            where: {
                
                usuario:{
                    OR:[
                        {nome: data.campo ? {contains: data.campo} : {contains:""}},
                        {codigo: data.campo ? {contains: data.campo} : {contains:""}}
                    ]
                },
                aula:{
                    AND:[
                        {datahorainicio: datainicio ? {gte: datainicio} : undefined},
                        {datahorafim: datafim ? {lte: datafim} : undefined}
                    ]
                }
            },
            select: {
                codigo: true,
                usuario: {
                    select: {
                        codigo:true,
                        nome: true,
                    }
                },
                aula:{
                    select:{
                        nome:true,
                        datahorainicio: true,
                        datahorafim: true
                    }
                }

        }
        })
        return chamadaLista
    }

   async atualizar(chamada:Chamada){  
       const chamadaAtualizado = await prismaClient.chamada.update({
           where:{
               codigo: chamada.codigo,
           },
           data:{
                codigo: chamada.codigo,
                justificativa: chamada.justificativa,
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