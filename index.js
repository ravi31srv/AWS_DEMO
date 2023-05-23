const express = require("express");
const app = express();
const port = 3000;
const NodeCache = require("node-cache");
const myCache = new NodeCache();

const instanceId = Math.random();

function timeTaking() {
  let total = 0;
  for (let a = 0; a < 100000000; a++) {
    total += a;
  }
  return total;
}
app.get("/", (req, res) => {
  console.log(`req came on instanceId  :${instanceId}`);

  let result = {};
  const chachChek = myCache.get("result");
  console.log("chachChek:", chachChek);
  if (chachChek === undefined) {
    console.log("result not found in cache");
    result = timeTaking();
    myCache.set("result", result);
  } else {
    console.log("result  found in cache");
    result = chachChek;
  }

  res.send({ result });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
