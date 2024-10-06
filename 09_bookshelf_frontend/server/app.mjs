import express from "express";
import apiRoutes from "./api-routes/index.mjs";
import "./helpers/db.mjs";
import env from "dotenv";
import cors from 'cors';
import path from 'path'

env.config();

const app = express();
const port = process.env.PORT || 8081;

app.use(express.static('/', 'public'))
// app.use(express.static('build'))
// app.get('*', function(req, res) {
//   const indexHtml = path.resolve('build', 'index.html')
//   res.sendFile(indexHtml)
// })

// json
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000',
}))
// app.use(cors({}))

app.get("/", (req, res) => {
  res.send(`Hello`)
});

// api
app.use("/api", apiRoutes);

app.use(function (req, res) {
  res.status(404).json({ msg: "Page not found." });
});

// app.use(function (err, req, res, next) {
//   if(res.headersSent) {
//     return next(err)
//   }
//   res.status(500).json({msg: err})
// });

// start
app.listen(port, function () {
  console.log(`Server Start: http://localhost:${port}`);
});
