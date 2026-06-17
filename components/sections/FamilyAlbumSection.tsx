"use client";

import { useCms } from "@/components/cms/useCms";
import { PhotoGrid } from "@/components/PhotoGrid";
import {
  ContentSection,
  PageTitle,
  SectionTitle,
} from "@/components/ui/Section";
import { Album } from "@/types";
import { useEffect, useState } from "react";

export function AlbumSection() {
  const { getAlbums } = useCms();
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(() => {
    getAlbums().then((albums) => albums && setAlbums(albums));
  }, [getAlbums]);
  console.log(albums);
  return (
    <ContentSection data-component="AlbumSection">
      <PageTitle>Photo Gallery</PageTitle>
      {albums.length > 0 &&
        albums.map((album) => (
          <div key={album.id}>
            <SectionTitle>{album.title}</SectionTitle>
            <PhotoGrid images={album.images} title={album.title} />
          </div>
        ))}
    </ContentSection>
  );
}
