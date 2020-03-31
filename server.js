const express = require("express");

const app = express();

app.use(express.static("./dist/photo-ngram"));

app.get("/*", (req, res) =>
  res.sendFile("index.html", { root: "dist/photo-ngram/" })
);

app.listen(process.env.PORT || 8080);
