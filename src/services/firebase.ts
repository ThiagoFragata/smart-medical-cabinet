import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBuCwPThSidWI2H3Y5I5htGLy95NoZDLVQ",
  authDomain: "smart-medical-cabinet-73d17.firebaseapp.com",
  databaseURL: "https://smart-medical-cabinet-73d17-default-rtdb.firebaseio.com",
  projectId: "smart-medical-cabinet-73d17",
  storageBucket: "smart-medical-cabinet-73d17.appspot.com",
  messagingSenderId: "19673441720",
  appId: "1:19673441720:web:5b8e0089299791c4169b4d",
};

const firebaseApp = initializeApp(firebaseConfig);
export const database = getDatabase(firebaseApp);
