
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyDbFwXZOzFi4Y9DlUIOEAXUNBN2jNY_sGo",
  authDomain: "stayon-51caa.firebaseapp.com",
  projectId: "stayon-51caa",
  storageBucket: "stayon-51caa.appspot.com",
  messagingSenderId: "1007201296541",
  appId: "1:1007201296541:web:4d71882f97246887793474",
  measurementId: "G-Y1VWDLQ3M1"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
  console.log('Received background message: ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'path/to/icon.png' // Make sure this path is correct
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});