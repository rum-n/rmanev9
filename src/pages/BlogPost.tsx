import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Layout } from "../components/Layout";
import { NavMenu } from "../components/NavMenu";
import { blogPosts } from "../data/blogPosts";

const BlogContent = styled.div`
  margin-top: 2rem;
  line-height: 1.6;

  h2 {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  h3 {
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
  }

  p {
    margin-bottom: 1rem;
  }

  ul, ol {
    margin-bottom: 1rem;
    padding-left: 1.5rem;
  }

  pre {
    background-color: #2d2d2d;
    padding: 1rem;
    border-radius: 4px;
    overflow-x: auto;
    margin: 1rem 0;
  }

  code {
    font-family: monospace;
  }
`;

const TitleBox = styled.div`
  font-family: "Lato", sans-serif;
  width: 600px;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const BlogDate = styled.span`
  font-size: 0.9rem;
  color: #777;
`;

export const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <Layout>
      <TitleBox>
        <NavMenu menuItem="Writing" />
        <h1>{post.title}</h1>
        <BlogDate>{new Date(post.date).toLocaleDateString()}</BlogDate>
        <BlogContent dangerouslySetInnerHTML={{ __html: post.content }} />
      </TitleBox>
    </Layout>
  );
};