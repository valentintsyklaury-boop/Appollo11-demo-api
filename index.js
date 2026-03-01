const express = require("express");
const app = express();

// Health / root route
app.get("/", (req, res) => {
  res.send("Demo API running");
});

// IMPORTANT: use dynamic port for cloud platforms
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
