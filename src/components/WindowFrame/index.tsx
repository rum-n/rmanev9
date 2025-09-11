import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const WindowContainer = styled.div<{ isMaximized?: boolean }>`
  position: fixed;
  top: ${(props) => (props.isMaximized ? "0" : "40px")};
  left: ${(props) => (props.isMaximized ? "0" : "60px")};
  right: ${(props) => (props.isMaximized ? "0" : "60px")};
  bottom: ${(props) => (props.isMaximized ? "30px" : "80px")};
  background: var(--window-bg);
  border: 2px outset var(--win-gray);
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  font-family: "MS Sans Serif", sans-serif;
  z-index: 100;
`;

const TitleBar = styled.div`
  height: 18px;
  background: linear-gradient(90deg, #0000ff 0%, #8080ff 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2px 4px;
  font-size: 11px;
  font-weight: bold;
  cursor: move;
  user-select: none;
`;

const TitleText = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const TitleIcon = styled.div`
  width: 16px;
  height: 16px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const WindowControls = styled.div`
  display: flex;
  gap: 2px;
`;

const ControlButton = styled.button`
  width: 16px;
  height: 14px;
  border: 1px outset var(--win-gray);
  background: var(--win-gray);
  color: var(--win-black);
  font-size: 8px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;

  &:hover {
    background: var(--win-gray-light);
  }

  &:active {
    border: 1px inset var(--win-gray);
  }
`;

const MenuBar = styled.div`
  height: 20px;
  background: var(--win-gray);
  border-bottom: 1px solid var(--win-gray-dark);
  display: flex;
  align-items: center;
  padding: 0 4px;
  font-size: 11px;
`;

const MenuItem = styled.button`
  background: transparent;
  border: none;
  padding: 4px 8px;
  cursor: pointer;
  font-family: "MS Sans Serif", sans-serif;
  font-size: 11px;
  color: var(--win-black);

  &:hover {
    background: var(--win-blue);
    color: white;
  }
`;

const WindowContent = styled.div`
  flex: 1;
  background: white;
  border: 2px inset var(--win-gray);
  margin: 2px;
  overflow: auto;
  padding: 8px;
`;

interface WindowFrameProps {
  title: string;
  icon?: string;
  children: React.ReactNode;
  onClose?: () => void;
  showMenuBar?: boolean;
}

export const WindowFrame: React.FC<WindowFrameProps> = ({
  title,
  icon,
  children,
  onClose,
  showMenuBar = true,
}) => {
  const [isMaximized, setIsMaximized] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      navigate("/");
    }
  };

  const handleMinimize = () => {
    // In a real implementation, this would minimize to taskbar
    console.log("Minimize clicked");
  };

  const handleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  return (
    <WindowContainer isMaximized={isMaximized}>
      <TitleBar>
        <TitleText>
          {icon && <TitleIcon style={{ backgroundImage: `url(${icon})` }} />}
          {title}
        </TitleText>
        <WindowControls>
          <ControlButton onClick={handleMinimize} title="Minimize">
            _
          </ControlButton>
          <ControlButton
            onClick={handleMaximize}
            title={isMaximized ? "Restore" : "Maximize"}
          >
            {isMaximized ? "❐" : "□"}
          </ControlButton>
          <ControlButton onClick={handleClose} title="Close">
            ×
          </ControlButton>
        </WindowControls>
      </TitleBar>

      {showMenuBar && (
        <MenuBar>
          <MenuItem>File</MenuItem>
          <MenuItem>Edit</MenuItem>
          <MenuItem>View</MenuItem>
          <MenuItem>Help</MenuItem>
        </MenuBar>
      )}

      <WindowContent>{children}</WindowContent>
    </WindowContainer>
  );
};
