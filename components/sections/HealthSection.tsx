"use client";

import { useCms } from "@/components/cms/useCms";
import { FileIcon } from "@/components/icons";
import {
  ContentSection,
  ResourceTile,
  SectionText,
  SectionTitle,
} from "@/components/ui/Section";
import { Professional, type Resource } from "@/types";
import { useEffect, useState } from "react";
import styled from "styled-components";

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
  const { getPdfDocuments, getProfessionals, getSections } = useCms();
  const [title, setTitle] = useState("Health Information");
  const [professional, setProfessional] = useState({
    name: "",
    email: "",
    img: "",
    title: "",
  });
  const [resources, setResources] = useState<Resource[]>([]);

  useEffect(() => {
    let active = true;

    getSections().then((sections) => {
      if (!active) return;
      const match = (sections ?? []).find((sec) => sec.key === "health");
      if (match?.label) {
        setTitle(match.label);
      }
    });

    getProfessionals().then((professionals) => {
      if (!active) return;
      const match = (professionals ?? []).find(
        (prof: Professional) => prof.area === "health"
      );
      if (match) {
        setProfessional({
          name: match.name,
          email: match.email ?? "",
          img: match.img ?? "",
          title: match.title ?? "",
        });
      }
    });

    getPdfDocuments("health").then((documents) => {
      if (!active) return;
      const cmsResources = (documents ?? [])
        .filter((doc) => !!doc.url)
        .map((doc) => ({
          title: doc.title,
          url: doc.url as string,
          icon: <FileIcon />,
        }));

      setResources(cmsResources);
    });

    return () => {
      active = false;
    };
  }, [getPdfDocuments, getProfessionals, getSections]);

  return (
    <ContentSection data-component="HealthSection">
      <SectionTitle>{title}</SectionTitle>
      {!!professional.name && (
        <>
          <SectionText>
            Meet our health expert:
            <br />
            <b>{professional.name}</b> – {professional.email}
            <br />
            <ExpertTitle>{professional.title}</ExpertTitle>
          </SectionText>
          <LeaderImg src={professional.img} alt={professional.name} />
        </>
      )}
      {resources.length > 0 && (
        <>
          <SectionText>Download health resources:</SectionText>
          {resources.map((r) => (
            <ResourceTile key={r.title} href={r.url} aria-label={r.title}>
              <span aria-hidden="true">{r.icon}</span> {r.title}
            </ResourceTile>
          ))}
        </>
      )}
    </ContentSection>
  );
}
