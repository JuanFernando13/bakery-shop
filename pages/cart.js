import RenderCards from "../components/RenderCards";
import ProductCard from '../components/ProductCard'

export default function Cart() {
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
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </RenderCards>
    </>
  )
}
