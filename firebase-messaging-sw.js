
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

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Received background message: ', payload);

  const notificationTitle = (payload.notification && payload.notification.title) || 'Default Title';
  const notificationBody = (payload.notification && payload.notification.body) || 'Default Body';
  const notificationOptions = {
    body: notificationBody,
    data: payload.data || {},
  };
    self.clients.matchAll({ type: 'window', includeUncontrolled: true })
    .then((clients) => {
      if (clients && clients.length) {
        clients.forEach((client) => {
          try {
            client.postMessage(payload);
          } catch (error) {
            console.error('Error posting message to client:', error);
          }
        });
      }
    })
    .catch((error) => {
      console.error('Error matching clients:', error);
    });

  self.registration.showNotification(notificationTitle, notificationOptions)
    .then(() => console.log('Notification displayed successfully'))
    .catch((error) => console.error('Error displaying notification:', error));

});