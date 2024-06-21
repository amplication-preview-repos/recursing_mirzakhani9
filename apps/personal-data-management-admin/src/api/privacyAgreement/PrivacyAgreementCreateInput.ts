import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";

export type PrivacyAgreementCreateInput = {
  company?: CompanyWhereUniqueInput | null;
  content?: string | null;
  uploadDate?: Date | null;
};
