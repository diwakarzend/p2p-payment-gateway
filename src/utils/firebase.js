import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, set,update, push, child, query, orderByValue } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyCQhu0CfqH5_8vFICBKjEXHBtM8DHFYpzI",
  authDomain: "imoney-63b1b.firebaseapp.com",
  databaseURL: "https://imoney-63b1b-default-rtdb.firebaseio.com",
  storageBucket: "imoney-63b1b.appspot.com",
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export { db, ref, onValue, set, update, push, child, query, orderByValue };
