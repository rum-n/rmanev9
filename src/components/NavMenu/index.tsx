import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PathContext } from "../../context/PathContext";

interface NavMenuProps {
  menuItem: string;
}

const NameText = styled.h1`
  margin: 0;
  padding: 0;
  margin-left: -0.3rem;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const SubtitleText = styled.p`
  font-size: 1.6rem;
  margin: 0;
`;

const MenuList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  padding-left: 1rem;
  margin-left: -1rem;
  gap: 2rem;
`;

const MenuItemList = styled.li`
  cursor: pointer;
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
  background: #8a5858;
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
    title: "Writing",
    url: "/writing",
  },
];

export const NavMenu = ({ menuItem }: NavMenuProps) => {
  const navigate = useNavigate();
  //@ts-ignore
  const { setPath } = useContext(PathContext);
  const location = useLocation();

  const handleNavigation = (url: string) => {
    setPath({ path: url, setPath: setPath });
    navigate(url);
  };

  return (
    <>
      {location.pathname.includes("/writing/") ?
        <>
          <MenuList>
            <MenuItemList onClick={() => handleNavigation(menuItems[0].url)}>
              {menuItems[0].title}
            </MenuItemList>
            <MenuItemList onClick={() => handleNavigation(menuItems[2].url)}>
              {menuItems[2].title}
            </MenuItemList>
          </MenuList>
        </> :
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
      }
    </>
  );
};
