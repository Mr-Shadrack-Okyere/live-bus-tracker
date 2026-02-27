import { useState } from "react";
import Map from "./components/Map";
import BusStopSelector from "./components/BusStopSelector";
import NotificationSettings from "./components/NotificationSettings";

function App() {
  const [selectedStop, setSelectedStop] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4 gap-4">

      <h1 className="text-2xl font-bold text-blue-700">
        KNUST Live Bus Tracker
      </h1>

      <Map />

      <BusStopSelector
        selectedStop={selectedStop}
        setSelectedStop={setSelectedStop}
      />

      <NotificationSettings />

    </div>
  );
}

export default App;