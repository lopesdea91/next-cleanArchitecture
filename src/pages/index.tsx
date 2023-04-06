import React from 'react'
import NameEntity from '@/@core/domain/entity/Name'
import { GetServerSidePropsContext } from 'next'

export default function Page() {
  // const { auth } = useAppSelector((e) => e)

  // function logIn() {
  //   container.get<AuthService>('authService').logIn({
  //     email: 'email@email.com',
  //     password: '1234',
  //   })
  // }
  // function logOut() {
  //   container.get<IAuthService>('authService').logOut()
  // }

  return (
    <div className='page-example'>
      <h1>Página: início</h1>

      {/* 
      <ul className='links'>
        <li><Link href='/'>Início</Link></li>
        <li><Link href='/teste'>teste</Link></li>
      </ul>

      <ul>
        <li><button onClick={logIn}>logIn</button></li>
        <li><button onClick={logOut}>logOut</button></li>
      </ul>

      <p>{auth.user.name ? auth.user.name : 'vazio'}</p> 
      */}
    </div>
  )
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  // const httpClient = new AxiosAdapter(axios, ctx)
  // const http = new NameHttpGeteway(httpClient, '/users')

  // await http.getAll<NameEntity[]>()

  return { props: {} }
}

const PageCore = () => {
  const [names, setNames] = React.useState<NameEntity[]>([])

  return {
    names
  }
}