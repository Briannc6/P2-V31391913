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
    const { error } = await supabase.from('payments').insert([
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
  }
}