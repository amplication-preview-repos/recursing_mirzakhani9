import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DataRequestWhereInput = {
  company?: CompanyWhereUniqueInput;
  id?: StringFilter;
  requestDate?: DateTimeNullableFilter;
  responseData?: JsonFilter;
  responseDate?: DateTimeNullableFilter;
  status?: StringNullableFilter;
  typeField?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
