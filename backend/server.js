const express = require("express");
const cors = require("cors");
const morgan = require("morgan")

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

let reqCnt = 0
app.get("/", (req, res) => {
  reqCnt += 1;
  console.log(`resCnt ${reqCnt}`);
  res.send(`
    <h1>API is running...<h1>
    <h2>Counter: ${reqCnt}<h2>
  `);
})

PORT = 5000
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
})