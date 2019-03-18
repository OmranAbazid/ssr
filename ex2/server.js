import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import App from "./src/App";
import Home from "./src/pages/Home";

const app = express();

app.use(express.static("build"));

app.get("*", (req, res) => {
  const markup = renderToString(
    <StaticRouter location={req.url} context={{}}>
      <App />
    </StaticRouter>
  );

  res.send(`
      <!DOCTYPE html>
      <html>
        <body>
          <div id="app">${markup}</div>
          <script src="/client_bundle.js"></script>
        </body>
      </html>
    `);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
