import { openDb } from '../database';

export class ContactModel {
  static async saveContact(data: { email: string; name: string; comment: string }) {
    const db = await openDb();
    await db.run(
      `INSERT INTO contacts (email, name, comment) VALUES (?, ?, ?)`,
      [data.email, data.name, data.comment]
    );
  }
}