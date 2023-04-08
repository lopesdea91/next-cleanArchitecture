import { GetServerSidePropsContext } from 'next'

export const HomePage = () => {
  return (
    <div className='page-example'>
      <h1>Página: início</h1>
    </div>
  )
}

export const HomePageGetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  return { props: {} }
}
