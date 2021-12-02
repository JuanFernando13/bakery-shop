import styleCard from '../ProductCard/ProductCard.module.css'
import style from './utils.module.css'

export default function Button({
  children,
  place,
  y,
  setPage,
  page,
  maxPage
}) {
  const handlerPage = () => {
    place
      ? page > 1 && setPage(page - 1)
      : page < maxPage && setPage(page + 1)
  }
  return (
    <button
      className={`${styleCard.add} ${style.sentOrder}`}
      /* style={{
        width: '50px',
        height: '50px',
        position: 'fixed',
        right: `${place ? place : '70px'}`,
        top: `${y ? y : '50%'}`
      }} */
      onClick={handlerPage}
    >
      {children}
    </button>
  )
}
