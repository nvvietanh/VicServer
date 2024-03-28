const express = require("express");

const app = express();

let reqCnt = 0
app.get("/", (req, res) => {
  reqCnt += 1;
  console.log(`resCnt ${reqCnt}`);
  res.send("<h1>API is running...<h1>");
})

PORT = 5000
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
})