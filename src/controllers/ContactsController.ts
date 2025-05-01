import { Request, Response } from "express";
import { ContactsModel } from "../models/ContactsModel";

export class ContactsController {
    private contactsModel: ContactsModel;

    constructor() {
        this.contactsModel = new ContactsModel();
    }

    public async addContact(req: Request, res: Response): Promise<void> {
        console.log("Datos recibidos:", req.body); // Depuración
        const { email, name, comment } = req.body;

        try {
            await this.contactsModel.addContact(email, name, comment, req.ip || "0.0.0.0");
            res.status(201).json({ message: "Contacto agregado exitosamente" });
        } catch (error) {
            console.error("Error al agregar el contacto:", error);
            res.status(500).json({ message: "Error al agregar el contacto" });
        }
    }
}