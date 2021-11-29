import Image from 'next/image'
import style from './ProductCard.module.css'
import { useState } from 'react'
import AddBtn from './AddBtn'
import ManageAmount from './ManageAmount'

export default function ProductCard({ description, name, id, type = 'home' }) {
  const [added, setAdded] = useState(type === 'home' ? false : true)
  const [product, setProduct] = useState({
    name: '',
    imgUrl: '',
    amount: 0,
    description,
    id
  })

  const addAmount = () => setProduct({ ...product, amount: product.amount + 1 })
  const unaddAmount = () => setProduct({ ...product, amount: product.amount - 1 })

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
        {product.amount < 1 ? (
          <AddBtn addAmount={addAmount} product={product} />
        ) : (
          <ManageAmount
            unaddAmount={unaddAmount}
            addAmount={addAmount}
            product={product}
          />
        )}
        <h4 className={style.price}>$4.000</h4>
      </div>
    </div>
  )
}
