export interface FormDataValidatorError {
  fieldName: string;
  fieldValue: string;
  errorText: string;
}

export enum FormDataRules {
  'REQUIRED',
  'LESS_THEN',
  'MORE_THEN',
  'EMAIL',
  'REGEX'
}

export type ComplexFormDataRule = {
  [rule: string]: string | number
}

export type FormDataRulesMap = {
  [field: string]: Array<FormDataRules | ComplexFormDataRule>;
}

export type FormDataValueMap = {
  [K: string]: string;
}

export interface FormDataValidatorService {
  validate(formDataValueMap: FormDataValueMap, formDataRulesMap: FormDataRulesMap): Array<FormDataValidatorError>;
}

export class FormDataValidatorServiceImpl implements FormDataValidatorService {
  validate(formDataValueMap: FormDataValueMap, formDataRulesMap: FormDataRulesMap) {
    return [];
  }
}
