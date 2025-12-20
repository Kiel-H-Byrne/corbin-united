"use client";

import styled from "styled-components";

export const SectionTiles = styled.nav.attrs({
  "data-component": "SectionTiles",
  role: "navigation",
  "aria-label": "Homepage sections",
})`
  display: flex;
  flex-wrap: wrap;
  gap: ${(p) => p.theme.spacing.lg}px;
  justify-content: center;
  margin: ${(p) => p.theme.spacing.xl}px 0;
`;

export const Tile = styled.button.attrs({ "data-component": "Tile", tabIndex: 0 })`
  background: ${(p) => p.theme.colors.surfaceAlt};
  border: 2px solid ${(p) => p.theme.colors.accent};
  color: ${(p) => p.theme.colors.text};
  border-radius: ${(p) => p.theme.radii.large}px;
  box-shadow: ${(p) => p.theme.cardShadow};
  padding: ${(p) => p.theme.spacing.lg}px ${(p) => p.theme.spacing.xl}px;
  min-width: 160px;
  min-height: 120px;
  font-size: ${(p) => p.theme.typography.h6Size}px;
  font-family: "Merriweather", serif;
  font-weight: ${(p) => p.theme.typography.headingFontWeight};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${(p) => p.theme.spacing.sm}px;
  cursor: pointer;
  transition: ${(p) => p.theme.transitions.default};
  outline: none;
  &:hover,
  &:focus-visible {
    background: ${(p) => p.theme.colors.accentHover};
    color: ${(p) => p.theme.colors.surface};
    border-color: ${(p) => p.theme.colors.accentHover};
  }
`;

export const TileIcon = styled.span.attrs({ "data-component": "TileIcon" } as any)`
  font-size: 2.2rem;
  margin-bottom: ${(p) => p.theme.spacing.xs}px;
  display: grid;
  place-items: center;
  line-height: 0;
  svg {
    width: 34px;
    height: 34px;
  }
`;

