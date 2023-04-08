import { UserEntity } from '@/@core/domain/entity/UserEntity'
import { useAppSelector } from '@/store/hook'
import { UserRow } from './UserRow'

export const UserRows = () => {
  const { list } = useAppSelector(e => ({
    list: e.users.list,
  }))

  return (
    <>
      {list.map((el: UserEntity) => (
        <UserRow key={el.user.id} detail={el} />
      ))}
    </>
  )
}
