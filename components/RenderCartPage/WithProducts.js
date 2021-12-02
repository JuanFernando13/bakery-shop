import RenderCards from '../RenderCards'
import ProductCard from '../ProductCard'
import style from './RenderCart.module.css'
import Button from '../utils/Button'
import Back from '../icons/Back'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import Pay from '../icons/Pay'
import { useMemo, useState, useEffect } from 'react'

export default function WithProducts() {
  const products = useSelector(state => state.product)
  const state = useSelector(state => state)
  const [order, setOrder] = useState({
    totalAmount: 0,
    products: [],
    totalPay: 0
  })

  const totalPay = useMemo(() => {
    let total = 0
    products.map(({ price }) => {
      total += Number(price)
    })
    return total
  }, [products])

  useEffect(() => {
    const getOrder = () => {
      const { totalAmount } = state.amount
      const products = state.product.map(({ name, amount, price }) => {
        return { name, amount, price }
      })
      setOrder({ totalAmount, products, totalPay })
    }
    getOrder()
  }, [state.product, state.amount, totalPay])

  const sentOrder = () => {
    let links = `https://wa.me/573242420327/?text=Cantidad%20productos%3a%20${order.totalAmount}`
    for (let i = 0; i < order?.products.length; i++) {
      links += `%0a%0aProducto%3a%20${order?.products[i]?.name}%0aCantidad%3a%20${order?.products[i]?.amount}%0aPrecio%3a%20${order?.products[i]?.price}`
    }
    links += `%0a%0aTotal%20pagar%3a%20${order.totalPay}`
    return links
  }

  return (
    <>
      <header>
        <Link href='/'>
          <a>
            <Button type='back'>
              <Back />
            </Button>
          </a>
        </Link>
        <h2
          style={{
            marginBottom: '32px',
            textAlign: 'center',
            fontSize: '32px',
            color: '#866969',
            fontWeight: 'bolder'
          }}
        >
          Carrito de Compras
        </h2>
      </header>
      <RenderCards>
        {products.map(({ id, description, price }) => (
          <ProductCard
            key={id}
            description={description}
            id={id}
            price={price}
          />
        ))}
      </RenderCards>
      <a
        href={sentOrder()}
        target='_blank'
        rel='noreferrer'
        className={style.payContainer}
      >
        <section className={style.realPayContainer}>
          <h3 className={style.totalPay}>${totalPay}</h3>
          <Button type>
            <Pay />
          </Button>
        </section>
      </a>
    </>
  )
}
