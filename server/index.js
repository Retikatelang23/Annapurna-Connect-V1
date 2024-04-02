require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const realTimeRoutes = require("./routes/realtime");
const addProducts = require("./routes/addProducts");
const fetchProductsPerUser = require("./routes/fetchProductsPerUser");

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/fetchRealtimeData", realTimeRoutes);
app.use("/api/addProducts", addProducts);
app.use("/api/fetchProductsPerUser", fetchProductsPerUser);

const port = 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
