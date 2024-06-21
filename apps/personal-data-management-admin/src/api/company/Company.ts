import { Communication } from "../communication/Communication";
import { DataRequest } from "../dataRequest/DataRequest";
import { DataUpload } from "../dataUpload/DataUpload";
import { PrivacyAgreement } from "../privacyAgreement/PrivacyAgreement";

export type Company = {
  communications?: Array<Communication>;
  createdAt: Date;
  dataRequests?: Array<DataRequest>;
  dataUploads?: Array<DataUpload>;
  id: string;
  industry: string | null;
  name: string | null;
  privacyAgreement: string | null;
  privacyAgreements?: Array<PrivacyAgreement>;
  updatedAt: Date;
};
