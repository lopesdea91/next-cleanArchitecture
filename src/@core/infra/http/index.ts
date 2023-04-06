import axios from "axios"
import NameHttpGeteway from "../geteway/NameHttpGeteway"
import AxiosAdapter from "./AxiosAdapter"

export const httpClient = new AxiosAdapter(axios)
export const http = new NameHttpGeteway(httpClient, '/users')