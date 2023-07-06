import { createSlice } from '@reduxjs/toolkit'

const stateStatus = {
    authenticated: Symbol("authenticated"),
    notAuthenticated: Symbol("notauthenticated"),
    invalid: Symbol("invalid"),
    checking: Symbol("checking"),
}

const initialState = {
    status: stateStatus.checking,
    email: null,
    password: null,
    displayName: null,
    get name() {
        return this.displayName;
    },
    set name(value) {
        this.displayName = value;
    },
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, { payload } ) => {
            state.status = '',
            state.email = payload.email;
            state.password = payload.password;
            state.displayName = payload.name;
        },

        logout: (state, { payload } ) => {
            state.status ='',
            state.email = null;
            state.password = null;
            state.displayName = null;
            // state.errorMessage = payload?.errorMessage;
        },

        creatingUser: (state) => {
            state.status = '';
        }
    
    },
})

export const { login, logout, creatingUser } = authSlice.actions

export default authSlice.reducer