import HttpClient from "@/@core/infra/http/HttpClient";
import { AppStore, StoreType } from "@/store";
import { ServiceAbstract } from "@/services/ServiceAbstract";

export interface IAuthService {
  logIn: (form: { email: string, password: string }) => Promise<void>
  logOut: () => Promise<void>
  me: () => void
}
export class AuthService extends ServiceAbstract implements IAuthService {
  constructor(
    readonly store: StoreType,
    readonly httpClient: HttpClient
  ) {
    super(store)
  }

  async logIn(form: { email: string, password: string }) {

    this.loadingStart()

    // request
    await this.httpClient.post('/login', form)

    // validações 

    this.loadingEnd()
  }
  async logOut() {
    this.loadingStart()

    // request
    await this.httpClient.get('/logout')

    // resets e limpezas de cookies

    this.loadingEnd()
  }
  me() {
    return (this.store.getState() as AppStore).auth.user
  }
}