import { DataRequest as TDataRequest } from "../api/dataRequest/DataRequest";

export const DATAREQUEST_TITLE_FIELD = "status";

export const DataRequestTitle = (record: TDataRequest): string => {
  return record.status?.toString() || String(record.id);
};
