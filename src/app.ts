import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { ContactsController } from "./controllers/ContactsController";

const app = express();
const contactsController = new ContactsController();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post("/contact/add", (req, res) => contactsController.addContact(req, res));

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});