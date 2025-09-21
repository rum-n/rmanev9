import styled from "styled-components";
import { ThemeToggle } from "../ThemeToggle";

type LayoutProps = {
  children: React.ReactNode;
};

const LayoutContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 100vw;
  display: flex;
  justify-content: center;
  padding: var(--space-2xl) var(--space-xl);
  background: var(--bg-primary);
  overflow-x: hidden;

  @media (max-width: 768px) {
    padding: var(--space-lg) var(--space-md);
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 100vw;
  }

  @media (max-width: 480px) {
    padding: var(--space-md) var(--space-sm);
    width: 100%;
    max-width: 100vw;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  position: relative;
  overflow-x: hidden;

  @media (max-width: 768px) {
    max-width: 100%;
    width: 100%;
    margin-bottom: var(--space-xl);
    overflow-x: hidden;
  }

  @media (max-width: 480px) {
    max-width: 100%;
    width: 100%;
    overflow-x: hidden;
  }
`;

export const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutContainer>
      <ThemeToggle />
      <ContentWrapper>{children}</ContentWrapper>
    </LayoutContainer>
  );
};
