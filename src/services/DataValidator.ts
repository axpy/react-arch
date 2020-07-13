interface DataValidator {
  validate: Function;
  isValid: boolean;
}

interface DataValidatorAsync extends DataValidator {
  isLoading: boolean;
}

interface DataValidatorError {
  fieldName: string;
  fieldValue: string;
  errorText: string;
}

// class DataValidatorError {
//   readonly fieldName: string;
//   readonly fieldValue: string;
//   readonly errorText: string;

//   constructor(fieldName: string, fieldValue: string, errorText: string) {
//     this.fieldName = fieldName;
//     this.fieldValue = fieldValue;
//     this.errorText = errorText;
//   }
// }

export type {
  DataValidator,
  DataValidatorAsync,
  DataValidatorError
};