import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import {useAuthState} from 'react-firebase-hooks/auth'
import {useCollectionData} from 'react-firebase-hooks/firestore'

firebase.initializeApp({
  apiKey: "AIzaSyBCfIxO-aIcMKGDD7Ne8Ga9J6cz13waSJE",
    authDomain: "react-fire-chat-app-5410b.firebaseapp.com",
    projectId: "react-fire-chat-app-5410b",
    storageBucket: "react-fire-chat-app-5410b.appspot.com",
    messagingSenderId: "583138242284",
    appId: "1:583138242284:web:297e99ebd4f5aaf67fffc9"
})

const auth = firebase.auth();
const fireStore = firebase.firestore();

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
    </div>
  );
}

export default App;
