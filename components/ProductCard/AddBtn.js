import style from './ProductCard.module.css'

export default function AddBtn({ add }) {
  return (
    <button className={style.addBtn} onClick={add}>
      Añadir al Carro
    </button>
  )
}
