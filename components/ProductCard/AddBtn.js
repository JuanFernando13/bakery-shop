import style from './ProductCard.module.css'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../features/cart/cartReducer'

export default function AddBtn({ add }) {
  const dispatch = useDispatch()
  const addCart = () => {
    add()
    dispatch(addToCart())
  }
  return (
    <button className={style.addBtn} onClick={addCart}>
      Añadir al Carro
    </button>
  )
}
