import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
        replaceByNumber: (state, action) => {
            state.value = Number.isNaN(action.payload) ? 0 : action.payload
        }
    },
})

export const { increment, decrement, incrementByAmount, replaceByNumber } = counterSlice.actions
export const counterReducer = counterSlice.reducer
