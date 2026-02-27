import stops from "../data/stops";

function BusStopSelector({ selectedStop, setSelectedStop }) {
  return (
    <div className="bg-white shadow rounded-xl p-4 w-full max-w-md">
      <h3 className="font-semibold mb-2">Select Bus Stop</h3>

      <select
        className="w-full border rounded p-2"
        value={selectedStop?.id || ""}
        onChange={(e) => {
          const stop = stops.find(s => s.id === Number(e.target.value));
          setSelectedStop(stop);
        }}
      >
        <option value="">Choose stop</option>
        {stops.map(stop => (
          <option key={stop.id} value={stop.id}>
            {stop.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default BusStopSelector;