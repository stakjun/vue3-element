import type {
  RuleItem,
  ValidateError,
  ValidateFieldsError
} from 'async-validator';
import type { InjectionKey } from 'vue';

export type FormRules = Record<string, RuleItem[]>;
export interface FormProps {
  model: Record<string, any>;
  rules: FormRules;
}

export interface FormItemProps {
  label: string;
  prop?: string;
}

interface FormContext extends FormProps {}
interface FormItemContext {
  validate: () => any;
}

export const formContextKey = Symbol(
  'formContextKey'
) as InjectionKey<FormContext>;

export const formItemContextKey = Symbol(
  'formItemContextKey'
) as InjectionKey<FormItemContext>;

export interface validateError {
  errors: ValidateError[] | null;
  fields: ValidateFieldsError;
}