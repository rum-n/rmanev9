import { Layout } from "../components/Layout";
import { projects } from "../data/projects";
import { useState, useMemo } from "react";

export const Projects = () => {
  const [filter, setFilter] = useState<"all" | "personal" | "client">("all");

  const filtered = useMemo(() => {
    return projects
      .filter((p) => filter === "all" || p.tags.includes(filter))
      .sort((a, b) => Number(b.year) - Number(a.year));
  }, [filter]);

  return (
    <Layout>
      <div className="w-full max-w-4xl overflow-x-hidden">
        <a
          href="/"
          className="inline-flex items-center text-primary hover:text-blue-600 transition-colors duration-normal mb-2xl text-sm font-medium"
        >
          ← Back to home
        </a>

        <section>
          <div className="mb-lg">
            <h1 className="text-primary text-2xl m-0 mb-md">Projects</h1>
          </div>

          <div className="flex gap-md my-lg items-center flex-wrap">
            <div className="flex gap-sm">
              <button
                onClick={() => setFilter("all")}
                className={`px-2.5 py-1.5 rounded-md border cursor-pointer ${
                  filter === "all"
                    ? "border-blue-600 bg-blue-600 text-white"
                    : "border-surface-hover bg-surface text-secondary"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter("personal")}
                className={`px-2.5 py-1.5 rounded-md border cursor-pointer ${
                  filter === "personal"
                    ? "border-blue-600 bg-blue-600 text-white"
                    : "border-surface-hover bg-surface text-secondary"
                }`}
              >
                Personal
              </button>
              <button
                onClick={() => setFilter("client")}
                className={`px-2.5 py-1.5 rounded-md border cursor-pointer ${
                  filter === "client"
                    ? "border-blue-600 bg-blue-600 text-white"
                    : "border-surface-hover bg-surface text-secondary"
                }`}
              >
                Client
              </button>
            </div>
          </div>

          <div className="grid gap-lg grid-cols-1 md:grid-cols-2">
            {filtered.map((p, i) => (
              <div
                key={i}
                className="bg-surface border border-surface-hover rounded-md px-lg py-lg transition-all duration-normal hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="m-0 mb-xs text-primary text-lg">{p.title}</h3>
                <div className="flex gap-sm mb-xs items-center flex-wrap">
                  <span className="text-tertiary font-semibold">{p.year}</span>
                  <span className="text-secondary text-sm">{p.tech}</span>
                </div>

                <p className="text-secondary mt-md m-0">{p.description}</p>

                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-md text-blue-600 no-underline font-semibold"
                  >
                    Visit
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};
