import { Card, Stack, Text } from "@sanity/ui";
import type { StringInputProps } from "sanity";

const imageUrlPattern = /\.(apng|avif|gif|jpe?g|png|svg|webp)(\?.*)?$/i;

function isImageUrl(value?: string) {
  if (!value) return false;
  return imageUrlPattern.test(value);
}

export function UrlImagePreviewInput(props: StringInputProps) {
  const value = typeof props.value === "string" ? props.value : "";
  const showPreview = isImageUrl(value);

  return (
    <Stack space={3}>
      {props.renderDefault(props)}
      {showPreview ? (
        <Card padding={2} radius={2} shadow={1} tone="transparent">
          <img
            src={value}
            alt="Image preview"
            style={{
              display: "block",
              width: "100%",
              maxHeight: 240,
              objectFit: "contain",
            }}
          />
        </Card>
      ) : (
        <Text size={1} muted>
          Enter an image URL to see a preview.
        </Text>
      )}
    </Stack>
  );
}
