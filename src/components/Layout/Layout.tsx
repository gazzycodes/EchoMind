import React from 'react';
import styled from 'styled-components';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background.primary};
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.background.secondary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.primary};
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const LogoIcon = styled.div`
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.accent.primary}, ${({ theme }) => theme.colors.accent.purple});
  border-radius: ${({ theme }) => theme.borderRadius.md};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  color: white;
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  overflow: hidden;
`;

const Footer = styled.footer`
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.background.secondary};
  border-top: 1px solid ${({ theme }) => theme.colors.border.primary};
  text-align: center;
  color: ${({ theme }) => theme.colors.text.muted};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

interface LayoutProps {
  children: React.ReactNode;
  headerActions?: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children, headerActions }) => {
  return (
    <LayoutContainer>
      <Header>
        <Logo>
          <LogoIcon>🎵</LogoIcon>
          EchoMind
        </Logo>
        {headerActions && (
          <HeaderActions>
            {headerActions}
          </HeaderActions>
        )}
      </Header>
      
      <Main>
        {children}
      </Main>
      
      <Footer>
        EchoMind - Ambient Sound App for Focus & Relaxation
      </Footer>
    </LayoutContainer>
  );
};
