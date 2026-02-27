import { useEffect, useRef } from "react";
import { db } from "../services/firebase";
import { ref, onValue } from "firebase/database";

export default function Map() {
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  useEffect(() => {
    const knustCenter = { lat: 6.6738, lng: -1.5716 };

    const map = new window.google.maps.Map(mapRef.current, {
      center: knustCenter,
      zoom: 15,
    });

    markerRef.current = new window.google.maps.Marker({
      position: knustCenter,
      map,
      title: "Bus Location",
    });

    const locationRef = ref(db, "bus/location");

    onValue(locationRef, (snapshot) => {
      const data = snapshot.val();
      if (!data) return;

      const position = {
        lat: data.latitude,
        lng: data.longitude,
      };

      markerRef.current.setPosition(position);
      map.panTo(position);
    });
  }, []);

  return <div ref={mapRef} style={{ width: "100%", height: "100vh" }} />;
}