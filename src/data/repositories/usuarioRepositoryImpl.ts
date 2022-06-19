import { prismaClient } from "../database/prismaClient";
import { IUsuarioRepository } from "../../domain/repositories/usuarioRepository";
import { Usuario } from "../entities/usuario";

export class UsuarioRepositoryImpl implements IUsuarioRepository {
    
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
    
    async atualizar(usuario: Usuario){  
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

   async deletar(codigo: string){
       const usuarioDeletado = await prismaClient.usuario.delete({
           where:{
               codigo: codigo,
           }
       })
       return usuarioDeletado
   }

    async buscarPorEmail(email: string): Promise<Usuario>{
        const usuario = await prismaClient.usuario.findUnique({
            where:{
                email: email
            }
        })
        return usuario != null ? new Usuario(usuario) : usuario;
    }

    async buscarPorCodigo(codigo: string): Promise<Usuario>{
        const usuario = await prismaClient.usuario.findUnique({
            where:{
                codigo: codigo
            },
            select:{
                codigo: true,
                nome: true,
                email: true,
                tipo: true,
            }
        })
        return usuario;
    }

    async pesquisar(campo: string){
        const usuarios = await prismaClient.usuario.findMany({
            where: {
                AND:[
                        {
                            OR:[
                                {nome: campo ? {contains: campo} : undefined},
                                {codigo: campo ? {contains: campo} : undefined},
                                {email: campo ? {contains: campo} : undefined}
                            ]
                        }
                    ],
                },
            select: {
                codigo: true,
                nome: true
            }
        })
        return usuarios
    }
}