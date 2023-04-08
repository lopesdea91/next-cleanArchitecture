import { IUSersEntityService } from "@/@core/services/entity/UsersEntityService"
import { container } from "@/context"
import { useAppSelector } from "@/store/hook"

export const UserDetail = () => {
  const { loading, detail } = useAppSelector(e => ({
    loading: e.system.loading,
    detail: e.users.defailt
  }))

  const show = !!detail?.user.id

  function close() {
    container.get<IUSersEntityService>('usersEntityService').cleanDetail()
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