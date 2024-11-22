import { FastifyRequest, FastifyReply } from "fastify";
import { GamesService } from "../services/GamesService";
import { Game } from "../models/Game";

class GamesController{
    async inserirNovoJogo(request: FastifyRequest, reply: FastifyReply){
        const Game = request.body as Game;

        const gamesService = new GamesService();

        const retorno = await gamesService.inserir(Game);

        reply.send(retorno);
    }

    async listarTodosJogos(request: FastifyRequest, reply: FastifyReply){
        
        const gamesService = new GamesService();

        reply.send( await gamesService.listarTodos() );
    }

    async atualizarJogo(request: FastifyRequest, reply: FastifyReply){
        const id = request.params.id as string;
        const dados = request.body as Game;
        
        const gameService = new GamesService();

        reply.send(await gameService.atualizar(id, dados));

    }

}

export {GamesController};