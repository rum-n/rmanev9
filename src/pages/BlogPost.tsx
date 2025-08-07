import { useParams, useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Layout } from "../components/Layout";
import { blogPosts } from "../data/blogPosts";

const BlogPostContainer = styled.div`
  width: 100%;
  max-width: 800px;
`;

const BlogPostSection = styled.section`
  margin-top: var(--space-2xl);
`;

const BackButton = styled.button`
  background: var(--bg-surface);
  border: 1px solid var(--bg-surface-hover);
  color: var(--text-secondary);
  cursor: pointer;
  font-size: 1rem;
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-lg);
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  transition: all var(--transition-normal);
  backdrop-filter: blur(10px);
  margin-bottom: var(--space-xl);

  &:hover {
    background: var(--bg-surface-hover);
    color: var(--text-primary);
    transform: translateX(-2px);
    box-shadow: var(--shadow-md);
  }
`;

const BlogHeader = styled.div`
  margin-bottom: var(--space-2xl);
`;

const BlogTitle = styled.h1`
  color: var(--text-primary);
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 700;
  line-height: 1.2;
  margin: 0 0 var(--space-md) 0;
  letter-spacing: -0.02em;
`;

const BlogMeta = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-md);
  margin-bottom: var(--space-lg);
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

const BlogContent = styled.div`
  line-height: 1.7;
  font-size: 1.1rem;
  color: var(--text-secondary);
  
  h1, h2, h3, h4, h5, h6 {
    color: var(--text-primary);
    font-weight: 600;
    margin-top: var(--space-2xl);
    margin-bottom: var(--space-md);
    line-height: 1.3;
  }
  
  h1 {
    font-size: 1.75rem;
  }
  
  h2 {
    font-size: 1.5rem;
  }
  
  h3 {
    font-size: 1.25rem;
  }
  
  p {
    margin-bottom: var(--space-lg);
  }
  
  ul, ol {
    margin-bottom: var(--space-lg);
    padding-left: var(--space-xl);
  }
  
  li {
    margin-bottom: var(--space-xs);
  }
  
  pre {
    background: var(--bg-tertiary);
    padding: var(--space-lg);
    border-radius: var(--radius-lg);
    overflow-x: auto;
    margin: var(--space-lg) 0;
    font-size: 0.9rem;
    border: 1px solid var(--bg-surface-hover);
    backdrop-filter: blur(10px);
  }
  
  code {
    font-family: var(--font-mono);
    background: var(--bg-surface);
    padding: var(--space-xs) var(--space-sm);
    border-radius: var(--radius-sm);
    font-size: 0.9em;
    color: var(--primary);
  }
  
  pre code {
    background: none;
    padding: 0;
    color: var(--text-primary);
  }
  
  blockquote {
    border-left: 4px solid var(--primary);
    padding-left: var(--space-lg);
    margin: var(--space-lg) 0;
    font-style: italic;
    color: var(--text-secondary);
  }
  
  a {
    color: var(--primary);
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: all var(--transition-fast);
    
    &:hover {
      border-bottom-color: var(--primary);
    }
  }
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: var(--radius-lg);
    margin: var(--space-lg) 0;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin: var(--space-lg) 0;
    
    th, td {
      padding: var(--space-sm) var(--space-md);
      text-align: left;
      border-bottom: 1px solid var(--bg-surface-hover);
    }
    
    th {
      background: var(--bg-surface);
      font-weight: 600;
      color: var(--text-primary);
    }
  }
`;

const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: var(--space-3xl);
  padding-top: var(--space-xl);
  border-top: 1px solid var(--bg-surface-hover);
  gap: var(--space-lg);
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: var(--space-md);
  }
`;

const NavigationButton = styled.button<{ disabled: boolean }>`
  background: var(--bg-surface);
  border: 1px solid var(--bg-surface-hover);
  color: ${props => props.disabled ? 'var(--text-tertiary)' : 'var(--text-secondary)'};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  font-size: 0.9rem;
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  transition: all var(--transition-normal);
  backdrop-filter: blur(10px);
  max-width: 300px;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  &:hover:not(:disabled) {
    background: var(--bg-surface-hover);
    color: var(--text-primary);
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }
  
  &:disabled {
    opacity: 0.5;
  }
`;

const EmptyDiv = styled.div`
  flex: 1;
`;

export const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return (
      <Layout>
        <BlogPostContainer>
          <BlogPostSection>
            <BackButton onClick={() => navigate("/writing")}>
              ← Back to Writing
            </BackButton>
            <h1>Post not found</h1>
          </BlogPostSection>
        </BlogPostContainer>
      </Layout>
    );
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
      <BlogPostContainer>
        <BlogPostSection>
          <BackButton onClick={handleBack}>
            ← Back to Writing
          </BackButton>
          
          <BlogHeader>
            <BlogTitle>{post.title}</BlogTitle>
            <BlogMeta>
              <BlogDate>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </BlogDate>
              <BlogTags>
                {post.tags.map((tag) => (
                  <BlogTag key={tag}>{tag}</BlogTag>
                ))}
              </BlogTags>
            </BlogMeta>
          </BlogHeader>
          
          <BlogContent dangerouslySetInnerHTML={{ __html: post.content }} />

          <NavigationContainer>
            {previousPost ? (
              <NavigationButton onClick={() => handleNavigate(previousPost.slug)}>
                ← {previousPost.title}
              </NavigationButton>
            ) : (
              <EmptyDiv />
            )}

            {nextPost && (
              <NavigationButton onClick={() => handleNavigate(nextPost.slug)}>
                {nextPost.title} →
              </NavigationButton>
            )}
          </NavigationContainer>
        </BlogPostSection>
      </BlogPostContainer>
    </Layout>
  );
};
