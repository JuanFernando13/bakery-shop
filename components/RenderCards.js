
import style from './RenderCards.module.css'

export default function RenderCards({ children }) {
  return (
    <section className={style.containerCards}>
      {children}
    </section>
  )
}
