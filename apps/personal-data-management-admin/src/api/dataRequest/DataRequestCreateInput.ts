import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DataRequestCreateInput = {
  company?: CompanyWhereUniqueInput | null;
  requestDate?: Date | null;
  responseData?: InputJsonValue;
  responseDate?: Date | null;
  status?: string | null;
  typeField?: string | null;
  user?: UserWhereUniqueInput | null;
};
