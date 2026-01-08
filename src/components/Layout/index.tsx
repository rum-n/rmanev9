import styled from "styled-components";
import { Header } from "../Header";

type LayoutProps = {
  children: React.ReactNode;
};

const LayoutContainer = styled.div`
  position: relative;
  z-index: 0;
  width: 100%;
  max-width: 100vw;
  display: flex;
  justify-content: center;
  overflow-x: hidden;

  @media (max-width: 768px) {
    padding: var(--space-lg) var(--space-md);
    padding-top: calc(var(--space-lg) + 50px);
    padding-bottom: calc(var(--space-lg) + 50px);
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 100vw;
  }

  @media (max-width: 480px) {
    padding: var(--space-md) var(--space-sm);
    padding-top: calc(var(--space-md) + 40px);
    padding-bottom: calc(var(--space-md) + 40px);
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
    <>
      <Header />
      <LayoutContainer>
        <ContentWrapper>{children}</ContentWrapper>
      </LayoutContainer>
    </>
  );
};
