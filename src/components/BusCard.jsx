function BusCard({ bus }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-bold text-lg">Bus {bus.number}</h3>
      <p>Route: {bus.route}</p>
      <p className="text-blue-600 font-semibold">
        ETA: {bus.eta} mins
      </p>
    </div>
  )
}

export default BusCard

function BusCard({ bus }) {
  return (
    <div className="bus-card">
      <h3>Route {bus.route}</h3>
      <p>Status: {bus.status}</p>
      <p>Speed: {bus.speed} km/h</p>
    </div>
  );
}

export default BusCard;
