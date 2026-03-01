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

app.get("/", (req, res) => {
  res.send("Bus Tracking Backend Running");
});

// SAVE / UPDATE BUS LOCATION
app.post("/update-location", async (req, res) => {
  try {
    const { busId, lat, lng } = req.body;

    if (!busId || typeof lat !== "number" || typeof lng !== "number") {
      return res.status(400).json({ error: "Invalid data" });
    }

    await db.ref("buses/" + busId).update({
      lat,
      lng,
      updatedAt: Date.now()
    });

    res.json({ status: "Location updated" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log("Server running on port " + PORT));