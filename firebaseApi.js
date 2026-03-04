import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyAGJIjDHm1FFJbI7uB3AwYkWk6Hh8840rk",
    authDomain: "st-app-64ff8.firebaseapp.com",
    projectId: "st-app-64ff8",
    storageBucket: "st-app-64ff8.firebasestorage.app",
    messagingSenderId: "465348018884",
    appId: "1:465348018884:web:f747505dfcc10817853f91"
};

import {
    getFirestore,
    doc,
    setDoc,
    addDoc,
    getDoc,
    getDocs,
    deleteDoc,
    updateDoc,
    serverTimestamp,
    collection,
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

export {
    initializeApp,
    firebaseConfig,
    getFirestore,
    doc,
    setDoc,
    addDoc,
    getDoc,
    getDocs,
    deleteDoc,
    updateDoc,
    serverTimestamp,
    collection,
}