"use client";

import Link from "next/link";
import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100%;
  background: ${(p) => p.theme.colors.accent};
  color: ${(p) => p.theme.colors.surface};
  margin-top: auto;
`;

const FooterInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${(p) => p.theme.spacing.xxl}px ${(p) => p.theme.spacing.lg}px;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${(p) => p.theme.spacing.xl}px;
  margin-bottom: ${(p) => p.theme.spacing.xl}px;

  @media (max-width: 600px) {
    text-align: center;
  }
`;

const FooterCol = styled.div``;

const FooterTitle = styled.h4`
  color: ${(p) => p.theme.colors.surface};
  font-family: ${(p) => p.theme.typography.headingFont};
  font-size: ${(p) => p.theme.typography.h5Size}px;
  margin-bottom: ${(p) => p.theme.spacing.md}px;
  font-weight: 700;
  position: relative;
  padding-bottom: ${(p) => p.theme.spacing.sm}px;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 2px;
    background: ${(p) => p.theme.colors.secondary};

    @media (max-width: 600px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const FooterText = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: ${(p) => p.theme.typography.body2}px;
  line-height: 1.7;
  margin: 0;
`;

const FooterLink = styled(Link)`
  color: rgba(255, 255, 255, 0.9);
  font-size: ${(p) => p.theme.typography.body2}px;
  text-decoration: none;
  display: block;
  padding: ${(p) => p.theme.spacing.xs}px 0;
  transition: ${(p) => p.theme.transitions.fast};

  &:hover {
    color: ${(p) => p.theme.colors.surface};
    transform: translateX(4px);
    text-decoration: none;
  }

  @media (max-width: 600px) {
    &:hover {
      transform: none;
    }
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${(p) => p.theme.spacing.sm}px;
  margin-bottom: ${(p) => p.theme.spacing.sm}px;
  color: rgba(255, 255, 255, 0.9);
  font-size: ${(p) => p.theme.typography.body2}px;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${(p) => p.theme.spacing.md}px;
  margin-top: ${(p) => p.theme.spacing.md}px;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(p) => p.theme.colors.surface};
  transition: ${(p) => p.theme.transitions.fast};

  &:hover {
    background: ${(p) => p.theme.colors.surface};
    color: ${(p) => p.theme.colors.accent};
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: ${(p) => p.theme.spacing.lg}px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: ${(p) => p.theme.spacing.md}px;

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: ${(p) => p.theme.typography.subscript}px;
  margin: 0;
`;

const MissionText = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: ${(p) => p.theme.typography.subscript}px;
  font-style: italic;
  margin: 0;
`;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterInner>
        <FooterGrid>
          <FooterCol>
            <FooterTitle>About Us</FooterTitle>
            <FooterText>
              Corbin United Inc. is a 501(c)(3) organization dedicated to
              improving the health, education, and financial well-being of our
              community. We are guided by our mission to serve, empower, and
              uplift every family.
            </FooterText>
          </FooterCol>

          <FooterCol>
            <FooterTitle>Quick Links</FooterTitle>
            <FooterLink href="/health">Health Information</FooterLink>
            <FooterLink href="/finances">Financial Assistance</FooterLink>
            <FooterLink href="/education">Scholarships</FooterLink>
            <FooterLink href="/events">Events</FooterLink>
            <FooterLink href="/about">Our Leadership</FooterLink>
            <FooterLink href="/family-album">Family Album</FooterLink>
          </FooterCol>

          <FooterCol>
            <FooterTitle>Contact Us</FooterTitle>
            <ContactItem>
              <span>📧</span>
              <span>info@corbinunitedinc.org</span>
            </ContactItem>
            <ContactItem>
              <span>📞</span>
              <span>(555) 123-4567</span>
            </ContactItem>
            <SocialLinks>
              <SocialLink href="#" aria-label="Facebook">
                f
              </SocialLink>
              <SocialLink href="#" aria-label="Instagram">
                📷
              </SocialLink>
              <SocialLink href="#" aria-label="Twitter">
                𝕏
              </SocialLink>
            </SocialLinks>
          </FooterCol>
        </FooterGrid>

        <FooterBottom>
          <Copyright>
            © {currentYear} Corbin United Inc. All rights reserved.
          </Copyright>
          <MissionText>Family Focused - Health Driven</MissionText>
        </FooterBottom>
      </FooterInner>
    </FooterContainer>
  );
}
