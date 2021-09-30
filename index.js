const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("public/"));

app.get("", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html")); //Homepage
});
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public/about.html")); //Aboutpage
});
app.get("/contact-me", (req, res) => {
  res.sendFile(path.join(__dirname, "public/contact-me.html")); //Contactmepage
});
app.listen(process.env.PORT || 8080, () => {
  console.log("Running!");
});
