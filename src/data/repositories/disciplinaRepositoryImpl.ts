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

    async pesquisar(){
        const disciplinas = await prismaClient.disciplina.findMany()
        return disciplinas
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