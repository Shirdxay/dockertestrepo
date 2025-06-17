const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Howdy, CI/CD with Docker and Render!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
