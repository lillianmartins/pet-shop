import "dotenv/config.js";
import express from "express";
import rotasFilhote from "./rotas/rotasFilhote.js";
import rotasInteressado from "./rotas/rotasInteressado.js";
import cors from "cors";

const app = express();

app.use(cors({
  origin: "http://localhost:4000"
}))
app.use(express.json());

const localhost = "localhost";
const port = 3000;

app.use("/filhotes", rotasFilhote);
app.use("/interessados", rotasInteressado);

app.listen(port, localhost, () => {
  console.log(`Servidor rodando em http://${localhost}:${port}`);
});
