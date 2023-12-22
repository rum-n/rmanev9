import styled from "styled-components";
import { Layout } from "../components/Layout";
import { NavMenu } from "../components/NavMenu";

const TitleBox = styled.div`
  p {
    margin: 0 0 0 2rem;
  }
  font-family: "Lato", sans-serif;
`;

const LinksBox = styled.div`
  margin: 5rem 0 0 2rem;
  display: flex;
  justify-content: flex-end;
  // height: 30%;
  // height: 300px;
  // overflow-y: scroll;
`;

const LinksWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: none;
  // overflow-y: scroll;
`;

const Link = styled.li`
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &: hover {
    color: #777;
    transition: 0.3s ease-in-out;
  }
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

export const Links = () => {
  return (
    <Layout>
      <TitleBox>
        <NavMenu menuItem="Links" />
      </TitleBox>
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
    </Layout>
  );
};
