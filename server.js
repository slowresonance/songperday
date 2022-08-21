const express = require("express");
const app = express();
const PORT = 8080;
const handler = require("./loaders/requestHandler");

app.listen(PORT, () => console.log("I'm alive!!"));

app.use(express.json());

// GET:
//     /song
// 	/song/id
// 	/song?num = "4"
// 	/song?inuser = "Momomomo"
//  /song?exuser = "cat"
// 	/song?year = "2020"
// 	/song?year = "2021"&?month = "2"
// 	/song?year = "2022"&?month = "3"&?date = "15"
// 	/song?first = "12"
// 	/song?last = "5"

app.get("/song", (req, res) => {
  console.log(handler);
  res.status(200).send(handler.getSongByQuery(req.query));
});

app.get("/song/:id", (req, res) => {
  //   getSongById(req.params.id);
});
