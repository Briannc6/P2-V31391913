import express from 'express';
import { PaymentController } from './controllers/PaymentController';

export class ContactsController {
  static addContact = (req: express.Request, res: express.Response) => {
    try {
      const { email, name, comment } = req.body;

      if (!email || !name || !comment) {
        return res.status(400).json({
          message: 'Faltan campos requeridos: email, name o comment.',
        });
      }

      console.log(`Contacto agregado: ${email}, ${name}, ${comment}`);

      res.status(201).json({
        message: 'Contacto agregado exitosamente',
      });
    } catch (error) {
      console.error('Error al agregar el contacto:', error);
      res.status(500).json({
        message: 'Error al agregar el contacto.',
        error,
      });
    }
  };
}

const app = express();
const port = 4000;

app.use(express.json());

app.post('/contact/add', ContactsController.addContact);
app.post('/payment/add', PaymentController.addPayment);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});