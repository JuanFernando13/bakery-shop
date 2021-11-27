import Plus from '../components/icons/Plus'
import NavBar from '../components/NavBar'
import ProductCard from '../components/ProductCard'
import styleCard from '../components/ProductCard/ProductCard.module.css'
import RenderCards from '../components/RenderCards'

export default function Home() {
  return (
    <>
      <NavBar />
      <RenderCards>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
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
