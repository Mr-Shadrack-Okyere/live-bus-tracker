import { useEffect, useRef } from "react";

export default function Map() {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!window.google) return;

    const center = { lat: 6.6745, lng: -1.5716 };

    const map = new window.google.maps.Map(mapRef.current, {
      center,
      zoom: 15,
    });

    const busIcon = {
      url: "https://cdn-icons-png.flaticon.com/512/61/61231.png",
      scaledSize: new window.google.maps.Size(40, 40),
    };

    new window.google.maps.Marker({
      position: center,
      map,
      icon: busIcon,
      title: "Bus",
    });
  }, []);

  return <div ref={mapRef} style={{ width: "100%", height: "100vh" }} />;
}