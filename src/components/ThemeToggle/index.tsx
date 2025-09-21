import React from "react";
import styled from "styled-components";
import { useTheme } from "../../context/ThemeContext";

const ToggleContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
`;

const ToggleButton = styled.button`
  background: var(--primary);
  border: 2px solid var(--primary);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }
`;

const ThemeIcon = styled.span`
  font-size: 16px;
`;

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ToggleContainer>
      <ToggleButton onClick={toggleTheme}>
        <ThemeIcon>{theme === "light" ? "🌙" : "☀️"}</ThemeIcon>
        {theme === "light" ? "Dark" : "Light"}
      </ToggleButton>
    </ToggleContainer>
  );
};
