"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PaymentController_1 = require("./controllers/PaymentController");
const ContactController_1 = require("./controllers/ContactController");
const app = (0, express_1.default)();
const port = process.env.PORT || 4000;
app.use(express_1.default.json());
app.post('/contact/add', ContactController_1.ContactController.addContact);
app.post('/payment/add', PaymentController_1.PaymentController.addPayment);
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
