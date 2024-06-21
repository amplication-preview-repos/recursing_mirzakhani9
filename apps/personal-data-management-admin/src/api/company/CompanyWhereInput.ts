import { CommunicationListRelationFilter } from "../communication/CommunicationListRelationFilter";
import { DataRequestListRelationFilter } from "../dataRequest/DataRequestListRelationFilter";
import { DataUploadListRelationFilter } from "../dataUpload/DataUploadListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PrivacyAgreementListRelationFilter } from "../privacyAgreement/PrivacyAgreementListRelationFilter";

export type CompanyWhereInput = {
  communications?: CommunicationListRelationFilter;
  dataRequests?: DataRequestListRelationFilter;
  dataUploads?: DataUploadListRelationFilter;
  id?: StringFilter;
  industry?: StringNullableFilter;
  name?: StringNullableFilter;
  privacyAgreement?: StringNullableFilter;
  privacyAgreements?: PrivacyAgreementListRelationFilter;
};
