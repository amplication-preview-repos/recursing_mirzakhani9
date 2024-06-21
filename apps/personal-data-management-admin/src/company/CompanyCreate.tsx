import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { CommunicationTitle } from "../communication/CommunicationTitle";
import { DataRequestTitle } from "../dataRequest/DataRequestTitle";
import { DataUploadTitle } from "../dataUpload/DataUploadTitle";
import { PrivacyAgreementTitle } from "../privacyAgreement/PrivacyAgreementTitle";

export const CompanyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="communications"
          reference="Communication"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CommunicationTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="dataRequests"
          reference="DataRequest"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DataRequestTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="dataUploads"
          reference="DataUpload"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DataUploadTitle} />
        </ReferenceArrayInput>
        <TextInput label="industry" source="industry" />
        <TextInput label="name" source="name" />
        <TextInput
          label="privacyAgreement"
          multiline
          source="privacyAgreement"
        />
        <ReferenceArrayInput
          source="privacyAgreements"
          reference="PrivacyAgreement"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PrivacyAgreementTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
