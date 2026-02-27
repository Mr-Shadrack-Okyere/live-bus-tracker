import { useEffect, useState } from "react";
import { database } from "../services/firebase";
import { ref, onValue } from "firebase/database";
import BusCard from "./BusCard";

function Map() {
  const [busLocation, setBusLocation] = useState(null);

  useEffect(() => {
    const busRef = ref(database, "bus/location");

    onValue(busRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setBusLocation(data);
      }
    });
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="bg-gray-200 w-full max-w-md h-64 rounded flex items-center justify-center">
        <p className="text-gray-600">
          Live map connected to Firebase
        </p>
      </div>

      <BusCard bus={busLocation} />
    </div>
  );
}

export default Map;