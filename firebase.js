import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyRtsxJUpw6czfGe2FtBBlAyWuVLCk7ok",
  authDomain: "reusable-authentication.firebaseapp.com",
  projectId: "reusable-authentication",
  storageBucket: "reusable-authentication.appspot.com",
  messagingSenderId: "312968264430",
  appId: "1:312968264430:web:a069aee653aaf754e451ff",
  measurementId: "G-S243FD7CBF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Set session persistence
setPersistence(auth, browserLocalPersistence)
  .then(() => console.log('Session persistence set to LOCAL.'))
  .catch((error) => console.error('Error setting persistence:', error));

// Google Sign-In
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    alert(`Welcome, ${user.displayName}!`);
    return user;
  } catch (error) {
    console.error('Google sign-in failed:', error);
    alert(error.message);
    throw error;
  }
};

// Sign Out
export const signOutUser = async () => {
  try {
    await signOut(auth);
    alert('You have signed out successfully.');
  } catch (error) {
    console.error('Error during sign-out:', error);
    alert(error.message);
    throw error;
  }
};
