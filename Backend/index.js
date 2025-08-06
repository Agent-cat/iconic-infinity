const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const userRouter = require("./routes/user.routes");
const jobRouter = require("./routes/job.routes");
const jobApplicationRouter = require("./routes/jobApplication.routes");

const { ConnectDB } = require("./Database/connection");
const port = process.env.PORT || 5000;


app.use(cors({
  origin: "*", 
  credentials: true
}));
app.use(express.json());


ConnectDB();

app.use("/api/users", userRouter);
app.use("/api/jobs", jobRouter);
app.use("/api", jobApplicationRouter);


app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: err.message
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
