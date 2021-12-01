import NavBar from '../components/NavBar'
import ProductCard from '../components/ProductCard'
import RenderCards from '../components/RenderCards'
import Button from '../components/utils/Button'
import Plus from '../components/icons/Plus'
import Minus from '../components/icons/Minus'
import useSWR from 'swr'
import { useState } from 'react'

const fetcher = url =>
  fetch(url)
    .then(res => res.json())
    .then(json => json.data)

export default function Home() {
  const [page, setPage] = useState(1)
  const { data } = useSWR(`api/products?skip=${(page - 1) * 4}`, fetcher)
  const { products, totalProducts } = data ?? { products: [], totalProducts: 0 }
  const maxPage = Math.ceil(totalProducts / 4)

  return (
    <>
      <NavBar />
      {!products ? (
        <div>Loading...</div>
      ) : (
        <RenderCards>
          {products.map(({ _id, description, price }) => (
            <ProductCard
              key={_id}
              description={description}
              id={_id}
              price={price}
            />
          ))}
        </RenderCards>
      )}
      {page === 1 || (
        <Button place={'92%'} setPage={setPage} page={page}>
          <Minus />
        </Button>
      )}
      {page === maxPage || (
        <Button setPage={setPage} page={page} maxPage={maxPage}>
          <Plus />
        </Button>
      )}
    </>
  )
}
