"use client";

import { useRef, useState } from "react";
import styled from "styled-components";
import {
  ContentSection,
  SectionTitle,
  SectionText,
  ResourceTile,
} from "@/components/ui/Section";
import { ComingSoon } from "@/components/ui/ComingSoon";
import { ScholarshipAppForm } from "@/components/forms/ScholarshipForm";
import { PROFESSIONALS } from "@/data/leadership";
import { EDUCATION_RESOURCES } from "@/data/resources";
import { ScholarshipForm } from "@/types";

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
  const professional = PROFESSIONALS.education;
  const [schForm, setSchForm] = useState(initialScholarshipForm);
  const [schSuccess, setSchSuccess] = useState(false);
  const schSuccessRef = useRef<HTMLDivElement>(null);

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
          <b>{professional.name}</b> – {professional.email}
          <br />
          <ExpertTitle>{professional.title}</ExpertTitle>
        </SectionText>
        <LeaderImg src={professional.img} alt={professional.name} />
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
}

