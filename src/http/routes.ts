import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { GamesController } from "../controller/GamesController";
import { request } from "http";

export async function  routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    
    fastify.post("/games", async (request: FastifyRequest, reply: FastifyReply) => {
        return new GamesController().inserirNovoJogo(request, reply);
    });

    fastify.get("/games", async (request: FastifyRequest, reply: FastifyReply) => {
        return new GamesController().listarTodosJogos(request, reply);
    })

    fastify.put("/games/:id", async (request: FastifyRequest, reply: FastifyReply) => {
        return new GamesController().atualizarJogo(request, reply);
    })



};