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

interface SocialLink {
  title: string;
  url: string;
  icon: string;
}

const socialLinks: SocialLink[] = [
  {
    title: "GitHub",
    url: "https://github.com/rum-n",
    icon: "🐙",
  },
  {
    title: "Bluesky",
    url: "https://bsky.app/profile/room-n.bsky.social",
    icon: "☁️",
  },
  {
    title: "X (Twitter)",
    url: "https://x.com/room_n",
    icon: "𝕏",
  },
  {
    title: "Medium",
    url: "https://room-n.medium.com/",
    icon: "📝",
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/rmanev/",
    icon: "💼",
  },
  {
    title: "Xing",
    url: "https://www.xing.com/profile/Rumen_Manev",
    icon: "🔗",
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
                  onClick={() => handleSocialClick(link.url)}
                  aria-label={link.title}
                >
                  <span role="img" aria-label={link.title}>
                    {link.icon}
                  </span>
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
