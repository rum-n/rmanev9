import styled from "styled-components";
import { Layout } from "../components/Layout";
import { NavMenu } from "../components/NavMenu";
import { blogPosts } from "../data/blogPosts";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const TitleBox = styled.div`
  font-family: "Lato", sans-serif;
  width: 600px;  
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const BlogList = styled.div`
  margin-top: 2rem;
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
  margin: 1rem 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.button<{ isActive: boolean }>`
  padding: 0.5rem 1rem;
  border-radius: 20px;
  border: 1px solid #ddd;
  background-color: ${props => props.isActive ? '#8a5858' : 'transparent'};
  color: ${props => props.isActive ? 'white' : 'inherit'};
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

export const Writing = () => {
  const navigate = useNavigate();
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = Array.from(
    new Set(
      blogPosts.flatMap(post => post.tags)
    )
  ).sort();

  const filteredPosts = blogPosts.filter(post =>
    selectedTags.length === 0 ||
    selectedTags.some(tag => post.tags.includes(tag))
  );

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <Layout>
      <TitleBox>
        <NavMenu menuItem="Writing" />
        <TagsContainer>
          {allTags.map(tag => (
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
          {filteredPosts.map((post) => (
            <BlogPost
              key={post.id}
              onClick={() => navigate(`/writing/${post.slug}`)}
            >
              <BlogTitle>{post.title}</BlogTitle>
              <BlogDate>
                {new Date(post.date).toLocaleDateString()}
              </BlogDate>
              <BlogExcerpt>{post.excerpt}</BlogExcerpt>
            </BlogPost>
          ))}
        </BlogList>
      </TitleBox>
    </Layout>
  );
};
