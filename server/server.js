const express = require("express");
const cors = require("cors");
require("dotenv").config();

const contactRoutes = require("./routes/contactRoutes");

const app = express();

/* ===============================
   Middlewares
================================ */

app.use(cors());
app.use(express.json());

/* ===============================
   Routes
================================ */

app.use("/api/contact", contactRoutes);

/* ===============================
   Home Route
================================ */

app.get("/", (req, res) => {

    res.send("Portfolio Backend Running Successfully 🚀");

});

/* ===============================
   Server
================================ */

const PORT = process.env.PORT ;

app.listen(PORT, () => {

    console.log(`====================================`);
    console.log(`🚀 Server Running`);
    console.log(`🌐 http://localhost:${PORT}`);
    console.log(`====================================`);

});