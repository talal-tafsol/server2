const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello from Server 2",
  });
});

app.get("/test", (req, res) => {
  res.status(200).json({
    message: "Hello from Test Server 2",
  });
});

app.listen(PORT, () => console.log(`Server 2 is running on port: ${PORT}`));
