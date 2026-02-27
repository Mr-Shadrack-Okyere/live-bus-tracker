import { useState } from "react";

function NotificationSettings() {
  const [minutes, setMinutes] = useState(5);

  const requestPermission = () => {
    if (!("Notification" in window)) {
      alert("Browser does not support notifications");
      return;
    }

    Notification.requestPermission().then(permission => {
      if (permission === "granted") {
        new Notification("Notifications enabled!");
      }
    });
  };

  return (
    <div className="bg-white shadow rounded-xl p-4 w-full max-w-md">
      <h3 className="font-semibold mb-2">Arrival Notification</h3>

      <select
        className="w-full border rounded p-2"
        value={minutes}
        onChange={(e) => setMinutes(e.target.value)}
      >
        <option value={5}>5 minutes before</option>
        <option value={10}>10 minutes before</option>
        <option value={15}>15 minutes before</option>
      </select>

      <button
        onClick={requestPermission}
        className="mt-3 bg-blue-600 text-white px-4 py-2 rounded w-full"
      >
        Enable Notifications
      </button>
    </div>
  );
}

export default NotificationSettings;