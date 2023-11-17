import firebase from 'firebase/compat/app'
import "firebase/compat/auth"
import "firebase/compat/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCuGxs7V54TTD8UpQOfoZqwBko92ePZOv0",
  authDomain: "my-project-c6998.firebaseapp.com",
  projectId: "my-project-c6998",
  storageBucket: "my-project-c6998.appspot.com",
  messagingSenderId: "816690593443",
  appId: "1:816690593443:web:b9499031ff3976d9400916",
  measurementId: "G-MEVJJPSTQ8"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
// const analytics = getAnalytics(app);

export default app;
