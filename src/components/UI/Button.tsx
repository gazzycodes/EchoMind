import React from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const getButtonVariant = (variant: ButtonProps['variant']) => {
  switch (variant) {
    case 'primary':
      return css`
        background: ${({ theme }) => theme.colors.button.primary};
        color: ${({ theme }) => theme.colors.text.primary};
        border: 1px solid ${({ theme }) => theme.colors.button.primary};
        
        &:hover:not(:disabled) {
          background: ${({ theme }) => theme.colors.accent.secondary};
          border-color: ${({ theme }) => theme.colors.accent.secondary};
          box-shadow: ${({ theme }) => theme.shadows.glow};
        }
        
        &:active:not(:disabled) {
          background: ${({ theme }) => theme.colors.accent.tertiary};
          border-color: ${({ theme }) => theme.colors.accent.tertiary};
        }
      `;
    case 'secondary':
      return css`
        background: ${({ theme }) => theme.colors.button.secondary};
        color: ${({ theme }) => theme.colors.text.primary};
        border: 1px solid ${({ theme }) => theme.colors.border.primary};
        
        &:hover:not(:disabled) {
          background: ${({ theme }) => theme.colors.background.hover};
          border-color: ${({ theme }) => theme.colors.border.secondary};
        }
        
        &:active:not(:disabled) {
          background: ${({ theme }) => theme.colors.background.tertiary};
        }
      `;
    case 'ghost':
      return css`
        background: transparent;
        color: ${({ theme }) => theme.colors.text.secondary};
        border: 1px solid transparent;
        
        &:hover:not(:disabled) {
          background: ${({ theme }) => theme.colors.background.secondary};
          color: ${({ theme }) => theme.colors.text.primary};
        }
        
        &:active:not(:disabled) {
          background: ${({ theme }) => theme.colors.background.tertiary};
        }
      `;
    case 'danger':
      return css`
        background: ${({ theme }) => theme.colors.button.danger};
        color: ${({ theme }) => theme.colors.text.primary};
        border: 1px solid ${({ theme }) => theme.colors.button.danger};
        
        &:hover:not(:disabled) {
          background: #dc2626;
          border-color: #dc2626;
        }
        
        &:active:not(:disabled) {
          background: #b91c1c;
          border-color: #b91c1c;
        }
      `;
    default:
      return css`
        background: ${({ theme }) => theme.colors.button.secondary};
        color: ${({ theme }) => theme.colors.text.primary};
        border: 1px solid ${({ theme }) => theme.colors.border.primary};
      `;
  }
};

const getButtonSize = (size: ButtonProps['size']) => {
  switch (size) {
    case 'sm':
      return css`
        padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
        font-size: ${({ theme }) => theme.typography.fontSize.sm};
        min-height: 32px;
      `;
    case 'lg':
      return css`
        padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};
        font-size: ${({ theme }) => theme.typography.fontSize.lg};
        min-height: 48px;
      `;
    default:
      return css`
        padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
        font-size: ${({ theme }) => theme.typography.fontSize.base};
        min-height: 40px;
      `;
  }
};

const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop) => !['variant', 'size', 'loading', 'icon'].includes(prop),
})<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  transition: ${({ theme }) => theme.transitions.fast};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  
  ${({ variant }) => getButtonVariant(variant)}
  ${({ size }) => getButtonSize(size)}
  
  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `}
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    background: ${({ theme }) => theme.colors.button.disabled};
    border-color: ${({ theme }) => theme.colors.button.disabled};
    color: ${({ theme }) => theme.colors.text.muted};
  }
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.border.focus};
    outline-offset: 2px;
  }
`;

const IconWrapper = styled.span<{ position: 'left' | 'right' }>`
  display: flex;
  align-items: center;
  justify-content: center;
  
  ${({ position }) => position === 'right' && css`
    order: 1;
  `}
`;

const LoadingSpinner = styled.div`
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
`;

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'secondary',
  size = 'md',
  disabled = false,
  loading = false,
  fullWidth = false,
  icon,
  iconPosition = 'left',
  onClick,
  type = 'button',
  className,
  ...props
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      disabled={disabled || loading}
      fullWidth={fullWidth}
      onClick={onClick}
      type={type}
      className={className}
      {...props}
    >
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          {icon && (
            <IconWrapper position={iconPosition}>
              {icon}
            </IconWrapper>
          )}
          {children}
        </>
      )}
    </StyledButton>
  );
};
