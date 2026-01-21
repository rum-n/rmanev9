import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Layout } from "../components/Layout";
import { blogPosts } from "../data/blogPosts";

export const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return (
      <Layout>
        <div className="w-full flex justify-center">
          <div className="w-full max-w-3xl overflow-x-hidden px-md md:px-0">
            <section className="mt-6xl">
              <button
                onClick={() => navigate("/writing")}
                className="bg-surface border border-surface-hover text-secondary cursor-pointer text-base px-md py-sm rounded-lg inline-flex items-center gap-xs transition-all duration-normal backdrop-blur-sm mb-xl hover:bg-surface-hover hover:text-primary hover:-translate-x-0.5 hover:shadow-md"
              >
                ← Back to Writing
              </button>
              <h1>Post not found</h1>
            </section>
          </div>
        </div>
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
      <div className="w-full flex justify-center">
        <div className="w-full max-w-3xl overflow-x-hidden px-md md:px-0">
          <section className="mt-6xl">
            <button
              onClick={handleBack}
              className="bg-surface border border-surface-hover text-secondary cursor-pointer text-base px-md py-sm rounded-lg inline-flex items-center gap-xs transition-all duration-normal backdrop-blur-sm mb-xl hover:bg-surface-hover hover:text-primary hover:-translate-x-0.5 hover:shadow-md"
            >
              ← Back to Writing
            </button>

            <div className="mb-6xl">
              <h1 className="text-primary text-2xl md:text-3xl font-bold leading-tight m-0 mb-md tracking-tight break-words max-w-full">
                {post.title}
              </h1>
              <div className="flex items-center gap-md mb-lg">
                <span className="text-sm text-tertiary font-medium">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <div className="flex flex-wrap gap-xs">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-surface-hover text-secondary px-sm py-xs rounded text-0.75rem font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="leading-relaxed text-base md:text-lg text-secondary prose prose-invert max-w-none">
              <style>{`
              .prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6 {
                color: var(--text-primary);
                font-weight: 600;
                margin-top: 3rem;
                margin-bottom: 1rem;
                line-height: 1.3;
              }
              .prose h1 { font-size: 1.75rem; }
              .prose h2 { font-size: 1.5rem; }
              .prose h3 { font-size: 1.25rem; }
              .prose p { margin-bottom: 1.5rem; }
              .prose ul, .prose ol { margin-bottom: 1.5rem; padding-left: 2rem; }
              .prose li { margin-bottom: 0.25rem; }
              .prose pre {
                background: #0f1724;
                padding: 1.5rem;
                border-radius: 0.5rem;
                overflow-x: auto;
                margin: 1.5rem 0;
                font-size: 0.9rem;
                border: 1px solid rgba(255, 255, 255, 0.03);
                backdrop-filter: blur(10px);
              }
              .prose code {
                font-family: monospace;
                background: var(--bg-surface);
                padding: 0.25rem 0.5rem;
                border-radius: 0.25rem;
                font-size: 0.9em;
                color: var(--primary);
              }
              .prose pre code {
                background: none;
                padding: 0;
                color: var(--text-primary);
              }
              .prose blockquote {
                border-left: 4px solid var(--primary);
                padding-left: 1.5rem;
                margin: 1.5rem 0;
                font-style: italic;
                color: var(--text-secondary);
              }
              .prose a {
                color: var(--primary);
                text-decoration: none;
                border-bottom: 1px solid transparent;
                transition: all 150ms ease;
              }
              .prose a:hover {
                border-bottom-color: var(--primary);
              }
              .prose img {
                max-width: 100%;
                height: auto;
                border-radius: 0.5rem;
                margin: 1.5rem 0;
              }
              .prose table {
                width: 100%;
                border-collapse: collapse;
                margin: 1.5rem 0;
              }
              .prose th, .prose td {
                padding: 0.5rem 1rem;
                text-align: left;
                border-bottom: 1px solid rgba(255, 255, 255, 0.03);
              }
              .prose th {
                background: var(--bg-surface);
                font-weight: 600;
                color: var(--text-primary);
              }
            `}</style>
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            <div className="flex justify-between items-center pt-xl border-t border-surface-hover gap-lg flex-wrap mb-xl">
              {previousPost ? (
                <button
                  onClick={() => handleNavigate(previousPost.slug)}
                  className="bg-surface border border-surface-hover text-secondary cursor-pointer text-sm px-md py-sm rounded-lg inline-flex items-center gap-xs transition-all duration-normal backdrop-blur-sm flex-1 min-w-0 text-left hover:bg-surface-hover hover:text-primary hover:-translate-y-0.5 hover:shadow-md"
                >
                  ← <span className="truncate">{previousPost.title}</span>
                </button>
              ) : (
                <div className="flex-1" />
              )}

              {nextPost && (
                <button
                  onClick={() => handleNavigate(nextPost.slug)}
                  className="bg-surface border border-surface-hover text-secondary cursor-pointer text-sm px-md py-sm rounded-lg inline-flex items-center gap-xs transition-all duration-normal backdrop-blur-sm flex-1 min-w-0 text-left hover:bg-surface-hover hover:text-primary hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="truncate">{nextPost.title}</span> →
                </button>
              )}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};
