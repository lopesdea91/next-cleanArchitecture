import axios from "axios";
import AxiosAdapter from "./AxiosAdapter";
import HttpClient from "@/@core/infra/http/HttpClient";
import { UsersHttpGeteway } from "@/@core/infra/geteway/UsersHttpGeteway";
import { TodosHttpGeteway } from "@/@core/infra/geteway/TodosHttpGeteway";

export class HttpApi {
  constructor(
    private httpClient: HttpClient
  ) { }
  public users = new UsersHttpGeteway(this.httpClient)
  public todos = new TodosHttpGeteway(this.httpClient)
}

const httpClientAdapter = new AxiosAdapter(axios)

export const httpApi = new HttpApi(httpClientAdapter)