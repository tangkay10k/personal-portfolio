const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const PORT = process.env.PORT || 8080;
const contactRoutes = require("./routes/contactRoutes");
const path = require("path");

app.use(express.json());
app.use(cors());

app.use("/api/contact", contactRoutes);

app.use(express.static(path.join(__dirname, "../client/dist")));

// Fallback to index.html for SPA routes
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
