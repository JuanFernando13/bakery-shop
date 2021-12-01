import style from './RenderCards.module.css'
import { memo } from 'react'

function RenderCards({ children }) {
  return <section className={style.renderCards}>{children}</section>
}

export default memo(RenderCards)
