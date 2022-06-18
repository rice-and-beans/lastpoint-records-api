import { prismaClient } from "../database/prismaClient";
import { IAulaRepository } from "../../domain/repositories/aulaRepository";
import { Aula } from "../entities/aula";
import { aulaConstants } from "../../constants/aulaConstants";
import { usuario } from "../../routes/usuarioRoutes";
import { IPesquisarAulaRequestDTO } from "../../domain/model/aulaDTO";

export class AulaRepositoryImpl implements IAulaRepository {
    
    async salvar(aula: Aula){
        const dataHoraInicio = new Date(aula.dataHoraInicio);
        const dataHoraFim = new Date(aula.dataHoraFim);
        const aulaSalvo = await prismaClient.aula.create({
            data:{
              codigo: aula.codigo,
              descricao: aula.descricao,
              nome: aula.nome,
              dataHoraInicio: dataHoraInicio,
              dataHoraFim: dataHoraFim,
              usuarioCodigo: aula.usuarioCodigo,
              turmaCodigo: aula.turmaCodigo,
              cursoCodigo: aula.cursoCodigo,
              disciplinaCodigo: aula.disciplinaCodigo
            }
          })
        return aulaSalvo
    }

    async atualizar(aula: Aula){  
        const dataHoraInicio = new Date(aula.dataHoraInicio);
        const dataHoraFim = new Date(aula.dataHoraFim);
        const aulaAtualizado = await prismaClient.aula.update({
            where:{
                codigo: aula.codigo,
            },
            data:{
                codigo: aula.codigo,
                dataHoraInicio: dataHoraInicio,
                dataHoraFim: dataHoraFim,
                nome: aula.nome,
                descricao: aula.descricao,
                token: aula.token
            }
        })
        return aulaAtualizado
   }

   async deletar(codigo: string){
        const aulaDeletado = await prismaClient.aula.delete({
            where:{
                codigo: codigo,
            }
        })
        return aulaDeletado
    }

    async buscarPorCodigo(codigo: string): Promise<Aula>{
        const aula = await prismaClient.aula.findUnique({
            where:{
                codigo
            }
        })
        return aula != null ? new Aula(aula) : aula;
    }

    async pesquisar(data: IPesquisarAulaRequestDTO){
        var datainicio = null
        var datafim = null
        if(data.dataHoraInicio){
            datainicio = new Date(data.dataHoraInicio);
        }
        if(data.dataHoraFim){
            datafim = new Date(data.dataHoraFim);
        }
        const aulasLista = await prismaClient.aula.findMany({
            where: {
                AND:[
                    {
                        
                        dataHoraInicio: datainicio != null ? {gte: datainicio} : undefined
                        
                    },
                    {
                        
                        dataHoraFim: datafim != null ? {lte: datafim} : undefined
                        
                    },
                    {
                        OR:[
                            {nome: data.campo ? {contains: data.campo} : undefined},
                            {codigo: data.campo ? {contains: data.campo} : undefined},
                            {descricao: data.campo ? {contains: data.campo} : undefined}
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

    async historicoAulasFuturasProfessor(codigo: string){
        var dataAtual = new Date();
        var dataFim = new Date(Date.now()+aulaConstants.TEMPO_HISTORICO);
        const aulasLista = await prismaClient.aula.findMany({
            where: {
                AND:[
                    {dataHoraInicio:{gte: dataAtual}},
                    {dataHoraFim: {lte: dataFim}},
                    {usuarioCodigo: codigo}
                ]
            },
            select:{
                codigo: true,
                nome: true
            }
        })
        return aulasLista
    }

    async historicoAulasFuturasAluno(codigo: string){
        var dataAtual = new Date();
        var dataFim = new Date(Date.now()+aulaConstants.TEMPO_HISTORICO);
        const aulasLista = await prismaClient.chamada.findMany({
            where: {
                aula:{
                    AND:[
                        {dataHoraInicio:{gte: dataAtual}},
                        {dataHoraFim: {lte: dataFim}}
                    ] 
                },
                usuarioCodigo: codigo
            },
            select:{
                aula:{
                    select:{
                        codigo: true,
                        nome: true
                    }
                }
            }
        })
        return aulasLista
    }

    async historicoAulasPassadasProfessor(codigo: string){
        var datafim = new Date();
        const aulasLista = await prismaClient.aula.findMany({
            where: {
                dataHoraFim: {lte: datafim},
                usuarioCodigo: codigo
            },
            select:{
                codigo: true,
                dataHoraInicio: true,
                dataHoraFim: true,
                usuarioCodigo: true,
                usuario:{
                    select:{
                        nome:true
                    }
                },
                turma:{
                    select:{
                        nome:true
                    }
                },
                disciplina:{
                    select:{
                        nome:true
                    }
                },
                nome: true
            }
        })
        return aulasLista
    }

    async historicoAulasPassadasAluno(codigo: string){
        var datafim = new Date();
        const aulasLista = await prismaClient.aula.findMany({
            where: {
                dataHoraFim: {lte: datafim},
                usuarioCodigo: codigo
            },
            select:{
                chamada:{
                    select:{
                        usuarioCodigo: true,
                        aulaCodigo:true
                    }
                },
                codigo: true,
                dataHoraInicio: true,
                dataHoraFim: true,
                usuarioCodigo: true,
                usuario:{
                    select:{
                        nome:true
                    }
                },
                turma:{
                    select:{
                        nome:true
                    }
                },
                disciplina:{
                    select:{
                        nome:true
                    }
                },
                nome: true
            }
        })
        return aulasLista
    }

   async adicionarToken(aula: Aula){ 
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

    async recuperaAulaAtual(codigo: string){
        const dataatual = new Date() 
        const naAulaAtual = await prismaClient.aula.findFirst({
            where:{
                AND:[
                    {dataHoraInicio: {gt: dataatual}},
                    {dataHoraFim: {lt: dataatual}},
                    {usuarioCodigo: codigo}
                ]
            },
            select:{
                codigo: true
            }
        })
        return naAulaAtual
    }
       
}