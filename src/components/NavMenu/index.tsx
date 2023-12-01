import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PathContext } from "../../context/PathContext";

interface NavMenuProps {
  menuItem: string;
}

const NameText = styled.h1`
  margin: 2rem 0 0 2rem;
`;

const SubtitleText = styled.p`
  font-size: 1.4rem;
`;

const MenuList = styled.ul`
  list-style: none;
  margin-top: 5rem;
`;

const MenuItemList = styled.li`
  margin-top: 0.5rem;
  cursor: pointer;
  width: 5rem;
  display: flex;
  align-items: center;
  transition: 0.3s ease-in-out;

  &: hover {
    color: #777;
    transition: 0.3s ease-in-out;
  }
`;

const MenuDot = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  background: #777;
  border-radius: 50%;
  margin-right: 0.5rem;
  margin-left: -1rem;
`;

const menuItems = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "Links",
    url: "/links",
  },
  {
    title: "Contact",
    url: "/contact",
  },
];

export const NavMenu = ({ menuItem }: NavMenuProps) => {
  const navigate = useNavigate();
  //@ts-ignore
  const { setPath } = useContext(PathContext);

  const handleNavigation = (url: string) => {
    setPath({ path: url, setPath: setPath });
    navigate(url);
  };

  return (
    <>
      <NameText>Rumen Manev</NameText>
      <SubtitleText>Frontend developer</SubtitleText>
      <MenuList>
        {menuItems.map((item, index) => (
          <MenuItemList onClick={() => handleNavigation(item.url)} key={index}>
            {menuItem === item.title ? <MenuDot /> : ""} {item.title}
          </MenuItemList>
        ))}
      </MenuList>
    </>
  );
};
