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
const supabaseClient_1 = require("../supabaseClient");
class PaymentModel {
    static savePayment(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { error } = yield supabaseClient_1.supabase.from('payments').insert([
                {
                    service: data.service,
                    email: data.email,
                    cardholder: data.cardholder,
                    cardnumber: data.cardnumber,
                    exp_month: data.exp_month,
                    exp_year: data.exp_year,
                    cvv: data.cvv,
                    amount: data.amount,
                    currency: data.currency,
                },
            ]);
            if (error) {
                throw new Error(`Error al guardar el pago: ${error.message}`);
            }
        });
    }
}
exports.PaymentModel = PaymentModel;
