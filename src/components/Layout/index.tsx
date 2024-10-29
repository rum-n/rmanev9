import styled from "styled-components";

type LayoutProps = {
  children: React.ReactNode;
};

const LayoutContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 2rem 2rem 2rem;
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

const MobileLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  top: 0rem;
  left: 0rem;
`;

const MobileLinksWrapper = styled.ul`
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
    url: "https://twitter.com/room_n",
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
  const width = window.innerWidth;

  return (
    <LayoutContainer>
      {children}
      {width > 1024 ? (
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
        </LinksBox>) :
        <MobileLinks>
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
        </MobileLinks>
      }
    </LayoutContainer>);
};
