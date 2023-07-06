import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "./FirebaseConfig";


export const createUser = async({ email, password, displayName }) => {

    try {
        const resp =  await createUserWithEmailAndPassword(firebaseAuth, email, password);
        const {uid, email, displayName} = resp.user;

         await updateProfile(firebaseAuth.createUser, { displayName });


        return {
            ok: true,
            uid, email, displayName
        }

        
        
    } catch (error) {

        return { ok: false, errorMessage: error.message }
    }

};

export const loginUser = async({ email, password }) => {
    try {
        const resp = await signInWithEmailAndPassword(firebaseAuth, email, password)
        const {uid, email, displayName} = resp.user;
        console.log(resp)
         
        return {
            ok: true,
            uid, email, displayName
        }
        
    } catch (error) {
        return { ok: false, errorMessage: error.message }
    }

}
  