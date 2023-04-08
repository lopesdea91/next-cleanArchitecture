import { StoreType } from "@/store";
import { ServiceAbstract } from "@/@core/services/ServiceAbstract";
import { HttpApi } from "@/@core/infra/http/HttpApi";

export interface IAuthEntityService {
  // logIn: (form: { email: string, password: string }) => Promise<void>
  // logOut: () => Promise<void>
  // me: () => void
}
export class AuthEntityService extends ServiceAbstract implements IAuthEntityService {
  constructor(
    readonly store: StoreType,
    readonly httpApi: HttpApi
  ) {
    super(store)
  }

  // async logIn(form: { email: string, password: string }) {

  //   this.loadingStart()

  //   // request
  //   await this.httpApi.post('/login', form)

  //   // validações 

  //   this.loadingEnd()
  // }
  // async logOut() {
  //   this.loadingStart()

  //   // request
  //   await this.httpApi.get('/logout')

  //   // resets e limpezas de cookies

  //   this.loadingEnd()
  // }
  // me() {
  //   return (this.store.getState() as AppStore).auth.user
  // }
}