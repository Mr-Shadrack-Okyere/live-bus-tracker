import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBDKYX5hhqPosEG5o0V93qKcri7_o8JUEE",
  authDomain: "knust-bus-tracker-dc17a.firebaseapp.com",
  databaseURL: "https://knust-bus-tracker-dc17a-default-rtdb.firebaseio.com",
  projectId: "knust-bus-tracker-dc17a",
  storageBucket: "knust-bus-tracker-dc17a.firebasestorage.app",
  messagingSenderId: "158223988613",
  appId: "1:158223988613:web:9113518da58c4eacc9b6ec"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);