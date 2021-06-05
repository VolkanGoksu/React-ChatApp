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
  const [user] = useAuthState(auth)
  return (
    <div className="App">
      <header>
        <SignOut/>
      </header>
      <section>
        {user ? <ChatRoom/> : <SignIn/>}
      </section>
    </div>
  );
}

export default App;

function SignIn(){

  const SignInGoogle=()=>{
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return(
    <div>
      <button className="sign in" onClick={SignInGoogle}>Giriş Yap</button>
    </div>
  )
}

function SignOut(){

  const SignOutGoogle=()=>{
    auth.signOut();
  }
   return(
      
        auth.currentUser && (
          <button className="sign out" onClick={SignOutGoogle}>
              Çıkış Yap
          </button>
        )
      
   )
}

function ChatRoom(){
  const messageRef = fireStore.collection('message')
  const query = messageRef.orderBy('created').limit(25)
  const [messages]=useCollectionData(query,{idField:'id'})
  return(
    <div>
       {messages && messages.map(msg=><ChatMessage key={msg.id} message={msg} />)}
    </div>
  )
}

function ChatMessage(props){
  const {text,uid,ftoUrl} = props.message;
  const messageClass = uid==auth.currentUser.uid ? 'Sent' : 'received';
  return(
    <div className={`message ${messageClass}`}>
        <img src = {ftoUrl} />
        <p>{text}</p>
    </div>
  )
}