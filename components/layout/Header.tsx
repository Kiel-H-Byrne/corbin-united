"use client";

import styled from "styled-components";
import { HeroCarousel } from "./HeroCarousel";

const HeaderContainer = styled.header.attrs({
  "data-component": "Header",
} as any)`
  width: 100%;
  background: ${(p) => p.theme.headerGlass};
  backdrop-filter: ${(p) => p.theme.glassBlur};
  box-shadow: ${(p) => p.theme.cardShadow};
  padding: ${(p) => p.theme.spacing.lg}px 0 ${(p) => p.theme.spacing.md}px 0;
  border-bottom: 2px solid ${(p) => p.theme.colors.accent};
  text-align: center;
`;

const LogoCircle = styled.div.attrs({ "data-component": "Logo" } as any)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${(p) => p.theme.colors.accent};
  border-radius: 50%;
  width: 80px;
  height: 80px;
  margin-bottom: ${(p) => p.theme.spacing.sm}px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  font-size: 2.5rem;
  font-weight: 700;
  color: ${(p) => p.theme.colors.surface};
  user-select: none;
`;

const OrgName = styled.h1.attrs({ "data-component": "OrgName" } as any)`
  font-size: ${(p) => p.theme.typography.h1Size}px;
  font-family: "Merriweather", serif;
  font-weight: ${(p) => p.theme.typography.headingFontWeight};
  color: ${(p) => p.theme.colors.accent};
  margin: 0 0 ${(p) => p.theme.spacing.sm}px 0;
  letter-spacing: 1px;
`;

const Mission = styled.p.attrs({ "data-component": "Mission" } as any)`
  font-size: ${(p) => p.theme.typography.h6Size}px;
  color: ${(p) => p.theme.colors.textSecondary};
  margin: 0 0 ${(p) => p.theme.spacing.md}px 0;
  font-family: "Merriweather", serif;
  font-weight: ${(p) => p.theme.typography.headingFontWeight};
`;

const MissionSub = styled.p.attrs({ "data-component": "MissionSub" } as any)`
  font-size: ${(p) => p.theme.typography.body2}px;
  color: ${(p) => p.theme.colors.textSecondary};
  margin: 0 0 ${(p) => p.theme.spacing.md}px 0;
  font-family: "Merriweather", serif;
  font-weight: ${(p) => p.theme.typography.bodyFontWeight};
`;

const HeroSection = styled.section.attrs({
  "data-component": "HeroSection",
} as any)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    120deg,
    ${(p) => p.theme.colors.surface} 80%,
    ${(p) => p.theme.colors.surfaceAlt} 100%
  );
  padding: 0;
  position: relative;
  overflow: hidden;
`;

export function Header() {
  return (
    <HeaderContainer>
      <LogoCircle aria-label="Corbin United Inc. Logo">CUF</LogoCircle>
      <OrgName>Corbin United Inc., a 501(c)(3) Organization</OrgName>
      <Mission>
        Focusing on Family Health, History and Enhancing our Well-Being
      </Mission>
      <MissionSub>Family Focused - Health Driven</MissionSub>
      <HeroSection>
        <HeroCarousel />
      </HeroSection>
    </HeaderContainer>
  );
}
