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
exports.PaymentController = void 0;
const PaymentModel_1 = require("../models/PaymentModel");
class PaymentController {
    static addPayment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { service, email, cardholder, cardnumber, exp_month, exp_year, cvv, amount, currency, } = req.body;
                if (!service ||
                    !email ||
                    !cardholder ||
                    !cardnumber ||
                    !exp_month ||
                    !exp_year ||
                    !cvv ||
                    !amount ||
                    !currency) {
                    return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
                }
                yield PaymentModel_1.PaymentModel.savePayment({
                    service,
                    email,
                    cardholder,
                    cardnumber,
                    exp_month,
                    exp_year,
                    cvv,
                    amount,
                    currency,
                });
                res.status(201).json({ message: 'Pago realizado con éxito.' });
            }
            catch (error) {
                console.error('Error al procesar el pago:', error);
                res.status(500).json({ message: 'Error al procesar el pago.' });
            }
        });
    }
}
exports.PaymentController = PaymentController;
