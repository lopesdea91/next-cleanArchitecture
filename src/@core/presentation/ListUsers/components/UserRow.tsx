import { UserEntity } from "@/@core/domain/entity/UserEntity"
import { IUSersEntityService } from "@/@core/services/entity/UsersEntityService"
import { container } from "@/context"

export const UserRow = ({ detail }: { detail: UserEntity }) => {
  const strId = String(detail.user.id).padStart(2, '0')

  function getId() {
    container.get<IUSersEntityService>('usersEntityService').getId(detail.user.id)
  }

  return <div className='list-item'>
    <p>{strId} | {detail.user.name}</p>
    <button type='button' onClick={getId}>ver mais</button>
  </div>
}