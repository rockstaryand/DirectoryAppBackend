// const express = require("express");
// const app = express();
// const PORT = 8080;

// app.use(express.json());

// app.listen(PORT, () => console.log(`it's alive on http://localhost:${PORT}`));

// app.get('/files', (req, res) => {
//     res.status(200).send({
//         tshirt: 'jdsijbv',
//         size: 'large'
//     })
// })

// const fs = require("fs").promises;

// async function main() {
//   app.get("/files", (req, res) => {
//     const { path } = req.body;

//     const items = await fs.readdir(path);
//     console.log(items);

//     res.status(200).send({
//       tshirt: "jdsijbv",
//       file: items,
//     });
//   });
// }
// main();
