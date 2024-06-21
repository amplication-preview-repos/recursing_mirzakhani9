import { Company } from "../company/Company";
import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type DataRequest = {
  company?: Company | null;
  createdAt: Date;
  id: string;
  requestDate: Date | null;
  responseData: JsonValue;
  responseDate: Date | null;
  status: string | null;
  typeField: string | null;
  updatedAt: Date;
  user?: User | null;
};
