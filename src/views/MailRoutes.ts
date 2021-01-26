import { Router } from 'express';
import MailService from '../services/MailService';

export default class MailRoutes {
    #route: Router;
    #mailService: MailService;

    constructor () {
      this.#route = Router();
      this.#mailService = new MailService();
    }

    private createPostRoute (): any {
      this.#route.post('/sendMail', (req, res) => {
        const { receiver, body, subject } = req.body;

        if (!receiver || !body || !subject) { res.status(400).json('Dados incompletos ou incorretos!'); } else {
          this.#mailService.send(receiver, body, subject);
          res.json('ok');
        }
        ;
      });
    }

    createAndGetRoutes (): Router {
      this.createPostRoute();
      return this.#route;
    }
}
