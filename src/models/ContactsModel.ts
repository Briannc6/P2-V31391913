import sqlite3 from "sqlite3";

export class ContactsModel {
  private db: sqlite3.Database;

  constructor() {
    // Conexión a la base de datos SQLite
    this.db = new sqlite3.Database("./database/contacts.db", (err) => {
      if (err) {
        console.error("Error al conectar con la base de datos:", err.message);
      } else {
        console.log("Conexión exitosa a la base de datos SQLite.");
      }
    });
  }

  // Método para agregar un contacto a la base de datos
  public addContact(email: string, name: string, comment: string, ipAddress: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const query = `
        INSERT INTO contacts (email, name, comment, ip_address)
        VALUES (?, ?, ?, ?)
      `;
      this.db.run(query, [email, name, comment, ipAddress], (err) => {
        if (err) {
          console.error("Error al ejecutar la consulta SQL:", err.message);
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  // Método para cerrar la conexión a la base de datos (opcional)
  public close(): void {
    this.db.close((err) => {
      if (err) {
        console.error("Error al cerrar la conexión con la base de datos:", err.message);
      } else {
        console.log("Conexión con la base de datos cerrada.");
      }
    });
  }
}