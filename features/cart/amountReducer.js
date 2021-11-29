import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  totalAmount: 0,
  product: {}
}

export const amountSlice = createSlice({
  name: 'amount',
  initialState,
  reducers: {
    incrementTotalAmount: state => {
      state.totalAmount += 1
    },
    decrementTotalAmount: state => {
      state.totalAmount -= 1
    }
  }
})

export const { incrementTotalAmount, decrementTotalAmount } =
  amountSlice.actions

export default amountSlice.reducer
