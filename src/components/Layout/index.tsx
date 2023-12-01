import styled from "styled-components";

type LayoutProps = {
  children: React.ReactNode;
};

const LayoutContainer = styled.div`
  overflow: hidden;
  position: relative;
  margin: 2rem;
  width: 95vw;
  height: 90vh;
`;

export const Layout = ({ children }: LayoutProps) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};
