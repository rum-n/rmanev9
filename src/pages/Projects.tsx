import styled from "styled-components";
import { Layout } from "../components/Layout";
import { NavMenu } from "../components/NavMenu";
import { useState } from "react";

const TitleBox = styled.div`
  font-family: "Lato", sans-serif;
  width: 600px;  
  
  @media (max-width: 768px) {
    width: 100%;
    background-color: #00000082;
  }
`;

const ProjectsWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  list-style: none;
  margin-top: 2rem;
  padding: 0;
  height: 500px;
  overflow-y: auto;
  scrollbar-color: #8a5858 #000000;
`;

const ProjectLine = styled.li`
  cursor: pointer;
  transition: 0.2s ease-in-out;
  margin-bottom: 0.5rem;

  &:hover {
    color: #777;
    transition: 0.2s ease-in-out;
  }
`;

const ProjectDetails = styled.div<{ isExpanded: boolean }>`
  max-height: ${props => props.isExpanded ? '500px' : '0'};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  background-color: #00000082;
  padding: ${props => props.isExpanded ? '1rem' : '0'};
  margin-top: 0.5rem;
  opacity: ${props => props.isExpanded ? '1' : '0'};
  transform: translateY(${props => props.isExpanded ? '0' : '-10px'});
  visibility: ${props => props.isExpanded ? 'visible' : 'hidden'};
  
  > div {
    opacity: ${props => props.isExpanded ? '1' : '0'};
    transition: opacity 0.2s ease-in-out;
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
    description: "A data visualization project for analyzing runningrace results and statistics."
  },
  {
    title: "Gripindoor",
    year: "2018",
    tech: "React, Material UI",
    url: "",
    description: "A map showing climbing gyms in Europe."
  },
  {
    title: "React Vault",
    year: "2018",
    tech: "React, Bootstrap, Node.js, GraphQL, MongoDB",
    description: "A personal directory of valuable React resources."
  },
  {
    title: "Finders/Keepers",
    year: "2018",
    tech: "React, Ghost",
    url: "https://finderskeepers.netlify.app/",
    description: "A platform for freelancers and agencies to browse opportunities and potenatially find new clients."
  },
  {
    title: "Podcast Chatterbox",
    year: "2019",
    tech: "React, AWS",
    url: "https://podcastchatterbox.netlify.app/",
    description: "A platform for podcasters to find people that want to be interviewed."
  },
  {
    title: "Web3 Gigs",
    year: "2021",
    tech: "Vue.js, Strapi",
    url: "https://webthreegigs.com/",
    description: "A job board for web3/blockchain jobs."
  },
  {
    title: "Boulder Monday",
    year: "2024",
    tech: "React, Next.js, Prisma, Supabase",
    url: "https://bouldermonday.com/",
    description: "A social media platform for indoor bouldering."
  },
  {
    title: "Daily Observable",
    year: "2025",
    tech: "Rust, React, Next.js, Prisma, MongoDB",
    url: "https://dailyobservable.com/",
    description: "A newsletter service delivering daily job opportunities based on your preferences."
  },
];

const clientProjects = [
  {
    title: "Brightvision",
    year: "2022",
    tech: "React, Next.js, Payload CMS",
    url: "https://brightvision.com/",
    description: "Content management system for a marketing agency."
  },
  {
    title: "Dave's Family NFT",
    year: "2021",
    tech: "React, Solidity",
    url: "",
    description: "A landing page for minting an NFT."
  },
];

export const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const toggleProject = (title: string) => {
    setExpandedProject(expandedProject === title ? null : title);
  };

  const renderProjectList = (projects: ProjectData[], label: string) => (
    <>
      <span>{label}</span>
      {projects
        .sort((a, b) => Number(b.year) - Number(a.year))
        .map((project) => (
          <div key={project.title}>
            <ProjectLine onClick={() => toggleProject(project.title)}>
              <span style={{ fontSize: "2rem" }}>{project.title}</span> /{" "}
              {project.year} / {project.tech}
            </ProjectLine>
            <ProjectDetails isExpanded={expandedProject === project.title}>
              {project.description || "No description available"}
              {project.url && (
                <div style={{ marginTop: '1rem' }}>
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    Visit Project →
                  </a>
                </div>
              )}
            </ProjectDetails>
          </div>
        ))}
    </>
  );

  return (
    <Layout>
      <TitleBox>
        <NavMenu menuItem="Projects" />
        <ProjectsWrapper>
          {renderProjectList(clientProjects as ProjectData[], "Client projects")}
          {renderProjectList(myProjects as ProjectData[], "Personal projects")}
        </ProjectsWrapper>
      </TitleBox>
    </Layout>
  );
};
