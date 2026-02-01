"use client";

import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { BillAssistanceForm } from "@/components/forms/BillAssistanceForm";
import { Button } from "@/components/ui/Button";
import {
  ContentSection,
  ResourceTile,
  SectionText,
  SectionTitle,
} from "@/components/ui/Section";
import { BillForm, Resource } from "@/types";
import { ComingSoon } from "../ui/ComingSoon";
import { useCms } from "@/components/cms/useCms";
import { FileIcon } from "@/components/icons";
import { type Professional as CmsProfessional } from "@/components/cms/types";

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

const initialBillForm: BillForm = { name: "", email: "", need: "" };

export function FinancesSection() {
  const { getPdfDocuments, getProfessionals, getSections } = useCms();
  const [title, setTitle] = useState("Financial Information");
  const [professional, setProfessional] = useState({
    name: "",
    email: "",
    img: "",
    title: "",
  });
  const [resources, setResources] = useState<Resource[]>([]);
  const [billForm, setBillForm] = useState(initialBillForm);
  const [billSuccess, setBillSuccess] = useState(false);
  const billSuccessRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let active = true;

    getSections().then((sections) => {
      if (!active) return;
      const match = (sections ?? []).find((sec) => sec.key === "finances");
      if (match?.label) {
        setTitle(match.label);
      }
    });

    getProfessionals().then((professionals) => {
      if (!active) return;
      const match = (professionals ?? []).find(
        (prof: CmsProfessional) => prof.area === "finances"
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

    getPdfDocuments("finances").then((documents) => {
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
    <ComingSoon
      title="Finances"
      message="Finances details for this year are being finalized."
    >
      <ContentSection data-component="FinancesSection">
        <SectionTitle>{title}</SectionTitle>
        {!!professional.name && (
          <>
            <SectionText>
              Meet our financial advisor:
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
            <SectionText>Download financial resources:</SectionText>
            {resources.map((r) => (
              <ResourceTile key={r.title} href={r.url} aria-label={r.title}>
                <span aria-hidden="true">{r.icon}</span> {r.title}
              </ResourceTile>
            ))}
          </>
        )}
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
        {/* <Button
          href="https://paypal.me/yourfoundation"
          target="_blank"
          rel="noopener"
          aria-label="Donate with PayPal"
        >
          Donate with PayPal
        </Button> */}
        <Button
          href="https://cash.app/$CorbinUnited"
          target="_blank"
          rel="noopener"
          aria-label="Donate with Cash App"
        >
          Donate with Cash App (All donations are tax-deductible)
        </Button>
      </ContentSection>
    </ComingSoon>
  );
}
