import React from "react";
import styled from "styled-components";
import { useColor } from "../../context/ColorContext";

const ColorPickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
`;

const ColorButtonsRow = styled.div`
  display: flex;
  margin-top: var(--space-md);
  gap: var(--space-lg);
  justify-content: center;
  align-items: center;
`;

const ColorButton = styled.button<{ color: string; isActive: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-xs);
  background: none;
  border: none;
  cursor: pointer;
  transition: all var(--transition-normal);
  color: var(--text-primary);

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const ColorDot = styled.div<{ color: string; isActive: boolean }>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  // background-color: ${(props) => props.color};
  border: 3px solid ${(props) => props.color};
  box-shadow: ${(props) =>
    props.isActive ? `0 0 0 2px var(--bg-surface)` : "none"};
  transition: all var(--transition-normal);

  &:hover {
    transform: scale(1.1);
  }
`;

const ButtonLabel = styled.span`
  font-size: 0.7rem;
  text-transform: capitalize;
  color: var(--text-secondary);
  font-weight: 500;
`;

const ResetButton = styled.button`
  background: none;
  border: none;
  color: var(--text-secondary);
  cursor: pointer;
  font-size: 0.75rem;
  text-decoration: underline;
  transition: color var(--transition-normal);
  align-self: center;

  &:hover {
    color: var(--text-primary);
  }
`;

export const ColorPicker: React.FC = () => {
  const { textColor, setTextColor } = useColor();

  const colorOptions = [
    { key: "blue" as const, label: "Blue", color: "#2563eb" },
    { key: "green" as const, label: "Green", color: "#16a34a" },
    { key: "red" as const, label: "Red", color: "#ef4444" },
    { key: "yellow" as const, label: "Yellow", color: "#eab308" },
  ];

  return (
    <ColorPickerContainer>
      <ColorButtonsRow>
        {colorOptions.map((option) => (
          <ColorButton
            key={option.key}
            color={option.color}
            isActive={textColor === option.key}
            onClick={() => setTextColor(option.key)}
          >
            <ColorDot
              color={option.color}
              isActive={textColor === option.key}
            />
            <ButtonLabel>{option.label}</ButtonLabel>
          </ColorButton>
        ))}
      </ColorButtonsRow>
      <ResetButton onClick={() => setTextColor("original")}>Reset</ResetButton>
    </ColorPickerContainer>
  );
};
