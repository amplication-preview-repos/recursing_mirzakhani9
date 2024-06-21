import { DataUploadWhereInput } from "./DataUploadWhereInput";
import { DataUploadOrderByInput } from "./DataUploadOrderByInput";

export type DataUploadFindManyArgs = {
  where?: DataUploadWhereInput;
  orderBy?: Array<DataUploadOrderByInput>;
  skip?: number;
  take?: number;
};
