// deskStructure.ts
import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("PDF Documents")
        .schemaType("pdfDocument")
        .child(S.documentTypeList("pdfDocument")),
      S.listItem()
        .title("Albums")
        .schemaType("album")
        .child(S.documentTypeList("album")),
    ]);
