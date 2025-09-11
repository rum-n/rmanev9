import styled from "styled-components";
import { WindowFrame } from "../components/WindowFrame";
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
  border-radius: var(--radius-md);

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
  border-radius: var(--radius-sm);
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
  background: var(--bg-surface);
  border: 1px solid var(--bg-surface-hover);
  border-radius: var(--radius-md);
  text-align: center;

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
  background: var(--primary);
  color: white;
  border: none;
  padding: var(--space-md) var(--space-xl);
  border-radius: var(--radius-md);
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all var(--transition-normal);
  min-height: 44px;
  min-width: 44px;

  &:hover {
    background: var(--primary-dark);
    transform: translateY(-1px);
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

const computerIcon = `data:image/svg+xml;base64,${btoa(`
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
  <rect x="2" y="3" width="12" height="8" fill="#c0c0c0" stroke="#808080" stroke-width="1"/>
  <rect x="3" y="4" width="10" height="6" fill="#000080"/>
  <rect x="6" y="11" width="4" height="2" fill="#c0c0c0" stroke="#808080" stroke-width="1"/>
  <rect x="4" y="13" width="8" height="1" fill="#808080"/>
</svg>
`)}`;

export const Home = () => {
  const navigate = useNavigate();

  const handleProjectsClick = () => {
    navigate("/projects");
  };

  return (
    <WindowFrame title="My Computer - System Properties" icon={computerIcon}>
      <HomeContainer>
        <ContentSection>
          <IntroText>
            <strong>System Information:</strong>
          </IntroText>

          <IntroText>
            <strong>Name:</strong> Rumen Manev
          </IntroText>

          <IntroText>
            <strong>Type:</strong> Fullstack Software Engineer
          </IntroText>

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
            <TechTitle>Installed Technologies</TechTitle>
            <TechList>
              <TechTag>React</TechTag>
              <TechTag>React Native</TechTag>
              <TechTag>Node.js</TechTag>
              <TechTag>JavaScript</TechTag>
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
    </WindowFrame>
  );
};
