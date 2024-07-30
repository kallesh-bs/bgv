

export type VERIFIED = "Verified"|"verified";
type SHOW_VERIFIED = "Verified";

export enum VerificationDocStatus {
  VERIFIED = 'verified',
  REJECTED = 'rejected',
  INSUFFICIENT = 'insufficent',
  INPROGRESS = 'inprogress',
  IN_PROGRESS = 'in_progress',
  PENDING_VERIFICATION = "Pending Verification"
}

export enum VerificationDataKey {
    BACKGROUND_VERIFICATION = "background_verification",
    IDENTIYY_CHECK = "identity_check",
    EDUCATION_CHECK = "education_check",
    ADDRESS_CHECK = "address_check",
    EMPLOYEMENT_HISTORY_CHECK = "employement_history_check",
    IDENTITY_CHECK_DOCUMENTS = "identity_check_documents",
    IDENTITY_CHECK_DOCUMENTS_STATUS = "identity_check_documents_status",
    MARKS_SHEET_10TH = "markshseet_10th",
    MARKS_SHEET_10TH_STATUS = "markshseet_10th_status",
    MARKS_SHEET_12TH = "markshseet_12th",
    MARKS_SHEET_12TH_STATUS = "markshseet_12th_status",
    GRADUATION_DEGREES = "graduation_degrees",
    GRADUATION_DEGREES_STATUS = "graduation_degrees_status",
    OTHER_CERTIFICATIONS = "other_certifications",
    OTHER_CERTIFICATIONS_STATUS = "other_certifications_status",
    ADDRESS_CHECK_DOUCMENTS = "address_check_documents",
    ADDRESS_CHECK_DOUCMENTS_STATUS = "address_check_documents_status",
    RELIEVING_LETTERS = "relieving_letters",
    RELIEVING_LETTERS_STATUS = "relieving_letters_status",
    EXPERIENCE_LETTERS = "experience_letters",
    EXPERIENCE_LETTERS_STATUS = "experience_letters_status",
    BANK_STATEMENTS = "bank_statements",
    BANK_STATEMENTS_STATUS = "bank_statements_status",
}

export enum VerificationSidePopUpNavTabName {
  IDENTITY_CHECK_TAB = 'Identify Check',
  EDUCATION_CHECK_TAB = "Education Check",
  ADDRESS_CHECK_TAB = "Address Check",
  EMPLOYEMENT_HISTORY_CHECK_TAB = "Employement History Check",
  CONSENT_TAB = "Consent"
}
