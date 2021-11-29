import style from './ProductCard.module.css'
import { useState } from 'react'
import Plus from '../icons/Plus'
import Minus from '../icons/Minus'
import { useDispatch } from 'react-redux'
import {
  incrementTotalAmount,
  decrementTotalAmount
} from '../../features/cart/amountReducer'
import { deleteProduct } from '../../features/cart/productReducer'

export default function ManageAmount({ unaddAmount, product, addAmount }) {
  const dispatch = useDispatch()

  const AddAmount = () => {
    addAmount()
    dispatch(incrementTotalAmount())
  }

  const unAddAmount = () => {
    unaddAmount()
    if (product.amount === 1) {
      unaddAmount()
      dispatch(deleteProduct(product))
    }
    dispatch(decrementTotalAmount())
  }
  return (
    <div className={style.manageContainer}>
      <button onClick={unAddAmount} className={style.unadd}>
        <Minus />
      </button>
      <div className={style.showAmount}>
        <span>{product.amount}</span>
      </div>
      <button className={style.add} onClick={AddAmount}>
        <Plus />
      </button>
    </div>
  )
}
