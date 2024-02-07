import Home from '@/components/template/home'
import { GetServerSideProps } from 'next'

export default function HomePage(): JSX.Element {
  return <Home />
}

// export const getServerSideProps: GetServerSideProps = async ({ locale, req }) => {
//   const translations = await serverSideTranslations(locale as string, ['common'])
//   const user = await getServerUserMeV2(req)
//   return { props: { user, ...translations } }
// }
