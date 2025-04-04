import { useParams, useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Layout } from "../components/Layout";
import { blogPosts } from "../data/blogPosts";

const BlogContent = styled.div`
  margin-top: 2rem;
  line-height: 1.6;
  font-size: 1.1rem;

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

  ul,
  ol {
    margin-bottom: 1rem;
    padding-left: 1.5rem;
  }

  pre {
    background-color: #2d2d2d;
    padding: 1rem;
    border-radius: 4px;
    overflow-x: auto;
    margin: 1rem 0;
    font-size: 0.8rem;
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

const BackButton = styled.button`
  background: none;
  border: none;
  color: #8a5858;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: #6d4646;
  }
`;

const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid #eeeeee81;
  gap: 2rem;
`;

const NavigationButton = styled.button`
  background: none;
  border: none;
  color: #8a5858;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem 0;
  display: block;
  transition: color 0.2s ease-in-out;
  max-width: 250px;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    color: #6d4646;
  }

  &:disabled {
    color: #ccc;
    cursor: not-allowed;
  }
`;

export const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);

  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < blogPosts.length - 1;

  const previousPost = hasPrevious ? blogPosts[currentIndex - 1] : null;
  const nextPost = hasNext ? blogPosts[currentIndex + 1] : null;

  const handleBack = () => {
    navigate("/writing", {
      state: location.state || {},
    });
  };

  const handleNavigate = (postSlug: string) => {
    navigate(`/writing/${postSlug}`, {
      state: location.state || {},
    });
  };

  return (
    <Layout>
      <TitleBox>
        <BackButton onClick={handleBack}>← Back</BackButton>
        <h1>{post.title}</h1>
        <BlogDate>{new Date(post.date).toLocaleDateString()}</BlogDate>
        <BlogContent dangerouslySetInnerHTML={{ __html: post.content }} />

        <NavigationContainer>
          {previousPost ? (
            <NavigationButton onClick={() => handleNavigate(previousPost.slug)}>
              ← Previous: {previousPost.title}
            </NavigationButton>
          ) : (
            <div></div>
          )}

          {nextPost && (
            <NavigationButton onClick={() => handleNavigate(nextPost.slug)}>
              Next: {nextPost.title} →
            </NavigationButton>
          )}
        </NavigationContainer>
      </TitleBox>
    </Layout>
  );
};
