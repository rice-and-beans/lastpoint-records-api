import { prismaClient } from "../database/prismaClient";
import { IDisciplinaRepository } from "../../domain/repositories/disciplinaRepository.ts";
import { Disciplina } from "../entities/disciplina";

export class DisciplinaRepositoryImpl implements IDisciplinaRepository {
    async buscarPorCodigo(codigo: string): Promise<Disciplina>{
        const disciplina = await prismaClient.disciplina.findUnique({
            where:{
                codigo: codigo
            }
        })
        return disciplina != null ? new Disciplina(disciplina) : disciplina;
    }
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

    async pesquisar(campo: string){
        if(campo){
            const disciplinas = await prismaClient.disciplina.findMany({
                where: {
                    OR:[
                        {
                            nome:{
                                contains: campo
                            }
                        },
                        {
                            codigo:{
                                contains: campo
                            }
                        }
                    ]},
                select: {
                    codigo: true,
                    nome: true,
                    descricao: true
                }
            })
            return disciplinas
        }else{
            const disciplinas = await prismaClient.disciplina.findMany({
                select: {
                    codigo: true,
                    nome: true,
                    descricao: true
                }
            })
            return disciplinas
        }
    }

   async atualizar(disciplina:Disciplina){  
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

   async deletar(codigo:string){
       const disciplinaDeletada = await prismaClient.disciplina.delete({
           where:{
               codigo: codigo,
           }
       })
       return disciplinaDeletada
   }
       
}