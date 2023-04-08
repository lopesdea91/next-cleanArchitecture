export interface ITodoEntity {
  id: number
  title: string
  completed: boolean
}

export class TodoEntity {
  constructor(
    readonly todo: ITodoEntity
  ) { }
}