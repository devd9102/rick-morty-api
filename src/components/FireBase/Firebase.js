import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD8O_x2wnAupiVnq6wjKT_K9TxUSJCzRlk',
  authDomain: 'rickandmortyproject-api',
  projectId: 'rickandmortyproject-api',
  storageBucket: 'nam5',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();

export { auth };
