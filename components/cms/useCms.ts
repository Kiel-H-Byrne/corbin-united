// cms/useCms.ts
import { useCallback, useState } from "react";
import {
  fetchAlbumById,
  fetchAlbums,
  fetchCtaSection,
  fetchEvents,
  fetchFooterContact,
  fetchFooterText,
  fetchHeroCarouselItems,
  fetchLeaders,
  fetchPastEvents,
  fetchPdfDocuments,
  fetchProfessionals,
  fetchSections,
} from "./content";
import {
  type Album,
  type CtaSection,
  type Event,
  type FooterContact,
  type FooterText,
  type HeroCarouselItem,
  type Leader,
  type PastEvent,
  type PdfDocument,
  type Professional,
  type SectionItem,
} from "./types";

export function useCms() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  const run = useCallback(
    async <T>(fn: () => Promise<T>): Promise<T | null> => {
      try {
        setLoading(true);
        setError(null);
        return await fn();
      } catch (e) {
        setError(e);
        return null;
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  const getAlbums = useCallback(() => run<Album[]>(() => fetchAlbums()), [run]);

  const getPdfDocuments = useCallback(
    (page: string) => run<PdfDocument[]>(() => fetchPdfDocuments(page)),
    [run],
  );

  const getAlbumById = useCallback(
    (id: string) => run<Album | null>(() => fetchAlbumById(id)),
    [run],
  );

  const getSections = useCallback(
    () => run<SectionItem[]>(() => fetchSections()),
    [run],
  );

  const getLeaders = useCallback(
    () => run<Leader[]>(() => fetchLeaders()),
    [run],
  );

  const getProfessionals = useCallback(
    () => run<Professional[]>(() => fetchProfessionals()),
    [run],
  );

  const getEvents = useCallback(() => run<Event[]>(() => fetchEvents()), [run]);

  const getPastEvents = useCallback(
    () => run<PastEvent[]>(() => fetchPastEvents()),
    [run],
  );

  const getHeroCarouselItems = useCallback(
    () => run<HeroCarouselItem[]>(() => fetchHeroCarouselItems()),
    [run],
  );

  const getFooterText = useCallback(
    () => run<FooterText | null>(() => fetchFooterText()),
    [run],
  );

  const getFooterContact = useCallback(
    () => run<FooterContact | null>(() => fetchFooterContact()),
    [run],
  );

  const getCtaSection = useCallback(
    (key: string) => run<CtaSection | null>(() => fetchCtaSection(key)),
    [run],
  );

  return {
    loading,
    error,

    getAlbums,
    getPdfDocuments,
    getAlbumById,
    getSections,
    getLeaders,
    getProfessionals,
    getEvents,
    getPastEvents,
    getHeroCarouselItems,
    getFooterText,
    getFooterContact,
    getCtaSection,
  };
}
