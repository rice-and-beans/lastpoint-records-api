import { prismaClient } from "../database/prismaClient";
import { IAulaRepository } from "../../domain/repositories/aulaRepository";
import { Aula } from "../entities/aula";
import { aulaConstants } from "../../constants/aulaConstants";
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
                        
                        datahorainicio: datainicio != null ? {gte: datainicio} : undefined
                        
                    },
                    {
                        
                        datahorafim: datafim != null ? {lte: datafim} : undefined
                        
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

    async historicoAulasFuturas(codigo: string){
        var dataAtual = new Date();
        var dataFim = new Date(Date.now()+aulaConstants.TEMPO_HISTORICO);
        const aulasLista = await prismaClient.aula.findMany({
            where: {
                AND:[
                    {datahorainicio:{gte: dataAtual}},
                    {datahorafim: {lte: dataFim}},
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

    async historicoAulasPassadasProfessor(codigo: string){
        var datafim = new Date();
        const aulasLista = await prismaClient.aula.findMany({
            where: {
                datahorafim: {lte: datafim},
                usuarioCodigo: codigo
            },
            select:{
                codigo: true,
                datahorainicio: true,
                datahorafim: true,
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
                datahorafim: {lte: datafim},
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
                datahorainicio: true,
                datahorafim: true,
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