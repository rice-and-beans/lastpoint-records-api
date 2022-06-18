import { prismaClient } from "../database/prismaClient";
import { IDisciplinaRepository } from "../../domain/repositories/disciplinaRepository.ts";
import {IPesquisarDisciplinaRequestDTO} from "../../domain/model/disciplinaDTO"
import { Disciplina } from "../entities/disciplina";

export class DisciplinaRepositoryImpl implements IDisciplinaRepository {
    
    async salvar(disciplina: Disciplina){
        const disciplinaSalva = await prismaClient.disciplina.create({
            data: {
              codigo: disciplina.codigo,
              nome: disciplina.nome,
              descricao: disciplina.descricao
            },
          })
        return disciplinaSalva
    }

    async atualizar(disciplina: Disciplina){  
        const disciplinaAtualizada = await prismaClient.disciplina.update({
            where:{
                codigo: disciplina.codigo,
            },
            data:{
                 codigo: disciplina.codigo,
                 nome: disciplina.nome,
                 descricao: disciplina.descricao
             }
        })
        return disciplinaAtualizada
    }
 
    async deletar(codigo: string){
        const disciplinaDeletada = await prismaClient.disciplina.delete({
            where:{
                codigo: codigo,
            }
        })
        return disciplinaDeletada
    }

    async buscarPorCodigo(codigo: string): Promise<Disciplina>{
        const disciplina = await prismaClient.disciplina.findUnique({
            where:{
                codigo: codigo
            },
            select:{
                codigo: true,
                nome: true,
                descricao: true
            }
        })
        return disciplina != null ? new Disciplina(disciplina) : disciplina;
    }

    async pesquisar(campo: string){
        const disciplinas = await prismaClient.disciplina.findMany({
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
        return disciplinas
    }
       
}