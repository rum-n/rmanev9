import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

type LayoutProps = {
  children: React.ReactNode;
};

const LayoutContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const LinksBox = styled.div`
  position: absolute;
  top: 10rem;
  right: 20rem;
`;

const LinksWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: none;
`;

const Link = styled.li`
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    color: #777;
    transition: 0.3s ease-in-out;
  }
`;

const MobileLinksWrapper = styled.ul`
  position: absolute;
  top: 0rem;
  left: 0rem;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  list-style: none;
`;

interface Links {
  title: string;
  url: string;
}

const links: Links[] = [
  {
    title: "GitHub",
    url: "https://github.com/rum-n",
  },
  {
    title: "Twitter",
    url: "https://x.com/room_n",
  },
  {
    title: "Bluesky",
    url: "https://bsky.app/profile/room-n.bsky.social",
  },
  {
    title: "Medium",
    url: "https://room-n.medium.com/",
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/rmanev/",
  },
  {
    title: "Xing",
    url: "https://www.xing.com/profile/Rumen_Manev",
  },
];

export const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1300);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1300);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <LayoutContainer>
      {children}
      {location.pathname.includes("/writing/") ? null : (
        <>
          {!isMobile ? (
            <LinksBox>
              <LinksWrapper>
                {(links as Links[]).map((project) => (
                  <Link
                    key={project.title}
                    onClick={() => window.open(project.url || "", "_blank")}
                  >
                    {project.title}
                  </Link>
                ))}
              </LinksWrapper>
            </LinksBox>
          ) : (
            <MobileLinksWrapper>
              {(links as Links[]).map((project) => (
                <Link
                  key={project.title}
                  onClick={() => window.open(project.url || "", "_blank")}
                >
                  {project.title}
                </Link>
              ))}
            </MobileLinksWrapper>
          )}
        </>
      )}
    </LayoutContainer>
  );
};
