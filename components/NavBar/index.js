import style from './NavBar.module.css'
import Link from 'next/link'
import Cart from '../icons/Cart'

export default function Index() {
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
            <span>2</span>
          </a>
        </Link>
      </div>
    </nav>
  )
}