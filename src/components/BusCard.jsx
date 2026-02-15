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
