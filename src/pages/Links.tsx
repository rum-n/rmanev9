import styled from "styled-components";
import { Layout } from "../components/Layout";
import { NavMenu } from "../components/NavMenu";

const TitleBox = styled.div`
  p {
    margin: 0 0 0 2rem;
  }
  font-family: "Lato", sans-serif;
`;

export const Links = () => {
  return (
    <Layout>
      <TitleBox>
        <NavMenu menuItem="Projects" />
      </TitleBox>
    </Layout>
  );
};
