export type TItemInputComponent = {
  submitClick: (data: TInput) => void;
  type: TInputType;
};
export type TInputForm = { type: TInputType };
export type TInput = { text: string; color?: string };
export type TInputType = 'input' | 'comment';
export enum InputType {
  input = 'input',
  comment = 'comment',
}
