import { User } from '@/@core/domain/entity/User'
import { container } from '@/context'
import { IUSersService } from '@/services/entity/UsersService'
import { useAppSelector } from '@/store/hook'
import React, { useEffect } from 'react'

const UserRow = ({ detail }: { detail: User }) => {
  const strId = String(detail.user.id).padStart(2, '0')

  function getId() {
    container.get<IUSersService>('usersService').getId(detail.user.id)
  }

  return <div className='list-item'>
    <p>{strId} | {detail.user.name}</p>
    <button type='button' onClick={getId}>ver mais</button>
  </div>
}

const UserDetail = () => {
  const { loading, detail } = useAppSelector(e => ({
    loading: e.system.loading,
    detail: e.users.defailt
  }))

  const show = !!detail?.user.id

  function close() {
    container.get<IUSersService>('usersService').cleanDetail()
  }

  return (
    <div className={`item-detail ${show ? '--show' : ''}`}>
      <p>id: {loading ? '...' : detail?.user.id}</p>
      <p>email: {loading ? '...' : detail?.user.email}</p>
      <p>fullName: {loading ? '...' : detail?.getFullName()}</p>

      <button type='button' onClick={close}>limpar</button>
    </div>
  )
}

export default function Page() {
  const { list } = useAppSelector(e => ({
    list: e.users.list,
  }))

  async function getList() {
    const list = await container.get<IUSersService>('usersService').getAll()
    console.log('getList', list)
  }

  useEffect(() => {
    if (list.length === 0) {
      getList()
    }

    return () => {
      container.get<IUSersService>('usersService').cleanDetail()
    }
  }, [])

  return (
    <div className='page-example'>
      <h1>Página: list-users</h1>

      <UserDetail />

      {list.map((el: User) => (
        <UserRow key={el.user.id} detail={el} />
      ))}
    </div>
  )
}
