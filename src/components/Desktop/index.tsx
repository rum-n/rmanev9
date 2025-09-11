import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const DesktopContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 30px; /* Leave space for taskbar */
  background: var(--desktop-bg);
  overflow: hidden;
  padding: 16px;
`;

const DesktopGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 80px);
  grid-template-rows: repeat(auto-fill, 80px);
  gap: 8px;
  height: 100%;
  align-content: start;
`;

const DesktopIcon = styled.div<{ selected?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  padding: 4px;
  cursor: pointer;
  user-select: none;
  border: 1px solid transparent;
  background: ${(props) =>
    props.selected ? "rgba(0, 0, 255, 0.3)" : "transparent"};
  border: ${(props) =>
    props.selected ? "1px dotted white" : "1px solid transparent"};

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border: 1px dotted white;
  }
`;

const IconImage = styled.div`
  width: 32px;
  height: 32px;
  margin-bottom: 4px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const IconLabel = styled.span`
  color: white;
  font-size: 11px;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  line-height: 1.2;
  max-width: 60px;
  word-wrap: break-word;
  font-family: "MS Sans Serif", sans-serif;
`;

// SVG icons as data URLs for Windows 95 style
const folderIcon = `data:image/svg+xml;base64,${btoa(`
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <rect x="2" y="8" width="28" height="20" fill="#ffff80" stroke="#808080" stroke-width="1"/>
  <rect x="2" y="4" width="12" height="6" fill="#ffff80" stroke="#808080" stroke-width="1"/>
  <rect x="3" y="9" width="26" height="18" fill="#ffff00"/>
</svg>
`)}`;

const computerIcon = `data:image/svg+xml;base64,${btoa(`
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <rect x="4" y="6" width="24" height="16" fill="#c0c0c0" stroke="#808080" stroke-width="1"/>
  <rect x="6" y="8" width="20" height="12" fill="#000080"/>
  <rect x="12" y="22" width="8" height="4" fill="#c0c0c0" stroke="#808080" stroke-width="1"/>
  <rect x="8" y="26" width="16" height="2" fill="#808080"/>
</svg>
`)}`;

const notepadIcon = `data:image/svg+xml;base64,${btoa(`
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <rect x="4" y="2" width="20" height="26" fill="white" stroke="#808080" stroke-width="1"/>
  <rect x="6" y="4" width="16" height="22" fill="#ffffff"/>
  <line x1="6" y1="8" x2="22" y2="8" stroke="#000000" stroke-width="1"/>
  <line x1="6" y1="12" x2="18" y2="12" stroke="#000000" stroke-width="1"/>
  <line x1="6" y1="16" x2="20" y2="16" stroke="#000000" stroke-width="1"/>
</svg>
`)}`;

const projectIcon = `data:image/svg+xml;base64,${btoa(`
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <rect x="2" y="4" width="28" height="24" fill="#c0c0c0" stroke="#808080" stroke-width="1"/>
  <rect x="4" y="6" width="24" height="20" fill="#ffffff"/>
  <rect x="6" y="8" width="6" height="6" fill="#ff0000"/>
  <rect x="14" y="8" width="6" height="6" fill="#00ff00"/>
  <rect x="22" y="8" width="6" height="6" fill="#0000ff"/>
  <rect x="6" y="16" width="6" height="6" fill="#ffff00"/>
  <rect x="14" y="16" width="6" height="6" fill="#ff00ff"/>
  <rect x="22" y="16" width="6" height="6" fill="#00ffff"/>
</svg>
`)}`;

interface DesktopIconData {
  id: string;
  label: string;
  icon: string;
  path: string;
}

const desktopIcons: DesktopIconData[] = [
  {
    id: "home",
    label: "My Computer",
    icon: computerIcon,
    path: "/",
  },
  {
    id: "projects",
    label: "Projects",
    icon: folderIcon,
    path: "/projects",
  },
  {
    id: "writing",
    label: "Notepad",
    icon: notepadIcon,
    path: "/writing",
  },
  {
    id: "contact",
    label: "Contact",
    icon: projectIcon,
    path: "/contact",
  },
];

export const Desktop: React.FC = () => {
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleIconClick = (icon: DesktopIconData) => {
    setSelectedIcon(icon.id);
    // Double-click simulation with timeout
    setTimeout(() => {
      navigate(icon.path);
    }, 200);
  };

  const handleDesktopClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setSelectedIcon(null);
    }
  };

  return (
    <DesktopContainer onClick={handleDesktopClick}>
      <DesktopGrid>
        {desktopIcons.map((icon) => (
          <DesktopIcon
            key={icon.id}
            selected={selectedIcon === icon.id}
            onClick={() => handleIconClick(icon)}
            onDoubleClick={() => navigate(icon.path)}
          >
            <IconImage style={{ backgroundImage: `url(${icon.icon})` }} />
            <IconLabel>{icon.label}</IconLabel>
          </DesktopIcon>
        ))}
      </DesktopGrid>
    </DesktopContainer>
  );
};
