import { Request, Response } from 'express';
import { ContactModel } from '../models/ContactsModel';

export class ContactController {
  static async addContact(req: Request, res: Response): Promise<void> {
    try {
      const { email, name, comment } = req.body;

      if (!email || !name || !comment) {
        res.status(400).json({ message: 'Todos los campos son obligatorios.' });
        return;
      }

      await ContactModel.saveContact({ email, name, comment });

      res.status(201).json({ message: 'Contacto agregado exitosamente.' });
    } catch (error) {
      console.error('Error al agregar el contacto:', error);
      res.status(500).json({ message: 'Error al agregar el contacto.' });
    }
  }
}