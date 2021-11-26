import Image from 'next/image'
import style from './ProductCard.module.css'
import { useState } from 'react'
import AddBtn from './AddBtn'
import ManageAmount from './ManageAmount'

export default function ProductCard() {
  const [added, setAdded] = useState(false)

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
          <p>
            Descripcion del producto que la persona desea compra la persona en
            cuestion
          </p>
        </div>
      </div>
      {!added ? <AddBtn add={add} /> : <ManageAmount unadd={unadd} />}
    </div>
  )
}
