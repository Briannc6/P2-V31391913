import sqlite3 from "sqlite3";

export class ContactsModel {
  private static db: sqlite3.Database;

  constructor() {
    if (!ContactsModel.db) {
      ContactsModel.db = new sqlite3.Database("./database/contacts.db", (err) => {
        if (err) {
          console.error("Error al conectar con la base de datos:", err.message);
        } else {
          console.log("Conexión exitosa a la base de datos SQLite.");
          this.createTable();
        }
      });
    }
  }

  private createTable(): void {
    const query = `
      CREATE TABLE IF NOT EXISTS contacts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT NOT NULL,
        name TEXT NOT NULL,
        comment TEXT NOT NULL,
        ip_address TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `;
    ContactsModel.db.run(query, (err) => {
      if (err) {
        console.error("Error al crear la tabla 'contacts':", err.message);
      } else {
        console.log("Tabla 'contacts' verificada o creada exitosamente.");
      }
    });
  }

  public addContact(email: string, name: string, comment: string, ipAddress: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const query = `
        INSERT INTO contacts (email, name, comment, ip_address)
        VALUES (?, ?, ?, ?)
      `;
      ContactsModel.db.run(query, [email, name, comment, ipAddress], (err) => {
        if (err) {
          console.error("Error al ejecutar la consulta SQL:", err.message);
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  public close(): void {
    ContactsModel.db.close((err) => {
      if (err) {
        console.error("Error al cerrar la conexión con la base de datos:", err.message);
      } else {
        console.log("Conexión con la base de datos cerrada.");
      }
    });
  }
}
