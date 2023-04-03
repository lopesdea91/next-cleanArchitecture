import { GetServerSidePropsContext } from "next";
import HttpClient from "../http/HttpClient";
import NameGateway from "./NameGeteway";

export default class NameHttpGeteway implements NameGateway {
  private url: string = 'https://jsonplaceholder.typicode.com'

  constructor(
    private readonly httpClient: HttpClient,
    private readonly endpoint: string
  ) {
    this.url += endpoint
  }

  ctx(ctx: GetServerSidePropsContext) {
    this.httpClient.ctx = ctx
  }

  async getAll<T>(): Promise<T> {
    return this.httpClient.get<T>(this.url)
  }
}