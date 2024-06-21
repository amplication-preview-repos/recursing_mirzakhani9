import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type DataUploadWhereInput = {
  company?: CompanyWhereUniqueInput;
  dataContent?: JsonFilter;
  dataType?: StringNullableFilter;
  id?: StringFilter;
  uploadDate?: DateTimeNullableFilter;
  userId?: StringNullableFilter;
};
