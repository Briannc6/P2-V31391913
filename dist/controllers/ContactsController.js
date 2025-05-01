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
exports.ContactsController = void 0;
const ContactsModel_1 = require("../models/ContactsModel");
class ContactsController {
    constructor() {
        this.model = new ContactsModel_1.ContactsModel();
    }
    addContact(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, name, comment } = req.body;
                const ip_address = req.ip;
                console.log("Datos recibidos:", { email, name, comment, ip_address });
                if (!email || !name || !comment || !ip_address) {
                    console.log("Faltan campos obligatorios");
                    res.status(400).json({ message: "Todos los campos son obligatorios." });
                    return;
                }
                yield this.model.addContact(email, name, comment, ip_address);
                console.log("Contacto agregado exitosamente");
                res.status(201).json({ message: "Contacto agregado exitosamente." });
            }
            catch (error) {
                console.error("Error al agregar el contacto:", error);
                res.status(500).json({ message: "Error al agregar el contacto.", error });
            }
        });
    }
}
exports.ContactsController = ContactsController;
