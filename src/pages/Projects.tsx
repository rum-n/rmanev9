import styled from "styled-components";
import { Layout } from "../components/Layout";
import { NavMenu } from "../components/NavMenu";

const ProjectsContainer = styled.div`
  width: 100%;
  max-width: 1200px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const ProjectsSection = styled.section`
  margin-top: var(--space-2xl);

  @media (max-width: 768px) {
    margin-top: var(--space-xl);
  }

  @media (max-width: 480px) {
    margin-top: var(--space-lg);
  }
`;

const SectionTitle = styled.h2`
  color: var(--text-primary);
  margin-bottom: var(--space-xl);
  font-size: 1.75rem;
  font-weight: 600;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 3px;
    background: var(--primary);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: var(--space-lg);
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
    margin-bottom: var(--space-md);
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--space-xl);
  margin-bottom: var(--space-3xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
    margin-bottom: var(--space-2xl);
  }

  @media (max-width: 480px) {
    gap: var(--space-md);
    margin-bottom: var(--space-xl);
  }
`;

const ProjectCard = styled.div`
  background: var(--bg-surface);
  border: 1px solid var(--bg-surface-hover);
  border-radius: var(--radius-md);
  overflow: hidden;
  transition: all var(--transition-normal);
  position: relative;

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    &:hover {
      transform: translateY(-1px);
    }
  }
`;

const ProjectImage = styled.div<{ imageUrl?: string }>`
  width: 100%;
  height: 280px;
  background: ${(props) =>
    props.imageUrl ? `url(${props.imageUrl}) center/cover` : "var(--primary)"};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
  text-align: center;
  padding: var(--space-md);
  overflow: hidden;
  transition: all var(--transition-normal);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${(props) =>
      props.imageUrl ? "rgba(0, 0, 0, 0.1)" : "rgba(0, 0, 0, 0.1)"};
    transition: all var(--transition-normal);
  }

  span {
    position: relative;
    z-index: 1;
    opacity: 0;
    transform: translateY(10px);
    transition: all var(--transition-normal);
  }

  ${ProjectCard}:hover & {
    &::before {
      background: ${(props) =>
        props.imageUrl ? "rgba(0, 0, 0, 0.2)" : "rgba(0, 0, 0, 0.2)"};
    }

    span {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    height: 240px;
  }

  @media (max-width: 480px) {
    height: 200px;
  }
`;

const ProjectContent = styled.div`
  padding: var(--space-xl);
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: var(--space-lg);
  }

  @media (max-width: 480px) {
    padding: var(--space-md);
  }
`;

const ProjectTitle = styled.h3`
  color: var(--text-primary);
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0 0 var(--space-md) 0;
  line-height: 1.2;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const ProjectMeta = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-md);
  margin-bottom: var(--space-md);
  flex-wrap: wrap;

  @media (max-width: 480px) {
    gap: var(--space-sm);
    margin-bottom: var(--space-sm);
  }
`;

const ProjectYear = styled.span`
  background: var(--primary);
  color: white;
  padding: var(--space-xs) var(--space-sm);
  border-radius: var(--radius-sm);
  font-size: 0.8rem;
  font-weight: 500;
`;

const ProjectTech = styled.span`
  color: var(--text-secondary);
  font-size: 0.875rem;
  font-weight: 500;
`;

const ProjectDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0 0 var(--space-md) 0;
  font-size: 0.95rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  color: var(--primary);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all var(--transition-normal);
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-md);
  background: var(--bg-surface-hover);
  border: 1px solid var(--bg-surface-hover);

  &:hover {
    background: var(--bg-surface);
    border-color: var(--primary);
    transform: translateX(2px);
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: var(--space-xs) var(--space-sm);
  }
`;

interface ProjectData {
  title: string;
  year: string;
  tech: string;
  url?: string;
  description?: string;
  imageUrl?: string;
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
    imageUrl: "/assets/podcast-chatterbox.png",
    description:
      "A platform for podcasters to find people that want to be interviewed.",
  },
  {
    title: "Web3 Gigs",
    year: "2021",
    tech: "Vue.js, Strapi",
    url: "https://remoteweb3jobs.netlify.app/",
    imageUrl: "/assets/web3.png",
    description: "A job board for web3/blockchain jobs.",
  },
  {
    title: "Boulder Monday",
    year: "2024",
    tech: "React, Next.js, Prisma, Supabase",
    url: "https://bouldermonday.com/",
    imageUrl: "/assets/boulder-monday.png",
    description: "A social media platform for indoor bouldering.",
  },
  {
    title: "Remote Job Matching",
    year: "2025",
    tech: "React, Next.js, Prisma, MongoDB, Mistral AI",
    url: "https://remotejobmatching.com",
    imageUrl: "/assets/rjm.png",
    description:
      "A platform that matches job seekers with remote job opportunities based on their skills and preferences. It uses AI to analyze resumes and job descriptions to find the best matches. It also write a cover letter for the user based on their resume and the job description.",
  },
  {
    title: "Dokument Chat",
    year: "2025",
    tech: "React, Next.js, Prisma, MongoDB, Qdrant, Mistral AI",
    url: "https://dokument.chat",
    imageUrl: "/assets/dokchat.png",
    description:
      "A platform that allows users to chat with their documents using AI.",
  },
  {
    title: "Daily Observable",
    year: "2025",
    tech: "Rust, React, Next.js, Prisma, MongoDB",
    url: "https://dailyobservable.com/",
    imageUrl: "/assets/observable.png",
    description:
      "A newsletter service delivering daily job opportunities based on your preferences.",
  },
  {
    title: "Devjob Flashcards",
    year: "2025",
    tech: "React, Next.js, Vercel AI SDK",
    url: "https://devjobflashcards.com",
    imageUrl: "/assets/flashcards.png",
    description:
      "A flashcard app to help developers prepare for technical interviews. It also has a feature for the user to explain a software concept out loud and get feedback from AI.",
  },
];

const clientProjects = [
  {
    title: "ArtQ",
    year: "2020",
    tech: "React",
    url: "https://artq-pi.vercel.app/",
    imageUrl: "/assets/artq.png",
    description:
      "An MVP for a social media platform for artists. I worked on the project together with a designer and another developer as part of a hackathon where students come together to assist startup founders work on their venture ideas.",
  },
  {
    title: "Brightvision",
    year: "2022",
    tech: "React, Next.js, Payload CMS",
    url: "https://brightvision.com/",
    imageUrl: "/assets/bv.png",
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
    imageUrl: "/assets/artshop.png",
    description:
      "An multi-lingual artist's homepage and webshop with a custom admin panel to upload new artworks, manage content and customer orders.",
  },
];

const renderProjectCard = (project: ProjectData) => (
  <ProjectCard key={project.title}>
    <ProjectImage imageUrl={project.imageUrl}>
      <span>{project.imageUrl ? "" : project.title}</span>
    </ProjectImage>
    <ProjectContent>
      <ProjectTitle>{project.title}</ProjectTitle>
      <ProjectMeta>
        <ProjectYear>{project.year}</ProjectYear>
        <ProjectTech>{project.tech}</ProjectTech>
      </ProjectMeta>
      <ProjectDescription>
        {project.description || "No description available"}
      </ProjectDescription>
      {project.url && (
        <ProjectLink
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Project →
        </ProjectLink>
      )}
    </ProjectContent>
  </ProjectCard>
);

const renderProjectList = (projects: ProjectData[], label: string) => (
  <ProjectsSection key={label}>
    <SectionTitle>{label}</SectionTitle>
    <ProjectsGrid>
      {projects
        .sort((a, b) => Number(b.year) - Number(a.year))
        .map(renderProjectCard)}
    </ProjectsGrid>
  </ProjectsSection>
);

export const Projects = () => {
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
