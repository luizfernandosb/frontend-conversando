const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const PORT = process.env.PORT || 3000;
const cors = require("cors");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use("/api", routes);
app.use(cors({ origin: "*" }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
