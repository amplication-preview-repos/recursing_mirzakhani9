import { CommunicationUpdateManyWithoutCompaniesInput } from "./CommunicationUpdateManyWithoutCompaniesInput";
import { DataRequestUpdateManyWithoutCompaniesInput } from "./DataRequestUpdateManyWithoutCompaniesInput";
import { DataUploadUpdateManyWithoutCompaniesInput } from "./DataUploadUpdateManyWithoutCompaniesInput";
import { PrivacyAgreementUpdateManyWithoutCompaniesInput } from "./PrivacyAgreementUpdateManyWithoutCompaniesInput";

export type CompanyUpdateInput = {
  communications?: CommunicationUpdateManyWithoutCompaniesInput;
  dataRequests?: DataRequestUpdateManyWithoutCompaniesInput;
  dataUploads?: DataUploadUpdateManyWithoutCompaniesInput;
  industry?: string | null;
  name?: string | null;
  privacyAgreement?: string | null;
  privacyAgreements?: PrivacyAgreementUpdateManyWithoutCompaniesInput;
};
