import React from "react";
import styled from "styled-components";
import AsciiLineAnimation from "../AsciiLineAnimation";
import { ThemeToggle } from "../ThemeToggle";

const HeaderContainer = styled.header``;

const AnimationContainer = styled.div`
  display: flex;
  gap: var(--space-lg);
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  justify-content: center;
  pointer-events: none;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    gap: var(--space-xs);
  }

  @media (max-width: 480px) {
    font-size: 0.6rem;
    gap: 2px;
  }
`;

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <ThemeToggle />
      <AnimationContainer>
        <AsciiLineAnimation />
        <AsciiLineAnimation />
        <AsciiLineAnimation />
        <AsciiLineAnimation />
        <AsciiLineAnimation />
        <AsciiLineAnimation />
        <AsciiLineAnimation />
        <AsciiLineAnimation />
        <AsciiLineAnimation />
        <AsciiLineAnimation />
        <AsciiLineAnimation />
        <AsciiLineAnimation />
      </AnimationContainer>
    </HeaderContainer>
  );
};
