import { useEffect } from "react"
import { IUSersEntityService } from "@/@core/services/entity/UsersEntityService"
import { container } from "@/context"
import { useAppSelector } from "@/store/hook"
import { UserDetail, UserRows } from "./components"

export const ListUsersPage = () => {
  const { list } = useAppSelector(e => ({
    list: e.users.list,
  }))

  useEffect(() => {
    if (list.length === 0) {
      container.get<IUSersEntityService>('usersEntityService').getAll()
    }

    return () => {
      container.get<IUSersEntityService>('usersEntityService').cleanDetail()
    }
  }, [])

  return (
    <div className='page-example'>
      <h1>Página: list-users</h1>

      <UserDetail />
      <UserRows />
    </div>
  )
}