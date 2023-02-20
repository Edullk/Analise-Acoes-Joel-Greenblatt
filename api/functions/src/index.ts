import * as functions from "firebase-functions";
import express from "express";
const app = express();
const rotas = express.Router();

rotas.get("/", (req, res)=> {
  res.status(200).json({success: true, message: "Deu tudo certo"});
});

exports.api = functions.https.onRequest(app);

// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
