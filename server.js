require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const errorMiddleware = require("./middleware/error.js");
const cookieParser = require("cookie-parser");
const cloudinary = require("cloudinary");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
// connect mongodb
const URI = process.env.MONGODB_URL;
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((data) => {
    console.log(`Mongodb connected with server: ${data.connection.host}`);
  });
//cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const product = require("./routes/productRoute.js");
const user = require("./routes/userRouter.js");
const order = require("./routes/orderRoute.js");
//Routes
app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);

// Middleware
app.use(errorMiddleware);
//Handle uncaught exception
process.on("uncaughtException", (err) => {
  console.log(`error: ${err.message}`);
  console.log(`Shut down due to unhandled promise exception`);
});
//unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to unhandled promise rejection`);
  server.close(() => {
    process.exit(1);
  });
});
const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.json({ msg: "Welcome Connected to server" });
});
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
