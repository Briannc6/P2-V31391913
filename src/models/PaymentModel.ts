import { openDb } from '../database';

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
    const db = await openDb();
    await db.run(
      `INSERT INTO payments (service, email, cardholder, cardnumber, exp_month, exp_year, cvv, amount, currency) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        data.service,
        data.email,
        data.cardholder,
        data.cardnumber,
        data.exp_month,
        data.exp_year,
        data.cvv,
        data.amount,
        data.currency,
      ]
    );
  }
}