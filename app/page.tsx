"use client";

/*
 * Corbin United Inc. Website – MVP
 * All requirements, mockup, and style guide implemented by Terrell (THN Twin Developer Agent)
 * Pair programming comments for James included as // TODO(James): ...
 */
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AboutSection } from "@/components/sections/AboutSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { EventsSection } from "@/components/sections/EventsSection";
import { FamilyAlbumSection } from "@/components/sections/FamilyAlbumSection";
import { FinancesSection } from "@/components/sections/FinancesSection";
import { HealthSection } from "@/components/sections/HealthSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SectionTiles, Tile, TileIcon } from "@/components/ui/Tile";
import { SECTION_LIST } from "@/data/sections";
import { tokens } from "@/lib/theme";
import { GlobalStyle } from "@/styles/GlobalStyle";
import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";

// ======== STYLED COMPONENTS ========
const AppContainer = styled.div.attrs({
  "data-component": "AppContainer",
} as any)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`;

const MainContent = styled.main.attrs({
  "data-component": "MainContent",
} as any)`
  width: 100%;
  max-width: 1200px;
  padding: ${(p) => p.theme.spacing.lg}px;
  flex: 1;
`;

// ======== MAIN APP ========
function App() {
  const [section, setSection] = useState<string | null>(null);

  const handleNavigate = (sectionId: string) => {
    setSection(sectionId);
  };

  const renderSection = () => {
    switch (section) {
      case "family-album":
        return <FamilyAlbumSection />;
      case "health":
        return <HealthSection />;
      case "finances":
        return <FinancesSection />;
      case "education":
        return <EducationSection />;
      case "events":
        return <EventsSection />;
      case "about":
        return <AboutSection />;
      default:
        return <ServicesSection />;
    }
  };

  return (
    <ThemeProvider theme={tokens}>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <MainContent>
          {!section && (
            <SectionTiles>
              {SECTION_LIST.map((sec) => (
                <Tile
                  key={sec.key}
                  onClick={() => handleNavigate(sec.key)}
                  aria-label={`Navigate to ${sec.label}`}
                >
                  <TileIcon>{sec.icon}</TileIcon>
                  <h3>{sec.label}</h3>
                  <p>{sec.desc}</p>
                </Tile>
              ))}
            </SectionTiles>
          )}
          {section && (
            <>
              <button
                onClick={() => setSection(null)}
                style={{
                  marginBottom: tokens.spacing.lg,
                  padding: `${tokens.spacing.sm}px ${tokens.spacing.md}px`,
                  background: tokens.colors.accent,
                  color: tokens.colors.surface,
                  border: "none",
                  borderRadius: tokens.radii.medium,
                  cursor: "pointer",
                  fontFamily: tokens.typography.fontFamily,
                  fontSize: tokens.typography.fontSize,
                }}
              >
                ← Back to Home
              </button>
              {renderSection()}
            </>
          )}
        </MainContent>
        <Footer onNavigate={handleNavigate} />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
