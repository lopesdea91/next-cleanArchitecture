import { StoreType } from "@/store";
import { ServiceAbstract } from "@/@core/services/ServiceAbstract";
import { HttpApi } from "@/@core/infra/http/HttpApi";

export interface ITodosEntityService {
  getAll: () => Promise<void>
  add: () => Promise<void>
  update: () => Promise<void>
}
export class TodosEntityService extends ServiceAbstract implements ITodosEntityService {
  constructor(
    readonly store: StoreType,
    readonly httpApi: HttpApi
  ) {
    super(store)
  }

  async getAll() {

  }
  async add() {

  }
  async update() {

  }
}