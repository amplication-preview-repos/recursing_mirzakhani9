import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { CompanyTitle } from "../company/CompanyTitle";

export const DataUploadCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="company.id" reference="Company" label="company">
          <SelectInput optionText={CompanyTitle} />
        </ReferenceInput>
        <div />
        <TextInput label="dataType" source="dataType" />
        <DateTimeInput label="uploadDate" source="uploadDate" />
        <TextInput label="userId" source="userId" />
      </SimpleForm>
    </Create>
  );
};
