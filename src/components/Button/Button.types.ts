import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export type TButtonVariant = 'outlined' | 'contained' | 'text';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode | string;
  variant?: TButtonVariant;
  fullWidth?: boolean;
  disabled?: boolean;
}
