import React, { useRef } from 'react'
import NameEntity from '@/@core/domain/entity/Name'
import { BaseComponentProps } from '@/types/global'
import { Registry, container } from '@/@core/infra/container-registry'
import NameHttpGeteway from '@/@core/infra/geteway/NameHttpGeteway'
import { GetServerSidePropsContext } from 'next'
import { setCookie } from 'nookies'
import Link from 'next/link'
import AxiosAdapter from '@/@core/infra/http/AxiosAdapter'

interface Props extends BaseComponentProps { }

export default function Page() {
  const { names } = PageCore()
  const inputRef = useRef(null)

  const setToken = async () => {
    setCookie(null, 'token', inputRef.current?.value, { path: '/' })
  }

  return (
    <div className='page-example'>
      <h1>Top 10 names</h1>

      <ul className='links'>
        <li><Link href='/'>Início</Link></li>
        <li><Link href='/teste'>teste</Link></li>
      </ul>

      <div>
        <input type="text" placeholder='token' ref={inputRef} />
        <button onClick={setToken}>setToken</button>
      </div>


      <ul className='name-list'>
        {names.map(el => <li className='name-item' key={el.id}>{el.name}</li>)}
      </ul>
    </div>
  )
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const httpClient = new AxiosAdapter(ctx)
  const http = new NameHttpGeteway(httpClient, '/users')

  await http.getAll<NameEntity[]>()

  return { props: {} }
}

const PageCore = () => {
  const http = container.get<NameHttpGeteway>(Registry.http)

  const [names, setNames] = React.useState<NameEntity[]>([])

  async function buscarDados() {
    const res = await http.getAll<NameEntity[]>()
    // setNames(res.map((el: NameEntity) => ({ id: el.id, name: el.name, email: el.email })))
  }

  React.useEffect(() => {
    buscarDados()
  }, [])

  return {
    names
  }
}