import { Container } from "inversify"
import { StoreType, store } from "@/store"
import { HttpApi, httpApi } from "@/@core/infra/http/HttpApi"
import { AuthEntityService } from "@/@core/services/entity/AuthEntityService"
import { UsersEntityService } from "@/@core/services/entity/UsersEntityService"
import { TodosEntityService } from "@/@core/services/entity/TodoService"

// export const Registry = {
//   http: Symbol.for('http')
// }

export const container = new Container()

// store
container.bind('store').toConstantValue(store)

// http
container.bind('httpApi').toConstantValue(httpApi)

// Services
const authEntityService = new AuthEntityService(
  container.get<StoreType>('store'),
  container.get<HttpApi>('httpApi')
)
container.bind('authEntityService').toConstantValue(authEntityService)

const usersEntityService = new UsersEntityService(
  container.get<StoreType>('store'),
  container.get<HttpApi>('httpApi')
)
container.bind('usersEntityService').toConstantValue(usersEntityService)

const todosEntityService = new TodosEntityService(
  container.get<StoreType>('store'),
  container.get<HttpApi>('httpApi')
)
container.bind('todosEntityService').toConstantValue(todosEntityService)