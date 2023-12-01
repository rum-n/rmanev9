import styled from "styled-components";
import { Layout } from "../components/Layout";
import { NavMenu } from "../components/NavMenu";

const TitleBox = styled.div`
  p {
    margin: 0 0 0 2rem;
  }
  font-family: "Lato", sans-serif;
`;

const SummaryBox = styled.div`
  margin: 5rem 0 0 2rem;
  display: flex;
  justify-content: flex-end;
  height: 30%;
`;

const SummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Home = () => {
  return (
    <Layout>
      <TitleBox>
        <NavMenu menuItem="Home" />
        <SummaryBox>
          <SummaryWrapper>
            <p>
              Up until the year 2020, I used to do sales, <br />
              business development and project management. <br />
              It wasn't for me.
            </p>
            <p>
              Now I do frontend development <br /> and I'm aiming to get better
              at it every day.
            </p>
            <p>
              Feel free to poke around, <br />
              check out what I'm currently working on, <br />
              and if anything catches your eye - reach out!
            </p>
          </SummaryWrapper>
        </SummaryBox>
      </TitleBox>
    </Layout>
  );
};
