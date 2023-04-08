import { StoreType } from "@/store";
import { ServiceAbstract } from "@/@core/services/ServiceAbstract";
import { HttpApi } from "@/@core/infra/http/HttpApi";
import { actionUsersSlice } from "@/store/features/users.slice";

export interface IUSersEntityService {
  getAll: () => Promise<void>
  getId: (id: number) => Promise<void>
  cleanDetail: () => void
}
export class UsersEntityService extends ServiceAbstract implements IUSersEntityService {
  constructor(
    readonly store: StoreType,
    readonly httpApi: HttpApi
  ) {
    super(store)
  }

  async getAll() {
    this.loadingStart()

    const { data } = await this.httpApi.users.getAll()

    this.store.dispatch(actionUsersSlice.setList(data))

    this.loadingEnd()
  }

  async getId(id: number) {
    this.loadingStart()

    const { data } = await this.httpApi.users.getId(id)

    this.store.dispatch(actionUsersSlice.setDetail(data))

    this.loadingEnd()
  }

  cleanDetail() {
    this.store.dispatch(actionUsersSlice.setDetail(null))
  }
}