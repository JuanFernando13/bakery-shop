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
      const product = state?.find(el => el.id === action.payload.id)
      if (!product) return state
      product.amount = ++product.amount
      return state
    },
    decrementAmount: (state, action) => {
      const product = state?.find(el => el.id === action.payload.id)
      if (!product) return state
      product.amount = --product.amount
      return state
    },
    incrementPrice: (state, action) => {
      const product = state?.find(el => el.id === action.payload.id)
      if (!product) return state
      product.price = product.amount * action.payload.price
      return state
    }
  }
})

export const {
  addProduct,
  deleteProduct,
  incrementAmount,
  decrementAmount,
  incrementPrice
} = productSlice.actions

export default productSlice.reducer
