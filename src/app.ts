import express from 'express';
import { PaymentController } from './controllers/PaymentController';
import { ContactController } from './controllers/ContactController';

const app = express();
const port = 4000;

app.use(express.json());

app.post('/contact/add', ContactController.addContact);
app.post('/payment/add', PaymentController.addPayment);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});