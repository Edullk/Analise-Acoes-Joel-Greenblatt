const express = require("express");
const app = express();
const { getActions } = require("./get_actions");
const cors = require('cors');

app.use(cors());

// Rota GET
app.get("/get_actions", (req, res) => {
  getActions()
    .then((dados) => {
      res.json(dados);
    })
    .catch((e) => {
      console.error(e);
    });
});

// Iniciar o servidor
app.listen(3001, () => {
  console.log("Servidor iniciado na porta 3001");
});
