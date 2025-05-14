import { initializeApp } from 'firebase/app';
import { getDatabase, connectDatabaseEmulator } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfWJMdONnzLYuHvUlxB98oO2x4cnsIJLQ", // Default test API key
  authDomain: "mini-social-media-1fb23.firebaseapp.com",
  databaseURL: "https://mini-social-media-1fb23-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mini-social-media-1fb23",
  storageBucket: "mini-social-media-1fb23.appspot.com",
  messagingSenderId: "123456789012", // Default test messaging sender ID
  appId: "1:123456789012:web:1234567890123456789012" // Default test app ID
};

// Initialize Firebase with error handling
let app;
let realtimeDb;
let firestoreDb;

try {
  app = initializeApp(firebaseConfig);
  
  // Initialize Realtime Database and get a reference to the service
  realtimeDb = getDatabase(app);
  
  // Initialize Cloud Firestore and get a reference to the service
  firestoreDb = getFirestore(app);
  
  console.log("Firebase initialized successfully!");
} catch (error) {
  console.error("Firebase initialization error:", error);
}

export { app as default, realtimeDb, firestoreDb }; 