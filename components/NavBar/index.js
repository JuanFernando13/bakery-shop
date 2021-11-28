import style from './NavBar.module.css'
import Link from 'next/link'
import Cart from '../icons/Cart'
import { useSelector } from 'react-redux'

export default function Index() {
  const { totalAmount } = useSelector(state => state.amount)
  return (
    <nav className={style.navbar}>
      <div className={style.navLeft}>
        <Link href='/'>
          <a>
            <h1>TitiBakery</h1>
          </a>
        </Link>
      </div>
      <div>
        <Link href='/cart'>
          <a className={style.navRight}>
            <Cart />
            <span>{totalAmount}</span>
          </a>
        </Link>
      </div>
    </nav>
  )
}
