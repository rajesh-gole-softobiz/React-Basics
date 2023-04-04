// https://642badead7081590f9271819.mockapi.io/:users

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import superagent from 'superagent'
import { get } from 'superagent'
import type { PayloadAction } from '@reduxjs/toolkit'

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (data: any={}, thunkAPI) => {
    const response: any = await get('https://642badead7081590f9271819.mockapi.io/users');
    // const result = 
    return response.body
  }
)

export interface CounterState {
  users: [],
  loading: boolean,
  error: string | null
}

const initialState: CounterState = {
  users: [],
  loading: false,
  error: null
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {

  },
   extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchUsers.pending, (state, action) => {
        state.loading = true;
    })
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
    })
    builder.addCase(fetchUsers.rejected, (state, action) => {
        console.log('error');
        state.error = "Something went Wrong";
        state.loading  = false;
    })
  },
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default usersSlice.reducer
