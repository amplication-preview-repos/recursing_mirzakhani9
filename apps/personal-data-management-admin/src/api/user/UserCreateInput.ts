import { CommunicationCreateNestedManyWithoutUsersInput } from "./CommunicationCreateNestedManyWithoutUsersInput";
import { DataRequestCreateNestedManyWithoutUsersInput } from "./DataRequestCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  communications?: CommunicationCreateNestedManyWithoutUsersInput;
  dataRequests?: DataRequestCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  name?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
