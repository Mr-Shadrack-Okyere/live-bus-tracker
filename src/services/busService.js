export const getMockBuses = () => {
  return [
    {
      id: 1,
      number: "A1",
      route: "Campus Loop",
      eta: 8
    },
    {
      id: 2,
      number: "B2",
      route: "Hostel Express",
      eta: 15
    }
  ]
}

export const getMockStops = () => {
  return [
    { id: 1, name: "Main Gate" },
    { id: 2, name: "Library" },
    { id: 3, name: "Engineering Block" }
  ]
}

export const fetchBuses = async () => {
  const res = await fetch("YOUR_API_URL_HERE");
  if (!res.ok) throw new Error("Failed to fetch bus data");
  return res.json();
};
