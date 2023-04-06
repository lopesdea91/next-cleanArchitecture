import HttpClient from "@/@core/infra/http/HttpClient";
import { StoreType } from "@/store";

export class TodoService {
  constructor(
    readonly store: StoreType,
    readonly httpClient: HttpClient
  ) { }

  getTodoAll() { }
  addTodo() { }
  updateTodo() { }
}