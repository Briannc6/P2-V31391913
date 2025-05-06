import express from 'express';
import { PaymentController } from './controllers/PaymentController';
import { ContactController } from './controllers/ContactController';

const app = express();
const port = process.env.PORT || 4000; 

app.use(express.json());

app.post('/contact/add', ContactController.addContact);
app.post('/payment/add', PaymentController.addPayment);

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});