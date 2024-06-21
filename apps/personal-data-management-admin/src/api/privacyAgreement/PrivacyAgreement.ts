import { Company } from "../company/Company";

export type PrivacyAgreement = {
  company?: Company | null;
  content: string | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  uploadDate: Date | null;
};
