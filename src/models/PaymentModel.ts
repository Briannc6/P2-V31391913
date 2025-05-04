import { supabase } from '../supabaseClient';

export class PaymentModel {
    static async savePayment(data: {
        service: string;
        email: string;
        cardholder: string;
        cardnumber: string;
        exp_month: string;
        exp_year: string;
        cvv: string;
        amount: number;
        currency: string;
    }) {
        const { error } = await supabase.from('payments').insert([data]);

        if (error) {
            throw new Error(`Error al guardar el pago: ${error.message}`);
        }
    }
}