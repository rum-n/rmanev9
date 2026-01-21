import { Layout } from "../components/Layout";
import { blogPosts } from "../data/blogPosts";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const POSTS_PER_PAGE = 10;

export const Writing = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedTags, setSelectedTags] = useState<string[]>(
    location.state?.selectedTags || [],
  );
  const [currentPage, setCurrentPage] = useState(
    location.state?.currentPage || 1,
  );
  const [searchTerm, setSearchTerm] = useState("");

  const allTags = Array.from(
    new Set(blogPosts.flatMap((post) => post.tags)),
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
    currentPage * POSTS_PER_PAGE,
  );

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
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
      <div className="w-full max-w-2xl overflow-x-hidden md:max-w-full sm:max-w-full">
        <a
          href="/"
          className="inline-flex items-center text-primary hover:text-blue-600 transition-colors duration-normal mb-2xl text-sm font-medium"
        >
          ← Back to home
        </a>

        <section className="mt-6xl">
          <div className="mb-xl">
            <input
              type="text"
              placeholder="Search for a topic..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full max-w-full px-lg py-md border border-surface-hover rounded-md bg-surface text-primary text-base transition-all duration-normal placeholder:text-tertiary focus:outline-none focus:border-blue-600 focus:bg-surface-hover box-border md:px-md md:py-sm sm:px-sm"
            />
          </div>

          <div className="my-xl flex flex-wrap gap-sm w-full max-w-full overflow-x-hidden md:w-full md:max-w-full sm:w-full sm:max-w-full">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-md py-sm rounded-md text-sm font-medium transition-all duration-normal ${
                  selectedTags.includes(tag)
                    ? "border border-blue-600 bg-blue-600 text-white"
                    : "border border-surface-hover bg-surface text-secondary hover:bg-surface-hover hover:-translate-y-0.5"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="grid gap-lg grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {paginatedPosts.length > 0 ? (
              paginatedPosts.map((post) => (
                <div
                  key={post.id}
                  onClick={() => handlePostClick(post.slug)}
                  className="bg-surface border border-surface-hover rounded-md px-lg py-lg cursor-pointer transition-all duration-normal hover:bg-surface-hover hover:-translate-y-0.5 h-full flex flex-col"
                >
                  <div className="flex items-center gap-md mb-md flex-wrap">
                    <span className="text-xs text-tertiary font-medium">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <div className="flex flex-wrap gap-xs">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="bg-surface-hover text-secondary px-xs py-xs rounded text-0.75rem font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                      {post.tags.length > 2 && (
                        <span className="bg-surface-hover text-secondary px-xs py-xs rounded text-0.75rem font-medium">
                          +{post.tags.length - 2}
                        </span>
                      )}
                    </div>
                  </div>
                  <h2 className="text-lg m-0 mb-sm text-primary font-semibold leading-normal flex-grow">
                    {post.title}
                  </h2>
                  <p className="m-0 text-secondary leading-normal text-sm">
                    {post.excerpt}
                  </p>
                </div>
              ))
            ) : (
              <div className="text-center py-6xl text-tertiary text-lg col-span-full">
                No posts found matching your criteria.
              </div>
            )}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-md mt-6xl">
              <button
                onClick={() =>
                  setCurrentPage((prev: number) => Math.max(1, prev - 1))
                }
                disabled={currentPage === 1}
                className={`px-md py-sm rounded-md font-medium transition-all duration-normal ${
                  currentPage === 1
                    ? "bg-surface text-tertiary opacity-50 cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-700 hover:-translate-y-0.5"
                }`}
              >
                Previous
              </button>
              <span className="text-tertiary text-sm font-medium">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() =>
                  setCurrentPage((prev: number) =>
                    Math.min(totalPages, prev + 1),
                  )
                }
                disabled={currentPage === totalPages}
                className={`px-md py-sm rounded-md font-medium transition-all duration-normal ${
                  currentPage === totalPages
                    ? "bg-surface text-tertiary opacity-50 cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-700 hover:-translate-y-0.5"
                }`}
              >
                Next
              </button>
            </div>
          )}
        </section>
      </div>
    </Layout>
  );
};
