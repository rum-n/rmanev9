import { useLocation } from "react-router-dom";
import styled from "styled-components";

type LayoutProps = {
  children: React.ReactNode;
};

const LayoutContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: var(--space-2xl) var(--space-xl);
  background: linear-gradient(
    135deg,
    var(--bg-primary) 0%,
    var(--bg-secondary) 100%
  );

  @media (max-width: 768px) {
    padding: var(--space-lg) var(--space-md);
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 480px) {
    padding: var(--space-md) var(--space-sm);
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  position: relative;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: var(--space-xl);
  }
`;

const SocialLinksContainer = styled.div`
  position: fixed;
  top: 50%;
  right: var(--space-xl);
  transform: translateY(-50%);
  z-index: var(--z-sticky);

  @media (max-width: 1024px) {
    position: absolute;
    top: var(--space-lg);
    right: var(--space-lg);
    transform: none;
  }

  @media (max-width: 768px) {
    position: static;
    margin-top: var(--space-xl);
    display: flex;
    justify-content: center;
    gap: var(--space-md);
    order: 2;
  }

  @media (max-width: 480px) {
    margin-top: var(--space-lg);
    gap: var(--space-sm);
  }
`;

const SocialLinksList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--space-sm);
  }

  @media (max-width: 480px) {
    gap: var(--space-xs);
  }
`;

const SocialLink = styled.li`
  position: relative;
`;

const SocialButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: var(--radius-lg);
  background: var(--bg-surface);
  border: 1px solid var(--bg-surface-hover);
  color: var(--text-secondary);
  font-size: 1.1rem;
  transition: all var(--transition-normal);
  backdrop-filter: blur(10px);

  &:hover {
    background: var(--bg-surface-hover);
    color: var(--text-primary);
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }

  @media (max-width: 768px) {
    width: 44px;
    height: 44px;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    font-size: 0.9rem;
  }
`;

const SocialTooltip = styled.div`
  position: absolute;
  right: calc(100% + var(--space-sm));
  top: 50%;
  transform: translateY(-50%);
  background: var(--bg-tertiary);
  color: var(--text-primary);
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-md);
  font-size: 0.875rem;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all var(--transition-fast);
  border: 1px solid var(--bg-surface-hover);
  backdrop-filter: blur(10px);
  z-index: var(--z-tooltip);

  ${SocialButton}:hover & {
    opacity: 1;
    visibility: visible;
  }

  @media (max-width: 1024px) {
    position: static;
    opacity: 1;
    visibility: visible;
    background: transparent;
    color: var(--text-secondary);
    padding: var(--space-xs) 0;
    border: none;
    font-size: 0.75rem;
    text-align: center;
    margin-top: var(--space-xs);
    white-space: normal;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

// SVG Icon Components
const GitHubIcon = () => (
  <IconWrapper>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  </IconWrapper>
);

const TwitterIcon = () => (
  <IconWrapper>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  </IconWrapper>
);

const MediumIcon = () => (
  <IconWrapper>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
  </IconWrapper>
);

const LinkedInIcon = () => (
  <IconWrapper>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  </IconWrapper>
);

interface SocialLink {
  title: string;
  url: string;
  icon: React.ReactNode;
}

const socialLinks: SocialLink[] = [
  {
    title: "GitHub",
    url: "https://github.com/rum-n",
    icon: <GitHubIcon />,
  },
  {
    title: "X (Twitter)",
    url: "https://x.com/room_n",
    icon: <TwitterIcon />,
  },
  {
    title: "Medium",
    url: "https://room-n.medium.com/",
    icon: <MediumIcon />,
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/rmanev/",
    icon: <LinkedInIcon />,
  },
];

export const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  const handleSocialClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <LayoutContainer>
      <ContentWrapper>{children}</ContentWrapper>

      {!location.pathname.includes("/writing/") && (
        <SocialLinksContainer>
          <SocialLinksList>
            {socialLinks.map((link) => (
              <SocialLink key={link.title}>
                <SocialButton
                  title={link.title}
                  onClick={() => handleSocialClick(link.url)}
                  aria-label={link.title}
                >
                  {link.icon}
                </SocialButton>
                <SocialTooltip>{link.title}</SocialTooltip>
              </SocialLink>
            ))}
          </SocialLinksList>
        </SocialLinksContainer>
      )}
    </LayoutContainer>
  );
};
