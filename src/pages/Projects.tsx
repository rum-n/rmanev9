import styled from "styled-components";
import { Layout } from "../components/Layout";
import { NavMenu } from "../components/NavMenu";
import { useState } from "react";

const ProjectsContainer = styled.div`
  width: 100%;
  max-width: 800px;
`;

const ProjectsSection = styled.section`
  margin-top: var(--space-2xl);
`;

const SectionTitle = styled.h2`
  color: var(--text-primary);
  margin-bottom: var(--space-lg);
  font-size: 1.5rem;
  font-weight: 600;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 3px;
    background: linear-gradient(
      135deg,
      var(--primary) 0%,
      var(--secondary) 100%
    );
    border-radius: 2px;
  }
`;

const ProjectsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  margin-bottom: var(--space-3xl);
`;

const ProjectCard = styled.div<{ isExpanded: boolean }>`
  background: var(--bg-surface);
  border: 1px solid var(--bg-surface-hover);
  border-radius: var(--radius-xl);
  padding: var(--space-lg);
  cursor: pointer;
  transition: all var(--transition-normal);
  backdrop-filter: blur(10px);

  &:hover {
    background: var(--bg-surface-hover);
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }
`;

const ProjectHeader = styled.div<{ isExpanded: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--space-md);
  margin-bottom: ${(props) => (props.isExpanded ? "var(--space-md)" : "0")};
`;

const ProjectTitle = styled.h3`
  color: var(--text-primary);
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  flex: 1;
`;

const ProjectMeta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: var(--space-xs);
  min-width: fit-content;
`;

const ProjectYear = styled.span`
  color: var(--primary);
  font-weight: 600;
  font-size: 0.9rem;
`;

const ProjectTech = styled.span`
  color: var(--text-tertiary);
  font-size: 0.8rem;
  font-weight: 500;
`;

const ProjectDescription = styled.div<{ isExpanded: boolean }>`
  max-height: ${(props) => (props.isExpanded ? "200px" : "0")};
  overflow: hidden;
  transition: all var(--transition-slow);
  opacity: ${(props) => (props.isExpanded ? "1" : "0")};
  transform: translateY(${(props) => (props.isExpanded ? "0" : "-10px")});

  p {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: var(--space-md);
  }
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  color: var(--primary);
  font-weight: 500;
  text-decoration: none;
  transition: all var(--transition-fast);

  &:hover {
    color: var(--primary-dark);
    transform: translateX(2px);
  }
`;

const ExpandIcon = styled.div<{ isExpanded: boolean }>`
  width: 20px;
  height: 20px;
  position: relative;
  transition: transform var(--transition-normal);
  transform: rotate(${(props) => (props.isExpanded ? "180deg" : "0deg")});

  &::before,
  &::after {
    content: "";
    position: absolute;
    background: var(--text-secondary);
    transition: background var(--transition-fast);
  }

  &::before {
    top: 50%;
    left: 0;
    right: 0;
    height: 2px;
    transform: translateY(-50%);
  }

  &::after {
    top: 0;
    left: 50%;
    bottom: 0;
    width: 2px;
    transform: translateX(-50%);
    opacity: ${(props) => (props.isExpanded ? "0" : "1")};
  }

  ${ProjectCard}:hover & {
    &::before,
    &::after {
      background: var(--text-primary);
    }
  }
`;

interface ProjectData {
  title: string;
  year: string;
  tech: string;
  url?: string;
  description?: string;
}

const myProjects: ProjectData[] = [
  {
    title: "Race Results",
    year: "2017",
    tech: "Highcharts, R",
    url: "",
    description:
      "A data visualization project for analyzing running race results and statistics.",
  },
  {
    title: "Gripindoor",
    year: "2018",
    tech: "React, Material UI",
    url: "",
    description: "A map showing climbing gyms in Europe.",
  },
  {
    title: "React Vault",
    year: "2018",
    tech: "React, Bootstrap, Node.js, GraphQL, MongoDB",
    description: "A personal directory of valuable React resources.",
  },
  {
    title: "Finders/Keepers",
    year: "2018",
    tech: "React, Ghost",
    url: "https://finderskeepers.netlify.app/",
    description:
      "A platform for freelancers and agencies to browse opportunities and potentially find new clients.",
  },
  {
    title: "Podcast Chatterbox",
    year: "2019",
    tech: "React, AWS",
    url: "https://podcastchatterbox.netlify.app/",
    description:
      "A platform for podcasters to find people that want to be interviewed.",
  },
  {
    title: "Web3 Gigs",
    year: "2021",
    tech: "Vue.js, Strapi",
    url: "https://remoteweb3jobs.netlify.app/",
    description: "A job board for web3/blockchain jobs.",
  },
  {
    title: "Boulder Monday",
    year: "2024",
    tech: "React, Next.js, Prisma, Supabase",
    url: "https://bouldermonday.com/",
    description: "A social media platform for indoor bouldering.",
  },
  {
    title: "Daily Observable",
    year: "2025",
    tech: "Rust, React, Next.js, Prisma, MongoDB",
    url: "https://dailyobservable.com/",
    description:
      "A newsletter service delivering daily job opportunities based on your preferences.",
  },
  {
    title: "Devjob Flashcards",
    year: "2025",
    tech: "React, Next.js, Vercel AI SDK",
    url: "https://devjob-flashcards.vercel.app",
    description:
      "A flashcard app to help developers prepare for technical interviews. It also has a feature for the user to explain a software concept out loud and get feedback from AI.",
  },
  {
    title: "Remote Job Matching",
    year: "2025",
    tech: "React, Next.js, Prisma, MongoDB, Mistral AI",
    url: "https://remotejobmatching.com",
    description:
      "A platform that matches job seekers with remote job opportunities based on their skills and preferences. It uses AI to analyze resumes and job descriptions to find the best matches. It also write a cover letter for the user based on their resume and the job description.",
  },
];

const clientProjects = [
  {
    title: "ArtQ",
    year: "2020",
    tech: "React",
    url: "https://artq-pi.vercel.app/",
    description:
      "An MVP for a social media platform for artists. I worked on the project together with a designer and another developer as part of a hackathon where students come together to assist startup founders work on their venture ideas.",
  },
  {
    title: "Brightvision",
    year: "2022",
    tech: "React, Next.js, Payload CMS",
    url: "https://brightvision.com/",
    description:
      "Content management system for a marketing agency, based in Sweden. I worked together with the company's marketing team to create a custom CMS for their website.",
  },
  {
    title: "Dave's Family NFT",
    year: "2021",
    tech: "React, Solidity",
    url: "",
    description: "A landing page for minting an NFT.",
  },
  {
    title: "Artist online shop",
    year: "2025",
    tech: "Next.js, Prisma, Stripe",
    url: "https://villy-shop.vercel.app",
    description:
      "An multi-lingual artist's homepage and webshop with a custom admin panel to upload new artworks, manage content and customer orders.",
  },
];

export const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const toggleProject = (title: string) => {
    setExpandedProject(expandedProject === title ? null : title);
  };

  const renderProjectList = (projects: ProjectData[], label: string) => (
    <ProjectsSection key={label}>
      <SectionTitle>{label}</SectionTitle>
      <ProjectsGrid>
        {projects
          .sort((a, b) => Number(b.year) - Number(a.year))
          .map((project) => (
            <ProjectCard
              key={project.title}
              isExpanded={expandedProject === project.title}
              onClick={() => toggleProject(project.title)}
            >
              <ProjectHeader isExpanded={expandedProject === project.title}>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectMeta>
                  <ProjectYear>{project.year}</ProjectYear>
                  <ProjectTech>{project.tech}</ProjectTech>
                </ProjectMeta>
                <ExpandIcon isExpanded={expandedProject === project.title} />
              </ProjectHeader>

              <ProjectDescription
                isExpanded={expandedProject === project.title}
              >
                <p>{project.description || "No description available"}</p>
                {project.url && (
                  <ProjectLink
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Visit Project →
                  </ProjectLink>
                )}
              </ProjectDescription>
            </ProjectCard>
          ))}
      </ProjectsGrid>
    </ProjectsSection>
  );

  return (
    <Layout>
      <ProjectsContainer>
        <NavMenu menuItem="Projects" />
        {renderProjectList(clientProjects as ProjectData[], "Client Projects")}
        {renderProjectList(myProjects as ProjectData[], "Personal Projects")}
      </ProjectsContainer>
    </Layout>
  );
};
