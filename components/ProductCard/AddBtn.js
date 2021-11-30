import style from './ProductCard.module.css'
import { useDispatch } from 'react-redux'
import { incrementTotalAmount } from '../../features/cart/amountReducer'
import { addProduct } from '../../features/cart/productReducer'

export default function AddBtn({ addAmount, product }) {
  const dispatch = useDispatch()

  const addCart = () => {
    addAmount()
    dispatch(incrementTotalAmount())
    dispatch(addProduct(product))
  }
  return (
    <button className={style.addBtn} onClick={addCart}>
      Añadir al Carro
    </button>
  )
}
