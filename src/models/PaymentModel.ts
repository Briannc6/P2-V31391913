import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export class PaymentModel {
  private static db: sqlite3.Database;

  static async connect() {
    if (!this.db) {
      this.db = await open({
        filename: './database.sqlite',
        driver: sqlite3.Database,
      });
    }
  }

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
    await this.connect();
    const query = `
      INSERT INTO payments (service, email, cardholder, cardnumber, exp_month, exp_year, cvv, amount, currency)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    await this.db.run(query, [
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
  }
}