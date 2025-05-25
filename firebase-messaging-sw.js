// firebase-messaging-sw.js

importScripts('https://www.gstatic.com/firebasejs/10.4.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.4.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: 'AIzaSyBV6r9QSSTJK3mcGf_UgkraqEUgSFjW7dU',
    appId: '1:404237963168:web:6cc15ec59c53220e019ec5',
    messagingSenderId: '404237963168',
    projectId: 'chat-and-expanse',
    authDomain: 'chat-and-expanse.firebaseapp.com',
    storageBucket: 'chat-and-expanse.firebasestorage.app',
});

const messaging = firebase.messaging();
