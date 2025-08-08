import styled from "styled-components";
import { Layout } from "../components/Layout";
import { NavMenu } from "../components/NavMenu";
import { useNavigate } from "react-router-dom";

const HomeContainer = styled.div`
  width: 100%;
  max-width: 800px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const ContentSection = styled.section`
  margin-top: var(--space-2xl);

  @media (max-width: 768px) {
    margin-top: var(--space-xl);
  }

  @media (max-width: 480px) {
    margin-top: var(--space-lg);
  }
`;

const IntroText = styled.p`
  font-size: 1.25rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: var(--space-xl);
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: var(--space-lg);
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: var(--space-md);
    line-height: 1.6;
  }
`;

const HighlightText = styled.span`
  color: var(--text-primary-dark);
  font-weight: 600;
`;

const AccentText = styled.span`
  color: var(--primary);
  font-weight: 600;
`;

const TechStack = styled.div`
  margin-top: var(--space-xl);
  padding: var(--space-lg);
  background: var(--bg-surface);
  border: 1px solid var(--bg-surface-hover);
  border-radius: var(--radius-xl);
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    padding: var(--space-md);
    margin-top: var(--space-lg);
  }

  @media (max-width: 480px) {
    padding: var(--space-sm);
    margin-top: var(--space-md);
  }
`;

const TechTitle = styled.h3`
  margin: 0 0 var(--space-md) 0;
  color: var(--text-primary);
  font-size: 1.1rem;
  font-weight: 600;

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: var(--space-sm);
  }
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);

  @media (max-width: 480px) {
    gap: var(--space-xs);
  }
`;

const TechTag = styled.span`
  background: var(--bg-surface-hover);
  color: var(--text-secondary);
  padding: var(--space-xs) var(--space-sm);
  border-radius: var(--radius-md);
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid var(--bg-surface-hover);

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: var(--space-xs);
  }
`;

const CallToAction = styled.div`
  margin-top: var(--space-2xl);
  padding: var(--space-xl);
  background: linear-gradient(
    135deg,
    var(--bg-surface) 0%,
    var(--bg-surface-hover) 100%
  );
  border: 1px solid var(--bg-surface-hover);
  border-radius: var(--radius-xl);
  text-align: center;
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    padding: var(--space-lg);
    margin-top: var(--space-xl);
  }

  @media (max-width: 480px) {
    padding: var(--space-md);
    margin-top: var(--space-lg);
  }
`;

const CTAButton = styled.button`
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  color: white;
  border: none;
  padding: var(--space-md) var(--space-xl);
  border-radius: var(--radius-lg);
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all var(--transition-normal);
  box-shadow: var(--shadow-md);
  min-height: 44px;
  min-width: 44px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }

  @media (max-width: 768px) {
    padding: var(--space-sm) var(--space-lg);
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    padding: var(--space-sm) var(--space-md);
    font-size: 0.9rem;
  }
`;

export const Home = () => {
  const navigate = useNavigate();

  const handleProjectsClick = () => {
    navigate("/projects");
  };

  return (
    <Layout>
      <HomeContainer>
        <NavMenu menuItem="Home" />

        <ContentSection>
          <IntroText>
            I used to do{" "}
            <HighlightText>
              sales, business development and project management
            </HighlightText>
            . It taught me some incredibly valuable skills, but it wasn't for
            me.
          </IntroText>

          <IntroText>
            In <AccentText>2020</AccentText> I started working as a junior
            frontend developer. It felt like I finally found the missing piece.
            Since then I've worked both
            <HighlightText> full-time and freelance</HighlightText>. Both{" "}
            <HighlightText>remote and on-site</HighlightText>.
          </IntroText>

          <IntroText>
            Currently I'm working <AccentText>full stack</AccentText> with
            React, React Native and Node.js. I'm aiming to get better at it
            every day and expand into different functions and technologies.
          </IntroText>

          <TechStack>
            <TechTitle>Current Tech Stack</TechTitle>
            <TechList>
              <TechTag>React</TechTag>
              <TechTag>React Native</TechTag>
              <TechTag>Node.js</TechTag>
              <TechTag>TypeScript</TechTag>
              <TechTag>Next.js</TechTag>
              <TechTag>Tailwind</TechTag>
              <TechTag>Styled Components</TechTag>
              <TechTag>Shadcn</TechTag>
              <TechTag>Vercel</TechTag>
              <TechTag>AWS</TechTag>
              <TechTag>Docker</TechTag>
              <TechTag>Git</TechTag>
              <TechTag>GraphQL</TechTag>
              <TechTag>MongoDB</TechTag>
              <TechTag>Supabase</TechTag>
              <TechTag>Prisma</TechTag>
              <TechTag>Rust</TechTag>
            </TechList>
          </TechStack>

          <CallToAction>
            <IntroText style={{ marginBottom: "var(--space-lg)" }}>
              Feel free to poke around, check out what I'm currently working on,
              and if anything catches your eye - reach out!
            </IntroText>
            <CTAButton onClick={handleProjectsClick}>
              View my projects →
            </CTAButton>
          </CallToAction>
        </ContentSection>
      </HomeContainer>
    </Layout>
  );
};
