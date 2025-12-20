"use client";

import { PhotoGrid } from "@/components/PhotoGrid";
import { ContentSection, SectionTitle, SectionText } from "@/components/ui/Section";
import { FAMILY_ALBUM_IMAGES } from "@/data/gallery";

export function FamilyAlbumSection() {
  return (
    <ContentSection data-component="FamilyAlbumSection">
      <SectionTitle>Family Photo Album</SectionTitle>
      <SectionText>Memories:</SectionText>
      <PhotoGrid images={FAMILY_ALBUM_IMAGES} />
    </ContentSection>
  );
}

