function BusStopSelector({ stops, selectedStop, setSelectedStop }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-semibold mb-2">Select Bus Stop</h2>

      <select
        value={selectedStop}
        onChange={(e) => setSelectedStop(e.target.value)}
        className="w-full p-2 border rounded"
      >
        <option value="">-- Choose a Stop --</option>
        {stops.map((stop) => (
          <option key={stop.id} value={stop.name}>
            {stop.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default BusStopSelector
