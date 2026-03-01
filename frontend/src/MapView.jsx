import { useEffect, useRef } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBDKYX5hhqPosEG5o0V93qKcri7_o8JUEE",
  authDomain: "knust-bus-tracker-dc17a.firebaseapp.com",
  databaseURL: "https://knust-bus-tracker-dc17a-default-rtdb.firebaseio.com",
  projectId: "knust-bus-tracker-dc17a",
  storageBucket: "knust-bus-tracker-dc17a.firebasestorage.app",
  messagingSenderId: "158223988613",
  appId: "1:158223988613:web:9113518da58c4eacc9b6ec"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function MapView() {
  const mapRef = useRef(null);

  useEffect(() => {
    const loadMap = () => {
      const center = { lat: 6.6745, lng: -1.5716 };

      const bounds = {
        north: 6.6905,
        south: 6.6570,
        west: -1.5905,
        east: -1.5515,
      };

      const map = new window.google.maps.Map(mapRef.current, {
        zoom: 16,
        center,
        minZoom: 15,
        maxZoom: 18,
        restriction: { latLngBounds: bounds, strictBounds: true },
      });

      const busIcon = {
        url: "https://maps.google.com/mapfiles/kml/shapes/bus.png",
        scaledSize: new window.google.maps.Size(40, 40),
      };

      const markers = {
        bus1: new window.google.maps.Marker({ map, icon: busIcon }),
        bus2: new window.google.maps.Marker({ map, icon: busIcon }),
        bus3: new window.google.maps.Marker({ map, icon: busIcon }),
      };

      const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

      // LOOP ROUTES (campus roads)
      const paths = {
        bus1: [
          { lat: 6.6749, lng: -1.5712 },
          { lat: 6.6760, lng: -1.5698 },
          { lat: 6.6752, lng: -1.5679 },
          { lat: 6.6735, lng: -1.5690 },
        ],
        bus2: [
          { lat: 6.6728, lng: -1.5689 },
          { lat: 6.6715, lng: -1.5705 },
          { lat: 6.6722, lng: -1.5730 },
          { lat: 6.6740, lng: -1.5718 },
        ],
        bus3: [
          { lat: 6.6762, lng: -1.5738 },
          { lat: 6.6780, lng: -1.5722 },
          { lat: 6.6771, lng: -1.5695 },
          { lat: 6.6755, lng: -1.5710 },
        ],
      };

      const step = { bus1: 0, bus2: 0, bus3: 0 };

      // DEMO LOOP MOVEMENT
      setInterval(() => {
        Object.keys(markers).forEach((id) => {
          const route = paths[id];
          step[id] = (step[id] + 1) % route.length;

          const pos = route[step[id]];
          markers[id].setPosition({
            lat: clamp(pos.lat, bounds.south, bounds.north),
            lng: clamp(pos.lng, bounds.west, bounds.east),
          });
        });
      }, 3000);

      // REAL GPS FROM FIREBASE (overrides demo)
      const busesRef = ref(db, "buses");

      onValue(busesRef, (snapshot) => {
        const buses = snapshot.val();
        if (!buses) return;

        Object.entries(buses).forEach(([id, bus]) => {
          if (markers[id]) {
            markers[id].setPosition({
              lat: clamp(bus.lat, bounds.south, bounds.north),
              lng: clamp(bus.lng, bounds.west, bounds.east),
            });
          }
        });
      });
    };

    const script = document.createElement("script");
    script.src =
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBoFoN8VI_b96kkYmOF8ikxH2MdVCuCQRk&callback=initMap";
    script.async = true;
    script.defer = true;

    window.initMap = loadMap;
    document.head.appendChild(script);
  }, []);

  return <div ref={mapRef} style={{ width: "100%", height: "100%" }} />;
}

export default MapView;