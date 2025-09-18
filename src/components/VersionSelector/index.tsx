import React, { useState } from "react";
import styled from "styled-components";
import { WebsiteVersion } from "../../data/websiteVersions";
import { useVersion } from "../../context/VersionContext";

const VersionSelectorContainer = styled.div`
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

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }
`;

const VersionPanel = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 50px;
  right: 0;
  width: 400px;
  max-height: 600px;
  background: rgba(124, 56, 56, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  padding: 20px;
  transform: ${(props) =>
    props.isOpen ? "translateY(0)" : "translateY(-20px)"};
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  transition: all 0.3s ease;
  overflow-y: auto;

  @media (max-width: 768px) {
    width: 320px;
    right: -20px;
  }
`;

const VersionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const VersionItem = styled.div<{
  isCurrent: boolean;
  colorScheme: WebsiteVersion["colorScheme"];
}>`
  padding: 16px;
  border-radius: 8px;
  border: 2px solid
    ${(props) => (props.isCurrent ? props.colorScheme.primary : "#e5e7eb")};
  background: ${(props) =>
    props.isCurrent ? `${props.colorScheme.primary}10` : "#f9fafb"};
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }
`;

const CurrentBadge = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background: var(--primary);
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
`;

const ColorPreview = styled.div<{ colorScheme: WebsiteVersion["colorScheme"] }>`
  display: flex;
  gap: 4px;
  margin-top: 8px;
`;

const ColorDot = styled.div<{ color: string }>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${(props) => props.color};
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: var(--text-tertiary);
  padding: 4px;
  border-radius: 4px;

  &:hover {
    background: var(--bg-surface);
    color: var(--text-primary);
  }
`;

export const VersionSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentVersion, setCurrentVersion, allVersions } = useVersion();

  const handleVersionClick = (version: WebsiteVersion) => {
    setCurrentVersion(version);
    setIsOpen(false);

    // Apply version-specific styles
    document.documentElement.style.setProperty(
      "--primary",
      version.colorScheme.primary
    );
    document.documentElement.style.setProperty(
      "--secondary",
      version.colorScheme.secondary
    );
    document.documentElement.style.setProperty(
      "--bg-primary",
      version.colorScheme.background
    );
    document.documentElement.style.setProperty(
      "--text-primary",
      version.colorScheme.text
    );
  };

  return (
    <VersionSelectorContainer>
      <ToggleButton onClick={() => setIsOpen(!isOpen)}>
        Change theme
      </ToggleButton>

      <VersionPanel isOpen={isOpen}>
        <CloseButton onClick={() => setIsOpen(false)}>×</CloseButton>

        <VersionList>
          {allVersions.map((version) => (
            <VersionItem
              key={version.id}
              isCurrent={version.id === currentVersion.id}
              colorScheme={version.colorScheme}
              onClick={() => handleVersionClick(version)}
            >
              {version.id === currentVersion.id && (
                <CurrentBadge>Current</CurrentBadge>
              )}

              <ColorPreview colorScheme={version.colorScheme}>
                <ColorDot color={version.colorScheme.primary} />
                <ColorDot color={version.colorScheme.secondary} />
                <ColorDot color={version.colorScheme.background} />
                <ColorDot color={version.colorScheme.text} />
              </ColorPreview>
            </VersionItem>
          ))}
        </VersionList>
      </VersionPanel>
    </VersionSelectorContainer>
  );
};
