const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.json());

app.use("/api/contact", require("./routes/contactRoutes"));

if (process.env.NODE_ENV === "production") {
  const root = path.join(__dirname, "public");
  app.use(express.static(root));
  app.get("/{*splat}", (req, res) => {
    res.sendFile("index.html", { root });
  });
}

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
