// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore,doc, getDoc,setDoc } from 'firebase/firestore'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAykI2l5l9RLp6nXUAqDdENMiYastyfzFI",
  authDomain: "clothing-store-69b98.firebaseapp.com",
  projectId: "clothing-store-69b98",
  storageBucket: "clothing-store-69b98.appspot.com",
  messagingSenderId: "245811143619",
  appId: "1:245811143619:web:8b57fdc1ff19db96ea1376"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//creating a prvider instance for googleAuthProvider
const provider = new GoogleAuthProvider();

//set custom params for provider instance to tell our auth how to behave or focus on certain params
provider.setCustomParameters = () =>({
    prompts:'select_account'
})

export const auth = getAuth()

export const signInWithGooglePopUp = () => signInWithPopup(auth,provider)


//instantiate db
export const db = getFirestore()  // this directly points to our databse 

export const createUserDocumentFromAuth = async(userAuth) =>{
    //creates user document reference ,it tells give me the doc ref of the users so as to access it correctly
    const userDocRef = doc(db,'users',userAuth.uid)
    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef)
    console.log(userSnapshot)
}

