import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      return [...state, action.payload]
    },
    deleteProduct: (state, action) => {
      return state.filter(el => el.id !== action.payload.id)
    },
  }
})

export const { addProduct, deleteProduct } = productSlice.actions

export default productSlice.reducer
