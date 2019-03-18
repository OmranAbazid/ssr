import express from "express";

const app = express();
app.use(express.static("build"));

app.get("*", (req, res) => {
  res.sendFile("index.html", { root: "./build" });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
