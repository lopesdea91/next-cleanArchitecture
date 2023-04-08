export type HttpClientResult<T> = {
  status: number
  data: T
}
export default interface HttpClient {
  get: <T>(url: string) => Promise<HttpClientResult<T>>
  post: <T, F>(url: string, body: F) => Promise<HttpClientResult<T>>
  put: <T, F>(url: string, body: F) => Promise<HttpClientResult<T>>
  delete: <T>(url: string) => Promise<HttpClientResult<T>>
}