import Fastfy from 'fastify';
import cors from '@fastify/cors'
import { routes } from './routes';

// iniciando o fastfy
const app = Fastfy({logger: true});

const start = async () => {
    
    await app.register(cors);
    await app.register(routes);
    
    try{
        await app.listen({port: 3333});
    }catch(error){
        process.exit(1);
    }
};

start();