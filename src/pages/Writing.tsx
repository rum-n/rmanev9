import styled from "styled-components";
import { Layout } from "../components/Layout";
import { NavMenu } from "../components/NavMenu";
import { blogPosts } from "../data/blogPosts";
import { useNavigate } from "react-router-dom";

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

export const Writing = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <TitleBox>
        <NavMenu menuItem="Writing" />
        <BlogList>
          {blogPosts.map((post) => (
            <BlogPost key={post.id} onClick={() => navigate(`/writing/${post.slug}`)}>
              <BlogTitle>{post.title}</BlogTitle>
              <BlogDate>{new Date(post.date).toLocaleDateString()}</BlogDate>
              <BlogExcerpt>{post.excerpt}</BlogExcerpt>
            </BlogPost>
          ))}
        </BlogList>
      </TitleBox>
    </Layout>
  );
};
