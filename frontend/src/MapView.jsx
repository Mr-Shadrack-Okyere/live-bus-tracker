import { useEffect, useRef } from "react";

function MapView() {
  const mapRef = useRef(null);

  useEffect(() => {
    const loadMap = () => {
      const center = { lat: 6.6745, lng: -1.5716 }; // KNUST

      const map = new window.google.maps.Map(mapRef.current, {
        zoom: 15,
        center,
      });

      new window.google.maps.Marker({
        position: center,
        map,
        title: "Bus",
        icon: {
          url: "https://maps.google.com/mapfiles/kml/shapes/bus.png",
          scaledSize: new window.google.maps.Size(40, 40),
        },
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

  return <div style={{ width: "100%", height: "100%" }} ref={mapRef}></div>;
}

export default MapView;