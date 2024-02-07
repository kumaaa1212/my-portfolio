import style from './index.module.scss'

interface Props {
  children: React.ReactNode
}

export default function Card(props: Props) {
  const { children } = props

  return (
    <div className={style.container}>
      {children}
    </div>
  )
}
