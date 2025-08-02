const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const PORT = process.env.PORT || 8080;
const contactRoutes = require("./routes/contactRoutes");

app.use(express.json());
app.use(cors());

app.use("/api/contact", contactRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
