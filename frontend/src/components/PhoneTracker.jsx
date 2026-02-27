import { useEffect, useState } from "react";
import { db } from "../services/firebase";
import { ref, set } from "firebase/database";

function PhoneTracker() {
  const [status, setStatus] = useState("Waiting for GPS...");

  useEffect(() => {
    if (!navigator.geolocation) {
      setStatus("GPS not supported");
      return;
    }

    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // unique device id
        const deviceId = localStorage.getItem("deviceId") || crypto.randomUUID();
        localStorage.setItem("deviceId", deviceId);

        set(ref(db, `buses/${deviceId}`), {
          latitude,
          longitude,
          updatedAt: Date.now(),
        });

        setStatus("Location sent ✅");
      },
      (error) => {
        setStatus("GPS error: " + error.message);
      },
      {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 5000,
      }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Phone GPS Sender</h2>
      <p>{status}</p>
    </div>
  );
}

export default PhoneTracker;