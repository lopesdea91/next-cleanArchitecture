import { IUserEntity, UserEntity } from "@/@core/domain/entity/UserEntity";
import HttpClient, { HttpClientResult } from "@/@core/infra/http/HttpClient";

export interface UsersGeteway {
  getAll: () => Promise<HttpClientResult<UserEntity[]>>
  getId: (id: number) => Promise<HttpClientResult<UserEntity | null>>
}

const url: string = 'https://jsonplaceholder.typicode.com/users'

export class UsersHttpGeteway implements UsersGeteway {
  constructor(
    private httpClient: HttpClient
  ) { }

  async getAll() {
    const { status, data } = await this.httpClient.get<IUserEntity[]>(url)

    let users: UserEntity[] = []

    if (status) {
      data.map(el => users.push(new UserEntity({
        id: el.id,
        name: el.name,
        email: el.email,
        username: el.username,
      })))
    }

    return { status, data: users }
  }

  async getId(id: number) {
    let user: UserEntity | null = null

    const { status, data } = await this.httpClient.get<IUserEntity>(`${url}/${id}`)

    if (status && data) {
      user = new UserEntity(data)
    }

    return { status, data: user }
  }
}