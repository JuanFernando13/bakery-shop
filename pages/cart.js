import { useSelector } from 'react-redux'
import WithoutProducts from '../components/RenderCartPage/WithoutProducts'
import WithProducts from '../components/RenderCartPage/WithProducts'

export default function Cart() {
  const products = useSelector(state => state.product)
  return <>{products.length === 0 ? <WithoutProducts /> : <WithProducts />}</>
}
