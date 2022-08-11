import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    number: 0,
    title: 'Learn Redux Toolkit - Class'
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incrementCl: (state) => {
            state.number += 1
        },
        decrementCl: (state) => {
            state.number -= 1
        },
        dynamicIncrementCl: (state, action) => {
            state.number += action.payload
        }
    }
})

export const { incrementCl, decrementCl, dynamicIncrementCl } = counterSlice.actions

export default counterSlice.reducer