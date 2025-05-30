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
exports.PaymentModel = void 0;
const database_1 = require("../database");
class PaymentModel {
    static savePayment(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield (0, database_1.openDb)();
            yield db.run(`INSERT INTO payments (service, email, cardholder, cardnumber, exp_month, exp_year, cvv, amount, currency) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`, [
                data.service,
                data.email,
                data.cardholder,
                data.cardnumber,
                data.exp_month,
                data.exp_year,
                data.cvv,
                data.amount,
                data.currency,
            ]);
        });
    }
}
exports.PaymentModel = PaymentModel;
