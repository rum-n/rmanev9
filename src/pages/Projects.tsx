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

const ProjectsWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  list-style: none;
  margin-top: 2rem;
  padding: 0;
`;

const ProjectLine = styled.li`
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    color: #777;
    transition: 0.2s ease-in-out;
  }
`;

interface ProjectData {
  title: string;
  year: string;
  tech: string;
  url?: string;
}

const myProjects: ProjectData[] = [
  {
    title: "Race Results",
    year: "2017",
    tech: "Highcharts, R",
    url: "",
  },
  {
    title: "Gripindoor",
    year: "2018",
    tech: "React, Material UI",
    url: "https://gripindoor.com/",
  },
  {
    title: "React Vault",
    year: "2018",
    tech: "React, Bootstrap, Node.js, GraphQL, MongoDB",
  },
  {
    title: "Finders/Keepers",
    year: "2018",
    tech: "React, Ghost",
    url: "https://finderskeepers.netlify.app/",
  },
  {
    title: "Podcast Chatterbox",
    year: "2019",
    tech: "React, AWS",
    url: "https://podcastchatterbox.netlify.app/",
  },
  {
    title: "Web3 Gigs",
    year: "2021",
    tech: "Vue.js, Strapi",
    url: "https://webthreegigs.com/",
  },
  {
    title: "Boulder Monday",
    year: "2024",
    tech: "React, Next.js, Prisma, Supabase",
    url: "https://boudlermonday.com/",
  },
];

const clientProjects = [
  {
    title: "Brightvision",
    year: "2022",
    tech: "React, Next.js, Payload CMS",
    url: "https://brightvision.com/",
  },
  {
    title: "Dave's Family NFT",
    year: "2021",
    tech: "React, Solidity",
    url: "",
  },
];

export const Projects = () => {
  return (
    <Layout>
      <TitleBox>
        <NavMenu menuItem="Projects" />
        <ProjectsWrapper>
          <span>Client projects</span>
          {(clientProjects as ProjectData[])
            .sort((a, b) => Number(b.year) - Number(a.year))
            .map((project) => (
              <ProjectLine
                key={project.title}
                onClick={
                  project.url
                    ? () => window.open(project.url || "", "_blank")
                    : undefined
                }
              >
                <span style={{ fontSize: "2rem" }}>{project.title}</span> /{" "}
                {project.year} / {project.tech}
              </ProjectLine>
            ))}
          <span>Personal projects</span>
          {(myProjects as ProjectData[])
            .sort((a, b) => Number(b.year) - Number(a.year))
            .map((project) => (
              <ProjectLine
                key={project.title}
                onClick={() => window.open(project.url || "", "_blank")}
              >
                <span style={{ fontSize: "2rem" }}>{project.title}</span> /{" "}
                {project.year} / {project.tech}
              </ProjectLine>
            ))}
        </ProjectsWrapper>
      </TitleBox>
    </Layout>
  );
};
