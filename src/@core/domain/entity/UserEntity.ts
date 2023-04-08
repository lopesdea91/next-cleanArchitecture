export interface IUserEntity {
  id: number
  name: string
  lastName: string
}

export class UserEntity {
  constructor(
    readonly user: IUserEntity
  ) { }

  getFullName(): string {
    return `${this.user.name} ${this.user.lastName}`
  }
}