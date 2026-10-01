importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

// ใส่ค่าเดียวกับ FIREBASE_CONFIG ใน index.html
firebase.initializeApp({
  firebase.initializeApp({
  apiKey: "AIzaSyAdrUOwrA-TfSE5-bYcq4l6aCjxpOXkSZ8",
  authDomain: "ruamkit-queue.firebaseapp.com",
  projectId: "ruamkit-queue",
  storageBucket: "ruamkit-queue.firebasestorage.app",
  messagingSenderId: "887103361405",
  appId: "1:887103361405:web:8e37efa98ef8358df2bc14"
});

// ข้อความที่มี notification จะถูกแสดงให้อัตโนมัติเมื่อหน้าเว็บอยู่เบื้องหลัง
firebase.messaging();
