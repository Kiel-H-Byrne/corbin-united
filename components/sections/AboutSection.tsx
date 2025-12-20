"use client";

import { AvatarIcon, MailIcon, PhoneIcon } from "@/components/icons";
import { ComingSoon } from "@/components/ui/ComingSoon";
import {
  ContentSection,
  SectionText,
  SectionTitle,
} from "@/components/ui/Section";
import { LEADERSHIP } from "@/data/leadership";
import styled from "styled-components";

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

export function AboutSection() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // TODO: Add a toast notification for better user feedback
  };

  return (
    <ContentSection data-component="AboutSection">
      <SectionTitle>Corbin United Inc. Officers</SectionTitle>
      <SectionText>
        Corbin United Inc. is dedicated to improving the health, education, and
        financial well-being of our community. We are guided by our mission to
        serve, empower, and uplift every family.
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
}
