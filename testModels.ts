import { PaymentModel } from './src/models/PaymentModel';

async function testSupabase() {
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

    console.log('Prueba exitosa: El pago se guardó correctamente en Supabase.');
  } catch (error) {
    console.error('Error durante la prueba de Supabase:', error.message);
  }
}

testSupabase();