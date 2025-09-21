import styled from "styled-components";
import { ThemeToggle } from "../ThemeToggle";

type LayoutProps = {
  children: React.ReactNode;
};

const LayoutContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: var(--space-2xl) var(--space-xl);
  background: var(--bg-primary);

  @media (max-width: 768px) {
    padding: var(--space-lg) var(--space-md);
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 480px) {
    padding: var(--space-md) var(--space-sm);
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  position: relative;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: var(--space-xl);
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
