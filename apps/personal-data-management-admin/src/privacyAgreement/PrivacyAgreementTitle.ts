import { PrivacyAgreement as TPrivacyAgreement } from "../api/privacyAgreement/PrivacyAgreement";

export const PRIVACYAGREEMENT_TITLE_FIELD = "id";

export const PrivacyAgreementTitle = (record: TPrivacyAgreement): string => {
  return record.id?.toString() || String(record.id);
};
