import * as firebase from 'firebase/app';
import 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyCh0TZXrYouEJuxGFVwIm85Rk_3-16WNkU",
  authDomain: "xando-app.firebaseapp.com",
  databaseURL: "https://xando-app.firebaseio.com",
  projectId: "xando-app",
  storageBucket: "xando-app.appspot.com",
  messagingSenderId: "134456415358",
  appId: "1:134456415358:web:eff699d35e202d9e69b42f",
  measurementId: "G-6232PQ2J4R"
};
firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics();

export default analytics;