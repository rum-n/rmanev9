import styled from "styled-components";
import { Layout } from "../components/Layout";
import { blogPosts } from "../data/blogPosts";
import { useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";
import { GitHubIcon } from "../components/Icons/GitHub";
import { LinkedInIcon } from "../components/Icons/LinkedIn";
import { XIcon } from "../components/Icons/X";
import { MediumIcon } from "../components/Icons/Medium";
import AsciiLineAnimation from "../components/AsciiLineAnimation";
import CircleAnimation from "../components/CircleAnimation";

const HomeContainer = styled.div`
  width: 100%;
  max-width: 100%;
  padding: var(--space-lg);
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  overflow-x: hidden;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-md);
    padding: var(--space-md);
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
  }

  @media (max-width: 480px) {
    padding: var(--space-sm);
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
  }
`;

const AnimationContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 100;
  font-size: 1.2rem;
`;

const AnimationContainer2 = styled.div`
  position: absolute;
  top: 800px;
  right: 0px;
  z-index: 100;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    top: 600px;
    left: 20px;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    top: 500px;
    left: 10px;
    font-size: 0.8rem;
  }
`;

const SectionBox = styled.div`
  margin-bottom: var(--space-lg);
  padding: var(--space-lg);
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;

  @media (max-width: 768px) {
    padding: var(--space-md);
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
  }

  @media (max-width: 480px) {
    padding: var(--space-sm);
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
  }
`;

const SectionTitle = styled.h2`
  color: var(--text-primary);
  font-size: 1.5rem;
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

const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  overflow-y: auto;
`;

const ProjectItem = styled.div`
  padding: var(--space-sm);
  margin-bottom: var(--space-sm);
`;

const ProjectTitle = styled.h3`
  align-items: center;
  color: var(--text-primary);
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 var(--space-xs) 0;
`;

const ProjectTitleLink = styled.a`
  color: var(--text-primary);
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 600;
  transition: color var(--transition-normal);

  &:hover {
    color: #c3baab;
  }
`;

const ProjectMeta = styled.div`
  display: flex;
  gap: var(--space-sm);
  margin-bottom: var(--space-xs);
  margin-top: var(--space-sm);
  font-size: 1rem;
`;

const ProjectYear = styled.span`
  color: white;
  padding: 2px 4px;
  border-radius: var(--radius-sm);
`;

const ProjectTech = styled.span`
  color: var(--text-tertiary);
`;

const ProjectDescription = styled.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.4;
  margin: 0;
`;

const ProjectTags = styled.div`
  display: flex;
  gap: var(--space-xs);
  margin-bottom: var(--space-xs);
`;

const ProjectTag = styled.span<{ type: "personal" | "client" }>`
  padding: 2px 0px;
  border-radius: var(--radius-sm);
  font-weight: 500;
  background-color: var(--gray-200);
  color: var(--primary);
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--space-md);
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: var(--bg-surface-hover);
  border-radius: var(--radius-sm);
  text-decoration: none;
  color: var(--text-secondary);
  transition: all var(--transition-normal);
  font-size: 1.5rem;

  &:hover {
    background: var(--primary);
    color: white;
    transform: translateY(-2px);
  }
`;

const SearchContainer = styled.div`
  margin-bottom: var(--space-md);
`;

const SearchInput = styled.input`
  width: 100%;
  padding: var(--space-sm);
  border: 1px solid var(--bg-surface-hover);
  border-radius: var(--radius-sm);
  background: var(--bg-primary);
  color: var(--text-primary);
  font-size: 0.9rem;

  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`;

const TagsContainer = styled.div`
  margin-bottom: var(--space-md);
`;

const TagsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
`;

const TagButton = styled.button<{ active: boolean }>`
  padding: 4px 8px;
  border: 1px solid var(--bg-surface-hover);
  border-radius: var(--radius-sm);
  background: ${(props) =>
    props.active ? "var(--primary)" : "var(--bg-primary)"};
  color: ${(props) => (props.active ? "white" : "var(--text-secondary)")};
  font-size: 0.75rem;
  cursor: pointer;
  transition: all var(--transition-normal);

  &:hover {
    background: var(--primary);
    color: white;
  }
`;

const BlogList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  overflow-x: hidden;
  margin-bottom: var(--space-md);
`;

const BlogItem = styled.div`
  padding: var(--space-sm);
  background: var(--bg-surface-hover);
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all var(--transition-normal);

  &:hover {
    background: var(--primary);
    color: white;
    transform: translateX(2px);
  }
`;

const BlogTitle = styled.h3`
  color: inherit;
  font-size: 0.9rem;
  font-weight: 600;
  margin: 0 0 var(--space-xs) 0;
`;

const BlogMeta = styled.div`
  display: flex;
  gap: var(--space-sm);
  margin-bottom: var(--space-xs);
`;

const BlogDate = styled.span`
  color: inherit;
  opacity: 0.8;
  font-size: 0.7rem;
`;

const BlogTags = styled.div`
  display: flex;
  gap: var(--space-xs);
  flex-wrap: wrap;
`;

const BlogTag = styled.span`
  background: rgba(255, 255, 255, 0.2);
  color: inherit;
  padding: 2px 4px;
  border-radius: var(--radius-sm);
  font-size: 0.65rem;
`;

const BlogExcerpt = styled.p`
  color: inherit;
  opacity: 0.9;
  font-size: 0.8rem;
  line-height: 1.3;
  margin: 0;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--space-sm);
`;

const PaginationButton = styled.button<{ active?: boolean }>`
  padding: var(--space-xs) var(--space-sm);
  border: 1px solid var(--bg-surface-hover);
  border-radius: var(--radius-sm);
  background: ${(props) =>
    props.active ? "var(--primary)" : "var(--bg-primary)"};
  color: ${(props) => (props.active ? "white" : "var(--text-secondary)")};
  font-size: 0.8rem;
  cursor: pointer;
  transition: all var(--transition-normal);

  &:hover {
    background: var(--primary);
    color: white;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Home = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  // Get all unique tags from blog posts
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    blogPosts.forEach((post) => {
      post.tags.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, []);

  // Filter and search blog posts
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTag = !selectedTag || post.tags.includes(selectedTag);
      return matchesSearch && matchesTag;
    });
  }, [searchTerm, selectedTag]);

  // Paginate filtered posts
  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * postsPerPage;
    return filteredPosts.slice(startIndex, startIndex + postsPerPage);
  }, [filteredPosts, currentPage, postsPerPage]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handleBlogPostClick = (slug: string) => {
    navigate(`/writing/${slug}`);
  };

  const handleTagClick = (tag: string) => {
    setSelectedTag(selectedTag === tag ? null : tag);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const projects = [
    // Personal Projects
    {
      title: "Remote Job Matching",
      year: "2025",
      tech: "React, Next.js, Prisma, MongoDB, Mistral AI",
      description:
        "A platform that matches job seekers with remote job opportunities using AI to analyze resumes and job descriptions.",
      tags: ["personal"],
      url: "https://remotejobmatching.com",
    },
    {
      title: "Dokument Chat",
      year: "2025",
      tech: "React, Next.js, Prisma, MongoDB, Qdrant, Mistral AI",
      description:
        "A platform that allows users to chat with their documents using AI.",
      tags: ["personal"],
      url: "https://dokument.chat",
    },
    {
      title: "Daily Observable",
      year: "2025",
      tech: "Rust, React, Next.js, Prisma, MongoDB",
      description:
        "A newsletter service delivering daily job opportunities based on your preferences.",
      tags: ["personal"],
      url: "https://dailyobservable.com/",
    },
    {
      title: "Devjob Flashcards",
      year: "2025",
      tech: "React, Next.js, Vercel AI SDK",
      description:
        "A flashcard app to help developers prepare for technical interviews with AI feedback.",
      tags: ["personal"],
      url: "https://devjobflashcards.com",
    },
    {
      title: "Boulder Monday",
      year: "2024",
      tech: "React, Next.js, Prisma, Supabase",
      description: "A social media platform for indoor bouldering.",
      tags: ["personal"],
      url: "https://bouldermonday.com/",
    },
    {
      title: "Web3 Gigs",
      year: "2021",
      tech: "Vue.js, Strapi",
      description: "A job board for web3/blockchain jobs.",
      tags: ["personal"],
      url: "https://remoteweb3jobs.netlify.app/",
    },
    {
      title: "Podcast Chatterbox",
      year: "2019",
      tech: "React, AWS",
      description:
        "A platform for podcasters to connect with their audience through interactive features.",
      tags: ["personal"],
      url: "https://podcastchatterbox.netlify.app/",
    },
    {
      title: "Finders/Keepers",
      year: "2018",
      tech: "React, Ghost",
      description:
        "A platform for freelancers and agencies to browse opportunities and potentially find new clients.",
      tags: ["personal"],
      url: "https://finderskeepers.netlify.app/",
    },
    {
      title: "React Vault",
      year: "2018",
      tech: "React, Bootstrap, Node.js, GraphQL, MongoDB",
      description: "A personal directory of valuable React resources.",
      tags: ["personal"],
    },
    {
      title: "Gripindoor",
      year: "2018",
      tech: "React, Material UI",
      description: "A map showing climbing gyms in Europe.",
      tags: ["personal"],
    },
    {
      title: "Race Results",
      year: "2017",
      tech: "Highcharts, R",
      description:
        "A data visualization project for analyzing running race results and statistics.",
      tags: ["personal"],
    },
    // Client Projects
    {
      title: "Artist Online Shop",
      year: "2025",
      tech: "Next.js, Prisma, Stripe",
      description:
        "An e-commerce platform for artists to sell their work online with integrated payment processing.",
      tags: ["client"],
      url: "https://villy-shop.vercel.app",
    },
    {
      title: "Brightvision",
      year: "2022",
      tech: "React, Next.js, Payload CMS",
      description:
        "A corporate website with content management system for a business consulting company.",
      tags: ["client"],
      url: "https://brightvision.com/",
    },
    {
      title: "Dave's Family NFT",
      year: "2021",
      tech: "React, Solidity",
      description: "A landing page for minting an NFT collection.",
      tags: ["client"],
    },
    {
      title: "ArtQ",
      year: "2020",
      tech: "React",
      description:
        "A web application for art enthusiasts to discover and explore artworks.",
      tags: ["client"],
      url: "https://artq-pi.vercel.app/",
    },
  ];

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/rum-n", icon: <GitHubIcon /> },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/rmanev/",
      icon: <LinkedInIcon />,
    },
    { name: "X (Twitter)", url: "https://x.com/room_n", icon: <XIcon /> },
    { name: "Medium", url: "https://room-n.medium.com/", icon: <MediumIcon /> },
  ];

  return (
    <>
      <Layout>
        <AnimationContainer>
          <AsciiLineAnimation />
          <AsciiLineAnimation />
          <AsciiLineAnimation />
          <AsciiLineAnimation />
          <AsciiLineAnimation />
          <AsciiLineAnimation />
          <AsciiLineAnimation />
        </AnimationContainer>
        <HomeContainer>
          {/* Rumen Section */}
          <SectionBox>
            <SectionTitle>Rumen</SectionTitle>
            <IntroText>
              I used to do sales, business development and project management.
              It taught me valuable skills, but it wasn't for me.
            </IntroText>
            <IntroText>
              In 2020 I started working as a junior frontend developer. It felt
              like I finally found the missing piece. Since then I've worked
              both full-time and freelance, both remote and on-site.
            </IntroText>
            <IntroText>
              Currently I'm working full stack with React, React Native and
              Node.js. I'm aiming to get better at it every day and expand into
              different functions and technologies.
            </IntroText>
            <TechList>
              <TechTag>React</TechTag>
              <TechTag>React Native</TechTag>
              <TechTag>Angular</TechTag>
              <TechTag>Vue</TechTag>
              <TechTag>Node.js</TechTag>
              <TechTag>Nest.js</TechTag>
              <TechTag>TypeScript</TechTag>
              <TechTag>Next.js</TechTag>
              <TechTag>MongoDB</TechTag>
              <TechTag>Prisma</TechTag>
              <TechTag>Rust</TechTag>
            </TechList>
          </SectionBox>

          {/* Projects Section */}
          <AnimationContainer2>
            <CircleAnimation />
            <CircleAnimation />
            <CircleAnimation />
            <CircleAnimation />
            <CircleAnimation />
            <CircleAnimation />
            <CircleAnimation />
            <CircleAnimation />
            <CircleAnimation />
            <CircleAnimation />
            <CircleAnimation />
            <CircleAnimation />
            <CircleAnimation />
            <CircleAnimation />
            <CircleAnimation />
            <CircleAnimation />
            <CircleAnimation />
            <CircleAnimation />
          </AnimationContainer2>
          <SectionBox>
            <SectionTitle>Projects</SectionTitle>
            <ProjectList>
              {projects
                .sort((a, b) => Number(b.year) - Number(a.year))
                .map((project, index) => (
                  <ProjectItem key={index}>
                    <ProjectTitle>
                      {project.url ? (
                        <ProjectTitleLink
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {project.title}
                        </ProjectTitleLink>
                      ) : (
                        project.title
                      )}
                      <ProjectMeta>
                        <ProjectTags>
                          {project.tags.map((tag) => (
                            <ProjectTag
                              key={tag}
                              type={tag as "personal" | "client"}
                            >
                              {tag}
                            </ProjectTag>
                          ))}
                        </ProjectTags>{" "}
                        /<ProjectYear>{project.year}</ProjectYear> /
                        <ProjectTech>{project.tech}</ProjectTech>
                      </ProjectMeta>
                    </ProjectTitle>

                    <ProjectDescription>
                      {project.description}
                    </ProjectDescription>
                  </ProjectItem>
                ))}
            </ProjectList>
          </SectionBox>

          {/* Writing Section */}
          <SectionBox>
            <SectionTitle>Writing</SectionTitle>

            <SearchContainer>
              <SearchInput
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </SearchContainer>

            <TagsContainer>
              <TagsList>
                {allTags.map((tag) => (
                  <TagButton
                    key={tag}
                    active={selectedTag === tag}
                    onClick={() => handleTagClick(tag)}
                  >
                    {tag}
                  </TagButton>
                ))}
              </TagsList>
            </TagsContainer>

            <BlogList>
              {paginatedPosts.map((post) => (
                <BlogItem
                  key={post.id}
                  onClick={() => handleBlogPostClick(post.slug)}
                >
                  <BlogTitle>{post.title}</BlogTitle>
                  <BlogMeta>
                    <BlogDate>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </BlogDate>
                    <BlogTags>
                      {post.tags.map((tag) => (
                        <BlogTag key={tag}>{tag}</BlogTag>
                      ))}
                    </BlogTags>
                  </BlogMeta>
                  <BlogExcerpt>{post.excerpt}</BlogExcerpt>
                </BlogItem>
              ))}
            </BlogList>

            {totalPages > 1 && (
              <PaginationContainer>
                <PaginationButton
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  ←
                </PaginationButton>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <PaginationButton
                      key={page}
                      active={currentPage === page}
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </PaginationButton>
                  )
                )}

                <PaginationButton
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  →
                </PaginationButton>
              </PaginationContainer>
            )}
          </SectionBox>

          {/* Social Links Section */}
          <SectionBox>
            <SectionTitle>Social Links</SectionTitle>
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
                </SocialLink>
              ))}
            </SocialLinks>
          </SectionBox>
        </HomeContainer>
      </Layout>
    </>
  );
};
