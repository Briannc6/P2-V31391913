import { Request, Response } from 'express';
import { PaymentModel } from '../models/PaymentModel';

export class PaymentController {
  static async addPayment(req: Request, res: Response): Promise<void> {
    try {
      const {
        service,
        email,
        cardholder,
        cardnumber,
        exp_month,
        exp_year,
        cvv,
        amount,
        currency,
      } = req.body;

      if (
        !service ||
        !email ||
        !cardholder ||
        !cardnumber ||
        !exp_month ||
        !exp_year ||
        !cvv ||
        !amount ||
        !currency
      ) {
        res.status(400).json({ message: 'Todos los campos son obligatorios.' });
        return;
      }

      await PaymentModel.savePayment({
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
    } catch (error) {
      console.error('Error al procesar el pago:', error);
      res.status(500).json({ message: 'Error al procesar el pago.' });
    }
  }
}