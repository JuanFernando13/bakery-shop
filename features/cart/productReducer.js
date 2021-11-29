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
    incrementAmount: (state, action) => {
      const product = state.find(el => el.id === action.payload.id)
      product.amount = product.amount + 1
      return state
    }
  }
})

export const { addProduct, deleteProduct, incrementAmount } =
  productSlice.actions

export default productSlice.reducer
