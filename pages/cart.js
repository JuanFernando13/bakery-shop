import { useSelector } from 'react-redux'
import WithoutProducts from '../components/RenderCart/WithoutProducts'
import WithProducts from '../components/RenderCart/WithProducts'

export default function Cart() {
  const products = useSelector(state => state.product)
  return <>{products.length === 0 ? <WithoutProducts /> : <WithProducts />}</>
}
