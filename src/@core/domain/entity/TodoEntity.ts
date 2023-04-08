export interface ITodoEntity {
  id: number
  title: string
  completed: boolean
  userId: number
}

export class TodoEntity {
  constructor(
    readonly todo: ITodoEntity
  ) { }
}