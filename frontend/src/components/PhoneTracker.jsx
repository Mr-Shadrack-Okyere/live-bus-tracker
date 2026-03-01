import { useEffect, useState } from "react";
import { db } from "../services/firebase";
import { ref, set } from "firebase/database";

export default function PhoneTracker() {
  const [status, setStatus] = useState("Starting GPS...");

  useEffect(() => {
    if (!navigator.geolocation) {
      setStatus("GPS not supported on this device");
      return;
    }

    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        set(ref(db, "liveUsers/user1"), {
          lat,
          lng,
          time: Date.now()
        });

        setStatus("Sending location...");
      },
      (error) => {
        setStatus("Location error: " + error.message);
      },
      {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 10000
      }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "22px",
      fontWeight: "bold"
    }}>
      {status}
    </div>
  );
}