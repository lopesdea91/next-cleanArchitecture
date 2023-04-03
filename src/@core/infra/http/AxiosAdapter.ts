import axios from 'axios'
import HttpClient from "./HttpClient";
import { parseCookies } from 'nookies';
import { GetServerSidePropsContext } from 'next';

export default class AxiosAdapter implements HttpClient {
  constructor(
    readonly ctx?: GetServerSidePropsContext
  ) {
    const cookies = parseCookies(ctx)
    console.log('... token', !!cookies?.token, cookies?.token);

    axios.interceptors.request.use((config) => {
      const Authorization = !!cookies?.token ? `bearer ${cookies?.token}` : ''

      config.headers['Content-Type'] = 'application/json'
      config.headers['Authorization'] = Authorization

      return config
    })
  }

  async get<T>(url: string): Promise<T> {
    const res = await axios.get<T>(url)
    return res.data
  }
  async post<F>(url: string, body: F): Promise<void> {
    const res = await axios.post(url, body)
    return res.data
  }
  async put<F>(url: string, body: F): Promise<void> {
    const res = await axios.put(url, body)
    return res.data
  }
  async delete(url: string): Promise<void> {
    const res = await axios.delete(url)
    return res.data
  }
}