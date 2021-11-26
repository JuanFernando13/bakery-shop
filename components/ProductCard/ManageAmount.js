import style from './ProductCard.module.css'
import { useState } from 'react'
import Plus from '../icons/Plus'
import Minus from '../icons/Minus'

export default function ManageAmount({ unadd }) {
  const [amount, setAmount] = useState(1)

  const addAmount = () => {
    setAmount(amount + 1)
  }

  const unaddAmount = () => {
    setAmount(amount - 1)
    amount === 1 && unadd()
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
