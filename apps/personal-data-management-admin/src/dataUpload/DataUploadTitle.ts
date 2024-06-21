import { DataUpload as TDataUpload } from "../api/dataUpload/DataUpload";

export const DATAUPLOAD_TITLE_FIELD = "dataType";

export const DataUploadTitle = (record: TDataUpload): string => {
  return record.dataType?.toString() || String(record.id);
};
