import styled from "styled-components";
import { Layout } from "../components/Layout";
import { NavMenu } from "../components/NavMenu";

const TitleBox = styled.div`
  font-family: "Lato", sans-serif;
  width: 600px;  
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Writing = () => {
  return (
    <Layout>
      <TitleBox>
        <NavMenu menuItem="Writing" />
        <p>Soon.</p>
      </TitleBox>
    </Layout>
  );
};
