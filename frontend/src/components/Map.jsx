import { GoogleMap, LoadScript, Marker, Polyline } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
  borderRadius: "12px"
};

// Center of KNUST campus
const center = {
  lat: 6.6736,
  lng: -1.5717
};

// Example route: Brunei → KSB → Commercial → Impact
const routePath = [
  { lat: 6.6743, lng: -1.5719 }, // Brunei area
  { lat: 6.6732, lng: -1.5710 }, // Impact building area
  { lat: 6.6726, lng: -1.5703 }, // Commercial area
  { lat: 6.6719, lng: -1.5696 }  // KSB area
];

// Temporary bus location (later from Android GPS)
const busLocation = {
  lat: 6.6732,
  lng: -1.5710
};

function Map() {
  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={16}>

        {/* Bus Marker */}
        <Marker position={busLocation} />

        {/* Route Line */}
        <Polyline
          path={routePath}
          options={{
            strokeOpacity: 0.8,
            strokeWeight: 4
          }}
        />

      </GoogleMap>
    </LoadScript>
  );
}

export default Map;