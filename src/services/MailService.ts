import mailjet from 'node-mailjet';
import env from 'dotenv';

export default class MailService {
    #conn: any;

    constructor () {
      env.config();

      const key = process.env.MAILJET_KEY || '';
      const secret = process.env.MAILJET_SECRET || '';

      this.#conn = mailjet.connect(key, secret);
    }

    send (receiver: string, body: string, subject: string): any {
      const sender = process.env.MAIL_SENDER || 'guilhermebehs2013@hotmail.com';
      const from = {
        Email: sender,
        Name: 'HQs Marvel'
      };

      const to = [{
        Email: receiver,
        Name: 'Cliente'
      }];

      this.#conn.post('send', { version: 'v3.1' })
        .request({
          Messages: [{
            From: from,
            To: to,
            Subject: subject,
            HTMLPart: body
          }]
        })
        .then()
        .catch((err:any) => {
          console.log(err);
        });
    }
}
