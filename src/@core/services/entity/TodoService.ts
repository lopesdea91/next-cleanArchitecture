import { AppStore, StoreType } from "@/store";
import { ServiceAbstract } from "@/@core/services/ServiceAbstract";
import { HttpApi } from "@/@core/infra/http/HttpApi";
import { actionTodomSlice } from "@/store/features/todos.slice";
import { ITodoEntity } from "@/@core/domain/entity/TodoEntity";

type AddPayload = { title: string, completed: boolean }
type UpdatePayload = { title: string, completed: boolean }

export interface ITodosEntityService {
  setFormTodo: (values: Partial<ITodoEntity>) => Promise<void>
  getAll: () => Promise<void>
  add: (form: AddPayload) => Promise<void>
  update: (id: number, form: UpdatePayload) => Promise<void>
  remove: (id: number) => Promise<void>
  doneTodo: ({ id, completed }: { id: number, completed: boolean }) => Promise<void>
}
export class TodosEntityService extends ServiceAbstract implements ITodosEntityService {
  constructor(
    readonly store: StoreType,
    readonly httpApi: HttpApi
  ) {
    super(store)
  }

  async setFormTodo(values: Partial<ITodoEntity>) {
    this.store.dispatch(actionTodomSlice.setTodo(values))
  }

  async getAll() {
    this.loadingPageStart()

    const { data } = await this.httpApi.todos.getAll()

    this.store.dispatch(actionTodomSlice.setList(data))

    this.loadingPageEnd()
  }

  async add(form: AddPayload) {
    this.loadingStart()

    const { status, data } = await this.httpApi.todos.add(form)

    if (status === 201) {
      const store = this.store.getState() as AppStore

      const list = [data, ...store.todos.list]

      this.store.dispatch(actionTodomSlice.setList(list))
    }

    this.loadingEnd()
  }

  async update(id: number, form: UpdatePayload) {
    this.loadingStart()

    const { status, data } = await this.httpApi.todos.update(id, form)

    if (status === 200) {
      const store = this.store.getState() as AppStore

      const list = [...store.todos.list].map(el => el.todo.id === data.todo.id ? data : el)

      this.store.dispatch(actionTodomSlice.setList(list))
    }

    this.loadingEnd()
  }

  async remove(id: number) {
    this.loadingStart()

    const { status } = await this.httpApi.todos.remove(id)

    if (status === 200) {
      const store = this.store.getState() as AppStore

      const list = [...store.todos.list].filter(el => el.todo.id !== id)

      this.store.dispatch(actionTodomSlice.setList(list))
    }

    this.loadingEnd()
  }

  async doneTodo({ id, completed }: { id: number, completed: boolean }) {

    this.loadingStart()

    const store = this.store.getState() as AppStore

    const findTodo = [...store.todos.list].find(el => el.todo.id === id)

    const form = {
      id: Number(findTodo?.todo.id),
      title: String(findTodo?.todo.title),
      completed
    }

    const { status, data } = await this.httpApi.todos.update(id, form)

    if (status === 200) {
      const store = this.store.getState() as AppStore

      const list = [...store.todos.list].map(el => el.todo.id === data.todo.id ? data : el)

      this.store.dispatch(actionTodomSlice.setList(list))
    }

    this.loadingEnd()
  }
}