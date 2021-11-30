import Image from 'next/image'
import style from './ProductCard.module.css'
import { useState } from 'react'
import AddBtn from './AddBtn'
import ManageAmount from './ManageAmount'
import { useSelector } from 'react-redux'

export default function ProductCard({ description, price, id }) {
  const [product, setProduct] = useState({
    name: '',
    imgUrl: '',
    amount: 0,
    description,
    id,
    price
  })

  const addAmount = () => setProduct({ ...product, amount: ++product.amount })
  const unaddAmount = () => setProduct({ ...product, amount: --product.amount })

  const { amount, price: newPrice } = useSelector(state => {
    if (state.product.length >= 1) {
      const prot = state.product.filter(el => el.id === product.id)
      return prot.length >= 1 ? prot[0] : 0
    }
    return 0
  })

  return (
    <div className={style.card}>
      <div className={style.bodyCard}>
        <div className={style.image}>
          <Image
            alt='Alguna imagen'
            src='/svg/Cart.svg'
            width={170}
            height={140}
          />
        </div>
        <div className={style.descProduct}>
          <p>{description}</p>
        </div>
      </div>
      <div className={style.options}>
        {!amount || amount < 1 ? (
          <AddBtn addAmount={addAmount} product={product} />
        ) : (
          <ManageAmount
            unaddAmount={unaddAmount}
            id={product.id}
            price={product.price}
          />
        )}
        <h4 className={style.price}>${newPrice ?? product.price}</h4>
      </div>
    </div>
  )
}
