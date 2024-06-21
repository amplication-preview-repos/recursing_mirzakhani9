import { Communication as TCommunication } from "../api/communication/Communication";

export const COMMUNICATION_TITLE_FIELD = "typeField";

export const CommunicationTitle = (record: TCommunication): string => {
  return record.typeField?.toString() || String(record.id);
};
