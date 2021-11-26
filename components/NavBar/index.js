import style from './NavBar.module.css'
import Link from 'next/link'
import Cart from '../icons/Cart'
import { useSelector } from 'react-redux'

export default function Index() {
  const amount = useSelector(state => state.cart.amount)
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
        <Link href='/'>
          <a className={style.navRight}>
            <Cart />
            <span>{amount}</span>
          </a>
        </Link>
      </div>
    </nav>
  )
}
