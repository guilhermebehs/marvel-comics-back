import express,{Express} from 'express';
import MailRoutes from './MailRoutes';
import bodyParser from 'body-parser';
import cors from 'cors';



export default class Server {

    #server: Express;
    #mailRoutes: MailRoutes;

    constructor(){
       this.#server =  express();
       this.#mailRoutes = new MailRoutes();
    }

    createAndGetServer():Express{
        this.#server.use(cors());
        this.#server.use(bodyParser.json());
        this.#server.use(this.#mailRoutes.createAndGetRoutes());
        return this.#server;
    }
}