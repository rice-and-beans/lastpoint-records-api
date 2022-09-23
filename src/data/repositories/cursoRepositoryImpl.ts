import { prismaClient } from "../database/prismaClient";
import { ICursoRepository } from "../../domain/repositories/cursoRepository";
import { Curso } from "../entities/curso";

export class CursoRepositoryImpl implements ICursoRepository {

    async salvar(curso: Curso){
        const cursoSalvo = await prismaClient.curso.create({
            data: {
              codigo: curso.codigo,
              nome: curso.nome,
              descricao: curso.descricao
            },
          })
        return cursoSalvo
    }

    async atualizar(curso: Curso){  
        const cursoAtualizado = await prismaClient.curso.update({
            where:{
                codigo: curso.codigo,
            },
            data:{
                 codigo: curso.codigo,
                 nome: curso.nome,
                 descricao: curso.descricao
             }
        })
        return cursoAtualizado
    }
 
    async deletar(codigo: string){
        const cursoDeletado = await prismaClient.curso.delete({
            where:{
                codigo: codigo,
            }
        })
        return cursoDeletado
    }

    async buscarPorCodigo(codigo: string): Promise<Curso>{
        const curso = await prismaClient.curso.findUnique({
            where:{
                codigo: codigo
            },
            select:{
                codigo: true,
                nome: true,
                descricao: true
            }
        })
        return curso != null ? new Curso(curso) : curso;
    }

    async pesquisar(campo: string){
        const cursos = await prismaClient.curso.findMany({
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
        return cursos
    }
       
}