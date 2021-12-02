import styleCard from '../ProductCard/ProductCard.module.css'
import style from './utils.module.css'
import classNames from 'classnames'

export default function Button({
  children,
  type,
  setPage,
  page,
  maxPage
}) {
  const handlerPage = () => {
    type === 'minus'
      ? page > 1 && setPage(page - 1)
      : page < maxPage && setPage(page + 1)
  }
  const cx = classNames.bind(style)

  const className = cx({
    [style.minusDetails]: type === 'minus',
    [style.moreDetails]: type === 'more',
    [style.back]: type === 'back'
  })

  return (
    <button
      className={`${styleCard.add} ${className} ${type && `${style.btn}`}`}
      onClick={handlerPage}
    >
      {children}
    </button>
  )
}
