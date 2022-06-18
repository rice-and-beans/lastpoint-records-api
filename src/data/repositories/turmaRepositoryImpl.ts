import { prismaClient } from "../database/prismaClient";
import { ITurmaRepository } from "../../domain/repositories/turmaRepository";
import { Turma } from "../entities/turma";

export class TurmaRepositoryImpl implements ITurmaRepository {
    
    async salvar(turma: Turma){
        const turmaSalva = await prismaClient.turma.create({
            data: {
                codigo: turma.codigo,
                nome: turma.nome,
                descricao: turma.descricao
            },
          })
        return turmaSalva
    }

    async atualizar(turma: Turma){  
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
 
    async deletar(codigo: string){
        const turmaDeletada = await prismaClient.turma.delete({
            where:{
                codigo: codigo,
            }
        })
        return turmaDeletada
    }

    async buscarPorCodigo(codigo: string): Promise<Turma>{
        const turma = await prismaClient.turma.findUnique({
            where:{
                codigo: codigo
            },
            select:{
                codigo: true,
                nome: true,
                descricao: true
            }
        })
        return turma != null ? new Turma(turma) : turma;
    }

    async pesquisar(campo: string){
        const turmas = await prismaClient.turma.findMany({
            where: {
                AND:[
                    {
                        OR:[
                            {nome: campo ? {contains: campo} : undefined},
                            {codigo: campo ? {contains: campo} : undefined},
                            {descricao: campo ? {contains: campo} : undefined}
                        ]
                    }
                ],
            },
            select: {
                codigo: true,
                nome: true
            }
        })
        return turmas
    }
       
}