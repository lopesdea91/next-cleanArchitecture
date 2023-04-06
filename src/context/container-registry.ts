import { Container } from "inversify"
import { store } from "@/store"
import { AuthService } from "@/services/entity/AuthService"
import { TodoService } from "@/services/entity/TodoService"
import { UsersService } from "@/services/entity/UsersService"
import { httpClient } from "@/@core/infra/http"

// export const Registry = {
//   http: Symbol.for('http')
// }

export const container = new Container()

// http
//container.bind(Registry.http).toConstantValue(http)

// store
container.bind('store').toConstantValue(store)

// Services
const authService = new AuthService(container.get('store'), httpClient)
container.bind('authService').toConstantValue(authService)

const usersService = new UsersService(container.get('store'), httpClient)
container.bind('usersService').toConstantValue(usersService)

const todoService = new TodoService(container.get('store'), httpClient)
container.bind('todoService').toConstantValue(todoService)