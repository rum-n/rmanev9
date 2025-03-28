import styled from "styled-components";
import { Layout } from "../components/Layout";
import { NavMenu } from "../components/NavMenu";
import { blogPosts } from "../data/blogPosts";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const TitleBox = styled.div`
  font-family: "Lato", sans-serif;
  width: 600px;
  max-width: 100%;
  padding: 0 1rem;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
    margin-top: 1rem;
  }
`;

const BlogList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const BlogPost = styled.div`
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    color: #777;
  }
`;

const BlogTitle = styled.h2`
  font-size: 2rem;
  margin: 0;
`;

const BlogDate = styled.span`
  font-size: 0.9rem;
  color: #777;
`;

const BlogExcerpt = styled.p`
  margin-top: 0.5rem;
`;

const TagsContainer = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.button<{ isActive: boolean }>`
  padding: 0.5rem 1rem;
  border-radius: 20px;
  border: 1px solid #ddd;
  background-color: ${(props) => (props.isActive ? "#8a5858" : "transparent")};
  color: ${(props) => (props.isActive ? "white" : "inherit")};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-size: 0.8rem;

  &:hover {
    outline: none;
  }

  &:focus {
    outline: none;
  }

  &:active {
    outline: none;
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const PaginationButton = styled.button<{ disabled: boolean }>`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background-color: ${(props) => (props.disabled ? "#444" : "#8a5858")};
  color: white;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  border: none;
  transition: all 0.2s ease-in-out;

  &:hover:not(:disabled) {
    background-color: #6d4646;
  }
`;

const PageInfo = styled.span`
  color: #777;
  font-size: 0.9rem;
`;

const POSTS_PER_PAGE = 10;

const SearchInput = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-top: 1rem;
  transition: all 0.2s ease-in-out;
  background-color: transparent;

  &:focus {
    outline: none;
    border-color: #8a5858;
    box-shadow: 0 0 0 2px rgba(138, 88, 88, 0.1);
  }
`;

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
      <TitleBox>
        <NavMenu menuItem="Writing" />

        <SearchInput
          type="text"
          placeholder="Search for a topic..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
        />
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
              <BlogPost
                key={post.id}
                onClick={() => handlePostClick(post.slug)}
              >
                <BlogTitle>{post.title}</BlogTitle>
                <BlogDate>{new Date(post.date).toLocaleDateString()}</BlogDate>
                <BlogExcerpt>{post.excerpt}</BlogExcerpt>
              </BlogPost>
            ))
          ) : (
            <BlogExcerpt>No posts found matching your criteria.</BlogExcerpt>
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
                setCurrentPage((prev: number) => Math.min(totalPages, prev + 1))
              }
              disabled={currentPage === totalPages}
            >
              Next
            </PaginationButton>
          </PaginationContainer>
        )}
      </TitleBox>
    </Layout>
  );
};
