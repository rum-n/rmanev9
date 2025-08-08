import styled from "styled-components";
import { Layout } from "../components/Layout";
import { NavMenu } from "../components/NavMenu";
import { blogPosts } from "../data/blogPosts";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const WritingContainer = styled.div`
  width: 100%;
  max-width: 800px;
`;

const WritingSection = styled.section`
  margin-top: var(--space-2xl);
`;

const SearchContainer = styled.div`
  margin-bottom: var(--space-xl);
`;

const SearchInput = styled.input`
  width: 100%;
  padding: var(--space-md) var(--space-lg);
  border: 1px solid var(--bg-surface-hover);
  border-radius: var(--radius-lg);
  background: var(--bg-surface);
  color: var(--text-primary);
  font-size: 1rem;
  transition: all var(--transition-normal);
  backdrop-filter: blur(10px);

  &::placeholder {
    color: var(--text-tertiary);
  }

  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
    background: var(--bg-surface-hover);
  }
`;

const TagsContainer = styled.div`
  margin: var(--space-xl) 0;
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
`;

const Tag = styled.button<{ isActive: boolean }>`
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-lg);
  border: 1px solid
    ${(props) =>
      props.isActive ? "var(--primary)" : "var(--bg-surface-hover)"};
  background: ${(props) =>
    props.isActive ? "var(--primary)" : "var(--bg-surface)"};
  color: ${(props) => (props.isActive ? "white" : "var(--text-secondary)")};
  cursor: pointer;
  transition: all var(--transition-normal);
  font-size: 0.875rem;
  font-weight: 500;
  backdrop-filter: blur(10px);

  &:hover {
    background: ${(props) =>
      props.isActive ? "var(--primary-dark)" : "var(--bg-surface-hover)"};
    transform: translateY(-1px);
    box-shadow: var(--shadow-sm);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
  }
`;

const BlogList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
`;

const BlogPostCard = styled.div`
  background: var(--bg-surface);
  border: 1px solid var(--bg-surface-hover);
  border-radius: var(--radius-xl);
  padding: var(--space-xl);
  cursor: pointer;
  transition: all var(--transition-normal);
  backdrop-filter: blur(10px);

  &:hover {
    background: var(--bg-surface-hover);
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }
`;

const BlogTitle = styled.h2`
  font-size: 1.5rem;
  margin: 0 0 var(--space-sm) 0;
  color: var(--text-primary);
  font-weight: 600;
  line-height: 1.3;
`;

const BlogMeta = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-md);
  margin-bottom: var(--space-md);
`;

const BlogDate = styled.span`
  font-size: 0.875rem;
  color: var(--text-tertiary);
  font-weight: 500;
`;

const BlogTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
`;

const BlogTag = styled.span`
  background: var(--bg-surface-hover);
  color: var(--text-secondary);
  padding: var(--space-xs) var(--space-sm);
  border-radius: var(--radius-sm);
  font-size: 0.75rem;
  font-weight: 500;
`;

const BlogExcerpt = styled.p`
  margin: 0;
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 0.95rem;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--space-md);
  margin-top: var(--space-2xl);
`;

const PaginationButton = styled.button<{ disabled: boolean }>`
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-lg);
  background: ${(props) =>
    props.disabled ? "var(--bg-surface)" : "var(--primary)"};
  color: ${(props) => (props.disabled ? "var(--text-tertiary)" : "white")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  border: none;
  transition: all var(--transition-normal);
  font-weight: 500;

  &:hover:not(:disabled) {
    background: ${(props) =>
      props.disabled ? "var(--bg-surface)" : "var(--primary-dark)"};
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }
`;

const PageInfo = styled.span`
  color: var(--text-tertiary);
  font-size: 0.875rem;
  font-weight: 500;
`;

const NoResults = styled.div`
  text-align: center;
  padding: var(--space-2xl);
  color: var(--text-tertiary);
  font-size: 1.1rem;
`;

const POSTS_PER_PAGE = 10;

export const Writing = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedTags, setSelectedTags] = useState<string[]>(
    location.state?.selectedTags || []
  );
  const [currentPage, setCurrentPage] = useState(
    location.state?.currentPage || 1
  );
  const [searchTerm, setSearchTerm] = useState("");

  const allTags = Array.from(
    new Set(blogPosts.flatMap((post) => post.tags))
  ).sort();

  const filteredPosts = blogPosts.filter((post) => {
    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.some((tag) => post.tags.includes(tag));

    const searchContent = (post.title + post.excerpt).toLowerCase();
    const matchesSearch =
      searchTerm === "" || searchContent.includes(searchTerm.toLowerCase());

    return matchesTags && matchesSearch;
  });

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
    setCurrentPage(1);
  };

  const handlePostClick = (slug: string) => {
    navigate(`/writing/${slug}`, {
      state: {
        currentPage,
        selectedTags,
      },
    });
  };

  return (
    <Layout>
      <WritingContainer>
        <NavMenu menuItem="Writing" />

        <WritingSection>
          <SearchContainer>
            <SearchInput
              type="text"
              placeholder="Search for a topic..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
          </SearchContainer>

          <TagsContainer>
            {allTags.map((tag) => (
              <Tag
                key={tag}
                isActive={selectedTags.includes(tag)}
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </Tag>
            ))}
          </TagsContainer>

          <BlogList>
            {paginatedPosts.length > 0 ? (
              paginatedPosts.map((post) => (
                <BlogPostCard
                  key={post.id}
                  onClick={() => handlePostClick(post.slug)}
                >
                  <BlogMeta>
                    <BlogDate>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </BlogDate>
                    <BlogTags>
                      {post.tags.slice(0, 3).map((tag) => (
                        <BlogTag key={tag}>{tag}</BlogTag>
                      ))}
                      {post.tags.length > 3 && (
                        <BlogTag>+{post.tags.length - 3}</BlogTag>
                      )}
                    </BlogTags>
                  </BlogMeta>
                  <BlogTitle>{post.title}</BlogTitle>
                  <BlogExcerpt>{post.excerpt}</BlogExcerpt>
                </BlogPostCard>
              ))
            ) : (
              <NoResults>No posts found matching your criteria.</NoResults>
            )}
          </BlogList>

          {totalPages > 1 && (
            <PaginationContainer>
              <PaginationButton
                onClick={() =>
                  setCurrentPage((prev: number) => Math.max(1, prev - 1))
                }
                disabled={currentPage === 1}
              >
                Previous
              </PaginationButton>
              <PageInfo>
                Page {currentPage} of {totalPages}
              </PageInfo>
              <PaginationButton
                onClick={() =>
                  setCurrentPage((prev: number) =>
                    Math.min(totalPages, prev + 1)
                  )
                }
                disabled={currentPage === totalPages}
              >
                Next
              </PaginationButton>
            </PaginationContainer>
          )}
        </WritingSection>
      </WritingContainer>
    </Layout>
  );
};
