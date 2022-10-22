// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCzHBQ8l9YbSLAGSHBYI1LbhCMOBIBWyCg',
	authDomain: 'tesla-future-clone.firebaseapp.com',
	databaseURL: 'https://tesla-future-clone-default-rtdb.firebaseio.com',
	projectId: 'tesla-future-clone',
	storageBucket: 'tesla-future-clone.appspot.com',
	messagingSenderId: '113748915096',
	appId: '1:113748915096:web:9e943c43163f1664f071ed',
	measurementId: 'G-312YLRESBX',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);