import style from './ProductCard.module.css'
import { useDispatch } from 'react-redux'
import { incrementTotalAmount } from '../../features/cart/amountReducer'
import { addProduct } from '../../features/cart/shopReducer'

export default function AddBtn({ add, setProduct, product }) {
  const dispatch = useDispatch()
  const addCart = () => {
    add()
    setProduct({ ...product, amount: ++product.amount})
    dispatch(incrementTotalAmount())
    dispatch(addProduct(product))
  }
  return (
    <button className={style.addBtn} onClick={addCart}>
      Añadir al Carro
    </button>
  )
}
