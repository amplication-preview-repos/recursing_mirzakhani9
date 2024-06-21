import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";

export type PrivacyAgreementUpdateInput = {
  company?: CompanyWhereUniqueInput | null;
  content?: string | null;
  uploadDate?: Date | null;
};
