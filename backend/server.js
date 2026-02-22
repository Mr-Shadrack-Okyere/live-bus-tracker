const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let buses = {};

app.post("/update-location", (req, res) => {
  const { busId, lat, lng } = req.body;

  buses[busId] = { lat, lng };
  res.json({ message: "Location updated" });
});

app.get("/buses", (req, res) => {
  res.json(buses);
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});
