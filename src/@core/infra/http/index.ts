import NameHttpGeteway from "../geteway/NameHttpGeteway"
import AxiosAdapter from "./AxiosAdapter"

const httpClient = new AxiosAdapter()
export const http = new NameHttpGeteway(httpClient, '/users')