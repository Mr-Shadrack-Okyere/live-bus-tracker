import { useState } from "react"
import Map from "./components/Map"
import BusStopSelector from "./components/BusStopSelector"
import BusCard from "./components/BusCard"
import { getMockBuses, getMockStops } from "./services/busService"

function App() {
  const [selectedStop, setSelectedStop] = useState("")

  const buses = getMockBuses()
  const stops = getMockStops()

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 text-center">
        <h1 className="text-xl font-bold">
          Live Bus Tracker & ETA Notifier
        </h1>
      </header>

      <main className="p-4 space-y-4">
        <Map />

        <BusStopSelector
          stops={stops}
          selectedStop={selectedStop}
          setSelectedStop={setSelectedStop}
        />

        {selectedStop && (
          <div className="space-y-4">
            {buses.map((bus) => (
              <BusCard key={bus.id} bus={bus} />
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

import Map from "./components/Map";
import BusStopSelector from "./components/BusStopSelector";

function App() {
  return (
    <div>
      <h1>Live Bus Tracker</h1>
      <BusStopSelector />
      <Map />
    </div>
  );
}

export default App;
export default App
