import React from "react";

// --- Form Types ---
export type BillForm = {
  name: string;
  email: string;
  need: string;
};

export type ScholarshipForm = {
  name: string;
  email: string;
  essay: string;
};

export type ContactForm = {
  name: string;
  email: string;
  message: string;
};

// --- Shared & CMS Types ---
export type FloatingImage = {
  url: string;
  title: string;
};

export type Leader = {
  id: string;
  name: string;
  role: string;
  img?: string;
  phone?: string;
  email?: string;
};

export type Professional = {
  id: string;
  area: string;
  name: string;
  email?: string;
  img?: string;
  title?: string;
};

export type Resource = {
  title: string;
  url: string;
  icon: React.ReactNode;
};

export type PdfDocument = {
  id: string;
  title: string;
  url: string | null;
};

export type Album = {
  id: string;
  title: string;
  description?: string;
  images: string[];
};

export type HeroSignature = {
  text?: string;
  name?: string;
};

export type HeroTextContent = {
  greeting?: string;
  message?: string;
  closing?: string;
  signature?: HeroSignature;
};

export type HeroCarouselItem = {
  id: string;
  title: string;
  textContent: HeroTextContent;
  type: "video" | "image";
  aspect: string;
  url: string;
};

export type FooterText = {
  id: string;
  aboutTitle: string;
  aboutBody: string;
  missionText?: string;
  copyrightText?: string;
};

export type FooterContact = {
  id: string;
  email?: string;
  phone?: string;
};

export type CtaSection = {
  id: string;
  key: string;
  headline: string;
  buttonLabel: string;
  modalTitle?: string;
  modalBody: string;
  contactEmail: string;
  active?: boolean;
};

export type DescList = {
  title?: string;
  items: string[];
};

export type PaymentAmount = {
  amount?: string;
  per?: string;
};

// --- Sections ---
export type CmsSection = {
  id: string;
  key: string;
  label: string;
  iconName: string;
  desc: string;
};

export type Section = Omit<CmsSection, "iconName" | "id"> & {
  id?: string;
  icon: React.ReactNode;
};

// --- Payments ---
export type CmsPaymentOption = {
  service?: string;
  username?: string;
  url?: string;
  iconName?: string;
};

export type PaymentOption = Omit<CmsPaymentOption, "iconName"> & {
  icon?: React.ReactNode;
};

export type CmsPayment = {
  amount?: PaymentAmount;
  options?: CmsPaymentOption[];
  note?: string;
  closingWords?: string;
};

export type Payment = Omit<CmsPayment, "options"> & {
  options: PaymentOption[];
};

// --- Events ---
export type CmsEvent = {
  id: string;
  title: string;
  date?: string;
  location?: string;
  time?: string;
  desc?: string;
  img?: string;
  thumbnailUrl?: string;
  images?: string[];
  descLists?: DescList[];
  payment?: CmsPayment;
  closingWords?: string;
};

export type Event = Omit<CmsEvent, "payment"> & {
  payment?: Payment;
};

export type PastEvent = Event;
export type CmsPastEvent = CmsEvent;
