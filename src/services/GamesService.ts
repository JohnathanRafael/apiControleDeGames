import { Game } from "../models/Game";
import prismaClient from "../prisma/prisma";


class GamesService{
    async inserir(jogo: Game): Promise<Game>{
        if(!jogo.name || !jogo.tipo || !jogo.descricao){
            throw new Error("Mande todas informações");
        }else {
            
        }
        
        const game : Game = await prismaClient.game.create({
            data:{
                name: jogo.name,
                tipo: jogo.tipo,
                descricao: jogo.descricao,
                status: true
            }
        })

        return game;
    }

    async listarTodos(){
        const games : Game[] = await prismaClient.game.findMany();
        
        return games;
    }

    async atualizar(id: string, jogo : Game){
        const retorno = await prismaClient.game.update({
            where:{ id : id},
            data:{
                name: jogo.name,
                tipo: jogo.tipo,
                descricao: jogo.descricao,
                status: true,
                update_at : new Date()
            }
        })

        return retorno;
    }

}

export {GamesService}