import React from "react";
import styled from "styled-components";
import CircleAnimation from "../CircleAnimation";

const FooterContainer = styled.footer`
  width: 100%;
  padding: var(--space-xl) 0;
`;

const FooterText = styled.p`
  color: var(--text-secondary);
  font-size: 0.8rem;
  margin: 0;
  text-align: center;
`;

// const AnimationContainer = styled.div`
//   display: flex;
//   gap: var(--space-lg);
//   white-space: nowrap;
//   overflow: hidden;
//   width: 100%;
//   justify-content: center;
//   pointer-events: none;
//   font-size: 1.2rem;

//   @media (max-width: 768px) {
//     font-size: 1rem;
//     gap: var(--space-xs);
//   }

//   @media (max-width: 480px) {
//     font-size: 0.8rem;
//     gap: 2px;
//   }
// `;

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterText>Rumen Manev 2026</FooterText>
      {/* <AnimationContainer>
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
      </AnimationContainer> */}
    </FooterContainer>
  );
};
