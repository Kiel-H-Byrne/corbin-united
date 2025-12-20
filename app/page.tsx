"use client";

/*
 * Corbin United Inc. Website – MVP
 * All requirements, mockup, and style guide implemented by Terrell (THN Twin Developer Agent)
 * Pair programming comments for James included as // TODO(James): ...
 */
import React, { useRef, useState } from "react";
import styled, {
  ThemeProvider,
  createGlobalStyle,
  css,
  keyframes,
} from "styled-components";

// ======== THEME & GLOBALSTYLE ========
const tokens = {
  colors: {
    background: "#f8f9fa", // Light theme background
    surface: "#ffffff",
    surfaceAlt: "#f2f2f2",
    text: "#22223b",
    heartbeat: "#ff1500",
    textSecondary: "#4A4A4D",
    textTertiary: "#8E8E95",
    button: "#3366cc",
    buttonHover: "#254a91",
    subtext: "#6e6e6e",
    accent: "#3366cc",
    accentHover: "#254a91",
    border: "#e0e0e0",
    secondary: "#BFBFBF",
    warn: "#FFC940",
    error: "#FF426A",
    info: "#4DDDF6",
    textMuted: "#4A4A4D",
    success: "#10EF75",
    agentNat: "#9333EA",
    agentBrian: "#4DDDF6",
    agentReqqy: "#FF8A00",
    agentJosh: "#E44AFF",
    agentJames: "#22C55E",
    agentTerrell: "#F9C846",
    agentAntosh: "#29A9E2",
    agentManMan: "#7975F7",
    agentLia: "#FF3390",
    agentCompass: "#BCBABE",
    fileTypeColors: {
      folder: "#FF8A00",
      code: "#3385FF",
      image: "#33CC33",
      json: "#FFCC00",
      stylesheet: "#A459D1",
      html: "#FF5E99",
      pdf: "#f40f02",
    },
  },
  radii: { small: 6, medium: 12, large: 24, full: 9999 },
  spacing: { xs: 4, sm: 8, md: 16, lg: 24, xl: 32 },
  typography: {
    fontFamily: "'Merriweather', serif", // Professional serif font
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

const GlobalStyle = createGlobalStyle`
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

// ======== SVG HERO MOCKUP ========
const heartbeatAnim = keyframes`
  0% { transform: scale(1); filter: drop-shadow(0 0 0 #3366cc); }
  30% { transform: scale(1.06); filter: drop-shadow(0 0 10px #3366cc); }
  50% { transform: scale(1); filter: drop-shadow(0 0 0 #3366cc); }
  100% { transform: scale(1); filter: drop-shadow(0 0 0 #3366cc); }
`;

const HeroSVG = styled.svg.attrs({
  "data-component": "HeroSVG",
  "aria-label": "Community family illustration",
  role: "img",
})`
  width: 320px;
  height: 160px;
  display: block;
  margin: 0 auto;
  .heartbeat {
    transform-origin: 160px 70px;
    animation: ${heartbeatAnim} 2.2s infinite cubic-bezier(0.4, 0.1, 0.25, 1);
  }
`;

export type FloatingImage = {
  url: string;
  title: string;
};

type Props = {
  images: FloatingImage[];
};

export const PhotoGrid: React.FC<Props> = ({ images }) => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <>
      <GridContainer>
        {images.map((img, i) => (
          <PhotoCard key={i} onClick={() => setLightboxImage(img.url)}>
            <img src={img.url} alt={img.title} />
            <Caption>
              <span>{img.title}</span>
            </Caption>
          </PhotoCard>
        ))}
      </GridContainer>
      {lightboxImage && (
        <Lightbox onClick={() => setLightboxImage(null)}>
          <LightboxImage src={lightboxImage} alt="Lightbox image" />
        </Lightbox>
      )}
    </>
  );
};

const Lightbox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const LightboxImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
`;

const GridContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const PhotoCard = styled.article`
  position: relative;
  overflow: hidden;
  border-radius: ${(p) => p.theme.radii.large}px;
  box-shadow: ${(p) => p.theme.cardShadow};
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 18px 60px rgba(0, 0, 0, 0.12);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const ComingSoonBlock = styled.div`
  position: relative;
  background: ${(p) => p.theme.colors.surfaceAlt};
  border: 1.5px dashed ${(p) => p.theme.colors.accent};
  border-radius: ${(p) => p.theme.radii.large}px;
  padding: ${(p) => p.theme.spacing.lg}px;
  margin: ${(p) => p.theme.spacing.lg}px 0;
  text-align: center;
  color: ${(p) => p.theme.colors.text};
  font-family: "Merriweather", serif;
  font-size: ${(p) => p.theme.typography.h6Size}px;
  box-shadow: ${(p) => p.theme.cardShadow};

  /* Makes children unclickable when overlay is active */
  &.disabled {
    pointer-events: none;
    opacity: 0.7;
  }
`;

const ComingSoonOverlay = styled.div`
  position: absolute;
  inset: 0;
  border-radius: inherit;

  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: ${(p) => p.theme.glassBlur};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: ${(p) => p.theme.spacing.lg}px;
  text-align: center;
  z-index: 5;

  animation: fadeIn 0.35s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const OverlayHeading = styled.h1`
  margin: 0 0 ${(p) => p.theme.spacing.sm}px 0;
  padding: 0;

  font-size: ${(p) => p.theme.typography.h1Size}px;
  font-weight: ${(p) => p.theme.typography.headingFontWeight};
  color: black;
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
`;

const OverlayTitle = styled.h2`
  margin: 0 0 ${(p) => p.theme.spacing.sm}px 0;
  padding: 0;

  font-size: ${(p) => p.theme.typography.h2Size}px;
  font-weight: ${(p) => p.theme.typography.headingFontWeight};
  color: ${(p) => p.theme.colors.info};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`;

const OverlayMessage = styled.div`
  font-size: ${(p) => p.theme.typography.body2}px;
  color: ${(p) => p.theme.colors.surface};
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
  max-width: 80%;
  line-height: 1.5;
`;

export const AvatarIcon = ({ size = 96, color = "#3366cc", stroke = 2 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Outer ring */}
    <circle
      cx="50"
      cy="50"
      r="46"
      stroke={color}
      strokeWidth={stroke}
      strokeLinecap="round"
    />

    {/* Head */}
    <circle
      cx="50"
      cy="38"
      r="18"
      stroke={color}
      strokeWidth={stroke}
      strokeLinecap="round"
    />

    {/* Shoulders */}
    <path
      d="M20 82c6-18 24-22 30-22s24 4 30 22"
      stroke={color}
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function ComingSoon({ title, titleComponent, message, icon, children }: any) {
  const hasTextContent = title || titleComponent || message;

  return (
    <ComingSoonBlock className="disabled">
      <ComingSoonOverlay>
        {/* ICON — Shown first, centered, optional */}
        {icon && <IconWrapper onlyIcon={!hasTextContent}>{icon}</IconWrapper>}

        {/* HIDE ALL TEXT IF ONLY ICON */}
        {!icon && <OverlayHeading>Launching Soon...</OverlayHeading>}

        {icon && hasTextContent && (
          <OverlayHeading>Launching Soon...</OverlayHeading>
        )}

        {titleComponent
          ? titleComponent
          : title && <OverlayTitle>{title}</OverlayTitle>}

        {message && <OverlayMessage>{message}</OverlayMessage>}
      </ComingSoonOverlay>

      {children}
    </ComingSoonBlock>
  );
}

/* ========================= CAPTION ========================= */

const Caption = styled.div`
  position: absolute;
  inset-inline: 0;
  bottom: 0;
  padding: ${(p) => p.theme.spacing.md}px;
  font-size: ${(p) => p.theme.typography.h6Size}px;
  font-weight: ${(p) => p.theme.typography.headingFontWeight};
  color: ${(p) => p.theme.colors.text};
  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 0.92),
    rgba(255, 255, 255, 0.4) 70%,
    transparent
  );
  backdrop-filter: ${(p) => p.theme.glassBlur};
  opacity: 1;
  transform: translateY(0);
  transition: ${(p) => p.theme.transitions.default};

  ${PhotoCard}:hover & {
    opacity: 1;
    transform: translateY(0);
  }

  span {
    display: block;
    font-family: ${(p) => p.theme.typography.fontFamily};
  }
`;

// ======== STYLED COMPONENTS ========
const PageWrapper = styled.div.attrs({
  "data-component": "PageWrapper",
} as any)`
  min-height: 100vh;
  background: ${(p) => p.theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.header.attrs({ "data-component": "Header" } as any)`
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
  color: #fff;
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
  /* margin: 0 auto; */
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    120deg,
    ${(p) => p.theme.colors.surface} 80%,
    ${(p) => p.theme.colors.surfaceAlt} 100%
  );
  /* border-radius: ${(p) => p.theme.radii.large}px; */
  /* box-shadow: ${(p) => p.theme.cardShadow}; */
  padding: 0;
  /* margin-top: ${(p) => p.theme.spacing.xl}px; */
  position: relative;
  overflow: hidden;
`;

const SectionTiles = styled.nav.attrs({
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

const Tile = styled.button.attrs({ "data-component": "Tile", tabIndex: 0 })`
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

const TileIcon = styled.span.attrs({ "data-component": "TileIcon" } as any)`
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

const ContentSection = styled.section.attrs({
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

const SectionTitle = styled.h2.attrs({
  "data-component": "SectionTitle",
} as any)`
  font-size: ${(p) => p.theme.typography.h2Size}px;
  color: ${(p) => p.theme.colors.accent};
  font-family: "Merriweather", serif;
  font-weight: ${(p) => p.theme.typography.headingFontWeight};
  margin: 0 0 ${(p) => p.theme.spacing.md}px 0;
`;

const SectionText = styled.p.attrs({ "data-component": "SectionText" } as any)`
  color: ${(p) => p.theme.colors.textSecondary};
  font-size: ${(p) => p.theme.typography.fontSize}px;
  font-family: "Merriweather", serif;
  margin-bottom: ${(p) => p.theme.spacing.md}px;
`;

const ResourceTile = styled.a.attrs({
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

const EventCarousel = styled.div.attrs({
  "data-component": "EventCarousel",
  role: "region",
  "aria-label": "Upcoming events",
})`
  display: flex;
  gap: ${(p) => p.theme.spacing.lg}px;
  overflow-x: auto;
  padding-bottom: ${(p) => p.theme.spacing.md}px;
  margin-bottom: ${(p) => p.theme.spacing.md}px;
`;

const EventCard = styled.div.attrs({ "data-component": "EventCard" } as any)`
  min-width: 220px;
  background: ${(p) => p.theme.colors.surfaceAlt};
  border-radius: ${(p) => p.theme.radii.large}px;
  box-shadow: ${(p) => p.theme.cardShadow};
  padding: ${(p) => p.theme.spacing.md}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${(p) => p.theme.spacing.sm}px;
`;

const NextEventCard = styled.div.attrs({
  "data-component": "NextEventCard",
} as any)`
  display: flex;
  background: ${(p) => p.theme.colors.surfaceAlt};
  border-radius: ${(p) => p.theme.radii.large}px;
  box-shadow: ${(p) => p.theme.cardShadow};
  padding: ${(p) => p.theme.spacing.md}px;
  margin-bottom: ${(p) => p.theme.spacing.lg}px;
  gap: ${(p) => p.theme.spacing.md}px;
  width: 100%;
`;

const NextEventThumbnail = styled.img.attrs({
  "data-component": "NextEventThumbnail",
} as any)`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: ${(p) => p.theme.radii.medium}px;
`;

const NextEventDetails = styled.div.attrs({
  "data-component": "NextEventDetails",
} as any)`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
`;

const NextEventTitle = styled.h3.attrs({
  "data-component": "NextEventTitle",
} as any)`
  font-size: ${(p) => p.theme.typography.h6Size}px;
  color: ${(p) => p.theme.colors.accent};
  font-family: "Merriweather", serif;
  margin: 0 0 ${(p) => p.theme.spacing.sm}px 0;
`;

const NextEventInfo = styled.div.attrs({
  "data-component": "NextEventInfo",
} as any)`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.spacing.xs}px;
`;

const EventTitle = styled.h3`
  font-size: ${(p) => p.theme.typography.h6Size}px;
  color: ${(p) => p.theme.colors.accent};
  font-family: "Merriweather", serif;
  margin: 0;
`;

const Button = styled.a.attrs({
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

const LeaderGrid = styled.div.attrs({ "data-component": "LeaderGrid" } as any)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${(p) => p.theme.spacing.lg}px;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const LeaderCard = styled.div.attrs({ "data-component": "LeaderCard" } as any)`
  background: ${(p) => p.theme.colors.surfaceAlt};
  border-radius: ${(p) => p.theme.radii.large}px;
  box-shadow: ${(p) => p.theme.cardShadow};
  padding: ${(p) => p.theme.spacing.md}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const LeaderImg = styled.img.attrs({ "data-component": "LeaderImg" } as any)`
  width: 72px;
  height: 72px;
  border-radius: ${(p) => p.theme.radii.full}px;
  object-fit: cover;
  margin-bottom: ${(p) => p.theme.spacing.sm}px;
`;

const LeaderName = styled.h3.attrs({ "data-component": "LeaderName" } as any)`
  font-size: ${(p) => p.theme.typography.h6Size}px;
  color: ${(p) => p.theme.colors.accent};
  font-family: "Merriweather", serif;
  margin: 0;
`;

const LeaderRole = styled.p.attrs({ "data-component": "LeaderRole" } as any)`
  color: ${(p) => p.theme.colors.textTertiary};
  margin: 0 0 ${(p) => p.theme.spacing.xs}px 0;
  font-size: ${(p) => p.theme.typography.subscript}px;
`;

const ExpertTitle = styled.span`
  font-style: italic;
  font-size: 0.95em;
`;

const ContactInfo = styled.div`
  margin-top: ${(p) => p.theme.spacing.md}px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: ${(p) => p.theme.spacing.md}px;
`;

const ContactLine = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${(p) => p.theme.spacing.sm}px;
  margin-bottom: ${(p) => p.theme.spacing.xs}px;
  svg {
    width: 18px;
    height: 18px;
  }
  &:hover {
    color: ${(p) => p.theme.colors.accent};
  }
`;

const Form = styled.form.attrs({ "data-component": "Form" } as any)`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.spacing.md}px;
  margin-bottom: ${(p) => p.theme.spacing.md}px;
`;

const Input = styled.input.attrs({ "data-component": "Input" } as any)`
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

const TextArea = styled.textarea.attrs({ "data-component": "TextArea" } as any)`
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

const Footer = styled.footer.attrs({ "data-component": "Footer" } as any)`
  width: 100vw;
  background: ${(p) => p.theme.colors.accent};
  color: #fff;
  margin-top: ${(p) => p.theme.spacing.xl}px;
  padding: ${(p) => p.theme.spacing.lg}px 0;
  font-family: "Merriweather", serif;
  /* Three-column layout */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${(p) => p.theme.spacing.lg}px;
  @media (max-width: 700px) {
    flex-direction: column;
    text-align: center;
  }
`;

const FooterCol = styled.div`
  min-width: 220px;
  flex: 1;
  padding: ${(p) => p.theme.spacing.sm}px ${(p) => p.theme.spacing.md}px;
`;

const FooterTitle = styled.h4`
  color: #fff;
  font-family: "Merriweather", serif;
  font-size: 1.1rem;
  margin-bottom: ${(p) => p.theme.spacing.sm}px;
  font-weight: 700;
`;

const FooterLink = styled.a`
  color: #fff;
  font-weight: 700;
  text-decoration: none;
  font-family: "Merriweather", serif;
  display: block;
  margin-bottom: ${(p) => p.theme.spacing.xs}px;
  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.buttonHover};
    text-decoration: underline;
  }
`;

const BaseIcon = styled.svg.attrs({
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  focusable: "false",
  "aria-hidden": true,
})`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`;

const ZelleIcon = styled((props: any) => (
  <svg {...props}>
    <path d="M13.559 24h-2.841a0.483 0.483 0 0 1 -0.483 -0.483v-2.765H5.638a0.667 0.667 0 0 1 -0.666 -0.666v-2.234a0.67 0.67 0 0 1 0.142 -0.412l8.139 -10.382h-7.25a0.667 0.667 0 0 1 -0.667 -0.667V3.914c0 -0.367 0.299 -0.666 0.666 -0.666h4.23V0.483c0 -0.266 0.217 -0.483 0.483 -0.483h2.841c0.266 0 0.483 0.217 0.483 0.483v2.765h4.323c0.367 0 0.666 0.299 0.666 0.666v2.137a0.67 0.67 0 0 1 -0.141 0.41l-8.19 10.481h7.665c0.367 0 0.666 0.299 0.666 0.666v2.477a0.667 0.667 0 0 1 -0.666 0.667h-4.32v2.765a0.483 0.483 0 0 1 -0.483 0.483Z" />
  </svg>
)).attrs({ viewBox: "0 0 24 24" })`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  path {
    fill: #6d1ed4;
  }
`;

const CashAppIcon = styled((props: any) => (
  <svg {...props}>
    <path d="M23.59 3.475a5.1 5.1 0 0 0 -3.05 -3.05c-1.31 -0.42 -2.5 -0.42 -4.92 -0.42H8.36c-2.4 0 -3.61 0 -4.9 0.4a5.1 5.1 0 0 0 -3.05 3.06C0 4.765 0 5.965 0 8.365v7.27c0 2.41 0 3.6 0.4 4.9a5.1 5.1 0 0 0 3.05 3.05c1.3 0.41 2.5 0.41 4.9 0.41h7.28c2.41 0 3.61 0 4.9 -0.4a5.1 5.1 0 0 0 3.06 -3.06c0.41 -1.3 0.41 -2.5 0.41 -4.9v-7.25c0 -2.41 0 -3.61 -0.41 -4.91zm-6.17 4.63 -0.93 0.93a0.5 0.5 0 0 1 -0.67 0.01 5 5 0 0 0 -3.22 -1.18c-0.97 0 -1.94 0.32 -1.94 1.21 0 0.9 1.04 1.2 2.24 1.65 2.1 0.7 3.84 1.58 3.84 3.64 0 2.24 -1.74 3.78 -4.58 3.95l-0.26 1.2a0.49 0.49 0 0 1 -0.48 0.39H9.63l-0.09 -0.01a0.5 0.5 0 0 1 -0.38 -0.59l0.28 -1.27a6.54 6.54 0 0 1 -2.88 -1.57v-0.01a0.48 0.48 0 0 1 0 -0.68l1 -0.97a0.49 0.49 0 0 1 0.67 0c0.91 0.86 2.13 1.34 3.39 1.32 1.3 0 2.17 -0.55 2.17 -1.42 0 -0.87 -0.88 -1.1 -2.54 -1.72 -1.76 -0.63 -3.43 -1.52 -3.43 -3.6 0 -2.42 2.01 -3.6 4.39 -3.71l0.25 -1.23a0.48 0.48 0 0 1 0.48 -0.38h1.78l0.1 0.01c0.26 0.06 0.43 0.31 0.37 0.57l-0.27 1.37c0.9 0.3 1.75 0.77 2.48 1.39l0.02 0.02c0.19 0.2 0.19 0.5 0 0.68z" />
  </svg>
)).attrs({ viewBox: "0 0 24 24" })`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  path {
    fill: #00d632;
  }
`;

const IconWrapper = styled.div<{ onlyIcon?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: ${(p) => (p.onlyIcon ? 0 : p.theme.spacing.md)}px;

  svg {
    display: block;
    max-width: 40%;
    max-height: 40%;
  }
`;

const CalendarIcon = () => (
  <BaseIcon>
    <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
  </BaseIcon>
);

const ClockIcon = () => (
  <BaseIcon>
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
  </BaseIcon>
);

const LocationIcon = () => (
  <BaseIcon>
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </BaseIcon>
);

const HeartIcon = () => (
  <BaseIcon>
    <path
      d="M12 21s-6.7-4.5-10-9C.5 7.5 3.5 3 7.5 3 9.7 3 11.2 4.2 12 5.6 12.8 4.2 14.3 3 16.5 3 20.5 3 23.5 7.5 22 12c-3.3 4.5-10 9-10 9z"
      fill="currentColor"
    />
  </BaseIcon>
);

const FinanceIcon = () => (
  <BaseIcon>
    <line
      x1="12"
      y1="2"
      x2="12"
      y2="22"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17 5H10.24C8.4506 5 7 6.567 7 8.5C7 10.433 8.4506 12 10.24 12H13.5385C15.4502 12 17 13.567 17 15.5C17 17.433 15.4502 19 13.5385 19H7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </BaseIcon>
);

const EducationIcon = () => (
  <BaseIcon>
    <path
      d="M12 4 3 9l9 5 9-5-9-5z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path
      d="M6 11v4c0 2 3 3 6 3s6-1 6-3v-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </BaseIcon>
);

const EventsIcon = () => (
  <BaseIcon>
    <rect
      x="4"
      y="5"
      width="16"
      height="15"
      rx="2"
      ry="2"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path
      d="M9 3v4M15 3v4"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M8 12h8"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M8 15h8"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </BaseIcon>
);

const PeopleIcon = () => (
  <BaseIcon>
    <circle
      cx="12"
      cy="9"
      r="3.2"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path
      d="M7 18.5c0-2.7 2.2-4.9 5-4.9s5 2.2 5 4.9"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </BaseIcon>
);

const AlbumIcon = () => (
  <BaseIcon>
    <rect
      x="3.5"
      y="7"
      width="17"
      height="12"
      rx="2"
      ry="2"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path
      d="M9 7l1.2-2h3.6L15 7"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <circle
      cx="12"
      cy="13"
      r="3"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path
      d="M6.5 11.5 9 14l1.2-1.2"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </BaseIcon>
);

const FileIcon = () => (
  <BaseIcon>
    <path
      d="M7 3h7l5 5v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 3v5h5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 14h1.2c.9 0 1.8-.6 1.8-1.7 0-1.1-.9-1.7-1.8-1.7H9V17"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <path
      d="M13 17v-6h1.4c1.1 0 2 .8 2 2s-.9 2-2 2H13"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <path
      d="M17.8 11H19v6h-1.2"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </BaseIcon>
);

const PhoneIcon = () => (
  <BaseIcon>
    <path
      d="M6.5 4h2l1 4-1.5 1.5a10.5 10.5 0 0 0 4.5 4.5L14 12l4 1v2a2 2 0 0 1-2.2 2C9.7 16.1 4.9 11.3 4 5.2A2 2 0 0 1 6.5 4z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </BaseIcon>
);

const MailIcon = () => (
  <BaseIcon>
    <rect
      x="3.5"
      y="6"
      width="17"
      height="12"
      rx="2"
      ry="2"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path
      d="M4.5 8 12 12.5 19.5 8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </BaseIcon>
);

// ======== APP DATA ========
const SECTION_LIST = [
  {
    key: "health",
    label: "Health Information",
    icon: <HeartIcon />,
    desc: "Resources, experts, and health info.",
  },
  {
    key: "finances",
    label: "Financial Information",
    icon: <FinanceIcon />,
    desc: "Bill help, fundraising, donations.",
  },
  {
    key: "education",
    label: "Scholarship Information",
    icon: <EducationIcon />,
    desc: "Scholarships and learning.",
  },
  {
    key: "events",
    label: "Upcoming Events",
    icon: <EventsIcon />,
    desc: "Upcoming and past events.",
  },
  {
    key: "about",
    label: "Corbin United Officers",
    icon: <PeopleIcon />,
    desc: "About us, leadership, mission.",
  },
  {
    key: "family-album",
    label: "Family Album",
    icon: <AlbumIcon />,
    desc: "Memories in picture form.",
  },
];

const HERO_CAROUSEL = [
  {
    title: "Message from our Matriarch Loretta Early",
    textContent: {
      greeting: "Dear Family",
      message:
        "Thank you all for honoring me as the Matriarch of this Beautiful Family...",
      closing:
        "...and thank you for giving me my flowers while I can see and smell them. God Bless all of you.",
      signature: { text: "God Bless", name: "Loretta Early" },
    },
    type: "video",
    aspect: "9:16",
    url: "https://firebasestorage.googleapis.com/v0/b/ai-slideshow.firebasestorage.app/o/assets%2Fclients%2Fcorbin-united-inc%2Fvideo%2Fcorbin-united-loretta-early-message-clip.3gp?alt=media",
  },
  {
    title: "Corbin Family Reunion 2023",
    textContent: {
      message: "We are so excited to see you all at the next reunion!",
      signature: { name: "July 5, 2023" },
    },
    type: "image",
    aspect: "16:9",
    url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
  },
];

// const FLOATING_PICTURES_GALLERY =[
//     {
//         title: "Image one Title", url: "https://img.url"
//     }
// ]

const HEALTH_RESOURCES = [
  { title: "Diabetes Care Guide (PDF)", url: "#", icon: <FileIcon /> },
  { title: "Community Health Centers (PDF)", url: "#", icon: <FileIcon /> },
];
const EDUCATION_RESOURCES = [
  { title: "College Prep Checklist (PDF)", url: "#", icon: <FileIcon /> },
  { title: "Scholarship Opportunities (PDF)", url: "#", icon: <FileIcon /> },
];
const FINANCES_RESOURCES = [
  { title: "Budgeting 101 (PDF)", url: "#", icon: <FileIcon /> },
  {
    title: "Financial Assistance Programs (PDF)",
    url: "#",
    icon: <FileIcon />,
  },
];

const LEADERSHIP = [
  {
    name: "Carl Williams",
    role: "President",
    img: "https://firebasestorage.googleapis.com/v0/b/ai-slideshow.firebasestorage.app/o/assets%2Fclients%2Fcorbin-united-inc%2Fofficers%2Fcorbin-united-officer-carl-williams.jpg?alt=media",
    phone: "301-267-2173",
    email: "president@corbinunitedinc.org",
  },
  {
    name: "Kenya Corbin-Prince",
    role: "Vice President",
    img: "",
    phone: "267-230-7616",
    email: "vicepresident@corbinunitedinc.org",
  },
  {
    name: "Marquita Corbin-Lane",
    role: "Treasurer",
    img: "",
    phone: "215-667-1741",
    email: "treasurer@corbinunitedinc.org",
  },
  {
    name: "Portia Conix",
    role: "Secretary",
    img: "https://firebasestorage.googleapis.com/v0/b/ai-slideshow.firebasestorage.app/o/assets%2Fclients%2Fcorbin-united-inc%2Fofficers%2Fcorbin-united-officer-portia-conix.jpg?alt=media",
    phone: "215-264-2004",
    email: "secretary@corbinunitedinc.org",
  },
];

const PROFESSIONALS = {
  health: {
    name: "Dr. Ada Lovelace",
    email: "ada@corbinunited.org",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    title: "Community Health Expert",
  },
  education: {
    name: "Prof. Katherine Johnson",
    email: "katherine@corbinunited.org",
    img: "https://randomuser.me/api/portraits/women/49.jpg",
    title: "Education Specialist",
  },
  finances: {
    name: "Mr. Benjamin Graham",
    email: "benjamin@corbinunited.org",
    img: "https://randomuser.me/api/portraits/men/50.jpg",
    title: "Financial Advisor",
  },
};

const UPCOMING_EVENTS = [
  {
    title: "New Year's Cabaret",
    date: "2025-12-31T19:00:00",
    location: "123 Main St, Anytown, USA",
    time: "7:00 PM",
    desc: "Ring in the New Year with style, soul, and unforgettable vibes at the 2025 New Year's Eve Cabaret! Join us for a night of celebration, community, music, and elegance as we count down to midnight together.",
    img: "https://firebasestorage.googleapis.com/v0/b/ai-slideshow.firebasestorage.app/o/assets%2Fclients%2Fcorbin-united-inc%2Fevents%2Fevent-flyer-2025-new-year-cabaret-corbin-united-inc.png?alt=media",
    thumbnailUrl:
      "https://firebasestorage.googleapis.com/v0/b/ai-slideshow.firebasestorage.app/o/assets%2Fclients%2Fcorbin-united-inc%2Fevents%2Fevent-flyer-2025-new-year-cabaret-corbin-united-inc.png?alt=media",
    descLists: [
      {
        title: "What to Expect",
        items: [
          "Live entertainment & cabaret-style performances",
          "A stylish, high-energy crowd",
          "A powerful New Year’s countdown experience",
          "A warm, welcoming atmosphere filled with connection and celebration",
        ],
      },
      {
        title: "BYOB",
        items: [
          "Light food, champagne toast & good vibes provided",
          "Bring your own to keep your party going.",
        ],
      },
    ],
    payment: {
      amount: { amount: "40", per: "person" },
      options: [
        {
          service: "CashApp",
          username: "$corbinunited2025",
          url: "https://cash.app/$corbinunited2025",
          icon: <CashAppIcon />,
        },
        {
          service: "Zelle",
          username: "corbinunited2025@gmail.com",
          icon: <ZelleIcon />,
        },
      ],
      note: "More at the door — secure your spot early!",
    },
    closingWords:
      "This is more than a party — it’s a New Year’s experience. Dress to impress, bring your friends, and step into 2025 surrounded by great people, great energy, and unforgettable moments.",
  },
  {
    title: "Scholarship Awards Night",
    date: "2024-09-10T18:00:00",
    location: "456 Oak Ave, Anytown, USA",
    time: "6:00 PM",
    desc: "Honoring our scholarship recipients.",
    img: "https://images.unsplash.com/photo-15151688339_06-d2a3b82b1e4b?auto=format&fit=crop&w=400&q=80",
    thumbnailUrl:
      "https://images.unsplash.com/photo-15151688339_06-d2a3b82b1e4b?auto=format&fit=crop&w=400&q=80",
  },
];

const PAST_EVENTS = [
  {
    title: "Spring Fundraiser",
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Community Picnic",
    img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80",
  },
];

// ======== ACCESSIBLE FORMS (Bill Assistance, Scholarship, Contact) ========
const initialBillForm = { name: "", email: "", need: "" };
const initialScholarshipForm = { name: "", email: "", essay: "" };
const initialContactForm = { name: "", email: "", message: "" };

// ======== MAIN APP ========
function App() {
  const [section, setSection] = useState<string | null>(null);
  const [billForm, setBillForm] = useState(initialBillForm);
  const [billSuccess, setBillSuccess] = useState(false);
  const [schForm, setSchForm] = useState(initialScholarshipForm);
  const [schSuccess, setSchSuccess] = useState(false);
  const [contactForm, setContactForm] = useState(initialContactForm);
  const [contactSuccess, setContactSuccess] = useState(false);

  // TODO(James): Replace form handlers with MirageJS POST endpoints for MVP handoff.
  // For MVP, forms only simulate submission and reset.

  // Accessibility: focus management for success messages
  const billSuccessRef = useRef<HTMLDivElement>(null);
  const schSuccessRef = useRef<HTMLDivElement>(null);
  const contactSuccessRef = useRef<HTMLDivElement>(null);

  // Section rendering logic
  const renderSection = () => {
    switch (section) {
      case "family-album":
        return (
          <ContentSection data-component="FamilyAlbumSection">
            <SectionTitle>Family Photo Album</SectionTitle>
            <SectionText>Memories:</SectionText>
            <PhotoGrid
              images={[
                {
                  url: "https://firebasestorage.googleapis.com/v0/b/ai-slideshow.firebasestorage.app/o/assets%2Fclients%2Fcorbin-united-inc%2Ffamily-album%2FUntitled.png?alt=media&token=ef60be09-b337-41c8-9870-48f21ee528a4",
                  title: "Description here",
                },
                {
                  url: "https://firebasestorage.googleapis.com/v0/b/ai-slideshow.firebasestorage.app/o/assets%2Fclients%2Fcorbin-united-inc%2Ffamily-album%2Fimage%20(1).png?alt=media&token=5b1b58ef-e1bb-43c8-abf6-6e4914385b8d",
                  title: "",
                },
                {
                  url: "https://firebasestorage.googleapis.com/v0/b/ai-slideshow.firebasestorage.app/o/assets%2Fclients%2Fcorbin-united-inc%2Ffamily-album%2Fimage%20(2).png?alt=media&token=aedcb853-17a2-4539-8774-5ffd5bb56c90",
                  title: "",
                },
                {
                  url: "https://firebasestorage.googleapis.com/v0/b/ai-slideshow.firebasestorage.app/o/assets%2Fclients%2Fcorbin-united-inc%2Ffamily-album%2Fimage%20(3).png?alt=media&token=d1ab2def-cd28-4e7a-add9-f5e3cbb840e9",
                  title: "",
                },
                {
                  url: "https://firebasestorage.googleapis.com/v0/b/ai-slideshow.firebasestorage.app/o/assets%2Fclients%2Fcorbin-united-inc%2Ffamily-album%2Fimage.png?alt=media&token=7a45480a-3f99-4264-a8bc-f2384c9c817c",
                  title: "",
                },
                {
                  url: "https://firebasestorage.googleapis.com/v0/b/ai-slideshow.firebasestorage.app/o/assets%2Fclients%2Fcorbin-united-inc%2Ffamily-album%2Funnamed%20(1).png?alt=media&token=a9dfe948-ace5-4b38-a84e-77edd4625a3b",
                  title: "",
                },
                {
                  url: "https://firebasestorage.googleapis.com/v0/b/ai-slideshow.firebasestorage.app/o/assets%2Fclients%2Fcorbin-united-inc%2Ffamily-album%2Funnamed%20(10).png?alt=media&token=70cbe9bf-5855-45aa-b869-8642eb396d51",
                  title: "",
                },
                {
                  url: "https://firebasestorage.googleapis.com/v0/b/ai-slideshow.firebasestorage.app/o/assets%2Fclients%2Fcorbin-united-inc%2Ffamily-album%2Funnamed%20(11).png?alt=media&token=3b8811db-a441-4fd7-83d1-44cf9005f446",
                  title: "",
                },
                {
                  url: "https://firebasestorage.googleapis.com/v0/b/ai-slideshow.firebasestorage.app/o/assets%2Fclients%2Fcorbin-united-inc%2Ffamily-album%2Funnamed%20(12).png?alt=media&token=45c6afd2-7a6b-40fc-b3ac-1aa3f8f2d7f4",
                  title: "",
                },
                {
                  url: "https://firebasestorage.googleapis.com/v0/b/ai-slideshow.firebasestorage.app/o/assets%2Fclients%2Fcorbin-united-inc%2Ffamily-album%2Funnamed%20(13).png?alt=media&token=50b5f0c7-fc9e-423a-9b63-e7c265bba3d9",
                  title: "",
                },
              ]}
            />
          </ContentSection>
        );
      case "health":
        return (
          <ContentSection data-component="HealthSection">
            <SectionTitle>Health Information</SectionTitle>
            <SectionText>
              Meet our health expert:
              <br />
              <b>{PROFESSIONALS.health.name}</b> – {PROFESSIONALS.health.email}
              <br />
              <ExpertTitle>{PROFESSIONALS.health.title}</ExpertTitle>
            </SectionText>
            <LeaderImg
              src={PROFESSIONALS.health.img}
              alt={PROFESSIONALS.health.name}
            />
            <SectionText>Download health resources:</SectionText>
            {HEALTH_RESOURCES.map((r) => (
              <ResourceTile key={r.title} href={r.url} aria-label={r.title}>
                <span aria-hidden="true">{r.icon}</span> {r.title}
              </ResourceTile>
            ))}
          </ContentSection>
        );
      case "finances":
        return (
          <ContentSection data-component="FinancesSection">
            <SectionTitle>Financial Information</SectionTitle>
            <SectionText>
              Meet our financial advisor:
              <br />
              <b>{PROFESSIONALS.finances.name}</b> –{" "}
              {PROFESSIONALS.finances.email}
              <br />
              <ExpertTitle>{PROFESSIONALS.finances.title}</ExpertTitle>
            </SectionText>
            <LeaderImg
              src={PROFESSIONALS.finances.img}
              alt={PROFESSIONALS.finances.name}
            />
            <SectionText>Download financial resources:</SectionText>
            {FINANCES_RESOURCES.map((r) => (
              <ResourceTile key={r.title} href={r.url} aria-label={r.title}>
                <span aria-hidden="true">{r.icon}</span> {r.title}
              </ResourceTile>
            ))}
            <SectionText>
              Need help with bills? <b>Request assistance</b> or support our
              fundraising efforts below.
            </SectionText>
            <BillAssistanceForm
              form={billForm}
              setForm={setBillForm}
              onSuccess={() => {
                setBillSuccess(true);
                setTimeout(() => setBillSuccess(false), 4000);
                setBillForm(initialBillForm);
                billSuccessRef.current?.focus();
              }}
              success={billSuccess}
              successRef={billSuccessRef}
            />
            <SectionText>Support our mission:</SectionText>
            <Button
              href="https://paypal.me/yourfoundation"
              target="_blank"
              rel="noopener"
              aria-label="Donate with PayPal"
            >
              Donate with PayPal
            </Button>
            <Button
              href="https://cash.app/$yourfoundation"
              target="_blank"
              rel="noopener"
              aria-label="Donate with Cash App"
            >
              Donate with Cash App
            </Button>
          </ContentSection>
        );
      case "education":
        return (
          <ComingSoon
            title="Scholarship"
            message="Scholarship details for this year are being finalized."
          >
            <ContentSection data-component="EducationSection">
              <SectionTitle>Scholarship Information</SectionTitle>
              <SectionText>
                Meet our education specialist:
                <br />
                <b>{PROFESSIONALS.education.name}</b> –{" "}
                {PROFESSIONALS.education.email}
                <br />
                <ExpertTitle>{PROFESSIONALS.education.title}</ExpertTitle>
              </SectionText>
              <LeaderImg
                src={PROFESSIONALS.education.img}
                alt={PROFESSIONALS.education.name}
              />
              <SectionText>Download education resources:</SectionText>
              {EDUCATION_RESOURCES.map((r) => (
                <ResourceTile key={r.title} href={r.url} aria-label={r.title}>
                  <span aria-hidden="true">{r.icon}</span> {r.title}
                </ResourceTile>
              ))}
              <SectionText>
                Apply for scholarships and access learning resources.
              </SectionText>
              <ScholarshipAppForm
                form={schForm}
                setForm={setSchForm}
                onSuccess={() => {
                  setSchSuccess(true);
                  setTimeout(() => setSchSuccess(false), 4000);
                  setSchForm(initialScholarshipForm);
                  schSuccessRef.current?.focus();
                }}
                success={schSuccess}
                successRef={schSuccessRef}
              />
            </ContentSection>
          </ComingSoon>
        );
      case "events":
        return (
          <ContentSection data-component="EventsSection">
            <SectionTitle>Upcoming Events</SectionTitle>
            <NextEventCard>
              <NextEventThumbnail
                src={UPCOMING_EVENTS[0].thumbnailUrl}
                alt={UPCOMING_EVENTS[0].title}
              />
              <NextEventDetails>
                <NextEventTitle>{UPCOMING_EVENTS[0].title}</NextEventTitle>
                <NextEventInfo>
                  <DetailItem>
                    <CalendarIcon />{" "}
                    {new Date(UPCOMING_EVENTS[0].date).toLocaleDateString(
                      "en-US",
                      { year: "numeric", month: "long", day: "numeric" }
                    )}
                  </DetailItem>
                  <DetailItem>
                    <ClockIcon /> {UPCOMING_EVENTS[0].time}
                  </DetailItem>
                  <DetailItem>
                    <LocationIcon /> {UPCOMING_EVENTS[0].location}
                  </DetailItem>
                </NextEventInfo>
              </NextEventDetails>
              {UPCOMING_EVENTS[0].payment && (
                <PaymentOptions
                  payment={UPCOMING_EVENTS[0].payment}
                  view="compact"
                />
              )}
            </NextEventCard>
            <SectionText>Upcoming Events:</SectionText>
            <EventCarousel>
              {UPCOMING_EVENTS.map((ev) => (
                <EventCard key={ev.title}>
                  <img
                    src={ev.img}
                    alt={ev.title}
                    style={{ width: "100%", borderRadius: tokens.radii.medium }}
                    data-component="EventImage"
                    loading="lazy"
                  />
                  <EventTitle>{ev.title}</EventTitle>
                  <EventDetails>
                    <DetailItem>
                      <CalendarIcon />{" "}
                      {new Date(ev.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </DetailItem>
                    <DetailItem>
                      <ClockIcon /> {ev.time}
                    </DetailItem>
                    <DetailItem>
                      <LocationIcon /> {ev.location}
                    </DetailItem>
                  </EventDetails>
                  <span>{ev.desc}</span>
                  {ev.descLists &&
                    ev.descLists.map((list) => (
                      <DescList key={list.title}>
                        <h4>{list.title}</h4>
                        <ul>
                          {list.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </DescList>
                    ))}
                  {ev.payment && <PaymentOptions payment={ev.payment} />}
                </EventCard>
              ))}
            </EventCarousel>
            <SectionText>Past Events:</SectionText>
            <EventCarousel>
              {PAST_EVENTS.map((ev) => (
                <EventCard key={ev.title}>
                  <img
                    src={ev.img}
                    alt={ev.title}
                    style={{ width: "100%", borderRadius: tokens.radii.medium }}
                    data-component="PastEventImage"
                    loading="lazy"
                  />
                  <b>{ev.title}</b>
                </EventCard>
              ))}
            </EventCarousel>
          </ContentSection>
        );
      case "about":
        const copyToClipboard = (text: string) => {
          navigator.clipboard.writeText(text);
          // TODO: Add a toast notification for better user feedback
        };
        return (
          <ContentSection data-component="AboutSection">
            <SectionTitle>Corbin United Officers</SectionTitle>
            <SectionText>
              Corbin United Foundation is dedicated to improving the health,
              education, and financial well-being of our community. We are
              guided by our mission to serve, empower, and uplift every family.
            </SectionText>
            <SectionText>Leadership:</SectionText>
            <LeaderGrid>
              {LEADERSHIP.map((ldr) => (
                <LeaderCard key={ldr.name}>
                  {ldr.img !== "" ? (
                    <LeaderImg src={ldr.img} alt={ldr.name} />
                  ) : (
                    <ComingSoon icon={<AvatarIcon />}>
                      <LeaderImg src={ldr.img} alt={ldr.name} />
                    </ComingSoon>
                  )}
                  <LeaderName>{ldr.name}</LeaderName>
                  <LeaderRole>{ldr.role}</LeaderRole>
                  <ContactInfo>
                    <ContactLine onClick={() => copyToClipboard(ldr.phone)}>
                      <PhoneIcon /> {ldr.phone}
                    </ContactLine>
                    <ContactLine onClick={() => copyToClipboard(ldr.email)}>
                      <MailIcon /> {ldr.email}
                    </ContactLine>
                  </ContactInfo>
                </LeaderCard>
              ))}
            </LeaderGrid>
          </ContentSection>
        );
      default:
        return (
          <ContentSection data-component="ServicesSection">
            <SectionTitle>Services</SectionTitle>
            <SectionText>
              We provide bill assistance, scholarships, and fundraising support
              to empower our community.
            </SectionText>
            <BillAssistanceForm
              form={billForm}
              setForm={setBillForm}
              onSuccess={() => {
                setBillSuccess(true);
                setTimeout(() => setBillSuccess(false), 4000);
                setBillForm(initialBillForm);
                billSuccessRef.current?.focus();
              }}
              success={billSuccess}
              successRef={billSuccessRef}
            />
            <ScholarshipAppForm
              form={schForm}
              setForm={setSchForm}
              onSuccess={() => {
                setSchSuccess(true);
                setTimeout(() => setSchSuccess(false), 4000);
                setSchForm(initialScholarshipForm);
                schSuccessRef.current?.focus();
              }}
              success={schSuccess}
              successRef={schSuccessRef}
            />
            <FundraisingSpotlight />
            <ContactForm
              form={contactForm}
              setForm={setContactForm}
              onSuccess={() => {
                setContactSuccess(true);
                setTimeout(() => setContactSuccess(false), 4000);
                setContactForm(initialContactForm);
                contactSuccessRef.current?.focus();
              }}
              success={contactSuccess}
              successRef={contactSuccessRef}
            />
          </ContentSection>
        );
    }
  };

  return (
    <ThemeProvider theme={tokens}>
      <GlobalStyle />
      <PageWrapper>
        <Header>
          <LogoCircle aria-label="Corbin United Foundation Logo">
            CUF
          </LogoCircle>
          <OrgName>Corbin United Foundation</OrgName>
          <Mission>
            Focusing on Family Health, History and Enhancing our Well-Being
          </Mission>
          <MissionSub>Family Focused - Health Driven</MissionSub>
          <HeroSection>
            <HeroCarousel />
          </HeroSection>
        </Header>
        <SectionTiles>
          {SECTION_LIST.map((s) => (
            <Tile
              key={s.key}
              aria-label={s.label}
              onClick={() => setSection(s.key)}
              data-selected={section === s.key ? true : undefined}
            >
              <TileIcon aria-hidden="true">{s.icon}</TileIcon>
              {s.label}
            </Tile>
          ))}
        </SectionTiles>
        {renderSection()}
        <Footer>
          <FooterCol>
            <FooterTitle>About</FooterTitle>
            <div>
              Corbin United Foundation
              <br />
              Empowering community health, education, and financial well-being.
            </div>
          </FooterCol>
          <FooterCol>
            <FooterTitle>Quick Links</FooterTitle>
            <FooterLink href="#" onClick={() => setSection("health")}>
              Health Information
            </FooterLink>
            <FooterLink href="#" onClick={() => setSection("finances")}>
              Financial Information
            </FooterLink>
            <FooterLink href="#" onClick={() => setSection("education")}>
              Scholarship Information
            </FooterLink>
            <FooterLink href="#" onClick={() => setSection("events")}>
              Upcoming Events
            </FooterLink>
            <FooterLink href="#" onClick={() => setSection("about")}>
              Corbin United Officers
            </FooterLink>
          </FooterCol>
          <FooterCol>
            <FooterTitle>Contact & Social</FooterTitle>
            <div>Email: info@corbinunited.org</div>
            <div>Phone: (555) 123-4567</div>
            <div style={{ marginTop: tokens.spacing.sm }}>
              <FooterLink href="#">Facebook</FooterLink>
              <FooterLink href="#">Instagram</FooterLink>
              <FooterLink href="#">Twitter</FooterLink>
            </div>
          </FooterCol>
        </Footer>
      </PageWrapper>
    </ThemeProvider>
  );
}

// ======== Bill Assistance Form (Accessible, MVP: no backend, just success message) ========
function BillAssistanceForm({
  form,
  setForm,
  onSuccess,
  success,
  successRef,
}: any) {
  return (
    <Form
      aria-label="Bill Assistance Request Form"
      onSubmit={(e) => {
        e.preventDefault();
        onSuccess();
      }}
    >
      <SectionText as="label" htmlFor="bill-name">
        Full Name
      </SectionText>
      <Input
        id="bill-name"
        name="name"
        type="text"
        required
        autoComplete="name"
        value={form.name}
        onChange={(e) => setForm((f: any) => ({ ...f, name: e.target.value }))}
        aria-required="true"
      />
      <SectionText as="label" htmlFor="bill-email">
        Email
      </SectionText>
      <Input
        id="bill-email"
        name="email"
        type="email"
        required
        autoComplete="email"
        value={form.email}
        onChange={(e) => setForm((f: any) => ({ ...f, email: e.target.value }))}
        aria-required="true"
      />
      <SectionText as="label" htmlFor="bill-need">
        What do you need help with?
      </SectionText>
      <TextArea
        id="bill-need"
        name="need"
        required
        value={form.need}
        onChange={(e) => setForm((f: any) => ({ ...f, need: e.target.value }))}
        aria-required="true"
      />
      <Button as="button" type="submit">
        Request Help
      </Button>
      {success && (
        <div
          role="status"
          aria-live="polite"
          tabIndex={-1}
          ref={successRef}
          style={{ color: tokens.colors.success, fontWeight: 700 }}
        >
          Thank you! Your request was received.
        </div>
      )}
    </Form>
  );
}
const CarouselItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${(p) => p.theme.spacing.lg}px;
  animation: fadeIn 0.5s ease-in-out;
  padding: ${(p) => p.theme.spacing.xl}px;
  min-height: 500px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    padding: ${(p) => p.theme.spacing.xl}px ${(p) => p.theme.spacing.lg}px;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const MediaContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: ${(p) => p.theme.radii.large}px;
  overflow: hidden;

  video,
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${(p) => p.theme.colors.text};
  text-align: left;
  font-family: "Merriweather", serif;

  p {
    margin: 0;
  }

  .greeting {
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: ${(p) => p.theme.spacing.md}px;
  }

  .message {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: ${(p) => p.theme.spacing.md}px;
  }

  .closing {
    font-style: italic;
    margin-bottom: ${(p) => p.theme.spacing.sm}px;
  }

  .signature {
    font-weight: 700;
  }
`;
const PaymentSection = styled.div`
  background: transparent;
  border-radius: ${(p) => p.theme.radii.large}px;
  padding: 0;
`;

const PaymentButtonContainer = styled.div<{ view?: "compact" | "default" }>`
  display: flex;
  flex-direction: ${(p) => (p.view === "compact" ? "column" : "row")};
  margin-top: ${(p) => p.theme.spacing.md}px;
  border-radius: ${(p) => p.theme.radii.medium}px;
  overflow: hidden;
  width: fit-content;

  ${(p) =>
    p.view === "compact" &&
    css`
      gap: ${p.theme.spacing.sm}px;
    `}
`;

const PaymentIconButton = styled.button<{ view?: "compact" | "default" }>`
  background: ${(p) => p.theme.colors.surface};
  border: 1px solid ${(p) => p.theme.colors.border};
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(p) => p.theme.spacing.sm}px;
  padding: ${(p) => p.theme.spacing.sm}px ${(p) => p.theme.spacing.md}px;
  transition: ${(p) => p.theme.transitions.default};

  .text-wrapper {
    display: grid;
    place-items: center;
  }
  .username-text,
  .service-text {
    grid-area: 1 / 1;
    transition: opacity 0.2s ease-in-out;
    white-space: nowrap;
  }
  .username-text {
    opacity: 0;
  }
  &:hover .username-text {
    opacity: 1;
  }
  &:hover .service-text {
    opacity: 0;
  }

  &:not(:last-child) {
    border-right: ${(p) => (p.view === "compact" ? "1px solid" : "none")};
    border-bottom: ${(p) => (p.view === "compact" ? "none" : "1px solid")};
  }

  ${(p) =>
    p.view === "compact" &&
    css`
      border-radius: ${p.theme.radii.medium}px;
    `}

  &:hover {
    background: ${(p) => p.theme.colors.surfaceAlt};
  }
`;

const CopiedMessage = styled.div`
  color: ${(p) => p.theme.colors.success};
  font-size: ${(p) => p.theme.typography.subscript}px;
  margin-left: ${(p) => p.theme.spacing.md}px;
`;

function PaymentOptions({
  payment,
  view = "default",
}: {
  payment: any;
  view?: "compact" | "default";
}) {
  const [copied, setCopied] = useState(false);

  return (
    <PaymentSection>
      {view === "default" && payment.closingWords && (
        <SectionText>{payment.closingWords}</SectionText>
      )}

      <SectionText>
        <b>${payment.amount.amount}</b> per {payment.amount.per}
      </SectionText>
      <PaymentButtonContainer view={view}>
        {payment.options.map((opt: any) => (
          <PaymentIconButton
            key={opt.service}
            view={view}
            onClick={() => {
              if (opt.url) {
                window.open(opt.url, "_blank");
              } else {
                navigator.clipboard.writeText(opt.username);
                setCopied(opt.username);
                setTimeout(() => setCopied(false), 2000);
              }
            }}
          >
            {opt.icon}
            <div className="text-wrapper">
              <span className="service-text">{opt.service}</span>
              <span className="username-text">{opt.username}</span>
            </div>
          </PaymentIconButton>
        ))}
        {!!copied && (
          <CopiedMessage>{`Copied ${copied}! Login to Zelle and paste.`}</CopiedMessage>
        )}
      </PaymentButtonContainer>
      {view === "default" && (
        <SectionText>
          <i>{payment.note}</i>
        </SectionText>
      )}
    </PaymentSection>
  );
}

const CarouselItem = ({ item, isActive }: any) => {
  const { textContent, type, url, aspect } = item;
  const [width, height] = aspect.split(":").map(Number);

  return (
    <CarouselItemContainer className={isActive ? "active" : ""}>
      <MediaContainer
        style={{ maxHeight: "500px", aspectRatio: `${width} / ${height}` }}
      >
        {type === "video" ? (
          <video src={url} autoPlay loop muted playsInline controls />
        ) : (
          <img src={url} alt={item.title} />
        )}
      </MediaContainer>
      <TextContainer>
        {textContent.greeting && (
          <p className="greeting">{textContent.greeting},</p>
        )}
        <p className="message">{textContent.message}</p>
        {textContent.closing && (
          <p className="closing">{textContent.closing}</p>
        )}
        {textContent.signature && (
          <p className="closing">
            {textContent.signature.text ? textContent.signature.text + "," : ""}
          </p>
        )}
        {textContent.signature && (
          <p className="signature">{textContent.signature.name}</p>
        )}
      </TextContainer>
    </CarouselItemContainer>
  );
};

const DotsContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: ${(p) => p.theme.spacing.md}px;
  z-index: 1;
`;

const Dot = styled.button`
  background-color: ${(p) => p.theme.colors.border};
  border: none;
  border-radius: 50%;
  width: 12px;
  height: 12px;
  margin: 0 ${(p) => p.theme.spacing.xs}px;
  cursor: pointer;
  transition: background-color 0.3s;

  &.active {
    background-color: ${(p) => p.theme.colors.accent};
  }
`;

const EventDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.spacing.sm}px;
  margin: ${(p) => p.theme.spacing.md}px 0;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${(p) => p.theme.spacing.sm}px;
  font-size: 0.95rem;

  svg {
    width: 20px;
    height: 20px;
    fill: ${(p) => p.theme.colors.accent};
  }
`;

const DescList = styled.div`
  margin-top: ${(p) => p.theme.spacing.md}px;

  h4 {
    font-weight: 700;
    margin-bottom: ${(p) => p.theme.spacing.sm}px;
  }

  ul {
    list-style-type: "✓";
    padding-left: ${(p) => p.theme.spacing.lg}px;
  }

  li {
    margin-bottom: ${(p) => p.theme.spacing.xs}px;
    padding-left: ${(p) => p.theme.spacing.sm}px;
  }
`;

const HeroCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = HERO_CAROUSEL[activeIndex];

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <CarouselItem key={activeIndex} item={activeItem} isActive={true} />
      <DotsContainer>
        {HERO_CAROUSEL.map((_, index) => (
          <Dot
            key={index}
            className={index === activeIndex ? "active" : ""}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </DotsContainer>
    </div>
  );
};

// ======== Scholarship Application Form ========
function ScholarshipAppForm({
  form,
  setForm,
  onSuccess,
  success,
  successRef,
}: any) {
  return (
    <Form
      aria-label="Scholarship Application Form"
      onSubmit={(e) => {
        e.preventDefault();
        onSuccess();
      }}
    >
      <SectionText as="label" htmlFor="sch-name">
        Full Name
      </SectionText>
      <Input
        id="sch-name"
        name="name"
        type="text"
        required
        autoComplete="name"
        value={form.name}
        onChange={(e) => setForm((f: any) => ({ ...f, name: e.target.value }))}
        aria-required="true"
      />
      <SectionText as="label" htmlFor="sch-email">
        Email
      </SectionText>
      <Input
        id="sch-email"
        name="email"
        type="email"
        required
        autoComplete="email"
        value={form.email}
        onChange={(e) => setForm((f: any) => ({ ...f, email: e.target.value }))}
        aria-required="true"
      />
      <SectionText as="label" htmlFor="sch-essay">
        Why do you deserve this scholarship?
      </SectionText>
      <TextArea
        id="sch-essay"
        name="essay"
        required
        value={form.essay}
        onChange={(e) => setForm((f: any) => ({ ...f, essay: e.target.value }))}
        aria-required="true"
      />
      <Button as="button" type="submit">
        Apply Now
      </Button>
      {success && (
        <div
          role="status"
          aria-live="polite"
          tabIndex={-1}
          ref={successRef}
          style={{ color: tokens.colors.success, fontWeight: 700 }}
        >
          Thank you! Your application was received.
        </div>
      )}
    </Form>
  );
}

// ======== Fundraising Spotlight (MVP: static) ========
function FundraisingSpotlight() {
  return (
    <ContentSection
      data-component="FundraisingSpotlight"
      style={{ marginTop: tokens.spacing.xl }}
    >
      <SectionTitle>Fundraising Spotlight</SectionTitle>
      <SectionText>
        <b>Spring Fundraiser</b>: Help us reach our goal to support more
        families!
        <br />
        <Button
          href="https://paypal.me/yourfoundation"
          target="_blank"
          rel="noopener"
          aria-label="Donate with PayPal"
        >
          Donate Now
        </Button>
      </SectionText>
    </ContentSection>
  );
}

// ======== Contact Form (Accessible, MVP: no backend, just success message) ========
function ContactForm({ form, setForm, onSuccess, success, successRef }: any) {
  return (
    <Form
      aria-label="Contact/Assistance Request Form"
      onSubmit={(e) => {
        e.preventDefault();
        onSuccess();
      }}
    >
      <SectionText as="label" htmlFor="contact-name">
        Full Name
      </SectionText>
      <Input
        id="contact-name"
        name="name"
        type="text"
        required
        autoComplete="name"
        value={form.name}
        onChange={(e) => setForm((f: any) => ({ ...f, name: e.target.value }))}
        aria-required="true"
      />
      <SectionText as="label" htmlFor="contact-email">
        Email
      </SectionText>
      <Input
        id="contact-email"
        name="email"
        type="email"
        required
        autoComplete="email"
        value={form.email}
        onChange={(e) => setForm((f: any) => ({ ...f, email: e.target.value }))}
        aria-required="true"
      />
      <SectionText as="label" htmlFor="contact-message">
        How can we help?
      </SectionText>
      <TextArea
        id="contact-message"
        name="message"
        required
        value={form.message}
        onChange={(e) =>
          setForm((f: any) => ({ ...f, message: e.target.value }))
        }
        aria-required="true"
      />
      <Button as="button" type="submit">
        Send
      </Button>
      {success && (
        <div
          role="status"
          aria-live="polite"
          tabIndex={-1}
          ref={successRef}
          style={{ color: tokens.colors.success, fontWeight: 700 }}
        >
          Thank you for reaching out! We'll be in touch.
        </div>
      )}
    </Form>
  );
}

// TODO(James):
// - Replace all form onSubmit handlers with MirageJS endpoints (see MirageServerPrompt.md)
// - Add MirageJS models for bill requests, scholarships, and contacts
// - Ensure all aria-labels, roles, and alt text are present for accessibility
// - Add tests for keyboard navigation and focus management
// - Refactor any repeated logic into hooks if needed

export default App;
