const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Demo API running");
});

// Serve an OpenAPI spec from your app (Aikido will fetch this)
app.get("/openapi.json", (req, res) => {
  res.type("application/json").send({
    openapi: "3.0.0",
    info: {
      title: "Appollo11 API",
      version: "1.0.0",
    },
    paths: {
      "/": {
        get: {
          summary: "Root endpoint",
          responses: {
            "200": { description: "Demo API running" },
          },
        },
      },
      "/openapi.json": {
        get: {
          summary: "OpenAPI specification",
          responses: {
            "200": { description: "OpenAPI JSON" },
          },
        },
      },
    },
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
