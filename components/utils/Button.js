
import styleCard from '../ProductCard/ProductCard.module.css'

export default function Button({ children, place }) {
  return (
    <button
      className={styleCard.add}
      style={{
        width: '50px',
        height: '50px',
        position: 'fixed',
        right: `${place ? place : '70px'}`,
        top: '50%'
      }}
    >
      {children}
    </button>
  )
}
