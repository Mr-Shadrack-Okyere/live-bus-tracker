function BusCard({ bus }) {
  if (!bus) return null;

  return (
    <div className="bg-white shadow-lg rounded-xl p-4 w-full max-w-md">
      <h2 className="text-xl font-bold text-gray-800">
        Bus {bus.number || "Tracker"}
      </h2>

      <p className="text-gray-600 mt-1">
        Latitude: {bus.lat?.toFixed(5)}
      </p>

      <p className="text-gray-600">
        Longitude: {bus.lng?.toFixed(5)}
      </p>

      <div className="mt-3 text-green-600 font-semibold">
        ● Live Tracking Active
      </div>
    </div>
  );
}

export default BusCard;