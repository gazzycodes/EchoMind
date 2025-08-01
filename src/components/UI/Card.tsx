import React from 'react';
import styled, { css } from 'styled-components';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

const getCardVariant = (variant: CardProps['variant']) => {
  switch (variant) {
    case 'elevated':
      return css`
        background: ${({ theme }) => theme.colors.background.tertiary};
        box-shadow: ${({ theme }) => theme.shadows.lg};
        border: 1px solid ${({ theme }) => theme.colors.border.secondary};
      `;
    case 'outlined':
      return css`
        background: transparent;
        border: 1px solid ${({ theme }) => theme.colors.border.primary};
      `;
    default:
      return css`
        background: ${({ theme }) => theme.colors.background.secondary};
        border: 1px solid ${({ theme }) => theme.colors.border.primary};
      `;
  }
};

const getPadding = (padding: CardProps['padding']) => {
  switch (padding) {
    case 'sm':
      return css`padding: ${({ theme }) => theme.spacing.sm};`;
    case 'md':
      return css`padding: ${({ theme }) => theme.spacing.md};`;
    case 'lg':
      return css`padding: ${({ theme }) => theme.spacing.lg};`;
    case 'xl':
      return css`padding: ${({ theme }) => theme.spacing.xl};`;
    default:
      return css`padding: ${({ theme }) => theme.spacing.lg};`;
  }
};

const StyledCard = styled.div<CardProps>`
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  transition: ${({ theme }) => theme.transitions.normal};
  
  ${({ variant }) => getCardVariant(variant)}
  ${({ padding }) => getPadding(padding)}
  
  ${({ hoverable, onClick }) => hoverable || onClick ? css`
    cursor: pointer;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: ${({ theme }) => theme.shadows.xl};
      border-color: ${({ theme }) => theme.colors.border.secondary};
    }
    
    &:active {
      transform: translateY(0);
    }
  ` : ''}
`;

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  padding = 'lg',
  className,
  onClick,
  hoverable = false,
  ...props
}) => {
  return (
    <StyledCard
      variant={variant}
      padding={padding}
      className={className}
      onClick={onClick}
      hoverable={hoverable}
      {...props}
    >
      {children}
    </StyledCard>
  );
};
