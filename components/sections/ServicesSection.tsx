"use client";

import { useRef, useState } from "react";
import { ContentSection, SectionTitle, SectionText } from "@/components/ui/Section";
import { BillAssistanceForm } from "@/components/forms/BillAssistanceForm";
import { ScholarshipAppForm } from "@/components/forms/ScholarshipForm";
import { ContactForm } from "@/components/forms/ContactForm";
import { FundraisingSpotlight } from "@/components/forms/FundraisingSpotlight";
import { BillForm, ScholarshipForm, ContactForm as ContactFormType } from "@/types";

const initialBillForm: BillForm = { name: "", email: "", need: "" };
const initialScholarshipForm: ScholarshipForm = { name: "", email: "", essay: "" };
const initialContactForm: ContactFormType = { name: "", email: "", message: "" };

export function ServicesSection() {
  const [billForm, setBillForm] = useState(initialBillForm);
  const [billSuccess, setBillSuccess] = useState(false);
  const billSuccessRef = useRef<HTMLDivElement>(null);

  const [schForm, setSchForm] = useState(initialScholarshipForm);
  const [schSuccess, setSchSuccess] = useState(false);
  const schSuccessRef = useRef<HTMLDivElement>(null);

  const [contactForm, setContactForm] = useState(initialContactForm);
  const [contactSuccess, setContactSuccess] = useState(false);
  const contactSuccessRef = useRef<HTMLDivElement>(null);

  return (
    <ContentSection data-component="ServicesSection">
      <SectionTitle>Services</SectionTitle>
      <SectionText>
        We provide bill assistance, scholarships, and fundraising support to
        empower our community.
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
      <FundraisingSpotlight />
      <ContactForm
        form={contactForm}
        setForm={setContactForm}
        onSuccess={() => {
          setContactSuccess(true);
          setTimeout(() => setContactSuccess(false), 4000);
          setContactForm(initialContactForm);
          contactSuccessRef.current?.focus();
        }}
        success={contactSuccess}
        successRef={contactSuccessRef}
      />
    </ContentSection>
  );
}

