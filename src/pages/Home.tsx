import styled from "styled-components";
import { Layout } from "../components/Layout";
import { NavMenu } from "../components/NavMenu";
import { GitHubIcon } from "../components/Icons/GitHub";
// import { LinkedInIcon } from "../components/Icons/LinkedIn";
import { XIcon } from "../components/Icons/X";
import { MediumIcon } from "../components/Icons/Medium";

const HomeContainer = styled.div`
  width: 100%;
  max-width: 100%;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 220px;
  gap: var(--space-lg);
  overflow-x: hidden;

  /* Grid layout for desktop */
  @media (min-width: 769px) {
    grid-template-areas: "about sidebar";
    min-height: auto;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    gap: var(--space-md);
    padding: var(--space-md);
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
    min-height: auto;
  }

  @media (max-width: 480px) {
    padding: var(--space-sm);
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
  }
`;

const AboutContainer = styled.div`
  grid-area: about;
  padding: 0;
  overflow-x: hidden;
  width: 80%;
  margin-top: 80px;
`;

const Sidebar = styled.aside`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  align-items: flex-start;
  justify-content: center;
  padding-left: var(--space-md);

  @media (max-width: 768px) {
    padding-left: 0;
    align-items: stretch;
    flex-direction: row;
    justify-content: flex-start;
    gap: var(--space-lg);
  }
`;

const SectionTitle = styled.h2`
  color: var(--text-primary);
  font-size: 1.2rem;
  width: fit-content;
  margin: 0 0 var(--space-md) 0;
  padding-bottom: var(--space-xs);
  border-bottom: 1px dashed #c3baab;
`;

const IntroText = styled.p`
  font-size: 0.875rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: var(--space-md);
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
  margin-top: var(--space-lg);
`;

const TechTag = styled.span`
  background: var(--bg-surface-hover);
  color: var(--text-secondary);
  padding: var(--space-xs) var(--space-sm);
  border-radius: var(--radius-sm);
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid var(--bg-surface-hover);
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: var(--space-md);
  }

  @media (max-width: 480px) {
    justify-content: center;
    gap: var(--space-sm);
  }
`;

const SocialLink = styled.a`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  text-decoration: none;
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-weight: 500;
  padding: 6px 8px;
  border-radius: var(--radius-sm);
  transition: all var(--transition-normal);

  /* Allow links to grow/shrink on small screens */
  @media (max-width: 768px) {
    flex: 1 1 120px;
    justify-content: center;
    padding: 8px 6px;
  }

  @media (max-width: 480px) {
    flex: 1 1 90px;
    font-size: 0.85rem;
    padding: 6px 6px;
  }

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    color: var(--text-primary);
    transform: translateX(4px);
  }
`;

export const Home = () => {
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/rum-n", icon: <GitHubIcon /> },
    { name: "X (Twitter)", url: "https://x.com/room_n", icon: <XIcon /> },
    { name: "Medium", url: "https://room-n.medium.com/", icon: <MediumIcon /> },
  ];

  return (
    <Layout>
      <NavMenu menuItem="Home" />

      <HomeContainer>
        <AboutContainer>
          <IntroText>
            I used to do sales, business development and project management. It
            taught me valuable skills, but it wasn't for me.
          </IntroText>
          <IntroText>
            In 2020 I started working as a junior frontend developer. It felt
            like I finally found the missing piece. Since then I've worked both
            full-time and freelance, both remote and on-site.
          </IntroText>
          <IntroText>
            Currently I'm working full stack with React, React Native and
            Node.js. I'm aiming to get better at it every day and expand into
            different functions and technologies.
          </IntroText>

          <TechList>
            <TechTag>React</TechTag>
            <TechTag>React Native</TechTag>
            <TechTag>Node.js</TechTag>
            <TechTag>TypeScript</TechTag>
            <TechTag>Next.js</TechTag>
            <TechTag>Rust</TechTag>
          </TechList>
        </AboutContainer>

        <Sidebar>
          <SectionTitle>Connect</SectionTitle>
          <SocialLinks>
            {socialLinks.map((link, index) => (
              <SocialLink
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
              >
                {link.icon}
                <span>{link.name}</span>
              </SocialLink>
            ))}
          </SocialLinks>
        </Sidebar>
      </HomeContainer>
    </Layout>
  );
};
