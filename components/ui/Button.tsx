"use client";

import styled from "styled-components";

export const Button = styled.a.attrs({
  "data-component": "Button",
  tabIndex: 0,
  role: "button",
})`
  display: inline-block;
  background: ${(p) => p.theme.colors.accent};
  color: ${(p) => p.theme.colors.surface};
  border: none;
  border-radius: ${(p) => p.theme.radii.full}px;
  padding: ${(p) => p.theme.spacing.sm}px ${(p) => p.theme.spacing.lg}px;
  font-size: ${(p) => p.theme.typography.fontSize}px;
  font-family: "Merriweather", serif;
  font-weight: ${(p) => p.theme.typography.headingFontWeight};
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  margin-top: ${(p) => p.theme.spacing.sm}px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.13);
  transition: ${(p) => p.theme.transitions.default};
  text-decoration: none;
  outline: none;
  &:hover,
  &:focus-visible {
    background: ${(p) => p.theme.colors.accentHover};
    color: ${(p) => p.theme.colors.surface};
  }
`;

