import NavBar from '../components/NavBar'
import ProductCard from '../components/ProductCard'
import RenderCards from '../components/RenderCards'
import Button from '../components/utils/Button'
import dbConnect from '../database/connect'
import Products from '../models/Products'
import Plus from '../components/icons/Plus'

export default function Home({ products }) {
  return (
    <>
      <NavBar />
      <RenderCards>
        {products.map(({ id, description }) => (
          <ProductCard key={id} description={description} id={id} />
        ))}
        <Button >
          <Plus/>
        </Button>
      </RenderCards>
    </>
  )
}

export async function getServerSideProps() {
  await dbConnect()

  const result = await Products.find({})
  const products = result.map(doc => {
    const product = doc.toObject()
    product._id = `${product._id}`
    return product
  })

  return { props: { products } }
}
