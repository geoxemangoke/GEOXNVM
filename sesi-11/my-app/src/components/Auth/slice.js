import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoginPending: false,
    isLoginSuccess: false,
    errorMessage: '',
    user: {}
}

const promiseLoginApi = (email, password) => 
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if(email === 'admin@login.com' && password === 'admin') {
                resolve({ email })
            } else{
                reject('Invalid email and password')
            }
        }, 1000);
    })
    
export const authLoginAPI = createAsyncThunk('auth/login', async ({ email, password }) => {
    try {
        const response = await promiseLoginApi(email, password)
        return response.email
    } catch (error) {
        throw error
    }
})

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducer: {},
    extraReducers: (builder) => {
        builder.addCase(authLoginAPI.pending, (state) => {
            state.isLoginPending = true
            state.errorMessage = ''
            state.isLoginSuccess = false
            console.log(state, '============ pending ========== ')
        })
        builder.addCase(authLoginAPI.fulfilled, (state, action) => {
            state.isLoginPending = false
            state.isLoginSuccess = true
            state.user.email = action.payload
            console.log(action.meta.arg, '============ fulfilled ========== ')
        })
        builder.addCase(authLoginAPI.rejected, (state, action) => {
            state.isLoginPending = false
            state.isLoginSuccess = false
            state.errorMessage = action.error.message
            console.log(action, '============ rejected ========== ')
        })
    }
})

export default authSlice.reducer