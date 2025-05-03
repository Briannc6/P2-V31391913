"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactsController = void 0;
const express_1 = __importDefault(require("express"));
const PaymentController_1 = require("./controllers/PaymentController");
class ContactsController {
}
exports.ContactsController = ContactsController;
ContactsController.addContact = (req, res) => {
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
    }
    catch (error) {
        console.error('Error al agregar el contacto:', error);
        res.status(500).json({
            message: 'Error al agregar el contacto.',
            error,
        });
    }
};
const app = (0, express_1.default)();
const port = 4000;
app.use(express_1.default.json());
app.post('/contact/add', ContactsController.addContact);
app.post('/payment/add', PaymentController_1.PaymentController.addPayment);
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
