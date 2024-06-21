import { CommunicationUpdateManyWithoutUsersInput } from "./CommunicationUpdateManyWithoutUsersInput";
import { DataRequestUpdateManyWithoutUsersInput } from "./DataRequestUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  communications?: CommunicationUpdateManyWithoutUsersInput;
  dataRequests?: DataRequestUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  name?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
