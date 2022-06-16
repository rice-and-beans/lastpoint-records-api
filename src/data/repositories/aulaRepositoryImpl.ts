import { prismaClient } from "../database/prismaClient";
import { IAulaRepository } from "../../domain/repositories/aulaRepository";
import { Aula } from "../entities/aula";
import { aulaConstants } from "../../constants/aulaConstants";

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
        var datainicio = null
        var datafim = null
        if(data.datahorainicio){
            datainicio = new Date(data.datahorainicio);
        }
        if(data.datahorafim){
            datafim = new Date(data.datahorafim);
        }
        const aulasLista = await prismaClient.aula.findMany({
            where: {
                AND:[
                    {
                        OR:[
                            {datahorainicio: datainicio != null ? {gte: datainicio} : undefined}
                        ]
                    },
                    {
                        OR:[
                            {datahorafim: datafim != null ? {gte: datafim} : undefined}
                        ]
                    },
                    {
                        OR:[
                            {nome: data.campo != null ? {contains: data.campo} : undefined},
                            {codigo: data.campo != null ? {contains: data.campo} : undefined},
                            {descricao: data.campo != null ? {contains: data.campo} : undefined}
                        ]
                    }
                ],
            },
            select: {
                codigo: true,
                nome: true
            }
        })
        return aulasLista
    }

    async historicoAulasFuturas(){
        var dataAtual = new Date();
        var dataFim = new Date(Date.now()+aulaConstants.TEMPO_HISTORICO);
        const aulasLista = await prismaClient.aula.findMany({
            where: {
                AND:[
                    {datahorainicio:{gte: dataAtual}},
                    {datahorafim: {lte: dataFim}}
                ]
            },
            select:{
                codigo: true,
                nome: true
            }
        })
        return aulasLista
    }

    async historicoAulasPassadasProfessor(){
        var datafim = new Date();
        const aulasLista = await prismaClient.aula.findMany({
            where: {
                datahorafim: {lte: datafim}
            },
            select:{
                codigo: true,
                nome: true
            }
        })
        return aulasLista
    }

    async historicoAulasPassadasAluno(){
        var datafim = new Date();
        const aulasLista = await prismaClient.aula.findMany({
            where: {
                datahorafim: {lte: datafim}
            },
            select:{
                chamada:{
                    select:{
                        usuarioCodigo: true,
                        aulaCodigo:true
                    }
                },
                codigo: true,
                nome: true
            }
        })
        return aulasLista
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