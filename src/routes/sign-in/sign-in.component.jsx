import { signInWithGooglePopUp , createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"


const SignIn = () =>{

    const logGoogleUser = async() => {
        const {user} = await signInWithGooglePopUp()
        console.log(user)
    }

    return(
        <div>
            <h1>This is sign in page</h1>
            <button onClick={logGoogleUser}>signInWithGooglePopUp</button>
        </div>
    )
}
export default SignIn