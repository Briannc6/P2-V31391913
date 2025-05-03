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
exports.ContactModel = void 0;
const supabaseClient_1 = require("../supabaseClient");
class ContactModel {
    static saveContact(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { error } = yield supabaseClient_1.supabase.from('contacts').insert([
                {
                    email: data.email,
                    name: data.name,
                    comment: data.comment,
                },
            ]);
            if (error) {
                throw new Error(`Error al guardar el contacto: ${error.message}`);
            }
        });
    }
}
exports.ContactModel = ContactModel;
