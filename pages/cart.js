import RenderCards from '../components/RenderCards'
import ProductCard from '../components/ProductCard'
import Button from '../components/utils/Button'
import Plus from '../components/icons/Plus'
import Back from '../components/icons/Back'
import Link from 'next/link'
import { useSelector } from 'react-redux'

export default function Cart() {
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
          <ProductCard key={id} description={description} id={id} />
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
