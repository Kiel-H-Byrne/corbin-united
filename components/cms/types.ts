// cms/types.ts
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

export type SectionItem = {
  id: string;
  key: string;
  label: string;
  iconName: string;
  desc: string;
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

export type DescList = {
  title?: string;
  items: string[];
};

export type PaymentOption = {
  service?: string;
  username?: string;
  url?: string;
  iconName?: string;
};

export type PaymentAmount = {
  amount?: string;
  per?: string;
};

export type Payment = {
  amount?: PaymentAmount;
  options?: PaymentOption[];
  note?: string;
};

export type Event = {
  id: string;
  title: string;
  date?: string;
  location?: string;
  time?: string;
  desc?: string;
  img?: string;
  thumbnailUrl?: string;
  descLists?: DescList[];
  payment?: Payment;
  closingWords?: string;
};

export type PastEvent = {
  id: string;
  title: string;
  img?: string;
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
