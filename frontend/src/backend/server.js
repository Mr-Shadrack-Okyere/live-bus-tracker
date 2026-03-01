const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://knust-bus-tracker-dc17a-default-rtdb.firebaseio.com"
});

const db = admin.database();

const app = express();
app.use(cors());
app.use(express.json());

// SAVE BUS LOCATION
app.post("/update-location", async (req, res) => {
  const { busId, lat, lng } = req.body;

  if (!busId || !lat || !lng) {
    return res.status(400).send("Missing data");
  }

  await db.ref("buses/" + busId).set({
    lat,
    lng,
    time: Date.now()
  });

  res.send("Location updated");
});

app.listen(5000, () => console.log("Server running on port 5000"));