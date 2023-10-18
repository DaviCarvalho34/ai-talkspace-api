const express = require("express");
const connect = require("./config/connection.js");
const { errorHandler } = require("./middlewares/errorHandler.js");
const authRouter = require("./routes/authRoutes.js");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use(cors());


connect();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));
app.use(cookieParser());

app.use("/api/user", authRouter);
app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
});
