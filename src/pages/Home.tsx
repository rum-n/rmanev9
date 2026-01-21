import AsciiLineAnimation from "../components/AsciiLineAnimation";
import CircleAnimation from "../components/CircleAnimation";
import { Layout } from "../components/Layout";
import { blogPosts } from "../data/blogPosts";
import { projects } from "../data/projects";
import { NowPlaying } from "../components/NowPlaying";

export const Home = () => {
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/rum-n" },
    { name: "X (Twitter)", url: "https://x.com/room_n" },
    { name: "Medium", url: "https://room-n.medium.com/" },
    { name: "Bluesky", url: "https://bsky.app/profile/room-n.bsky.social" },
  ];

  return (
    <Layout>
      <h1
        className="text-md md:text-7xl font-bold m-0 mb-xl font-sans tracking-tighter font-inter"
        style={{ lineHeight: "0.7" }}
      >
        <span
          className="text-primary md:text-[160px] uppercase"
          style={{ fontFamily: '"Bebas Neue", sans-serif' }}
        >
          Embrace
        </span>
        <br />
        <span
          className="text-primary italic md:text-[100px]"
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          the struggle
        </span>
      </h1>
      <div className="gap-[0.5rem] hidden md:flex">
        <AsciiLineAnimation />
        <AsciiLineAnimation />
        <AsciiLineAnimation />
        <AsciiLineAnimation />
        <AsciiLineAnimation />
        <AsciiLineAnimation />
        <AsciiLineAnimation />
        <AsciiLineAnimation />
        <AsciiLineAnimation />
        <AsciiLineAnimation />
        <AsciiLineAnimation />
        <AsciiLineAnimation />
        <AsciiLineAnimation />
        <AsciiLineAnimation />
        <AsciiLineAnimation />
        <AsciiLineAnimation />
        <AsciiLineAnimation />
        <AsciiLineAnimation />
        <AsciiLineAnimation />
        <AsciiLineAnimation />
        <AsciiLineAnimation />
        <AsciiLineAnimation />
        <AsciiLineAnimation />
        <AsciiLineAnimation />
        <AsciiLineAnimation />
        <AsciiLineAnimation />
        <AsciiLineAnimation />
        <AsciiLineAnimation />
      </div>
      <img
        src="/assets/comp.png"
        alt="Illustration"
        className="absolute hidden md:block flex-shrink-0 md:w-16 sm:w-12"
        style={{ width: "450px", right: "200px", top: "100px" }}
      />
      <div className="w-full max-w-full overflow-x-hidden">
        <div className="w-full md:w-1/2 mt-lg md:mt-xl md:w-1/2 sm:w-full">
          <p className="text-md leading-normal text-secondary mb-md">
            No matter how much you run from it, it'll eventually catch on.
            You're best bet is to learn to enjoy it.
          </p>
          <p className="text-md leading-normal text-secondary mb-md">
            While you're here - nice to meet you! I'm Rumen, I'm a software
            engineer and this is my personal website. I think everyone should
            have one, even if you don't think you have anything to showcase.
            It's how we counter the monopoly on our attention.
          </p>
          <p className="text-md leading-normal text-secondary mb-md">
            You're welcome to stay and look around. If you see something you
            like, feel free to reach out.
          </p>
        </div>

        <div className="w-full md:w-2/3 mt-xl md:mt-2xl">
          <h2
            className="text-2xl md:text-3xl font-bold text-primary mb-md"
            style={{
              fontFamily: '"Bebas Neue", sans-serif',
            }}
          >
            Where to next?
          </h2>
          <div className="flex flex-col md:flex-row gap-md md:gap-md mb-md">
            <CircleAnimation />
            <a
              className="text-lg md:text-xl hover:underline"
              href="/writing"
              style={{
                fontFamily: '"Playfair Display", serif',
                fontWeight: "900",
                color: "#000000",
              }}
            >
              Writing
            </a>
            <p className="text-xs md:text-sm text-secondary font-medium md:self-end">
              - sometimes I get the urge to write some stuff down, mainly for my
              future self.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-md md:gap-md">
            <CircleAnimation />
            <a
              className="text-lg md:text-xl hover:underline"
              href="/projects"
              style={{
                fontFamily: '"Playfair Display", serif',
                fontWeight: "900",
                color: "#000000",
              }}
            >
              Projects
            </a>
            <p className="text-xs md:text-sm text-secondary font-medium md:self-end">
              - in the past 10 years I've worked on quite a few projects, mostly
              as a way for me to learn, sometimes as a way for me to earn.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-lg md:mt-2xl">
          <h3 className="text-sm font-bold text-primary mb-md uppercase tracking-wider">
            Music
          </h3>
          <NowPlaying />
        </div>

        <div className="w-full md:w-3/4 mt-lg md:mt-2xl">
          <h2
            className="text-2xl md:text-3xl font-bold text-primary mb-md"
            style={{
              fontFamily: '"Bebas Neue", sans-serif',
            }}
          >
            Latest Projects
          </h2>
          <div className="grid gap-md md:gap-lg grid-cols-1 md:grid-cols-3">
            {projects.slice(0, 3).map((project, index) => (
              <a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-lg border border-surface-hover rounded-lg hover:border-primary transition-all duration-normal bg-white hover:bg-surface-hover"
              >
                <h3 className="text-lg font-bold text-primary mb-sm">
                  {project.title}
                </h3>
                <p className="text-xs text-secondary mb-md">{project.tech}</p>
                <p className="text-sm text-secondary leading-normal">
                  {project.description}
                </p>
              </a>
            ))}
          </div>
        </div>

        <div className="w-full md:w-3/4 mt-lg md:mt-2xl">
          <h2
            className="text-2xl md:text-3xl font-bold text-primary mb-md"
            style={{
              fontFamily: '"Bebas Neue", sans-serif',
            }}
          >
            Featured Articles
          </h2>
          <div className="grid gap-md md:gap-lg grid-cols-1 md:grid-cols-3">
            {blogPosts.slice(0, 3).map((post) => (
              <a
                key={post.id}
                href={`/writing/${post.slug}`}
                className="block p-lg border border-surface-hover rounded-lg hover:border-primary transition-all duration-normal bg-white hover:bg-surface-hover"
              >
                <h3 className="text-lg font-bold text-primary mb-sm">
                  {post.title}
                </h3>
                <p className="text-xs text-secondary mb-md">{post.date}</p>
                <p className="text-sm text-secondary leading-normal">
                  {post.excerpt}
                </p>
              </a>
            ))}
          </div>
        </div>
        <aside className="hidden md:flex absolute right-0 top-1/4 -translate-y-1/2 flex-col gap-2xl items-center justify-center pointer-events-auto z-40">
          <div
            className="flex gap-2xl items-center justify-center origin-center"
            style={{ transform: "rotate(90deg)" }}
          >
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="no-underline text-secondary text-sm font-medium px-2 py-1 rounded transition-all duration-normal hover:text-primary whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </div>
        </aside>

        <aside className="md:hidden fixed bottom-0 left-0 right-0 flex flex-row gap-md items-center justify-center py-lg px-md z-40 border-t border-surface-hover">
          <div className="flex gap-lg items-center justify-center">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="inline-flex items-center no-underline text-sm font-medium px-2 py-1.5 rounded transition-all duration-normal hover:text-blue-100"
              >
                {link.name}
              </a>
            ))}
          </div>
        </aside>
      </div>

      <div className="w-full relative">
        <div
          className="absolute inset-0 h-32 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(187, 220, 229, 1), rgba(187, 220, 229, 0))",
          }}
        />
        <img
          src="/assets/forest.webp"
          alt="Forest"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="w-full overflow-hidden py-md z-10">
        <div className="animate-scroll whitespace-nowrap font-bold text-lg">
          <span className="inline-block text-sm">
            Go outside • Build something cool • Make mistakes • Learn a new
            skill • Help others • Go outside • Build something cool • Make
            mistakes • Learn a new skill • Help others •
          </span>
        </div>
      </div>
    </Layout>
  );
};
