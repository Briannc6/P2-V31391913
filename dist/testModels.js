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
const PaymentModel_1 = require("./models/PaymentModel");
const ContactsModel_1 = require("./models/ContactsModel");
function testPaymentModel() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
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
            console.log('Pago guardado exitosamente');
        }
        catch (error) {
            if (error instanceof Error) {
                console.error(`Error al guardar el pago: ${error.message}`);
            }
            else {
                console.error('Error al guardar el pago: Error desconocido');
            }
        }
    });
}
function testContactModel() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield ContactsModel_1.ContactModel.saveContact({
                email: 'contact@example.com',
                name: 'Jane Doe',
                comment: 'Este es un comentario de prueba.',
            });
            console.log('Contacto guardado exitosamente');
        }
        catch (error) {
            if (error instanceof Error) {
                console.error(`Error al guardar el contacto: ${error.message}`);
            }
            else {
                console.error('Error al guardar el contacto: Error desconocido');
            }
        }
    });
}
function runTests() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Iniciando pruebas...');
        yield testPaymentModel();
        yield testContactModel();
        console.log('Pruebas finalizadas.');
    });
}
runTests();
