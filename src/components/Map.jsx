import { useEffect, useState } from "react";
import { getMockBuses } from "../services/busService";

function Map() {
  const [buses, setBuses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = getMockBuses();
    setBuses(data);
    setLoading(false);
  }, []);

  if (loading) return <p>Loading live buses...</p>;

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-semibold mb-2">Live Buses</h2>

      {buses.map(bus => (
        <div key={bus.id} className="border p-2 mb-2 rounded">
          <p><strong>Bus:</strong> {bus.number}</p>
          <p><strong>Route:</strong> {bus.route}</p>
          <p><strong>ETA:</strong> {bus.eta} mins</p>
        </div>
      ))}
    </div>
  );
}

export default Map;
