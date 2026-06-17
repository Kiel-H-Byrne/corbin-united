// cms/content.ts
import { sanityClient } from "./client";
import {
  type Album,
  type CtaSection,
  type CmsEvent,
  type FooterContact,
  type FooterText,
  type HeroCarouselItem,
  type Leader,
  type CmsPastEvent,
  type PdfDocument,
  type Professional,
  type CmsSection,
} from "@/types";

export async function fetchPdfDocuments(page: string): Promise<PdfDocument[]> {
  return sanityClient.fetch(
    `
    *[_type == "pdfDocument" && $page in displayPages]{
      "id": _id,
      title,
      "url": select(defined(pdf.asset->url) => pdf.asset->url, defined(url) => url)
    }
    `,
    { page },
  );
}

export async function fetchAlbums(): Promise<Album[]> {
  return sanityClient.fetch(
    `
    *[_type == "album"]{
      "id": _id,
      title,
      description,
      "images": select(
        count(images) > 0 => images[].asset->url,
        count(imageUrls) > 0 => imageUrls,
        []
      )
    }
    `,
  );
}

export async function fetchAlbumById(id: string): Promise<Album | null> {
  return sanityClient.fetch(
    `
    *[_type == "album" && _id == $id][0]{
      "id": _id,
      title,
      description,
      "images": select(
        count(images) > 0 => images[].asset->url,
        count(imageUrls) > 0 => imageUrls,
        []
      )
    }
    `,
    { id },
  );
}

export async function fetchSections(): Promise<CmsSection[]> {
  return sanityClient.fetch(
    `
    *[_type == "section"]{
      "id": _id,
      key,
      label,
      iconName,
      desc
    }
    `,
  );
}

export async function fetchLeaders(): Promise<Leader[]> {
  return sanityClient.fetch(
    `
    *[_type == "leader"]{
      "id": _id,
      name,
      role,
      img,
      phone,
      email
    }
    `,
  );
}

export async function fetchProfessionals(): Promise<Professional[]> {
  return sanityClient.fetch(
    `
    *[_type == "professional"]{
      "id": _id,
      area,
      name,
      email,
      img,
      title
    }
    `,
  );
}

export async function fetchEvents(): Promise<CmsEvent[]> {
  return sanityClient.fetch(
    `
    *[_type == "event" && isActive == true && (!defined(date) || dateTime(date) >= dateTime(now()))] | order(date asc){
      "id": _id,
      title,
      date,
      location,
      time,
      desc,
      "img": select(
        defined(imageFile.asset->url) => imageFile.asset->url,
        defined(img) => img,
        ""
      ),
      "thumbnailUrl": select(
        defined(thumbnailFile.asset->url) => thumbnailFile.asset->url,
        defined(thumbnailUrl) => thumbnailUrl,
        defined(imageFile.asset->url) => imageFile.asset->url,
        defined(img) => img,
        ""
      ),
      descLists[]{title, items},
      payment{
        amount,
        options,
        note
      },
      closingWords
    }
    `,
  );
}

export async function fetchPastEvents(): Promise<CmsPastEvent[]> {
  return sanityClient.fetch(
    `
    *[_type == "pastEvent" || (_type == "event" && isActive == true && defined(date) && dateTime(date) < dateTime(now()))] | order(date desc){
      "id": _id,
      title,
      date,
      location,
      time,
      desc,
      "img": select(
        defined(imageFile.asset->url) => imageFile.asset->url,
        defined(img) => img,
        ""
      ),
      "thumbnailUrl": select(
        defined(thumbnailFile.asset->url) => thumbnailFile.asset->url,
        defined(thumbnailUrl) => thumbnailUrl,
        defined(imageFile.asset->url) => imageFile.asset->url,
        defined(img) => img,
        ""
      ),
      descLists[]{title, items},
      payment{
        amount,
        options,
        note
      },
      closingWords
    }
    `,
  );
}

export async function fetchHeroCarouselItems(): Promise<HeroCarouselItem[]> {
  return sanityClient.fetch(
    `
    *[_type == "heroCarouselItem"]{
      "id": _id,
      title,
      textContent,
      type,
      aspect,
      "url": select(
        defined(mediaFile.asset->url) => mediaFile.asset->url,
        defined(url) => url
      )
    }
    `,
  );
}

export async function fetchFooterText(): Promise<FooterText | null> {
  return sanityClient.fetch(
    `
    *[_type == "footerText"][0]{
      "id": _id,
      aboutTitle,
      aboutBody,
      missionText,
      copyrightText
    }
    `,
  );
}

export async function fetchFooterContact(): Promise<FooterContact | null> {
  return sanityClient.fetch(
    `
    *[_type == "footerContact"][0]{
      "id": _id,
      email,
      phone
    }
    `,
  );
}

export async function fetchCtaSection(key: string): Promise<CtaSection | null> {
  return sanityClient.fetch(
    `
    *[_type == "ctaSection" && key == $key && active == true][0]{
      "id": _id,
      key,
      headline,
      buttonLabel,
      modalTitle,
      modalBody,
      contactEmail,
      active
    }
    `,
    { key },
  );
}
