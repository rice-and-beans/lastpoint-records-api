import { prismaClient } from "../database/prismaClient";
import { IUsuarioRepository } from "../../domain/repositories/usuarioRepository";
import { Usuario } from "../entities/usuario";

export class UsuarioRepositoryImpl implements IUsuarioRepository {
    async buscarPorEmail(email: string): Promise<Usuario>{
        const usuario = await prismaClient.usuario.findUnique({
            where:{
                email: email
            }
        })
        return usuario != null ? new Usuario(usuario) : usuario;
    }
    async salvar(usuario: Usuario){
        const usuarioSalvo = await prismaClient.usuario.create({
            data: {
              codigo: usuario.codigo,
              nome: usuario.nome,
              email: usuario.email,
              senha: usuario.senha,
              tipo: usuario.tipo
            },
          })
        return usuarioSalvo
    }

    async pesquisar(nome?: string){
        if(nome){
            const usuarios = await prismaClient.usuario.findMany({
                where: {
                    OR:[
                        {
                            nome:{
                                contains: nome
                            }
                        }
                    ]},
                select: {
                    codigo: true,
                    nome: true,
                    email: true
                }
            })
        
            return usuarios
        }else{
            const usuarios = await prismaClient.usuario.findMany({
                select: {
                    codigo: true,
                    nome: true,
                    email: true
                }
            })
            return usuarios
        }
    }

   async atualizar(usuario:Usuario){  
       const usuarioAtualizado = await prismaClient.usuario.update({
           where:{
               codigo: usuario.codigo,
           },
           data:{
            codigo: usuario.codigo,
            nome: usuario.nome,
            email: usuario.email,
            senha: usuario.senha,
            tipo: usuario.tipo
           }
       })
       return usuarioAtualizado
   }

   async deletar(codigo:string){
       const usuarioDeletado = await prismaClient.usuario.delete({
           where:{
               codigo: codigo,
           }
       })
       return usuarioDeletado
   }
       
}