export const tokens = {
  colors: {
    background: "#ACC0C6",
    surface: "#ffffff",
    surfaceAlt: "#f2f2f2",
    text: "#22223b",
    heartbeat: "#ff1500",
    textSecondary: "#565A5C",
    textTertiary: "#A5ACAF",
    button: "#004C54",
    buttonHover: "#004C5490",
    subtext: "#6e6e6e",
    accent: "#004C54",
    accentHover: "#004C5490",
    border: "#e0e0e0",
    secondary: "#ACC0C6",
    warn: "#FFC940",
    error: "#FF426A",
    info: "#4DDDF6",
    textMuted: "#565A5C",
    success: "#10EF75",

    fileTypeColors: {
      folder: "#FF8A00",
      code: "#3385FF",
      image: "#33CC33",
      json: "#FFCC00",
      stylesheet: "#A459D1",
      html: "#FF5E99",
      pdf: "#f40f02",
    },
    brandPurple: "#6d1ed4",
    brandGreen: "#00d632",
  },
  radii: { small: 6, medium: 12, large: 24, full: 9999 },
  spacing: { xs: 4, sm: 8, md: 16, lg: 24, xl: 32 },
  typography: {
    fontFamily: "'Merriweather', serif",
    codeFont: "'Fira Code', monospace",
    fontSize: 17,
    h2Size: 25,
    h6Size: 19,
    body2: 18,
    h1Size: 36,
    subscript: 13,
    bodyFontWeight: 400,
    headingFontWeight: 700,
  },
  strokeWidth: 2,
  transitions: { default: "all 0.25s cubic-bezier(.4,.1,.25,1)" },
  cardShadow: "0 4px 16px rgba(0,0,0,0.08)",
  headerGlass: "rgba(255,255,255,0.80)",
  glassBlur: "blur(12px)",
  glassTint: "rgba(0,0,0,0.03)",
};

export type Theme = typeof tokens;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
