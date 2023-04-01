import { NextPage } from 'next'
import React from 'react'

interface Name {
  id: number
  name: string
  email: string
}
const url = 'https://jsonplaceholder.typicode.com/users'

const Page: NextPage = () => {
  const [names, setNames] = React.useState<Name[]>([])

  React.useEffect(() => {
    async function buscarDados() {
      const res = await fetch(url).then(r => r.json())
      console.log('... res', res);

      setNames(res.map((el: Name) => ({ id: el.id, name: el.name, email: el.email })))
    }
    buscarDados()
  }, [])

  return (
    <div className='page-example'>
      <h1>Top 10 names</h1>

      <ul className='name-list'>
        {names.map(el => <li className='name-item' key={el.id}>{el.name}</li>)}
      </ul>
    </div>
  )
}
export default Page