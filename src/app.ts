import express from 'express';

export class ContactsController {

  static addContact(_req: express.Request, res: express.Response) {
    res.send('Contacto agregado');
  }
}

const app = express();
const port = 4000;

app.use(express.json());

app.post('/contact/add', ContactsController.addContact);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});