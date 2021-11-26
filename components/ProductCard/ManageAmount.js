import style from './ProductCard.module.css'
import { useState } from 'react'
import Plus from '../icons/Plus'
import Minus from '../icons/Minus'
import { useDispatch } from 'react-redux'
import { addToCart, removeToCart } from '../../features/cart/cartReducer'

export default function ManageAmount({ unadd }) {
  const [amount, setAmount] = useState(1)
  const dispatch = useDispatch()

  const addAmount = () => {
    setAmount(amount + 1)
    dispatch(addToCart())
  }

  const unaddAmount = () => {
    setAmount(amount - 1)
    amount === 1 && unadd()
    dispatch(removeToCart())
  }
  return (
    <div className={style.manageContainer}>
      <button onClick={unaddAmount} className={style.unadd}>
        <Minus/>
      </button>
      <div className={style.showAmount}>
        <span>{amount}</span>
      </div>
      <button className={style.add} onClick={addAmount}>
        <Plus/>
      </button>
    </div>
  )
}
