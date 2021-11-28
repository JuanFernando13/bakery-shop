import Image from 'next/image'
import style from './ProductCard.module.css'
import { useState } from 'react'
import AddBtn from './AddBtn'
import ManageAmount from './ManageAmount'

export default function ProductCard({ description, name, id }) {
  const [added, setAdded] = useState(false)
  const [product, setProduct] = useState({
    name: '',
    imgUrl: '',
    amount: 0,
    description,
    id
  })

  const add = () => setAdded(true)
  const unadd = () => setAdded(false)

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
        {!added ? (
          <AddBtn add={add} setProduct={setProduct} product={product} />
        ) : (
          <ManageAmount
            unadd={unadd}
            setProduct={setProduct}
            product={product}
            id={id}
          />
        )}
        <h4 className={style.price}>$4.000</h4>
      </div>
    </div>
  )
}
