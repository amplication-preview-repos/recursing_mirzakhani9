import { CommunicationListRelationFilter } from "../communication/CommunicationListRelationFilter";
import { DataRequestListRelationFilter } from "../dataRequest/DataRequestListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  communications?: CommunicationListRelationFilter;
  dataRequests?: DataRequestListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  name?: StringNullableFilter;
  username?: StringFilter;
};
