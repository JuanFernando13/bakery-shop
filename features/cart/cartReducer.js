import { createSlice } from '@reduxjs/toolkit'

const initialState = { amount: 0 }

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state) => {
      state.amount += 1
    },
    removeToCart: (state) => {
      state.amount -= 1
    }
  }
})

export const { addToCart, removeToCart } = cartSlice.actions

export default cartSlice.reducer