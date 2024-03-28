const express = required("express");

const app = express();

let reqCnt = 0
app.get("/", (req, res) => {
  reqCnt += 1;
  console(`resCnt ${reqCnt}`);
  res.send("API is running...");
})

PORT = 5000
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
})