import React from "react";
import styled from "styled-components";
import CircleAnimation from "../CircleAnimation";

const FooterContainer = styled.footer``;

const AnimationContainer = styled.div`
  display: flex;
  gap: var(--space-lg);
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  justify-content: center;
  pointer-events: none;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    gap: var(--space-xs);
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    gap: 2px;
  }
`;

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <AnimationContainer>
        <CircleAnimation />
        <CircleAnimation />
        <CircleAnimation />
        <CircleAnimation />
        <CircleAnimation />
        <CircleAnimation />
        <CircleAnimation />
        <CircleAnimation />
        <CircleAnimation />
        <CircleAnimation />
        <CircleAnimation />
        <CircleAnimation />
        <CircleAnimation />
        <CircleAnimation />
        <CircleAnimation />
        <CircleAnimation />
        <CircleAnimation />
        <CircleAnimation />
      </AnimationContainer>
    </FooterContainer>
  );
};
