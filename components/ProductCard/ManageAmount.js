import style from './ProductCard.module.css'
import Plus from '../icons/Plus'
import Minus from '../icons/Minus'
import { useDispatch, useSelector } from 'react-redux'
import {
  incrementTotalAmount,
  decrementTotalAmount
} from '../../features/cart/amountReducer'
import {
  deleteProduct,
  incrementAmount,
  decrementAmount
} from '../../features/cart/productReducer'

export default function ManageAmount({ unaddAmount, id }) {
  const dispatch = useDispatch()

  const { amount } = useSelector(state => {
    if (state.product.length >= 1) {
      const prot = state.product.filter(el => el.id === id)
      return prot.length >= 1 ? prot[0] : 0
    }
    return 0
  })

  const AddAmount = () => {
    dispatch(incrementTotalAmount())
    dispatch(incrementAmount({ id }))
  }

  const unAddAmount = () => {
    if (amount === 1) {
      unaddAmount()
      dispatch(deleteProduct({ id }))
    } else {
      dispatch(decrementAmount({ id }))
    }
    dispatch(decrementTotalAmount())
  }
  return (
    <div className={style.manageContainer}>
      <button onClick={unAddAmount} className={style.unadd}>
        <Minus />
      </button>
      <div className={style.showAmount}>
        <span>{amount}</span>
      </div>
      <button className={style.add} onClick={AddAmount}>
        <Plus />
      </button>
    </div>
  )
}
