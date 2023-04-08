import { GetServerSidePropsContext } from 'next';
import { AxiosStatic } from 'axios'
import HttpClient from "@/@core/infra/http/HttpClient";

function sleep() {
  return new Promise((resolve) => setTimeout(resolve, 1000));
}

export default class AxiosAdapter implements HttpClient {
  constructor(
    readonly httpClient: AxiosStatic,
    readonly ctx?: GetServerSidePropsContext
  ) {
    // const cookies = parseCookies(ctx)

    this.httpClient.interceptors.request.use(async (config) => {
      await sleep();

      //     const Authorization = !!cookies?.token ? `bearer ${cookies?.token}` : ''

      //     config.headers['Content-Type'] = 'application/json'
      //     config.headers['Authorization'] = Authorization

      return config
    })
  }

  async get<T>(url: string) {
    const { status, data } = await this.httpClient.get<T>(url)

    return { status, data }
  }
  async post<T, F>(url: string, body: F) {
    const { status, data } = await this.httpClient.post(url, body)
    return { status, data }
  }
  async put<T, F>(url: string, body: F) {
    const { status, data } = await this.httpClient.put(url, body)
    return { status, data }
  }
  async delete<T>(url: string) {
    const { status, data } = await this.httpClient.delete(url)
    return { status, data }
  }
}