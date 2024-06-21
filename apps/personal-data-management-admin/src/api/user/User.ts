import { Communication } from "../communication/Communication";
import { DataRequest } from "../dataRequest/DataRequest";
import { JsonValue } from "type-fest";

export type User = {
  communications?: Array<Communication>;
  createdAt: Date;
  dataRequests?: Array<DataRequest>;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  name: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
