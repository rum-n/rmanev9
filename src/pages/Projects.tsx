import styled from "styled-components";
import { Layout } from "../components/Layout";
import { NavMenu } from "../components/NavMenu";
import { projects } from "../data/projects";
import { useState, useMemo } from "react";

const ProjectsContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  overflow-x: hidden;
`;

const ProjectsSection = styled.section``;

const Header = styled.div`
  margin-bottom: var(--space-lg);
`;

const Title = styled.h1`
  color: var(--text-primary);
  font-size: clamp(1.5rem, 4vw, 2rem);
  margin: 0 0 var(--space-md) 0;
`;

const Controls = styled.div`
  display: flex;
  gap: var(--space-md);
  margin: var(--space-lg) 0;
  align-items: center;
  flex-wrap: wrap;
`;

// const SearchInput = styled.input`
//   padding: var(--space-sm) var(--space-md);
//   border-radius: var(--radius-md);
//   border: 1px solid var(--bg-surface-hover);
//   background: var(--bg-primary);
//   color: var(--text-primary);
//   min-width: 240px;
// `;

const TagFilter = styled.div`
  display: flex;
  gap: var(--space-sm);
`;

const TagButton = styled.button<{ active?: boolean }>`
  padding: 6px 10px;
  border-radius: var(--radius-md);
  border: 1px solid
    ${(p) => (p.active ? "var(--primary)" : "var(--bg-surface-hover)")};
  background: ${(p) => (p.active ? "var(--primary)" : "var(--bg-surface)")};
  color: ${(p) => (p.active ? "white" : "var(--text-secondary)")};
  cursor: pointer;
`;

const Grid = styled.div`
  display: grid;
  gap: var(--space-lg);
  grid-template-columns: 1fr;

  @media (min-width: 769px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Card = styled.div`
  background: var(--bg-surface);
  border: 1px solid var(--bg-surface-hover);
  border-radius: var(--radius-md);
  padding: var(--space-lg);
  transition: all var(--transition-normal);

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-md);
  }
`;

const CardTitle = styled.h3`
  margin: 0 0 var(--space-xs) 0;
  color: var(--text-primary);
  font-size: 1.1rem;
`;

const CardMeta = styled.div`
  display: flex;
  gap: var(--space-sm);
  margin-bottom: var(--space-xs);
  align-items: center;
  flex-wrap: wrap;
`;

const CardYear = styled.span`
  color: var(--text-tertiary);
  font-weight: 600;
`;

const CardTech = styled.span`
  color: var(--text-secondary);
  font-size: 0.9rem;
`;

const CardDesc = styled.p`
  color: var(--text-secondary);
  margin: var(--space-md) 0 0 0;
`;

const ExternalLink = styled.a`
  display: inline-block;
  margin-top: var(--space-md);
  color: var(--primary);
  text-decoration: none;
  font-weight: 600;
`;

export const Projects = () => {
  // const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "personal" | "client">("all");

  const filtered = useMemo(() => {
    return (
      projects
        .filter((p) => filter === "all" || p.tags.includes(filter))
        // .filter(
        //   (p) =>
        //     p.title.toLowerCase().includes(search.toLowerCase()) ||
        //     p.description.toLowerCase().includes(search.toLowerCase()) ||
        //     p.tech.toLowerCase().includes(search.toLowerCase())
        // )
        .sort((a, b) => Number(b.year) - Number(a.year))
    );
  }, [filter]);

  return (
    <Layout>
      <ProjectsContainer>
        <NavMenu menuItem="Projects" />

        <ProjectsSection>
          <Header>
            <Title>Projects</Title>
          </Header>

          <Controls>
            {/* <SearchInput
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            /> */}

            <TagFilter>
              <TagButton
                active={filter === "all"}
                onClick={() => setFilter("all")}
              >
                All
              </TagButton>
              <TagButton
                active={filter === "personal"}
                onClick={() => setFilter("personal")}
              >
                Personal
              </TagButton>
              <TagButton
                active={filter === "client"}
                onClick={() => setFilter("client")}
              >
                Client
              </TagButton>
            </TagFilter>
          </Controls>

          <Grid>
            {filtered.map((p, i) => (
              <Card key={i}>
                <CardTitle>{p.title}</CardTitle>
                <CardMeta>
                  <CardYear>{p.year}</CardYear>
                  <CardTech>{p.tech}</CardTech>
                </CardMeta>

                <CardDesc>{p.description}</CardDesc>

                {p.url && (
                  <ExternalLink
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit
                  </ExternalLink>
                )}
              </Card>
            ))}
          </Grid>
        </ProjectsSection>
      </ProjectsContainer>
    </Layout>
  );
};
