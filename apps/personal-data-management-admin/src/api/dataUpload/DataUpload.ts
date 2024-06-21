import { Company } from "../company/Company";
import { JsonValue } from "type-fest";

export type DataUpload = {
  company?: Company | null;
  createdAt: Date;
  dataContent: JsonValue;
  dataType: string | null;
  id: string;
  updatedAt: Date;
  uploadDate: Date | null;
  userId: string | null;
};
