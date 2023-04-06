export interface ITodo {
  userId: number
  id: number
  title: string
  completed: boolean
}

export class TodoModel {
  constructor(
    readonly todo: ITodo
  ) { }
}