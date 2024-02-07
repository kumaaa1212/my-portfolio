import style from './index.module.scss'

interface Props {
  children: React.ReactNode
}

export default function Card(props: Props) {
  const { children } = props

  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.container_frame}></div>
        <div className={style.content}>{children}</div>
      </div>
    </div>
  )
}
