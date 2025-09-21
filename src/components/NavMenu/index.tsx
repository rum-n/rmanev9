import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PathContext } from "../../context/PathContext";

interface NavMenuProps {
  menuItem: string;
}

const NavContainer = styled.nav`
  margin-bottom: var(--space-2xl);
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;

  @media (max-width: 768px) {
    margin-bottom: var(--space-xl);
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
  }

  @media (max-width: 480px) {
    margin-bottom: var(--space-lg);
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
  }
`;

const NameText = styled.h1`
  margin: 0;
  padding: 0;
  color: var(--primary);
  font-weight: 800;
  letter-spacing: -0.02em;
  margin-bottom: var(--space-sm);

  @media (max-width: 768px) {
    margin-top: var(--space-lg);
    font-size: clamp(1.75rem, 6vw, 2.5rem);
  }

  @media (max-width: 480px) {
    margin-top: var(--space-md);
    font-size: clamp(1.5rem, 7vw, 2rem);
  }
`;

const SubtitleText = styled.p`
  font-size: 1.25rem;
  margin: 0;
  color: var(--text-secondary);
  font-weight: 500;
  margin-bottom: var(--space-md);

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: var(--space-lg);
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: var(--space-md);
  }
`;

const MenuList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: var(--space-xl);
  margin: 0;
  padding: 0;
  margin-bottom: var(--space-xl);
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;

  @media (max-width: 768px) {
    gap: var(--space-lg);
    flex-wrap: wrap;
    margin-bottom: var(--space-lg);
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
  }

  @media (max-width: 480px) {
    gap: var(--space-md);
    margin-bottom: var(--space-md);
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
    flex-wrap: wrap;
  }
`;

const MenuItem = styled.li`
  position: relative;
  flex-shrink: 0;
  max-width: 100%;
`;

const MenuButton = styled.button<{ isActive: boolean }>`
  position: relative;
  background: ${(props) =>
    props.isActive ? "var(--bg-surface)" : "transparent"};
  border: 1px solid
    ${(props) => (props.isActive ? "var(--primary)" : "transparent")};
  color: ${(props) =>
    props.isActive ? "var(--text-primary)" : "var(--text-secondary)"};
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-md);
  font-weight: 500;
  font-size: 0.95rem;
  transition: all var(--transition-normal);
  cursor: pointer;
  min-height: 44px;
  min-width: 44px;

  &:hover {
    background: var(--bg-surface-hover);
    color: var(--text-primary);
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: var(--space-xs) var(--space-sm);
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    padding: var(--space-xs);
  }
`;

const ActiveIndicator = styled.div`
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 4px;
  background: var(--primary);
  border-radius: 50%;
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
  // {
  //   title: "Contact",
  //   url: "/contact",
  // },
];

export const NavMenu = ({ menuItem }: NavMenuProps) => {
  const navigate = useNavigate();
  //@ts-expect-error - PathContext type definition needs to be updated
  const { setPath } = useContext(PathContext);

  const handleNavigation = (url: string) => {
    setPath({ path: url, setPath: setPath });
    navigate(url);
  };

  return (
    <NavContainer>
      <MenuList>
        {menuItems.map((item, index) => (
          <MenuItem key={index}>
            <MenuButton
              isActive={menuItem === item.title}
              onClick={() => handleNavigation(item.url)}
            >
              {item.title}
              {menuItem === item.title && <ActiveIndicator />}
            </MenuButton>
          </MenuItem>
        ))}
      </MenuList>

      {menuItem === "Home" && (
        <>
          <NameText>Rumen Manev</NameText>
          <SubtitleText>Fullstack Software Engineer</SubtitleText>
        </>
      )}
    </NavContainer>
  );
};
