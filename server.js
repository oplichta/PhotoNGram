const express = require("express");

const app = express();

app.use(express.static("./dist/photongram"));

app.get("/*", (req, res) =>
  res.sendFile("index.html", { root: "dist/photongram/" })
);

app.listen(process.env.PORT || 8080);
