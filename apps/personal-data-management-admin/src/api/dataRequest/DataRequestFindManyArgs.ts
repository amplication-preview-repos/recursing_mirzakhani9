import { DataRequestWhereInput } from "./DataRequestWhereInput";
import { DataRequestOrderByInput } from "./DataRequestOrderByInput";

export type DataRequestFindManyArgs = {
  where?: DataRequestWhereInput;
  orderBy?: Array<DataRequestOrderByInput>;
  skip?: number;
  take?: number;
};
