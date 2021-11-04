const mongoose = require("mongoose");
const connectDatabase = () => {
  mongoose
    .connect(
      "mongodb+srv://Hozefa:Hozefa123@cluster0.1dfc8.mongodb.net/SMB?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;
