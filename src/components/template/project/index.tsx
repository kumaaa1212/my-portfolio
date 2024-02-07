import Layout from "@/components/layout";
import style from "./index.module.scss"
export default function Project(){
  return (
    <Layout>
      <div className={style.container}>
        <div className={style.main}></div>
      </div>
    </Layout>
  )
}