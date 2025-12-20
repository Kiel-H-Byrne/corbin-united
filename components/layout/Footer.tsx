"use client";

import styled from "styled-components";

const FooterContainer = styled.footer.attrs({
  "data-component": "Footer",
} as any)`
  width: 100vw;
  background: ${(p) => p.theme.colors.accent};
  color: ${(p) => p.theme.colors.surface};
  margin-top: ${(p) => p.theme.spacing.xl}px;
  padding: ${(p) => p.theme.spacing.lg}px 0;
  font-family: "Merriweather", serif;
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
  color: ${(p) => p.theme.colors.surface};
  font-family: "Merriweather", serif;
  font-size: 1.1rem;
  margin-bottom: ${(p) => p.theme.spacing.sm}px;
  font-weight: 700;
`;

const FooterLink = styled.a`
  color: ${(p) => p.theme.colors.surface};
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

type FooterProps = {
  onNavigate: (section: string) => void;
};

export function Footer({ onNavigate }: FooterProps) {
  return (
    <FooterContainer>
      <FooterCol>
        <FooterTitle>About</FooterTitle>
        <div>
          Corbin United Inc., a 501(c)(3) Organization
          <br />
          Empowering community health, education, and financial well-being.
        </div>
      </FooterCol>
      <FooterCol>
        <FooterTitle>Quick Links</FooterTitle>
        <FooterLink href="#" onClick={() => onNavigate("health")}>
          Health Information
        </FooterLink>
        <FooterLink href="#" onClick={() => onNavigate("finances")}>
          Financial Information
        </FooterLink>
        <FooterLink href="#" onClick={() => onNavigate("education")}>
          Scholarship Information
        </FooterLink>
        <FooterLink href="#" onClick={() => onNavigate("events")}>
          Upcoming Events
        </FooterLink>
        <FooterLink href="#" onClick={() => onNavigate("about")}>
          Corbin United Officers
        </FooterLink>
      </FooterCol>
      <FooterCol>
        <FooterTitle>Contact & Social</FooterTitle>
        <div>Email: info@corbinunited.org</div>
        <div>Phone: (555) 123-4567</div>
        <div style={{ marginTop: "8px" }}>
          <FooterLink href="#">Facebook</FooterLink>
          <FooterLink href="#">Instagram</FooterLink>
          <FooterLink href="#">Twitter</FooterLink>
        </div>
      </FooterCol>
    </FooterContainer>
  );
}
