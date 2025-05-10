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
exports.ContactController = void 0;
const ContactsModel_1 = require("../models/ContactsModel");
class ContactController {
    static addContact(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, name, comment } = req.body;
                if (!email || !name || !comment) {
                    res.status(400).json({ message: 'Todos los campos son obligatorios.' });
                    return;
                }
                yield ContactsModel_1.ContactModel.saveContact({ email, name, comment });
                res.status(201).json({ message: 'Contacto agregado exitosamente.' });
            }
            catch (error) {
                console.error('Error al agregar el contacto:', error);
                res.status(500).json({ message: 'Error al agregar el contacto.' });
            }
        });
    }
}
exports.ContactController = ContactController;
