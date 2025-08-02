const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.json());

app.use("/api/contact", require("./routes/contactRoutes"));

const staticDir = path.join(__dirname, "public");
app.use(express.static(staticDir));

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
