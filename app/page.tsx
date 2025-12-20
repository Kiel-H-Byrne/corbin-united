"use client";

import { Footer } from "@/components/layout/Footer";
import { HeroCarousel } from "@/components/layout/HeroCarousel";
import { Navigation } from "@/components/layout/Navigation";
import { SectionTiles, Tile, TileIcon } from "@/components/ui/Tile";
import { SECTION_LIST } from "@/data/sections";
import { tokens } from "@/lib/theme";
import { GlobalStyle } from "@/styles/GlobalStyle";
import Link from "next/link";
import styled, { ThemeProvider } from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`;

const HeroSection = styled.section`
  width: 100%;
  background: linear-gradient(
    135deg,
    ${(p) => p.theme.colors.accent} 0%,
    ${(p) => p.theme.colors.accentHover} 100%
  );
  padding: ${(p) => p.theme.spacing.xxl}px ${(p) => p.theme.spacing.lg}px;
  text-align: center;
  color: ${(p) => p.theme.colors.surface};
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const HeroTitle = styled.h1`
  font-family: ${(p) => p.theme.typography.headingFont};
  font-size: clamp(32px, 5vw, ${(p) => p.theme.typography.h1Size}px);
  font-weight: 700;
  margin-bottom: ${(p) => p.theme.spacing.md}px;
  color: ${(p) => p.theme.colors.surface};
`;

const HeroSubtitle = styled.p`
  font-size: ${(p) => p.theme.typography.h4Size}px;
  margin-bottom: ${(p) => p.theme.spacing.sm}px;
  opacity: 0.95;
`;

const HeroTagline = styled.p`
  font-size: ${(p) => p.theme.typography.body1}px;
  font-weight: ${(p) => p.theme.typography.bodyFontWeightMedium};
  opacity: 0.9;
  letter-spacing: 1px;
`;

const MainContent = styled.main`
  width: 100%;
  max-width: 1200px;
  padding: ${(p) => p.theme.spacing.xl}px ${(p) => p.theme.spacing.lg}px;
  flex: 1;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${(p) => p.theme.spacing.xl}px;
`;

const SectionTitle = styled.h2`
  font-family: ${(p) => p.theme.typography.headingFont};
  color: ${(p) => p.theme.colors.accent};
  margin-bottom: ${(p) => p.theme.spacing.sm}px;
`;

const SectionSubtitle = styled.p`
  color: ${(p) => p.theme.colors.textSecondary};
  max-width: 600px;
  margin: 0 auto;
`;

const TileLink = styled(Link)`
  text-decoration: none;
  display: contents;
`;

export default function HomePage() {
  return (
    <ThemeProvider theme={tokens}>
      <GlobalStyle />
      <AppContainer>
        <Navigation />
        <HeroSection>
          <HeroContent>
            <HeroTitle>Corbin United, Inc.</HeroTitle>
            <HeroSubtitle>
              Focusing on Family Health, History and Enhancing our Well-Being
            </HeroSubtitle>
            <HeroTagline>
              A 501(c)(3) Organization • Family Focused - Health Driven
            </HeroTagline>
            <HeroTagline>
              Early, Maddox, Corbin, Oneal, Crippen, Conix
            </HeroTagline>
          </HeroContent>
        </HeroSection>
        <HeroCarousel />
        <MainContent>
          <SectionHeader>
            <SectionTitle>Our Services</SectionTitle>
            <SectionSubtitle>
              Explore the resources and support we offer to strengthen our
              community
            </SectionSubtitle>
          </SectionHeader>
          <SectionTiles>
            {SECTION_LIST.map((sec) => (
              <TileLink key={sec.key} href={`/${sec.key}`}>
                <Tile as="div" aria-label={`Navigate to ${sec.label}`}>
                  <TileIcon>{sec.icon}</TileIcon>
                  <h3>{sec.label}</h3>
                  <p>{sec.desc}</p>
                </Tile>
              </TileLink>
            ))}
          </SectionTiles>
        </MainContent>
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
}
