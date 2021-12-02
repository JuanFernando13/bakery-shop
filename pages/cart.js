import { useSelector } from 'react-redux'
import Layaout from '../components/Layout'
import WithoutProducts from '../components/RenderCartPage/WithoutProducts'
import WithProducts from '../components/RenderCartPage/WithProducts'

export default function Cart(props) {
  console.log(props.pageProps)
  const products = useSelector(state => state.product)
  return (
    <>
      <Layaout titlePage="Carrito de Compras">
        {products.length === 0 ? <WithoutProducts /> : <WithProducts />}
      </Layaout>
    </>
  )
}
