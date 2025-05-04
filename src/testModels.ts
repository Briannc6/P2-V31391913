import { PaymentModel } from './models/PaymentModel';
import { ContactModel } from './models/ContactsModel';

async function testPaymentModel() {
  try {
    await PaymentModel.savePayment({
      service: 'consultas',
      email: 'test@example.com',
      cardholder: 'John Doe',
      cardnumber: '1234567812345678',
      exp_month: '12',
      exp_year: '2025',
      cvv: '123',
      amount: 50.0,
      currency: 'USD',
    });
    console.log('Pago guardado exitosamente');
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error al guardar el pago: ${error.message}`);
    } else {
      console.error('Error al guardar el pago: Error desconocido');
    }
  }
}

async function testContactModel() {
  try {
    await ContactModel.saveContact({
      email: 'contact@example.com',
      name: 'Jane Doe',
      comment: 'Este es un comentario de prueba.',
    });
    console.log('Contacto guardado exitosamente');
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error al guardar el contacto: ${error.message}`);
    } else {
      console.error('Error al guardar el contacto: Error desconocido');
    }
  }
}

async function runTests() {
  console.log('Iniciando pruebas...');
  await testPaymentModel();
  await testContactModel();
  console.log('Pruebas finalizadas.');
}

runTests();