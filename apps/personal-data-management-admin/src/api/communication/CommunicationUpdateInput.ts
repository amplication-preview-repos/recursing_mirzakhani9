import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommunicationUpdateInput = {
  company?: CompanyWhereUniqueInput | null;
  content?: string | null;
  date?: Date | null;
  typeField?: string | null;
  user?: UserWhereUniqueInput | null;
};
