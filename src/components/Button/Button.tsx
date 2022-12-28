import React from 'react';
import styled, { css } from 'styled-components';

import { ButtonProps, TButtonVariant } from './Button.types';

const ButtonVariantsMap: Record<TButtonVariant, any> = {
  outlined: css`
    background: transparent;
    border: 1.5px solid ${({ theme }) => theme.colors.default};
    color: ${({ theme }) => theme.colors.default};
  `,
  contained: css`
    border: none;
    background: ${({ theme }) => theme.colors.default};
    color: ${({ theme }) => theme.colors.text};
  `,
  text: css`
    border: none;
    background: none;
    color: ${({ theme }) => theme.colors.default};
  `,
};

const variantStyles = (variant: TButtonVariant = 'contained') => ButtonVariantsMap[variant];

const ButtonWrapper = styled.button<{ variant?: TButtonVariant; fullWidth?: boolean }>`
  width: ${({ fullWidth }) => fullWidth && '100%'};
  min-height: 50px;
  height: fit-content;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  border-radius: 8px;
  font-family: ${({ theme }) => theme.fonts.default};
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  padding: 0 14px;
  opacity: ${({ disabled }) => disabled && 0.7};

  ${({ variant }) => variantStyles(variant)};

  @media screen and (max-width: 1440px) {
    min-height: 42px;
    font-size: 14px;
    border-radius: 7px;
  }
`;

const Button = ({ children, variant = 'contained', onClick, fullWidth, disabled }: ButtonProps): JSX.Element => {
  return (
    <ButtonWrapper variant={variant} onClick={onClick} fullWidth={fullWidth} disabled={disabled}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
