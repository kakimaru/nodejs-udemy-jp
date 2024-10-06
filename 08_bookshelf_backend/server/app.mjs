import express from "express";
import apiRoutes from "./api-routes/index.mjs";
import "./helpers/db.mjs";
import env from "dotenv";
env.config();

const app = express();
const port = process.env.PORT || 8081;

// json
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200);
});

// api
app.use("/api", apiRoutes);

app.use(function (req, res) {
  res.status(404).json({ msg: "Page not found." });
});

app.use(function (err, req, res, next) {
  if(res.headersSent) {
    return next(err)
  }
  res.status(500).json({msg: 'Invalid error'})
});

// start
app.listen(port, function () {
  console.log(`Server Start: https//localhost:${port}`);
});
