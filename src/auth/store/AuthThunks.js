import { createUser, loginUser } from "../../firebase/FirebaseProvider"
import { login, logout } from "./AuthSlice";

export const createUserFirebase = ({ email, password, displayName}) => {
    return async(dispatch) => {
        const result = await createUser({email, password, displayName})

        if ( !result.ok ) return dispatch( logout( result.errorMessage ) );


        dispatch( login( result ))
    }
}

export const loginUserFirebase = ({ email, password }) => {
    return async(dispatch) => {
        const result = await loginUser({email, password})

        if ( !result.ok ) return dispatch( logout( result.errorMessage ) );

        dispatch( login( result ));

    }
}