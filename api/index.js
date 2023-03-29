const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");

dotenv.config();
app.use(express.json());


async function main() {
    await mongoose.connect(process.env.MONGO_ACC, {});
}
main().then(console.log("connected to MongoDB")).catch(err => console.log(err));


app.use("/server/auth", authRoute);


app.listen("3000", () => {
    console.log("Backend is running...");
});