const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Lista dei post");
});

router.get("/:id", (req, res) => {
  res.send(`Visualizzazione del post ${req.params.id}`);
});

router.post("/", (req, res) => {
  res.send("Creazione di un nuovo post");
});

router.put("/:id", (req, res) => {
  res.send(`Modifica del post ${req.params.id}`);
});
