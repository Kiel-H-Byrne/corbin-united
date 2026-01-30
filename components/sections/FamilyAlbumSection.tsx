"use client";

import { useEffect, useState } from "react";
import { PhotoGrid } from "@/components/PhotoGrid";
import {
  ContentSection,
  SectionTitle,
  SectionText,
} from "@/components/ui/Section";
import { useCms } from "@/components/cms/useCms";
import { type FloatingImage } from "@/types";

export function FamilyAlbumSection() {
  const { getAlbums, getSections } = useCms();
  const [title, setTitle] = useState("Family Photo Album");
  const [images, setImages] = useState<FloatingImage[]>([]);

  useEffect(() => {
    let active = true;

    getSections().then((sections) => {
      if (!active) return;
      const match = (sections ?? []).find((sec) => sec.key === "family-album");
      if (match?.label) {
        setTitle(match.label);
      }
    });

    getAlbums("family-album").then((albums) => {
      if (!active) return;
      const cmsImages = (albums ?? []).flatMap((album) =>
        (album.images ?? []).map((url) => ({
          url,
          title: album.title ?? "",
        }))
      );
      setImages(cmsImages);
    });

    return () => {
      active = false;
    };
  }, [getAlbums, getSections]);

  return (
    <ContentSection data-component="FamilyAlbumSection">
      <SectionTitle>{title}</SectionTitle>
      {images.length > 0 && (
        <>
          <SectionText>Memories:</SectionText>
          <PhotoGrid images={images} />
        </>
      )}
    </ContentSection>
  );
}
