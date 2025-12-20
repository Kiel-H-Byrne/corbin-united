"use client";

import { BillAssistanceForm } from "@/components/forms/BillAssistanceForm";
import { Button } from "@/components/ui/Button";
import {
  ContentSection,
  ResourceTile,
  SectionText,
  SectionTitle,
} from "@/components/ui/Section";
import { PROFESSIONALS } from "@/data/leadership";
import { FINANCES_RESOURCES } from "@/data/resources";
import { BillForm } from "@/types";
import { useRef, useState } from "react";
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

const initialBillForm: BillForm = { name: "", email: "", need: "" };

export function FinancesSection() {
  const professional = PROFESSIONALS.finances;
  const [billForm, setBillForm] = useState(initialBillForm);
  const [billSuccess, setBillSuccess] = useState(false);
  const billSuccessRef = useRef<HTMLDivElement>(null);

  return (
    <ContentSection data-component="FinancesSection">
      <SectionTitle>Financial Information</SectionTitle>
      <SectionText>
        Meet our financial advisor:
        <br />
        <b>{professional.name}</b> – {professional.email}
        <br />
        <ExpertTitle>{professional.title}</ExpertTitle>
      </SectionText>
      <LeaderImg src={professional.img} alt={professional.name} />
      <SectionText>Download financial resources:</SectionText>
      {FINANCES_RESOURCES.map((r) => (
        <ResourceTile key={r.title} href={r.url} aria-label={r.title}>
          <span aria-hidden="true">{r.icon}</span> {r.title}
        </ResourceTile>
      ))}
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
      <Button
        href="https://paypal.me/yourfoundation"
        target="_blank"
        rel="noopener"
        aria-label="Donate with PayPal"
      >
        Donate with PayPal
      </Button>
      <Button
        href="https://cash.app/$CorbinUnited"
        target="_blank"
        rel="noopener"
        aria-label="Donate with Cash App"
      >
        Donate with Cash App
      </Button>
    </ContentSection>
  );
}
