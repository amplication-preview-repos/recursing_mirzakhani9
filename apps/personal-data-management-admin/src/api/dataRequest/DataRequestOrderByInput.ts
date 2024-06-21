import { SortOrder } from "../../util/SortOrder";

export type DataRequestOrderByInput = {
  companyId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  requestDate?: SortOrder;
  responseData?: SortOrder;
  responseDate?: SortOrder;
  status?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
