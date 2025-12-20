"use client";

import styled from "styled-components";
import {
  ContentSection,
  SectionTitle,
  SectionText,
  ResourceTile,
} from "@/components/ui/Section";
import { PROFESSIONALS } from "@/data/leadership";
import { HEALTH_RESOURCES } from "@/data/resources";

const LeaderImg = styled.img.attrs({ "data-component": "LeaderImg" } as any)`
  width: 72px;
  height: 72px;
  border-radius: ${(p) => p.theme.radii.full}px;
  object-fit: cover;
  margin-bottom: ${(p) => p.theme.spacing.sm}px;
`;

const ExpertTitle = styled.span`
  font-style: italic;
  font-size: 0.95em;
`;

export function HealthSection() {
  const professional = PROFESSIONALS.health;

  return (
    <ContentSection data-component="HealthSection">
      <SectionTitle>Health Information</SectionTitle>
      <SectionText>
        Meet our health expert:
        <br />
        <b>{professional.name}</b> – {professional.email}
        <br />
        <ExpertTitle>{professional.title}</ExpertTitle>
      </SectionText>
      <LeaderImg src={professional.img} alt={professional.name} />
      <SectionText>Download health resources:</SectionText>
      {HEALTH_RESOURCES.map((r) => (
        <ResourceTile key={r.title} href={r.url} aria-label={r.title}>
          <span aria-hidden="true">{r.icon}</span> {r.title}
        </ResourceTile>
      ))}
    </ContentSection>
  );
}

