// cms/content.ts
import { sanityClient } from "./client";
import {
  type Album,
  type PdfDocument,
  type SectionItem,
  type Leader,
  type Professional,
  type Event,
  type PastEvent,
  type HeroCarouselItem,
} from "./types";

export async function fetchPdfDocuments(
  page: string
): Promise<PdfDocument[]> {
  return sanityClient.fetch(
    `
    *[_type == "pdfDocument" && $page in displayPages]{
      "id": _id,
      title,
      "url": select(defined(pdf.asset->url) => pdf.asset->url, defined(url) => url)
    }
    `,
    { page }
  );
}

export async function fetchAlbums(
  page: string
): Promise<Album[]> {
  return sanityClient.fetch(
    `
    *[_type == "album" && $page in displayPages]{
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
    { page }
  );
}

export async function fetchAlbumById(
  id: string
): Promise<Album | null> {
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
    { id }
  );
}

export async function fetchSections(): Promise<SectionItem[]> {
  return sanityClient.fetch(
    `
    *[_type == "section"]{
      "id": _id,
      key,
      label,
      iconName,
      desc
    }
    `
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
    `
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
    `
  );
}

export async function fetchEvents(): Promise<Event[]> {
  return sanityClient.fetch(
    `
    *[_type == "event"] | order(date desc){
      "id": _id,
      title,
      date,
      location,
      time,
      desc,
      img,
      thumbnailUrl,
      descLists[]{title, items},
      payment{
        amount,
        options,
        note
      },
      closingWords
    }
    `
  );
}

export async function fetchPastEvents(): Promise<PastEvent[]> {
  return sanityClient.fetch(
    `
    *[_type == "pastEvent"]{
      "id": _id,
      title,
      img
    }
    `
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
      url
    }
    `
  );
}
