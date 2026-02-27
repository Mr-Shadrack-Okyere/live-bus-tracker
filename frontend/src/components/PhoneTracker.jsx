import { useEffect, useState } from "react";
import { db } from "../services/firebase";
import { ref, set } from "firebase/database";

function PhoneTracker() {
  const [status, setStatus] = useState("Starting GPS...");

  useEffect(() => {
    if (!navigator.geolocation) {
      setStatus("GPS not supported on this device");
      return;
    }

    let deviceId = localStorage.getItem("deviceId");

    if (!deviceId) {
      const name = prompt("Enter tracker name (Bus A, Walker 1, etc)");
      deviceId = name || crypto.randomUUID();
      localStorage.setItem("deviceId", deviceId);
    }

    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        set(ref(db, "buses/" + deviceId), {
          latitude,
          longitude,
          updatedAt: Date.now(),
        });

        setStatus("Location sent ✅");
      },
      (error) => {
        setStatus("GPS Error: " + error.message);
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
    <div style={{ padding: 12 }}>
      <h2>Phone Tracker</h2>
      <p>{status}</p>
    </div>
  );
}

export default PhoneTracker;