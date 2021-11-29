import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      return [...state, action.payload]
    }
  }
})

export const { addProduct } = productSlice.actions

export default productSlice.reducer
