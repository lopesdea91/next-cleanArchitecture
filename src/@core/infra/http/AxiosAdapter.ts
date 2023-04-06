import axios, { AxiosStatic } from 'axios'
import HttpClient from "./HttpClient";
import { GetServerSidePropsContext } from 'next';

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

  async get<T>(url: string): Promise<T> {
    const res = await this.httpClient.get<T>(url)
    return res.data
  }
  async post<F>(url: string, body: F): Promise<void> {
    const res = await this.httpClient.post(url, body)
    return res.data
  }
  async put<F>(url: string, body: F): Promise<void> {
    const res = await this.httpClient.put(url, body)
    return res.data
  }
  async delete(url: string): Promise<void> {
    const res = await this.httpClient.delete(url)
    return res.data
  }
}