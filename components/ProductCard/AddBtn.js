import style from './ProductCard.module.css'
import { useDispatch } from 'react-redux'
import { incrementTotalAmount } from '../../features/cart/amountReducer'

export default function AddBtn({ add }) {
  const dispatch = useDispatch()
  const addCart = () => {
    add()
    dispatch(incrementTotalAmount())
  }
  return (
    <button className={style.addBtn} onClick={addCart}>
      Añadir al Carro
    </button>
  )
}
