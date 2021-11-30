import RenderCards from '../RenderCards'
import ProductCard from '../ProductCard'
import style from './RenderCart.module.css'
import Button from '../utils/Button'
import Plus from '../icons/Plus'
import Back from '../icons/Back'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import Pay from '../icons/Pay'
import { useMemo, useState, useCallback } from 'react'

export default function WithProducts() {
  const products = useSelector(state => state.product)
  const totalPay = useMemo(() => {
    let total = 0
    products.map(({ price }) => {
      total += Number(price)
    })
    return total
  }, [products])

  return (
    <>
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
      <RenderCards>
        {products.map(({ id, description, price }) => (
          <ProductCard
            key={id}
            description={description}
            id={id}
            price={price}
          />
        ))}
        <Button>
          <Plus />
        </Button>
        <Link href='/'>
          <a>
            <Button place={'92%'}>
              <Back />
            </Button>
          </a>
        </Link>
      </RenderCards>
      <a href={`https://wa.me/573242420327/?text=${JSON.stringify(products)}`}>
        <section className={style.payContainer}>
          <h3 className={style.totalPay}>${totalPay}</h3>
          <Button y='80vh'>
            <Pay />
          </Button>
        </section>
      </a>
    </>
  )
}
