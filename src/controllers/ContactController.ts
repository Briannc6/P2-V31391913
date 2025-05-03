import { Request, Response } from 'express';
import { ContactsModel } from '../models/ContactsModel';

export class ContactsController {
    static async addContact(req: Request, res: Response) {
        try {
            const { email, name, comment } = req.body;

            if (!email || !name || !comment) {
                return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
            }

            const contactsModel = new ContactsModel();
            await contactsModel.addContact(email, name, comment, req.ip || '0.0.0.0');

            res.status(201).json({ message: 'Contacto agregado exitosamente.' });
        } catch (error) {
            console.error('Error al agregar el contacto:', error);
            res.status(500).json({ message: 'Error al agregar el contacto.' });
        }
    }
}