"use client";

import styled from "styled-components";

export const Input = styled.input.attrs({ "data-component": "Input" } as any)`
  padding: ${(p) => p.theme.spacing.sm}px ${(p) => p.theme.spacing.md}px;
  border-radius: ${(p) => p.theme.radii.medium}px;
  border: 1.5px solid ${(p) => p.theme.colors.accent};
  font-size: ${(p) => p.theme.typography.fontSize}px;
  background: ${(p) => p.theme.colors.surfaceAlt};
  color: ${(p) => p.theme.colors.text};
  font-family: "Merriweather", serif;
  &:focus {
    border-color: ${(p) => p.theme.colors.accentHover};
    outline: 2px solid ${(p) => p.theme.colors.accentHover};
  }
`;

export const TextArea = styled.textarea.attrs({
  "data-component": "TextArea",
} as any)`
  padding: ${(p) => p.theme.spacing.sm}px ${(p) => p.theme.spacing.md}px;
  border-radius: ${(p) => p.theme.radii.medium}px;
  border: 1.5px solid ${(p) => p.theme.colors.accent};
  font-size: ${(p) => p.theme.typography.fontSize}px;
  background: ${(p) => p.theme.colors.surfaceAlt};
  color: ${(p) => p.theme.colors.text};
  font-family: "Merriweather", serif;
  min-height: 64px;
  resize: vertical;
  &:focus {
    border-color: ${(p) => p.theme.colors.accentHover};
    outline: 2px solid ${(p) => p.theme.colors.accentHover};
  }
`;

export const Form = styled.form.attrs({ "data-component": "Form" } as any)`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.spacing.md}px;
  margin-bottom: ${(p) => p.theme.spacing.md}px;
`;

