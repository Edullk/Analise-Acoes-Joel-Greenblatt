const functions = require("firebase-functions");

exports.sayNumber = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send("Routes from firebase!");
});
