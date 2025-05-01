"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactsModel = void 0;
const sqlite3_1 = __importDefault(require("sqlite3"));
class ContactsModel {
    constructor() {
        // Conexión a la base de datos SQLite
        this.db = new sqlite3_1.default.Database("./database/contacts.db", (err) => {
            if (err) {
                console.error("Error al conectar con la base de datos:", err.message);
            }
            else {
                console.log("Conexión exitosa a la base de datos SQLite.");
            }
        });
    }
    // Método para agregar un contacto a la base de datos
    addContact(email, name, comment, ipAddress) {
        return new Promise((resolve, reject) => {
            const query = `
        INSERT INTO contacts (email, name, comment, ip_address)
        VALUES (?, ?, ?, ?)
      `;
            this.db.run(query, [email, name, comment, ipAddress], (err) => {
                if (err) {
                    console.error("Error al ejecutar la consulta SQL:", err.message);
                    reject(err);
                }
                else {
                    resolve();
                }
            });
        });
    }
    // Método para cerrar la conexión a la base de datos (opcional)
    close() {
        this.db.close((err) => {
            if (err) {
                console.error("Error al cerrar la conexión con la base de datos:", err.message);
            }
            else {
                console.log("Conexión con la base de datos cerrada.");
            }
        });
    }
}
exports.ContactsModel = ContactsModel;
