import express from "express";
import moogoose from "mongoose";

const app = express();

moogoose
  .connect("mongodb://localhost:27017")
  .then(() => console.log("conectado ao mongo"))
  .catch(() => console.log("Erro ao conectar ao mongo"));

const port = 3001;

app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});
