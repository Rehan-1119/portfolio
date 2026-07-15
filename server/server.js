const express = require("express");
const cors = require("cors");
require("dotenv").config();

const contactRoutes = require("./routes/contactRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
    res.send("Portfolio Backend Running Successfully 🚀");
});

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
    console.log("====================================");
    console.log(`🚀 Server Running on ${PORT}`);
    console.log("====================================");
});