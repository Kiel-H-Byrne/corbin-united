"use client";

import styled from "styled-components";

export const SectionTiles = styled.nav.attrs({
  "data-component": "SectionTiles",
  role: "navigation",
  "aria-label": "Homepage sections",
})`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${(p) => p.theme.spacing.lg}px;
  margin: ${(p) => p.theme.spacing.xl}px 0;
  width: 100%;
`;

export const Tile = styled.button.attrs({
  "data-component": "Tile",
  tabIndex: 0,
})`
  background: ${(p) => p.theme.colors.surface};
  border: 1px solid ${(p) => p.theme.colors.border};
  color: ${(p) => p.theme.colors.text};
  border-radius: ${(p) => p.theme.radii.large}px;
  box-shadow: ${(p) => p.theme.shadows.sm};
  padding: ${(p) => p.theme.spacing.xl}px;
  min-height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${(p) => p.theme.spacing.md}px;
  cursor: pointer;
  transition: ${(p) => p.theme.transitions.default};
  outline: none;
  text-align: center;

  h3 {
    font-family: ${(p) => p.theme.typography.headingFont};
    font-size: ${(p) => p.theme.typography.h4Size}px;
    font-weight: ${(p) => p.theme.typography.headingFontWeight};
    margin: 0;
    color: ${(p) => p.theme.colors.accent};
    transition: ${(p) => p.theme.transitions.fast};
  }

  p {
    font-family: ${(p) => p.theme.typography.fontFamily};
    font-size: ${(p) => p.theme.typography.body2}px;
    color: ${(p) => p.theme.colors.textSecondary};
    margin: 0;
    line-height: 1.5;
  }

  &:hover,
  &:focus-visible {
    transform: translateY(-4px);
    box-shadow: ${(p) => p.theme.shadows.lg};
    border-color: ${(p) => p.theme.colors.accent};

    h3 {
      color: ${(p) => p.theme.colors.accentHover};
    }
  }

  &:active {
    transform: translateY(-2px);
    box-shadow: ${(p) => p.theme.shadows.md};
  }
`;

export const TileIcon = styled.span.attrs({
  "data-component": "TileIcon",
} as any)`
  width: 64px;
  height: 64px;
  border-radius: ${(p) => p.theme.radii.medium}px;
  background: ${(p) => p.theme.colors.accentLight};
  display: grid;
  place-items: center;
  transition: ${(p) => p.theme.transitions.fast};

  svg {
    width: 32px;
    height: 32px;
    color: ${(p) => p.theme.colors.accent};
  }

  ${Tile}:hover &,
  ${Tile}:focus-visible & {
    background: ${(p) => p.theme.colors.accent};

    svg {
      color: ${(p) => p.theme.colors.surface};
    }
  }
`;
