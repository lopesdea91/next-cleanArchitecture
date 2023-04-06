export interface IUser {
  id: number
  name: string
  username: string
  email: string
}

export class User {
  constructor(
    readonly user: IUser
  ) { }

  getFullName(): string {
    return `${this.user.name} ${this.user.username}`
  }
}