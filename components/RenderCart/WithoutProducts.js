import Link from 'next/link'
import style from './RenderCart.module.css'

export default function WithoutProducts() {
  return (
    <>
      <h2 className={style.pageTitle}>Carrito de Compras</h2>
      <div className={style.content}>
        <h3 className={style.empty}>Tu carro esta vacio.</h3>
        <h4 className={style.continueShop}>Continua comprando</h4>
        <Link href='/'>
          <a className={style.shopBack}>Volver a la tienda 🛍</a>
        </Link>
      </div>
    </>
  )
}
