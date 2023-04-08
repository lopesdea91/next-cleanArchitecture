import { ITodoEntity, TodoEntity } from "@/@core/domain/entity/TodoEntity";
import HttpClient from "@/@core/infra/http/HttpClient";

export interface TodosGeteway {
  getAll: () => Promise<TodoEntity[]>
}

const url = 'https://jsonplaceholder.typicode.com/todos'

export class TodosHttpGeteway implements TodosGeteway {
  constructor(
    private httpClient: HttpClient
  ) { }

  async getAll() {
    const { status, data } = await this.httpClient.get<ITodoEntity[]>(url)

    const todos: TodoEntity[] = []

    if (status) {
      data.map(el => todos.push(new TodoEntity({
        id: el.id,
        title: el.title,
        completed: el.completed,
        userId: el.userId,
      })))
    }

    return todos
  }
}