import HttpClient from "@/@core/infra/http/HttpClient";
import { AppStore, StoreType } from "@/store";
import { ServiceAbstract } from "@/services/ServiceAbstract";
import { IUser, User } from "@/@core/domain/entity/User";
import { actionUsersSlice } from "@/store/features/users.slice";

const endpoint: string = 'https://jsonplaceholder.typicode.com/users'

export interface IUSersService {
  getAll: () => Promise<User[]>
  getId: (id: number) => Promise<User>
  detail: () => User | null
  cleanDetail: () => void
  // add: () => Promise<void>
  // update: () => Promise<void>
}
export class UsersService extends ServiceAbstract implements IUSersService {
  constructor(
    readonly store: StoreType,
    readonly httpClient: HttpClient
  ) {
    super(store)
  }
  async getAll() {
    const url = endpoint

    this.loadingStart()

    const data = await this.httpClient.get<IUser[]>(url)

    // convert IUser to User
    const users = data.map(user => new User({
      id: user.id,
      name: user.name,
      email: user.email,
      username: user.username,
    }))

    this.loadingEnd()

    this.store.dispatch(actionUsersSlice.setList(users))

    return users
  }
  async getId(id: number) {
    const url = `${endpoint}/${id}`

    this.loadingStart()

    const data = await this.httpClient.get<IUser>(url)

    this.loadingEnd()

    // convert IUser to User
    const user = new User(data)

    this.store.dispatch(actionUsersSlice.setDetail(user))

    return user
  }

  detail() {
    const store = this.store.getState() as AppStore

    return store.users.defailt
  }
  cleanDetail() {
    this.store.dispatch(actionUsersSlice.setDetail(null))
  }
  // async add() { }
  // async update() { }
}