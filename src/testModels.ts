import { openDb } from './database';
import { ContactModel } from './models/ContactsModel';
import { PaymentModel } from './models/PaymentModel';

async function testDatabase() {
  try {
    const db = await openDb();

    // Crea las tablas si no existen
    await db.exec(`
      CREATE TABLE IF NOT EXISTS contacts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT NOT NULL,
        name TEXT NOT NULL,
        comment TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS payments (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        service TEXT NOT NULL,
        email TEXT NOT NULL,
        cardholder TEXT NOT NULL,
        cardnumber TEXT NOT NULL,
        exp_month TEXT NOT NULL,
        exp_year TEXT NOT NULL,
        cvv TEXT NOT NULL,
        amount REAL NOT NULL,
        currency TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `);

    console.log('Tablas creadas o verificadas.');

    // Prueba guardar un contacto
    await ContactModel.saveContact({
      email: 'test@example.com',
      name: 'John Doe',
      comment: 'Este es un comentario de prueba.',
    });
    console.log('Contacto guardado exitosamente.');

    // Prueba guardar un pago
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
    console.log('Pago guardado exitosamente.');

    // Lee los datos de las tablas
    const contacts = await db.all(`SELECT * FROM contacts`);
    console.log('Contactos:', contacts);

    const payments = await db.all(`SELECT * FROM payments`);
    console.log('Pagos:', payments);

    // Cierra la conexión
    await db.close();
    console.log('Conexión cerrada.');
  } catch (error) {
    console.error('Error durante la prueba de la base de datos:', error);
  }
}

testDatabase();