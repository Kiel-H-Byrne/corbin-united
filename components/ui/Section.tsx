"use client";

import styled from "styled-components";

export const ContentSection = styled.section.attrs({
  "data-component": "ContentSection",
} as any)`
  width: 100%;
  max-width: 900px;
  margin: ${(p) => p.theme.spacing.xl}px auto;
  background: ${(p) => p.theme.colors.surface};
  border-radius: ${(p) => p.theme.radii.large}px;
  box-shadow: ${(p) => p.theme.cardShadow};
  padding: ${(p) => p.theme.spacing.xl}px ${(p) => p.theme.spacing.lg}px;
`;

export const SectionTitle = styled.h2.attrs({
  "data-component": "SectionTitle",
} as any)`
  font-size: ${(p) => p.theme.typography.h2Size}px;
  color: ${(p) => p.theme.colors.accent};
  font-family: "Merriweather", serif;
  font-weight: ${(p) => p.theme.typography.headingFontWeight};
  margin: 0 0 ${(p) => p.theme.spacing.md}px 0;
`;

export const SectionText = styled.p.attrs({
  "data-component": "SectionText",
} as any)`
  color: ${(p) => p.theme.colors.textSecondary};
  font-size: ${(p) => p.theme.typography.fontSize}px;
  font-family: "Merriweather", serif;
  margin-bottom: ${(p) => p.theme.spacing.md}px;
`;

export const ResourceTile = styled.a.attrs({
  "data-component": "ResourceTile",
  target: "_blank",
  rel: "noopener noreferrer",
})`
  display: flex;
  align-items: center;
  gap: ${(p) => p.theme.spacing.sm}px;
  background: ${(p) => p.theme.colors.surfaceAlt};
  border-radius: ${(p) => p.theme.radii.medium}px;
  padding: ${(p) => p.theme.spacing.md}px;
  margin-bottom: ${(p) => p.theme.spacing.sm}px;
  color: ${(p) => p.theme.colors.accent};
  font-weight: 500;
  text-decoration: none;
  border: 1.5px solid ${(p) => p.theme.colors.accent};
  transition: ${(p) => p.theme.transitions.default};
  svg {
    width: 20px;
    height: 20px;
  }
  &:hover,
  &:focus-visible {
    background: ${(p) => p.theme.colors.accentHover};
    color: ${(p) => p.theme.colors.surface};
  }
`;

