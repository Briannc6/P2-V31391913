import { supabase } from '../supabaseClient';

export class ContactModel {
    static async saveContact(data: { email: string; name: string; comment: string }) {
        const { error } = await supabase.from('contacts').insert([data]);

        if (error) {
            throw new Error(`Error al guardar el contacto: ${error.message}`);
        }
    }
}