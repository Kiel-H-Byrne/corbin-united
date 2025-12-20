"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
    background: ${(p) => p.theme.colors.background};
    color: ${(p) => p.theme.colors.text};
    margin: 0;
    padding: 0;
    font-family: ${(p) => p.theme.typography.fontFamily};
    font-size: ${(p) => p.theme.typography.fontSize}px;
    min-height: 100vh;
    overflow-x: hidden;
    transition: background 0.3s;
  }
  * { box-sizing: border-box; }
  :focus-visible {
    outline: 2px solid ${(p) => p.theme.colors.accent};
  }
`;

