import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PathContext } from "../../context/PathContext";

interface NavMenuProps {
  menuItem: string;
}

const NameText = styled.h1`
  margin: 0;
`;

const SubtitleText = styled.p`
  font-size: 1.6rem;
  margin: 0;
`;

const MenuList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
`;

const MenuItemList = styled.li`
  cursor: pointer;
  width: 5rem;
  display: flex;
  align-items: center;
  transition: 0.2s ease-in-out;

  &:hover {
    color: #777;
    transition: 0.2s ease-in-out;
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
      <SubtitleText>Fullstack developer</SubtitleText>
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
