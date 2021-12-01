import style from './utils.module.css'
export default function Spinner() {

  return (
    <div className={style.containerSpinner}>
      <div className={style.spinner}></div>
    </div>
  )
}