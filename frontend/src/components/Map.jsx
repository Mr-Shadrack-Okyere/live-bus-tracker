import { useEffect, useRef } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBDKYX5hhqPosEG5o0V93qKcri7_o8JUEE",
  authDomain: "knust-bus-tracker-dc17a.firebaseapp.com",
  databaseURL: "https://knust-bus-tracker-dc17a-default-rtdb.firebaseio.com",
  projectId: "knust-bus-tracker-dc17a",
  storageBucket: "knust-bus-tracker-dc17a.firebasestorage.app",
  messagingSenderId: "158223988613",
  appId: "1:158223988613:web:9113518da58c4eacc9b6ec",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function Map() {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const markerRef = useRef(null);

  useEffect(() => {
    if (!window.google) return;

    const center = { lat: 6.6745, lng: -1.5714 };

    mapInstance.current = new window.google.maps.Map(mapRef.current, {
      zoom: 15,
      center,
    });

    const locationRef = ref(db, "tracker");

    onValue(locationRef, (snapshot) => {
      const data = snapshot.val();
      if (!data) return;

      const position = {
        lat: data.lat,
        lng: data.lng,
      };

      if (!markerRef.current) {
        markerRef.current = new window.google.maps.Marker({
          position,
          map: mapInstance.current,
          title: "Live Tracker",
        });
      } else {
        markerRef.current.setPosition(position);
      }

      mapInstance.current.panTo(position);
    });
  }, []);

  return (
    <div
      ref={mapRef}
      style={{ width: "100%", height: "100vh" }}
    />
  );
}

export default Map;