import React, { useState, useEffect } from "react";
import styled from "styled-components";

const TaskbarContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 30px;
  background: var(--taskbar-bg);
  border-top: 2px outset var(--win-gray);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2px;
  z-index: 1000;
  font-family: "MS Sans Serif", sans-serif;
  font-size: 11px;
`;

const StartButton = styled.button`
  height: 22px;
  padding: 2px 8px;
  border: 2px outset var(--button-bg);
  background: var(--button-bg);
  color: var(--win-black);
  font-family: "MS Sans Serif", sans-serif;
  font-size: 11px;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  gap: 4px;

  &:hover {
    background: var(--button-bg);
  }

  &:active {
    border: 2px inset var(--button-bg);
  }
`;

const StartIcon = styled.div`
  width: 16px;
  height: 16px;
  background: linear-gradient(45deg, #ff0000, #ffff00, #00ff00, #0000ff);
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 8px;
`;

const TaskbarMiddle = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 4px;
`;

const SystemTray = styled.div`
  height: 22px;
  padding: 2px 8px;
  border: 2px inset var(--win-gray);
  background: var(--win-gray);
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 100px;
  justify-content: flex-end;
`;

const ClockDisplay = styled.div`
  color: var(--win-black);
  font-family: "MS Sans Serif", sans-serif;
  font-size: 11px;
  user-select: none;
`;

const VolumeIcon = styled.div`
  width: 16px;
  height: 16px;
  background: var(--win-black);
  mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M8 2v12l-4-3H1V5h3l4-3z'/%3E%3C/svg%3E")
    no-repeat center;
  mask-size: contain;
  cursor: pointer;
`;

export const Taskbar: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour12: true,
      hour: "numeric",
      minute: "2-digit",
    });
  };

  return (
    <TaskbarContainer>
      <StartButton>
        <StartIcon>⊞</StartIcon>
        Start
      </StartButton>

      <TaskbarMiddle />

      <SystemTray>
        <VolumeIcon />
        <ClockDisplay>{formatTime(currentTime)}</ClockDisplay>
      </SystemTray>
    </TaskbarContainer>
  );
};
