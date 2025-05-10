"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./database");
const ContactsModel_1 = require("./models/ContactsModel");
const PaymentModel_1 = require("./models/PaymentModel");
function testDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const db = yield (0, database_1.openDb)();
            // Crea las tablas si no existen
            yield db.exec(`
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
            yield ContactsModel_1.ContactModel.saveContact({
                email: 'test@example.com',
                name: 'John Doe',
                comment: 'Este es un comentario de prueba.',
            });
            console.log('Contacto guardado exitosamente.');
            // Prueba guardar un pago
            yield PaymentModel_1.PaymentModel.savePayment({
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
            const contacts = yield db.all(`SELECT * FROM contacts`);
            console.log('Contactos:', contacts);
            const payments = yield db.all(`SELECT * FROM payments`);
            console.log('Pagos:', payments);
            // Cierra la conexión
            yield db.close();
            console.log('Conexión cerrada.');
        }
        catch (error) {
            console.error('Error durante la prueba de la base de datos:', error);
        }
    });
}
testDatabase();
