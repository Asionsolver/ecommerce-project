const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { dbConnect } = require("./utils/db");


// cors
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

// middleware
app.use(bodyParser.json());
// cookie parser
app.use(cookieParser());

// routes
app.use("/api", require("./routes/authRoutes"));

// home route
app.get("/", (req, res) => {
    res.send("My backend server");
});
// port declaration
const port = process.env.PORT

// database connection
dbConnect();

// server connection
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
