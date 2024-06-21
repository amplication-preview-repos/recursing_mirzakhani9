import { SortOrder } from "../../util/SortOrder";

export type DataUploadOrderByInput = {
  companyId?: SortOrder;
  createdAt?: SortOrder;
  dataContent?: SortOrder;
  dataType?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  uploadDate?: SortOrder;
  userId?: SortOrder;
};
