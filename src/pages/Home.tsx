import styled from "styled-components";
import { Layout } from "../components/Layout";
import { NavMenu } from "../components/NavMenu";

const TitleBox = styled.div`
  font-family: "Lato", sans-serif;
  width: 600px;
`;

const SummaryWrapper = styled.div`
  margin-top: 2rem;
`;

export const Home = () => {
  return (
    <Layout>
      <TitleBox>
        <NavMenu menuItem="Home" />
        <SummaryWrapper>
          <p>
            I used to do sales,
            business development and project management.
            It taught me some incredibly valuable skills, but it wasn't for me.
          </p>
          <p>
            In 2020 I started working as a junior frontend developer. It felt like I finally found the missing piece.
            Since then I've worked both full-time and freelance. Both remote and on-site.
            <p>
              Currently I'm working full stack with React, React Native and Node.js.
              I'm aiming to get better at it every day and expand into different functions and technologies.
            </p>
          </p>
          <p>
            Feel free to poke around, check out what I'm currently working on, and if anything catches your eye - reach out!
          </p>
        </SummaryWrapper>
      </TitleBox>
    </Layout>
  );
};
