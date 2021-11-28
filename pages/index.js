import Plus from '../components/icons/Plus'
import NavBar from '../components/NavBar'
import ProductCard from '../components/ProductCard'
import styleCard from '../components/ProductCard/ProductCard.module.css'
import RenderCards from '../components/RenderCards'
import dbConnect from '../database/connect'
import Products from '../models/Products'

export default function Home({ products }) {
  return (
    <>
      <NavBar />
      <RenderCards>
        {products.map(({ id, description }) => (
          <ProductCard key={id} description={description} id={id}/>
        ))}
        <button
          className={styleCard.add}
          style={{
            width: '50px',
            height: '50px',
            position: 'fixed',
            right: 70,
            top: '50%'
          }}
        >
          <Plus />
        </button>
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
