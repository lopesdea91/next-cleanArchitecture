import NameEntity from "../../domain/entity/Name";

export default interface NameGateway {
  getAll(): Promise<NameEntity[]>
}