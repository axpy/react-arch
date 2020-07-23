export interface DataValidator {
  validate: () => boolean;
  isValid: boolean;
}

export interface DataValidatorAsync extends DataValidator {
  isLoading: boolean;
}

export interface DataValidatorError {
  fieldName: string;
  fieldValue: string;
  errorText: string;
}
