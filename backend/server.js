const express = require("express");
const cors = require("cors");
const morgan = require("morgan")

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

const permutations = (arr) => {
  if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;
  return arr.reduce(
    (acc, item, i) =>
      acc.concat(
        permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [
          item,
          ...val,
        ])
      ),
    []
  );
};

let reqCnt = 0
app.get("/", (req, res) => {
  reqCnt += 1;
  console.log(`resCnt ${reqCnt}`);
  permutations([1, 33, 5]);
  permutations([1, 33, 5]);
  permutations([1, 33, 5]);
  permutations([1, 33, 5]);
  permutations([1, 33, 5]);
  permutations([1, 33, 5]);
  permutations([1, 33, 5]);
  permutations([1, 33, 5]);
  res.send(`
    <h1>API is running...<h1>
    <h2>Counter: ${reqCnt}<h2>
  `);
})

PORT = 5000
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
})