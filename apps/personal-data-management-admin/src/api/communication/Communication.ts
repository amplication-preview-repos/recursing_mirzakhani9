import { Company } from "../company/Company";
import { User } from "../user/User";

export type Communication = {
  company?: Company | null;
  content: string | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  typeField: string | null;
  updatedAt: Date;
  user?: User | null;
};
