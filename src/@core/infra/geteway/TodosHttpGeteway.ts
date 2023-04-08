import { ITodoEntity, TodoEntity } from "@/@core/domain/entity/TodoEntity";
import HttpClient, { HttpClientResult } from "@/@core/infra/http/HttpClient";

export interface TodosGeteway {
  getAll: () => Promise<HttpClientResult<TodoEntity[]>>
}

const url: string = 'http://localhost:3004/todo'

type AddPayload = { title: string, completed: boolean }
type AddResponse = { id: number, title: string, completed: boolean }
type UpdatePayload = { title: string, completed: boolean }
type UpdateResponse = { id: number, title: string, completed: boolean }

export class TodosHttpGeteway implements TodosGeteway {
  constructor(
    private httpClient: HttpClient
  ) { }

  async getAll() {
    const { status, data } = await this.httpClient.get<ITodoEntity[]>(`${url}?_limit=5&_sort=id&_order=desc`)

    const todos: TodoEntity[] = []

    if (status) {
      data.map(el => todos.push(new TodoEntity({
        id: el.id,
        title: el.title,
        completed: el.completed,
      })))
    }

    return { status, data: todos }
  }

  async add(form: AddPayload) {
    const { status, ...rest } = await this.httpClient.post<AddResponse, AddPayload>(url, form)

    const data = new TodoEntity({
      id: rest.data.id,
      title: rest.data.title,
      completed: rest.data.completed,
    })

    return { status, data }
  }

  async update(id: number, form: UpdatePayload) {
    const { status, ...rest } = await this.httpClient.put<UpdateResponse, AddPayload>(`${url}/${id}`, form)

    const data = new TodoEntity({
      id: rest.data.id,
      title: rest.data.title,
      completed: rest.data.completed,
    })

    return { status, data }
  }

  async remove(id: number) {
    return await this.httpClient.delete(`${url}/${id}`)
  }
}