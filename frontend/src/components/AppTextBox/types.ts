export type AppTextBoxMode = 'normal' | 'account';

export type AppTextBoxProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  mode?: AppTextBoxMode;
};
