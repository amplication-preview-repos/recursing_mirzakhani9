import { CommunicationCreateNestedManyWithoutCompaniesInput } from "./CommunicationCreateNestedManyWithoutCompaniesInput";
import { DataRequestCreateNestedManyWithoutCompaniesInput } from "./DataRequestCreateNestedManyWithoutCompaniesInput";
import { DataUploadCreateNestedManyWithoutCompaniesInput } from "./DataUploadCreateNestedManyWithoutCompaniesInput";
import { PrivacyAgreementCreateNestedManyWithoutCompaniesInput } from "./PrivacyAgreementCreateNestedManyWithoutCompaniesInput";

export type CompanyCreateInput = {
  communications?: CommunicationCreateNestedManyWithoutCompaniesInput;
  dataRequests?: DataRequestCreateNestedManyWithoutCompaniesInput;
  dataUploads?: DataUploadCreateNestedManyWithoutCompaniesInput;
  industry?: string | null;
  name?: string | null;
  privacyAgreement?: string | null;
  privacyAgreements?: PrivacyAgreementCreateNestedManyWithoutCompaniesInput;
};
