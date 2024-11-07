const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const PORT = process.env.PORT || 3000;
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "*",
    methods: "GET, POST, PUT",
    allowedHeaders: "Content-Type, Authorization",
  })
);

// Middleware
app.use(bodyParser.json());
app.use("/api", routes);

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
