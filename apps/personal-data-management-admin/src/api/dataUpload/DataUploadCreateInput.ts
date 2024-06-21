import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type DataUploadCreateInput = {
  company?: CompanyWhereUniqueInput | null;
  dataContent?: InputJsonValue;
  dataType?: string | null;
  uploadDate?: Date | null;
  userId?: string | null;
};
