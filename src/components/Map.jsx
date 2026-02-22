function Map() {
  return (
    <div className="bg-white p-4 rounded shadow h-64 flex items-center justify-center">
      <p className="text-gray-500">
        Map will display live bus locations here
      </p>
    </div>
  )
}

export default Map

import { useEffect, useState } from "react";
import { fetchBuses } from "../services/busService";

function Map() {
  const [buses, setBuses] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadBuses = async () => {
    try {
      const data = await fetchBuses();
      setBuses(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadBuses();
    const interval = setInterval(loadBuses, 10000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return <p>Loading live buses...</p>;

  return (
    <div>
      {/* your map library here */}
      {buses.map(bus => (
        <div key={bus.id}>
          {bus.route} — {bus.lat}, {bus.lng}
        </div>
      ))}
    </div>
  );
}

export default Map;
