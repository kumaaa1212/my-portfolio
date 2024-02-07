import Header from './Header'
import style from './index.module.scss'
interface Props {
  children: React.ReactNode
}
export default function Layout(props: Props) {
  const { children } = props
  return (
    <div className={`${style.container} main_color`}>
      <Header/>
      <div>{children}</div>
    </div>
  )
}
