const fs = require('fs');
const PATH = require('path');
const dirTree = require('directory-tree');


const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");

const app = express();

const port = 3000;

app.use(cors())

app.get("/", (req, res) => {

  const tree = dirTree(
    './stuff',
    { attributes: ["size", "type", "extension", "mtime"] },
    (item, PATH, stats) => {
      console.log(item);
    }
  );

  res.send(tree);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
