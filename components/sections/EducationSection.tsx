"use client";

import { useCms } from "@/components/cms/useCms";
import { FileIcon } from "@/components/icons";
import {
  ContentSection,
  ResourceTile,
  SectionText,
  SectionTitle,
} from "@/components/ui/Section";
import { ScholarshipForm, type Resource } from "@/types";
import { useEffect, useRef, useState } from "react";
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

const initialScholarshipForm: ScholarshipForm = {
  name: "",
  email: "",
  essay: "",
};

export function EducationSection() {
  const { getPdfDocuments, getProfessionals, getSections } = useCms();
  const [title, setTitle] = useState("Scholarship Information");
  const [professional, setProfessional] = useState({
    name: "",
    email: "",
    img: "",
    title: "",
  });
  const [resources, setResources] = useState<Resource[]>([]);
  const [schForm, setSchForm] = useState(initialScholarshipForm);
  const [schSuccess, setSchSuccess] = useState(false);
  const schSuccessRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let active = true;

    getSections().then((sections) => {
      if (!active) return;
      const match = (sections ?? []).find((sec) => sec.key === "education");
      if (match?.label) {
        setTitle(match.label);
      }
    });

    // getProfessionals().then((professionals) => {
    //   if (!active) return;
    //   const match = (professionals ?? []).find(
    //     (prof: CmsProfessional) => prof.area === "education",
    //   );
    //   if (match) {
    //     setProfessional({
    //       name: match.name,
    //       email: match.email ?? "",
    //       img: match.img ?? "",
    //       title: match.title ?? "",
    //     });
    //   }
    // });

    getPdfDocuments("education").then((documents) => {
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
    <ContentSection data-component="EducationSection">
      <SectionTitle>{title}</SectionTitle>
      {!!professional.name && (
        <>
          <SectionText>
            Meet our education specialist:
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
          <SectionText>Download education resources:</SectionText>
          {resources.map((r) => (
            <ResourceTile key={r.title} href={r.url} aria-label={r.title}>
              <span aria-hidden="true">{r.icon}</span> {r.title}
            </ResourceTile>
          ))}
        </>
      )}
      {/* <SectionText>
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
      /> */}
    </ContentSection>
  );
}
