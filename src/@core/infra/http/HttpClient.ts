import { GetServerSidePropsContext } from "next"

export default interface HttpClient {
  ctx?: GetServerSidePropsContext

  get: <T>(url: string) => Promise<T>
  post: <F>(url: string, body: F) => Promise<void>
  put: <F>(url: string, body: F) => Promise<void>
  delete: (url: string) => Promise<void>
}