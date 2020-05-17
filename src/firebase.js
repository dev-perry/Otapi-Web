const firebase = require('firebase');
require('firebase/firestore');

var firebaseConfig = {
  apiKey: process.env.REACT_APP_FBAPI,
  authDomain: process.env.REACT_APP_FBDOMAIN,
  databaseURL: process.env.REACT_APP_FBDBURL,
  projectId: process.env.REACT_APP_FBPID,
  storageBucket: process.env.REACT_APP_FBSTOR,
  messagingSenderId: process.env.REACT_APP_FBMSGID,
  appId: process.env.REACT_APP_FBAPPID,
  measurementId: process.env.REACT_APP_FBMEAID
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const storage = firebase.storage().ref();
export const database = firebase.firestore();
