// TODO: find out if this works without using the @firebase -- since those are not to be used 🤷‍♂
import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/storage';
import '@firebase/database';
import '@firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyAeY0E4FRD9kaGTTr_fEiJjigogN51gmaM',
  authDomain: 'react-slack-clone-98c1c.firebaseapp.com',
  databaseURL: 'https://react-slack-clone-98c1c.firebaseio.com',
  projectId: 'react-slack-clone-98c1c',
  storageBucket: 'react-slack-clone-98c1c.appspot.com',
  messagingSenderId: '281313003230',
  appId: '1:281313003230:web:9eac769aaf048e0dd0244f',
  measurementId: 'G-QWY53FT6QJ',
};

console.log(firebase);

// Initialize Firebase
const poop = firebase.initializeApp(firebaseConfig);
firebase.analytics();

console.log(poop);

export default firebase;
