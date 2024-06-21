import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommunicationWhereInput = {
  company?: CompanyWhereUniqueInput;
  content?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  typeField?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
