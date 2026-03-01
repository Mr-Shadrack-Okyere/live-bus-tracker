import "./App.css";
import { useState } from "react";
import MapView from "./MapView";

function App() {
  const [tracking, setTracking] = useState(false);

  return (
    <div className="app">
      <header className="topbar">
        <h2>KNUST Shuttle Tracker</h2>
      </header>

      <div className="map-area">
        <MapView tracking={tracking} />
      </div>

      <div className="panel">
        <button
          className="primary"
          onClick={() => setTracking(true)}
        >
          Start Tracking
        </button>
      </div>
    </div>
  );
}

export default App;