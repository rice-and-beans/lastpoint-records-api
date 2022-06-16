import { prismaClient } from "../database/prismaClient";
import { ITurmaRepository } from "../../domain/repositories/turmaRepository";
import { Turma } from "../entities/turma";

export class TurmaRepositoryImpl implements ITurmaRepository {
    async buscarPorCodigo(codigo: string): Promise<Turma>{
        const turma = await prismaClient.turma.findUnique({
            where:{
                codigo: codigo
            }
        })
        return turma != null ? new Turma(turma) : turma;
    }
    async salvar(turma: Turma){
        const turmaSalvo = await prismaClient.turma.create({
            data: {
              codigo: turma.codigo,
              nome: turma.nome,
              descricao: turma.descricao
            },
          })
        return turmaSalvo
    }

    async pesquisar(campo: string){
            const turmas = await prismaClient.turma.findMany({
                where: {
                    AND:[
                        {
                            OR:[
                                {nome: campo != null ? {contains: campo} : undefined},
                                {codigo: campo != null ? {contains: campo} : undefined},
                                {descricao: campo != null ? {contains: campo} : undefined}
                            ]
                        }
                    ],
                },
                select: {
                    codigo: true,
                    nome: true,
                    descricao: true
                }
            })
            return turmas
        
    }

   async atualizar(turma:Turma){  
       const turmaAtualizado = await prismaClient.turma.update({
           where:{
               codigo: turma.codigo,
           },
           data:{
            codigo: turma.codigo,
            nome: turma.nome,
            descricao: turma.descricao
       }
    })
       return turmaAtualizado
   }

   async deletar(codigo:string){
       const turmaDeletado = await prismaClient.turma.delete({
           where:{
               codigo: codigo,
           }
       })
       return turmaDeletado
   }
       
}