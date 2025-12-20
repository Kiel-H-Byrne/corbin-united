"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styled from "styled-components";

const NavContainer = styled.header`
  width: 100%;
  background: ${(p) => p.theme.headerGlass};
  backdrop-filter: ${(p) => p.theme.glassBlur};
  box-shadow: ${(p) => p.theme.shadows.md};
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const NavInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${(p) => p.theme.spacing.md}px ${(p) => p.theme.spacing.lg}px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${(p) => p.theme.spacing.sm}px;
  text-decoration: none;
  color: ${(p) => p.theme.colors.accent};
`;

const LogoCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(p) => p.theme.colors.accent};
  border-radius: 50%;
  width: 48px;
  height: 48px;
  font-size: 1.2rem;
  font-weight: 700;
  color: ${(p) => p.theme.colors.surface};
`;

const LogoText = styled.span`
  font-family: ${(p) => p.theme.typography.headingFont};
  font-weight: 700;
  font-size: ${(p) => p.theme.typography.h4Size}px;
  color: ${(p) => p.theme.colors.accent};
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLinks = styled.nav<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: ${(p) => p.theme.spacing.sm}px;

  @media (max-width: 900px) {
    position: fixed;
    top: 72px;
    left: 0;
    right: 0;
    background: ${(p) => p.theme.colors.surface};
    flex-direction: column;
    padding: ${(p) => p.theme.spacing.lg}px;
    box-shadow: ${(p) => p.theme.shadows.lg};
    transform: translateY(${(p) => (p.$isOpen ? "0" : "-120%")});
    opacity: ${(p) => (p.$isOpen ? 1 : 0)};
    transition: ${(p) => p.theme.transitions.default};
    pointer-events: ${(p) => (p.$isOpen ? "auto" : "none")};
  }
`;

const NavLink = styled(Link)<{ $active?: boolean }>`
  padding: ${(p) => p.theme.spacing.sm}px ${(p) => p.theme.spacing.md}px;
  font-family: ${(p) => p.theme.typography.fontFamily};
  font-weight: ${(p) => p.theme.typography.bodyFontWeightMedium};
  font-size: ${(p) => p.theme.typography.body1}px;
  color: ${(p) => (p.$active ? p.theme.colors.surface : p.theme.colors.text)};
  background: ${(p) => (p.$active ? p.theme.colors.accent : "transparent")};
  border-radius: ${(p) => p.theme.radii.medium}px;
  text-decoration: none;
  transition: ${(p) => p.theme.transitions.fast};

  &:hover {
    background: ${(p) =>
      p.$active ? p.theme.colors.accentHover : p.theme.colors.accentLight};
    color: ${(p) =>
      p.$active ? p.theme.colors.surface : p.theme.colors.accent};
    text-decoration: none;
  }

  @media (max-width: 900px) {
    width: 100%;
    text-align: center;
    padding: ${(p) => p.theme.spacing.md}px;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: ${(p) => p.theme.spacing.sm}px;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;

const HamburgerLine = styled.span<{ $isOpen: boolean; $index: number }>`
  width: 24px;
  height: 2px;
  background: ${(p) => p.theme.colors.accent};
  transition: ${(p) => p.theme.transitions.fast};
  transform-origin: center;
  ${(p) => {
    if (!p.$isOpen) return "";
    if (p.$index === 0) return "transform: translateY(7px) rotate(45deg);";
    if (p.$index === 1) return "opacity: 0;";
    if (p.$index === 2) return "transform: translateY(-7px) rotate(-45deg);";
    return "";
  }}
`;

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/health", label: "Health" },
  { href: "/finances", label: "Finances" },
  { href: "/education", label: "Education" },
  { href: "/events", label: "Events" },
  { href: "/about", label: "About" },
  { href: "/family-album", label: "Album" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <NavContainer>
      <NavInner>
        <LogoLink href="/">
          <LogoCircle>CU</LogoCircle>
          <LogoText>Corbin United Inc.</LogoText>
        </LogoLink>
        <HamburgerButton
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <HamburgerLine $isOpen={isOpen} $index={0} />
          <HamburgerLine $isOpen={isOpen} $index={1} />
          <HamburgerLine $isOpen={isOpen} $index={2} />
        </HamburgerButton>
        <NavLinks $isOpen={isOpen}>
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              $active={pathname === item.href}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </NavLinks>
      </NavInner>
    </NavContainer>
  );
}
