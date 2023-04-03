import { Container } from "inversify"
import { http } from "./http"

export const Registry = {
  http: Symbol.for('http')
}

export const container = new Container()

container.bind(Registry.http).toConstantValue(http)