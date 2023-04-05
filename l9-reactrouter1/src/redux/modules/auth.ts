import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface IUser {
  email: string
}

export interface CounterState {
  value: number,
  user: IUser | null
}

const initialState: CounterState = {
  value: 0,
  user: null
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setUser: (state,action) => {
      state.user = action.payload
    },
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount,setUser } = counterSlice.actions

export default counterSlice.reducer