import RenderCards from '../RenderCards'
import ProductCard from '../ProductCard'
import Button from '../utils/Button'
import Plus from '../icons/Plus'
import Back from '../icons/Back'
import Link from 'next/link'
import { useSelector } from 'react-redux'

export default function WithProducts() {
  const products = useSelector(state => state.product)
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
        {products.map(({ id, description }) => (
          <ProductCard key={id} description={description} id={id} type='cart' />
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
    </>
  )
}
