import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyANGTEiG-exIhLsIj1KW8pCrwpV449_DOM",
    authDomain: "dev-journey-97f88.firebaseapp.com",
    databaseURL: "https://dev-journey-97f88.firebaseio.com",
    projectId: "dev-journey-97f88",
    storageBucket: "dev-journey-97f88.appspot.com",
    messagingSenderId: "1015626220810",
    appId: "1:1015626220810:web:83a0e649f1eac9f45a26f3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

console.log('Conectado a la base de datos')

export default firebase;