import { Request, Response } from 'express';

export class ContactController {
    static async addContact(req: Request, res: Response): Promise<void> {
        try {
            const { email, name, comment } = req.body;

            console.log(`Contacto recibido: ${email}, ${name}, ${comment}`);

            res.status(201).json({ message: 'Contacto agregado exitosamente' });
        } catch (error) {
            res.status(500).json({ error: 'Error al agregar el contacto' });
        }
    }
}